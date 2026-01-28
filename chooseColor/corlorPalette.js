/*
// Color palettes for exploration
const colorPalettes = [
    {
        name: "Elegant Gold",
        primary: "#000000",      // black
        secondary: "#ffffff",    // white
        accent: "#d4af37",       // gold
        shadow: "rgba(212, 175, 55, 0.4)",
        font: "'Playfair Display', serif"
    },
    {
        name: "Royal Purple",
        primary: "#2d003d",      // deep purple
        secondary: "#f5e6ff",    // light lavender
        accent: "#9c27b0",       // vibrant purple
        shadow: "rgba(156, 39, 176, 0.3)",
        font: "'Cormorant Garamond', serif"
    },
    {
        name: "Modern Gray",
        primary: "#2c3e50",      // dark blue-gray
        secondary: "#ecf0f1",    // light gray
        accent: "#95a5a6",       // medium gray
        shadow: "rgba(149, 165, 166, 0.3)",
        font: "'Montserrat', sans-serif"
    },
    {
        name: "Classic White",
        primary: "#1a1a1a",       // near black
        secondary: "#ffffff",     // white
        accent: "#5e5000",       // dark gold
        shadow: "rgba(94, 80, 0, 0.3)",
        font: "'Inter', sans-serif"
    },
    {
        name: "Golden Luxury",
        primary: "#121212",       // dark gray
        secondary: "#f8f8f8",     // off-white
        accent: "#ffd700",        // bright gold
        shadow: "rgba(255, 215, 0, 0.25)",
        font: "'Cinzel', serif"
    },
    {
        name: "Purple Dream",
        primary: "#4a148c",       // deep purple
        secondary: "#ffffff",     // white
        accent: "#ba68c8",        // soft purple
        shadow: "rgba(186, 104, 200, 0.35)",
        font: "'Poppins', sans-serif"
    }
];

// Font families to import from Google Fonts
const fontFamilies = [
    "'Playfair Display', serif",
    "'Cormorant Garamond', serif",
    "'Montserrat', sans-serif",
    "'Inter', sans-serif",
    "'Cinzel', serif",
    "'Poppins', sans-serif",
    "'Roboto', sans-serif",
    "'Lora', serif",
    "'Open Sans', sans-serif",
    "'Merriweather', serif"
];

const TitleImg = document.getElementById("TitleImg");
let currentPaletteIndex = 0;

// Initialize page content
function initializePage() {
    if (!TitleH1 || !TitleParagraph || !TitleDiv) {
        console.error("One or more elements not found!");
        return;
    }
    
    TitleH1.textContent = "Night Line";
    TitleParagraph.textContent = "Diseñamos y producimos eventos sociales, bodas y activaciones de marca con sonido, luces y experiencias memorables en Bogotá y alrededores.";
    
    // Create control panel
    createControlPanel();
    
    // Apply initial palette
    applyColorPalette(colorPalettes[0]);
}

// Create interactive control panel
function createControlPanel() {
    const controlPanel = document.createElement('div');
    controlPanel.id = 'colorControls';
    controlPanel.innerHTML = `
        <h3 style="margin-bottom: 10px;">🎨 Palette Explorer</h3>
        <button id="paletteCycleBtn">Click to Cycle Colors</button>
        <p id="paletteName" style="margin: 10px 0; font-weight: 600;"></p>
        <div id="currentPalette"></div>
        <div style="margin-top: 15px;">
            <button id="prevFontBtn" style="margin-right: 10px; padding: 8px 16px;">← Previous Font</button>
            <button id="nextFontBtn" style="padding: 8px 16px;">Next Font →</button>
        </div>
    `;
    
    document.body.appendChild(controlPanel);
    
    // Add event listeners
    document.getElementById('paletteCycleBtn').addEventListener('click', cycleColorPalette);
    document.getElementById('prevFontBtn').addEventListener('click', cycleFont.bind(null, -1));
    document.getElementById('nextFontBtn').addEventListener('click', cycleFont.bind(null, 1));
    
    updatePaletteDisplay();
}

// Cycle through color palettes
function cycleColorPalette() {
    currentPaletteIndex = (currentPaletteIndex + 1) % colorPalettes.length;
    const palette = colorPalettes[currentPaletteIndex];
    
    applyColorPalette(palette);
    
    // Add animation effect
    TitleDiv.style.transform = 'scale(1.02)';
    setTimeout(() => {
        TitleDiv.style.transform = 'scale(1)';
    }, 200);
}

// Apply color palette to all elements
function applyColorPalette(palette) {
    // Update CSS variables
    document.documentElement.style.setProperty('--primary-color', palette.primary);
    document.documentElement.style.setProperty('--secondary-color', palette.secondary);
    document.documentElement.style.setProperty('--accent-color', palette.accent);
    document.documentElement.style.setProperty('--shadow-color', palette.shadow);
    document.documentElement.style.setProperty('--font-family', palette.font);
    
    // Update body background
    document.body.style.backgroundColor = palette.secondary;
    
    // Update card background
    if (TitleDiv) TitleDiv.style.backgroundColor = palette.primary;
    
    // Update text colors
    if (TitleH1) TitleH1.style.color = palette.secondary;
    if (TitleParagraph) TitleParagraph.style.color = palette.secondary;
    
    // Update image shadow
    if (TitleImg) TitleImg.style.boxShadow = `0.5px 0.5px 1.2px 1.2px ${palette.accent}`;
    
    // Update palette display
    updatePaletteDisplay();
    updatePaletteName(palette.name);
}

// Update the palette color dots display
function updatePaletteDisplay() {
    const paletteDisplay = document.getElementById('currentPalette');
    if (!paletteDisplay) return;
    
    paletteDisplay.innerHTML = '';
    const currentPalette = colorPalettes[currentPaletteIndex];
    
    const colors = [
        currentPalette.primary,
        currentPalette.secondary,
        currentPalette.accent,
        currentPalette.shadow
    ];
    
    colors.forEach(color => {
        const dot = document.createElement('div');
        dot.className = 'paletteDot';
        dot.style.backgroundColor = color;
        dot.title = color;
        paletteDisplay.appendChild(dot);
    });
}

// Update palette name display
function updatePaletteName(name) {
    const nameElement = document.getElementById('paletteName');
    if (nameElement) {
        nameElement.textContent = `Current: ${name}`;
        nameElement.style.color = colorPalettes[currentPaletteIndex].accent;
    }
}

// Cycle through fonts
let currentFontIndex = 0;
function cycleFont(direction) {
    currentFontIndex = (currentFontIndex + direction + fontFamilies.length) % fontFamilies.length;
    const font = fontFamilies[currentFontIndex];
    
    // Update font family
    document.documentElement.style.setProperty('--font-family', font);
    
    // Update all text elements
    const allTextElements = document.querySelectorAll('h1, p, button, body');
    allTextElements.forEach(el => {
        el.style.fontFamily = font;
    });
    
    console.log(`Font changed to: ${font}`);
}

// Add Google Fonts dynamically
function loadGoogleFonts() {
    const fontLinks = [
        'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap',
        'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&display=swap',
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap',
        'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&display=swap',
        'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap',
        'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap',
        'https://fonts.googleapis.com/css2?family=Lora:wght@400;500&display=swap',
        'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap',
        'https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap'
    ];
    
    // Create link elements for each font
    fontLinks.forEach(link => {
        const fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = link;
        document.head.appendChild(fontLink);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadGoogleFonts();
    initializePage();
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            cycleColorPalette();
        } else if (event.key === 'ArrowLeft') {
            currentPaletteIndex = (currentPaletteIndex - 1 + colorPalettes.length) % colorPalettes.length;
            applyColorPalette(colorPalettes[currentPaletteIndex]);
        } else if (event.key === 'f') {
            cycleFont(1);
        } else if (event.key === 'F') {
            cycleFont(-1);
        }
    });
}); */