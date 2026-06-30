const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
function handleInput(event) {
    const trimmedValue = event.currentTarget.value.trim();
    if (trimmedValue !== "") {
        nameOutput.textContent = trimmedValue;
    } else {
        nameOutput.textContent = "Anonymous";
    }
}
nameInput.addEventListener('input', handleInput);