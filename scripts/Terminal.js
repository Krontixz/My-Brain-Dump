const box = document.getElementById('term');
        
        box.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault(); 
                const lines = box.value.split('\n');
                const lastLine = lines[lines.length - 1];
                const command = lastLine.replace(/^>\s*/, '');
                
                let result;
                try {
                    result = eval(command); 
                } catch (err) {
                    result = err.message;
                }
                box.value += `\n${result}\n> `;
                box.scrollTop = box.scrollHeight; 
            }
        });
