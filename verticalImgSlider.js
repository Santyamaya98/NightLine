// ==========================================
// REFACTORED VERTICAL IMAGE SLIDER (Reels Style)
// ==========================================

const ExpImg1 = document.getElementById("ExpImg1");
const ExpImg2 = document.getElementById("ExpImg2");
const ExpImg3 = document.getElementById("ExpImg3");

// Slider wrapper (40% right side)
const sliderContainer = document.createElement("div");
sliderContainer.style.width = "40%";
sliderContainer.style.position = "relative";

// Main slider
const verticalSlider = document.createElement("div");
verticalSlider.id = "verticalSlider";
verticalSlider.style.width = "100%";
verticalSlider.style.height = "500px";
verticalSlider.style.overflow = "hidden";
verticalSlider.style.position = "relative";
verticalSlider.style.borderRadius = "12px";
verticalSlider.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";

// Inner slider
const verticalSliderInner = document.createElement("div");
verticalSliderInner.id = "verticalSliderInner";
verticalSliderInner.style.display = "flex";
verticalSliderInner.style.flexDirection = "column";
verticalSliderInner.style.transition = "transform 0.5s ease";
verticalSliderInner.style.height = "100%";
verticalSliderInner.style.padding = "5px";

// Style images for single display
[ExpImg1, ExpImg2, ExpImg3].forEach(img => {
    if (img) {
        img.style.padding = "5px";
        img.style.borderRadius = "120px";
        img.style.width = "95%";
        img.style.marginBottom = "10px";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.flexShrink = "0";
    }
});

// DOM reorganization
if (ExperienciasDiv && ExpImg1 && ExpImg2 && ExpImg3) {
    // Remove images safely
    if (ExpImg1.parentNode) ExpImg1.parentNode.removeChild(ExpImg1);
    if (ExpImg2.parentNode) ExpImg2.parentNode.removeChild(ExpImg2);
    if (ExpImg3.parentNode) ExpImg3.parentNode.removeChild(ExpImg3);

    // Preserve non-image content
    const existingContent = [];
    while (ExperienciasDiv.firstChild) {
        existingContent.push(ExperienciasDiv.firstChild);
        ExperienciasDiv.removeChild(ExperienciasDiv.firstChild);
    }

    // Text container (60% left)
    const textContainer = document.createElement("div");
    textContainer.style.width = "60%";
    textContainer.style.padding = "20px";
    existingContent.forEach(content => {
        if (![ExpImg1, ExpImg2, ExpImg3].includes(content)) {
            textContainer.appendChild(content);
        }
    });

    // Build slider
    verticalSliderInner.appendChild(ExpImg1);
    verticalSliderInner.appendChild(ExpImg2);
    verticalSliderInner.appendChild(ExpImg3);
    verticalSlider.appendChild(verticalSliderInner);

    sliderContainer.appendChild(verticalSlider);
    ExperienciasDiv.style.display = "flex";
    ExperienciasDiv.appendChild(textContainer);
    ExperienciasDiv.appendChild(sliderContainer);
}

// Dots overlay (bottom right)
const verticalDotsContainer = document.createElement("div");
verticalDotsContainer.style.position = "absolute";
verticalDotsContainer.style.right = "15px";
verticalDotsContainer.style.bottom = "15px";
verticalDotsContainer.style.display = "flex";
verticalDotsContainer.style.gap = "8px";
verticalDotsContainer.style.zIndex = "10";

const verticalDots = [];
for (let i = 0; i < 3; i++) {
    const dot = document.createElement("div");
    dot.style.width = "10px";
    dot.style.height = "10px";
    dot.style.borderRadius = "50%";
    dot.style.backgroundColor = i === 0 ? "#ffffff" : "rgba(255, 255, 255, 0.5)";
    dot.style.cursor = "pointer";
    dot.style.transition = "background-color 0.3s ease";
    verticalDots.push(dot);
    verticalDotsContainer.appendChild(dot);
}

if (verticalSlider) {
    verticalSlider.appendChild(verticalDotsContainer);
}

// Core functionality
let currentVerticalSlide = 0;
let touchStartY = 0;

function updateVerticalSlider() {
    const offset = currentVerticalSlide * -100;
    verticalSliderInner.style.transform = `translateY(${offset}%)`;
    verticalDots.forEach((dot, index) => {
        dot.style.backgroundColor = index === currentVerticalSlide 
            ? "#ffffff" 
            : "rgba(255, 255, 255, 0.5)";
    });
}

function goToVerticalSlide(index) {
    currentVerticalSlide = index;
    updateVerticalSlider();
}

function nextVerticalSlide() {
    currentVerticalSlide = (currentVerticalSlide + 1) % 3;
    updateVerticalSlider(); // Changed from updateVerticalSlide()
}

function prevVerticalSlide() {
    currentVerticalSlide = (currentVerticalSlide - 1 + 3) % 3;
    updateVerticalSlider(); // Changed from updateVerticalSlide()
}

// Dots navigation
verticalDots.forEach((dot, i) => {
    dot.addEventListener("click", () => goToVerticalSlide(i));
});

// Wheel support
if (verticalSlider) {
    verticalSlider.addEventListener("wheel", (e) => {
        e.preventDefault();
        e.deltaY > 0 ? nextVerticalSlide() : prevVerticalSlide();
    });
}

// Touch support
if (verticalSlider) {
    verticalSlider.addEventListener("touchstart", (e) => {
        touchStartY = e.touches[0].clientY;
    });
    verticalSlider.addEventListener("touchend", (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        const diff = touchStartY - touchEndY;
        if (Math.abs(diff) > 50) {
            diff > 0 ? nextVerticalSlide() : prevVerticalSlide();
        }
    });
}

// Initialize
updateVerticalSlider();

// Auto-play
setInterval(nextVerticalSlide, 2500);