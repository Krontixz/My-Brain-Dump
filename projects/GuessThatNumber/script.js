async function guessThatNumber() {
    const inputTextarea = document.getElementById("inputnumber");
    const rawValue = inputTextarea.value.trim();
    const numberInput = Number(rawValue);

    if (!/^[1-9]\d*$/.test(rawValue) || numberInput > 100) {
        alert("System: Please enter a whole number from 1 to 100 without a leading 0.");
        return;
    }

    const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
    let low = 1;
    let high = 100;
    inputTextarea.disabled = true;

    try {
        await wait(500);
        alert("AI: I will try to guess your number!");

        for (let attempt = 1; attempt <= 5; attempt += 1) {
            await wait(700);
            const guess = Math.floor((low + high) / 2);
            alert(`AI: Guess ${attempt} of 5. Is your number ${guess}?`);

            if (guess === numberInput) {
                await wait(500);
                alert(`AI: Yea, I got it right! ${guess}`);
                return;
            }

            if (guess < numberInput) {
                low = guess + 1;
            } else {
                high = guess - 1;
            }
        }

        await wait(500);
        alert("AI: Man, I didn't get it.");
    } finally {
        inputTextarea.disabled = false;
    }
}