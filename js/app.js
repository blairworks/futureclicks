import categoryData from './data.js';

const PINS_KEY = 'futureclicks_pins';
const THEME_KEY = 'futureclicks_theme';

// State
let pins = JSON.parse(localStorage.getItem(PINS_KEY) || '[]');
let focusedIndex = -1;
let flatList = []; // For keyboard navigation

const pinsContainer = document.getElementById('pins-container');
const gridContainer = document.getElementById('dashboard-grid');

function init() {
    initTheme();
    renderGrid();
    renderPins();
    setupKeyboardNav();
    setupThemeToggle();
}

function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (systemDark ? 'dark' : 'light');
    setTheme(theme);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = `[ MODE: ${theme.toUpperCase()} ]`;
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
}

function setupThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggleTheme);
}

function renderGrid() {
    gridContainer.innerHTML = '';
    flatList = [];

    categoryData.forEach(cat => {
        const catBlock = document.createElement('div');
        catBlock.className = 'category-block';
        catBlock.innerHTML = `<h2>[ ${cat.title} ]</h2>`;

        const list = document.createElement('ul');
        list.className = 'link-list';

        cat.links.forEach(link => {
            const isPinned = pins.includes(link.id);
            const li = document.createElement('li');
            li.className = 'link-item';
            li.dataset.id = link.id;

            const faviconUrl = `https://www.google.com/s2/favicons?domain=${new URL(link.url).hostname}&sz=32`;

            li.innerHTML = `
                <a href="${link.url}" target="_blank" class="link-content" tabindex="-1">
                    <img src="${faviconUrl}" alt="">
                    <span>${link.label}</span>
                </a>
                <button class="pin-btn ${isPinned ? 'active' : ''}" title="Toggle Pin" tabindex="-1">
                    ${isPinned ? '★' : '☆'}
                </button>
            `;

            const pinBtn = li.querySelector('.pin-btn');
            pinBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                togglePin(link.id);
            });

            list.appendChild(li);
            flatList.push({ id: link.id, element: li, url: link.url });
        });

        catBlock.appendChild(list);
        gridContainer.appendChild(catBlock);
    });
}

function renderPins() {
    pinsContainer.innerHTML = '';

    if (pins.length === 0) {
        pinsContainer.innerHTML = '<span style="color: var(--text-muted); font-size: 0.8rem;">No items pinned yet.</span>';
        return;
    }

    pins.forEach(pinId => {
        const link = findLinkById(pinId);
        if (!link) return;

        const faviconUrl = `https://www.google.com/s2/favicons?domain=${new URL(link.url).hostname}&sz=32`;

        const chip = document.createElement('a');
        chip.href = link.url;
        chip.target = '_blank';
        chip.className = 'pin-chip';
        chip.innerHTML = `
            <img src="${faviconUrl}" alt="">
            <span>${link.label}</span>
        `;
        pinsContainer.appendChild(chip);
    });
}

function findLinkById(id) {
    for (const cat of categoryData) {
        const link = cat.links.find(l => l.id === id);
        if (link) return link;
    }
    return null;
}

function togglePin(id) {
    const index = pins.indexOf(id);
    if (index > -1) {
        pins.splice(index, 1);
    } else {
        pins.push(id);
    }
    localStorage.setItem(PINS_KEY, JSON.stringify(pins));
    renderGrid();
    renderPins();

    // Maintain focus highlight if we were focused
    if (focusedIndex !== -1) {
        updateFocus();
    }
}

function setupKeyboardNav() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            moveFocus(1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            moveFocus(-1);
        } else if (e.key === 'Enter') {
            if (focusedIndex !== -1) {
                window.open(flatList[focusedIndex].url, '_blank');
            }
        } else if (e.key === 'p' || e.key === 'P') {
            if (focusedIndex !== -1) {
                togglePin(flatList[focusedIndex].id);
            }
        } else if (e.key === 't' || e.key === 'T') {
            toggleTheme();
        }
    });

    // Handle clicks for focus
    gridContainer.addEventListener('click', (e) => {
        const item = e.target.closest('.link-item');
        if (item) {
            const index = flatList.findIndex(f => f.element === item);
            if (index !== -1) {
                focusedIndex = index;
                updateFocus();
            }
        }
    });
}

function moveFocus(dir) {
    if (focusedIndex === -1) {
        focusedIndex = 0;
    } else {
        focusedIndex = (focusedIndex + dir + flatList.length) % flatList.length;
    }
    updateFocus();

    // Scroll into view if needed
    flatList[focusedIndex].element.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

function updateFocus() {
    flatList.forEach((f, i) => {
        f.element.classList.toggle('focused', i === focusedIndex);
    });
}

init();
