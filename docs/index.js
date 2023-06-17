/* degree = 0,
        force = 0,
        radian = 0,
        distance = 0,
        direction = '',
        hypot = 0,
        capture = '',
        release = '',
        x = this.#rect.width + this.#rect.left,
        y = this.#rect.top + this.#rect.top, */
const pairToString = (text, [key, value]) => {
    const parsed = parseFloat(value);
    console.log(111, key, value);

    return `${text}${key}: ${isNaN(parsed) || Number.isInteger(parsed) ? value : parsed.toFixed(2)}\n`;
}
const output = ({ firstElementChild, nextElementSibling }) => {
    nextElementSibling.textContent = Object.entries(firstElementChild.dataset).reduce(pairToString, '');
}
//nextElementSibling.textContent = JSON.stringify(firstElementChild.dataset).slice(1, -1).replaceAll('"', '').replaceAll(',', '\n');

document.querySelectorAll('.playground').forEach((element) => {
    output(element);
    element.firstElementChild.addEventListener('joypaddown', () => output(element));
    element.firstElementChild.addEventListener('joypadmove', () => output(element));
    element.firstElementChild.addEventListener('joypadup', () => output(element));
})