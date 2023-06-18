const pairToString = (text, [key, value]) => {
    const parsed = parseFloat(value);
    return `${text}${key}: ${isNaN(parsed) || Number.isInteger(parsed) ? value : parsed.toFixed(2)}\n`;
}
const output = ({ firstElementChild, nextElementSibling }) => {
    nextElementSibling.textContent = Object.entries(firstElementChild.dataset).reduce(pairToString, '');
}
document.querySelectorAll('.playground').forEach((element) => {
    output(element);
    element.firstElementChild.addEventListener('joystickdown', () => output(element));
    element.firstElementChild.addEventListener('joystickmove', () => output(element));
    element.firstElementChild.addEventListener('joystickup', () => output(element));
})