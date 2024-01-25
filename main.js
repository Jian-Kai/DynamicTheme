import './style.scss'

const themes = ['rog', 'tuf', 'light'];

// generate buttons for each theme
// click handler will change the class on the body
const buttons = themes.map(theme => {
    const button = document.createElement('button');
    button.innerText = theme;
    button.addEventListener('click', () => {
        document.body.className = theme;
    });
    return button;
});

document.body.append(...buttons);
