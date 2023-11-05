function CreateNewElement() {
    const elements = document.querySelector('.elements');
    const new_element = document.createElement('div');
    new_element.className = 'element';
    new_element.innerHTML = `
                <input type="text">
                <input type="number">
                <button class="right_button" onclick="Up(this.parentNode)" value="up">↑</button>
                <button class="right_button" onclick="Down(this.parentNode)" value="down">↓</button>
                <button class="right_button" onclick="Delete(this.parentNode)" value="delete">x</button>
            `;
    elements.appendChild(new_element);
}

function Up(element) {
    const previous_element = element.previousElementSibling;
    if (previous_element) {
        element.parentNode.insertBefore(element, previous_element);
        UpdateElements();
    }
}

function Down(element) {
    const next_element = element.nextElementSibling;
    if (next_element) {
        element.parentNode.insertBefore(next_element, element);
        UpdateElements();
    }
}

function Delete(element) {
    element.parentNode.removeChild(element);
}

function UpdateElements() {
    elements = [];
    document.querySelectorAll('.element').forEach(element => {
        const name = element.querySelector('input[type="text"]').value;
        const number = element.querySelector('input[type="number"]').value;
        elements.push({ name, number });
    })
}

function Save() {
    const dictionary = {};
    document.querySelectorAll('.element').forEach((element) => {
        const name = element.querySelector('input[type="text"]').value;
        const number = element.querySelector('input[type="number"]').value;
        dictionary[`${name}`] = `${number}`;
    });
    const result = document.querySelector('.dictionary');
    result.textContent = JSON.stringify(dictionary);
}

