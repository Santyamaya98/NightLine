// ==========================================
// VERTICAL IMAGE SLIDER (Reels Style)
// ==========================================


// Function to apply Instagram-style square formatting (1080x1080 style)
function formatToInstagram(image) {
    if (image) {
        image.style.width = "300px";
        image.style.height = "300px";
        image.style.objectFit = "cover"; // Ensures the image fills the square without stretching
        image.style.borderRadius = "8px"; // Optional: adds a slight modern touch
    }
}

const ExpImg1 = document.getElementById("ExpImg1");
const ExpImg2 = document.getElementById("ExpImg2");
const ExpImg3 = document.getElementById("ExpleImg3"); // Note: typo in your HTML "ExpleImg3"


formatToInstagram(ExpImg1)
formatToInstagram(ExpImg2)
formatToInstagram(ExpImg3)
// Create slider container
const verticalSlider = document.createElement("div");
verticalSlider.id = "verticalSlider";
verticalSlider.style.width = "50%";
verticalSlider.style.height = "100vh";
verticalSlider.style.overflow = "hidden";
verticalSlider.style.position = "relative";

// Create inner container for images
const verticalSliderInner = document.createElement("div");
verticalSliderInner.id = "verticalSliderInner";
verticalSliderInner.style.display = "flex";
verticalSliderInner.style.flexDirection = "column";
verticalSliderInner.style.transition = "transform 0.5s ease";
verticalSliderInner.style.height = "300vh";

// Style all images
const verticalImages = [ExpImg1, ExpImg2, ExpImg3];
verticalImages.forEach((img) => {
    if (img) {
        img.style.width = "100%";
        img.style.height = "100vh";
        img.style.objectFit = "cover";
        img.style.flexShrink = "0";
    }
});

// Move images into slider
if (ExperienciasDiv && ExpImg1 && ExpImg2 && ExpImg3) {
    // Remove images from original location
    ExpImg1.parentNode.removeChild(ExpImg1);
    ExpImg2.parentNode.removeChild(ExpImg2);
    ExpImg3.parentNode.removeChild(ExpImg3);

    // Add images to inner container
    verticalSliderInner.appendChild(ExpImg1);
    verticalSliderInner.appendChild(ExpImg2);
    verticalSliderInner.appendChild(ExpImg3);

    // Add inner to slider
    verticalSlider.appendChild(verticalSliderInner);

    // Add slider to ExperienciasDiv
    ExperienciasDiv.appendChild(verticalSlider);
}

// Vertical slider navigation
let currentVerticalSlide = 0;
const totalVerticalSlides = 3;

// Create navigation buttons for vertical slider
const verticalNavContainer = document.createElement("div");
verticalNavContainer.style.position = "absolute";
verticalNavContainer.style.right = "20px";
verticalNavContainer.style.top = "50%";
verticalNavContainer.style.transform = "translateY(-50%)";
verticalNavContainer.style.display = "flex";
verticalNavContainer.style.flexDirection = "column";
verticalNavContainer.style.gap = "10px";
verticalNavContainer.style.zIndex = "100";

const verticalUpBtn = document.createElement("button");
verticalUpBtn.innerHTML = "▲";
verticalUpBtn.style.width = "50px";
verticalUpBtn.style.height = "50px";
verticalUpBtn.style.fontSize = "20px";
verticalUpBtn.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
verticalUpBtn.style.border = "none";
verticalUpBtn.style.borderRadius = "50%";
verticalUpBtn.style.cursor = "pointer";
verticalUpBtn.style.transition = "background-color 0.3s ease";

const verticalDownBtn = document.createElement("button");
verticalDownBtn.innerHTML = "▼";
verticalDownBtn.style.width = "50px";
verticalDownBtn.style.height = "50px";
verticalDownBtn.style.fontSize = "20px";
verticalDownBtn.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
verticalDownBtn.style.border = "none";
verticalDownBtn.style.borderRadius = "50%";
verticalDownBtn.style.cursor = "pointer";
verticalDownBtn.style.transition = "background-color 0.3s ease";

// Create dots indicator for vertical slider
const verticalDotsContainer = document.createElement("div");
verticalDotsContainer.style.position = "absolute";
verticalDotsContainer.style.right = "20px";
verticalDotsContainer.style.bottom = "20px";
verticalDotsContainer.style.display = "flex";
verticalDotsContainer.style.flexDirection = "column";
verticalDotsContainer.style.gap = "8px";
verticalDotsContainer.style.zIndex = "100";

const verticalDots = [];
for (let i = 0; i < totalVerticalSlides; i++) {
    const dot = document.createElement("div");
    dot.style.width = "12px";
    dot.style.height = "12px";
    dot.style.borderRadius = "50%";
    dot.style.backgroundColor = i === 0 ? "#ffffff" : "rgba(255, 255, 255, 0.5)";
    dot.style.cursor = "pointer";
    dot.style.transition = "background-color 0.3s ease";
    dot.addEventListener("click", () => goToVerticalSlide(i));
    verticalDots.push(dot);
    verticalDotsContainer.appendChild(dot);
}

// Vertical slider functions
function updateVerticalSlider() {
    const offset = currentVerticalSlide * -100;
    verticalSliderInner.style.transform = `translateY(${offset}vh)`;
    
    // Update dots
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
    currentVerticalSlide = (currentVerticalSlide + 1) % totalVerticalSlides;
    updateVerticalSlider();
}

function prevVerticalSlide() {
    currentVerticalSlide = (currentVerticalSlide - 1 + totalVerticalSlides) % totalVerticalSlides;
    updateVerticalSlider();
}

// Button events
verticalUpBtn.addEventListener("click", prevVerticalSlide);
verticalDownBtn.addEventListener("click", nextVerticalSlide);

// Hover effects
verticalUpBtn.addEventListener("mouseenter", () => {
    verticalUpBtn.style.backgroundColor = "rgba(255, 255, 255, 1)";
});
verticalUpBtn.addEventListener("mouseleave", () => {
    verticalUpBtn.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
});
verticalDownBtn.addEventListener("mouseenter", () => {
    verticalDownBtn.style.backgroundColor = "rgba(255, 255, 255, 1)";
});
verticalDownBtn.addEventListener("mouseleave", () => {
    verticalDownBtn.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
});

// Add navigation to slider
verticalNavContainer.appendChild(verticalUpBtn);
verticalNavContainer.appendChild(verticalDownBtn);
verticalSlider.appendChild(verticalNavContainer);
verticalSlider.appendChild(verticalDotsContainer);

// Mouse wheel support for vertical slider
verticalSlider.addEventListener("wheel", (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
        nextVerticalSlide();
    } else {
        prevVerticalSlide();
    }
});

// Touch support for vertical slider
let verticalTouchStartY = 0;
let verticalTouchEndY = 0;

verticalSlider.addEventListener("touchstart", (e) => {
    verticalTouchStartY = e.changedTouches[0].screenY;
});

verticalSlider.addEventListener("touchend", (e) => {
    verticalTouchEndY = e.changedTouches[0].screenY;
    handleVerticalSwipe();
});

function handleVerticalSwipe() {
    const swipeThreshold = 50;
    const diff = verticalTouchStartY - verticalTouchEndY;
    
    if (diff > swipeThreshold) {
        nextVerticalSlide();
    } else if (diff < -swipeThreshold) {
        prevVerticalSlide();
    }
}

// Auto-play vertical slider (optional - uncomment to enable)
setInterval(nextVerticalSlide, 4000);