const box = document.getElementById('term');
const frame = document.getElementById('sandbox-frame');
const commandHistory = [];
let historyIndex = -1;

if (box && frame) {
    box.value = '> ';
    
    box.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            const lines = box.value.split('\n');
            const lastLine = lines[lines.length - 1];
            const command = lastLine.replace(/^>\s*/, '').trim();
            
            if (command.length > 0) {
                commandHistory.push(command);
                historyIndex = commandHistory.length;
            }
            
            let result;
            try {
                const frameWin = frame.contentWindow;
                result = frameWin.eval(command);
            } catch (err) {
                result = err.message;
            }

            if (result !== undefined) {
                try {
                    result = typeof result === 'object' ? JSON.stringify(result, null, 2) : String(result);
                } catch (e) {
                    result = String(result);
                }
            }
            
            box.value += `\n${result !== undefined ? result : 'undefined'}\n> `;
            box.scrollTop = box.scrollHeight; 
        } else if (e.key === 'ArrowUp') {
            if (commandHistory.length > 0 && historyIndex > 0) {
                e.preventDefault();
                historyIndex--;
                const lines = box.value.split('\n');
                lines[lines.length - 1] = '> ' + commandHistory[historyIndex];
                box.value = lines.join('\n');
            }
        } else if (e.key === 'ArrowDown') {
            if (commandHistory.length > 0 && historyIndex < commandHistory.length) {
                e.preventDefault();
                historyIndex++;
                const lines = box.value.split('\n');
                if (historyIndex < commandHistory.length) {
                    lines[lines.length - 1] = '> ' + commandHistory[historyIndex];
                } else {
                    lines[lines.length - 1] = '> ';
                }
                box.value = lines.join('\n');
            }
        }
    });
}
