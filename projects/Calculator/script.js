function calculate() {
    const firstNumberInput = document.getElementById('first-number');
    const secondNumberInput = document.getElementById('second-number');
    const addBtn = document.getElementById('add');
    const subtractBtn = document.getElementById('subtract');
    const multiplyBtn = document.getElementById('multiply');
    const divideBtn = document.getElementById('divide');
    const remainderBtn = document.getElementById('remainder');
    const resultLabel = document.getElementById('result');

    if (addBtn) {
        addBtn.addEventListener('click', function () {
            const firstNumber = Number.parseFloat(firstNumberInput.value);
            const secondNumber = Number.parseFloat(secondNumberInput.value);

            if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
                resultLabel.innerText = 'Result: Please enter valid numbers.';
            } else {
                const result = Math.floor(firstNumber + secondNumber);
                resultLabel.innerText = `Result: ${result}`;
            }
        });
    }

    if (subtractBtn) {
        subtractBtn.addEventListener('click', function () {
            const firstNumber = Number.parseFloat(firstNumberInput.value);
            const secondNumber = Number.parseFloat(secondNumberInput.value);

            if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
                resultLabel.innerText = 'Result: Please enter valid numbers.';
            } else {
                const result = Math.floor(firstNumber - secondNumber);
                resultLabel.innerText = `Result: ${result}`;
            }
        });
    }

    if (multiplyBtn) {
        multiplyBtn.addEventListener('click', function () {
            const firstNumber = Number.parseFloat(firstNumberInput.value);
            const secondNumber = Number.parseFloat(secondNumberInput.value);

            if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
                resultLabel.innerText = 'Result: Please enter valid numbers.';
            } else {
                const result = Math.floor(firstNumber * secondNumber);
                resultLabel.innerText = `Result: ${result}`;
            }
        });
    }

    if (divideBtn) {
        divideBtn.addEventListener('click', function () {
            const firstNumber = Number.parseFloat(firstNumberInput.value);
            const secondNumber = Number.parseFloat(secondNumberInput.value);

            if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
                resultLabel.innerText = 'Result: Please enter valid numbers.';
            } else if (secondNumber === 0) {
                resultLabel.innerText = 'Result: Cannot divide by zero.';
            } else {
                const result = Math.floor(firstNumber / secondNumber);
                resultLabel.innerText = `Result: ${result}`;
            }
        });
    }

    if (remainderBtn) {
        remainderBtn.addEventListener('click', function () {
            const firstNumber = Number.parseFloat(firstNumberInput.value);
            const secondNumber = Number.parseFloat(secondNumberInput.value);

            if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
                resultLabel.innerText = 'Result: Please enter valid numbers.';
            } else if (secondNumber === 0) {
                resultLabel.innerText = 'Result: Cannot divide by zero.';
            } else {
                const result = firstNumber % secondNumber;
                resultLabel.innerText = `Result: ${result}`;
            }
        });
    }
}

calculate();