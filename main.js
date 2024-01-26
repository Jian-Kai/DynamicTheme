import './style.scss'

// get query string for href and check if it has isModelApp param
const queryString = new URLSearchParams(window.location.search)
const isModelApp = queryString.get('isModelApp') === 'true';
const currentTheme = queryString.get('theme');

document.body.className = currentTheme;

const h1 = document.createElement('h1');

document.body.append(h1);

if (!isModelApp) {
    const themes = ['rog', 'tuf', 'light'];
    const buttons = themes.map(theme => {
        const button = document.createElement('button');
        button.innerText = theme;
        button.addEventListener('click', () => {
            document.body.className = theme;
        });
        return button;
    });
    h1.innerText = 'Switch From UWP'
    document.body.append(...buttons);
} else {
    h1.innerText = 'Switch From System'
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        console.log(e.matches ? 'dark' : 'light')

        const newColorScheme = e.matches ? currentTheme : 'light';
        document.body.className = newColorScheme;
    });
}

