function CreateNewElement() {
    const elements = document.querySelector('.elements');
    const new_element = document.createElement('div');
    new_element.className = 'element';
    new_element.innerHTML = `
                <input class="name" type="text">
                <input class="number" type="text">
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
        const name = element.querySelector('.name').value;
        const number = element.querySelector('.number').value;
        elements.push({ name, number });
    })
}

function Save() {
    let dictionary = "{"
    document.querySelectorAll('.element').forEach(element =>{
        dictionary+=`"${element.querySelector('.name').value}" : "${element.querySelector('.number').value}",\n` 
    })
    dictionary = dictionary.slice(0, -2);
    dictionary+="}";
    document.querySelector('.dictionary').textContent = dictionary;
}
