function convertToWord() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please select a file first!');
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
        const fileContent = e.target.result;
        let htmlContent = '';

        if (file.name.endsWith('.md')) {
            htmlContent = marked.parse(fileContent);
        } else if (file.name.endsWith('.html')) {
            htmlContent = fileContent;
        } else {
            alert('Unsupported file type. Please upload a .html or .md file.');
            return;
        }

        const fullDocument = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                ${htmlContent}
            </body>
            </html>
        `;

        const converted = htmlDocx.asBlob(fullDocument);
        const downloadLink = document.createElement('a');
        
        downloadLink.href = URL.createObjectURL(converted);
        downloadLink.download = file.name.replace(/\.(html|md)$/, '') + '.docx';
        
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    reader.readAsText(file);
}
