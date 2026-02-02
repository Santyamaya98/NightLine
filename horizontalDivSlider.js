// ==========================================
// HORIZONTAL DIV SLIDER (Auto-scroll Left to Right)
// ==========================================

(function() {
    // Wait for DOM to be ready
    document.addEventListener("DOMContentLoaded", function() {
        
        const TitleDiv = document.getElementById("TitleDiv");
        const ExperienciasDiv = document.getElementById("ExperienciasDiv");
        
        if (!TitleDiv || !ExperienciasDiv) {
            console.error("TitleDiv or ExperienciasDiv not found");
            return;
        }

        // Create main slider container
        const sliderWrapper = document.createElement("div");
        sliderWrapper.id = "horizontalSliderWrapper";
        sliderWrapper.style.width = "80%";
        sliderWrapper.style.margin = "0 auto 2rem";
        sliderWrapper.style.overflow = "hidden";
        sliderWrapper.style.position = "relative";
        sliderWrapper.style.borderRadius = "5rem";
        sliderWrapper.style.minHeight = "500px";
        sliderWrapper.style.height = "auto";

        // Create inner container for sliding
        const sliderInner = document.createElement("div");
        sliderInner.id = "horizontalSliderInner";
        sliderInner.style.display = "flex";
        sliderInner.style.transition = "transform 0.6s ease-in-out";
        sliderInner.style.width = "200%";
        sliderInner.style.height = "100%";

        // Style both divs for the slider
        [TitleDiv, ExperienciasDiv].forEach(div => {
            div.style.flex = "0 0 50%";
            div.style.width = "50%";
            div.style.minHeight = "500px";
            div.style.height = "auto";
            div.style.display = "flex";
            div.style.flexDirection = "row";
            div.style.alignItems = "center";
            div.style.background = "#000000";
            div.style.borderRadius = "5rem";
            div.style.overflow = "hidden";
            div.style.boxShadow = "0 4px 20px rgb(153, 88, 246)";
            div.style.border = "1.3px solid #8d22ff";
            div.style.margin = "0";
            div.style.maxWidth = "100%";
            div.style.padding = "0";
            div.style.boxSizing = "border-box";
            div.style.position = "relative";
        });

        // Get parent and insert slider
        const parent = TitleDiv.parentNode;
        parent.insertBefore(sliderWrapper, TitleDiv);

        // Move divs into slider
        sliderInner.appendChild(TitleDiv);
        sliderInner.appendChild(ExperienciasDiv);
        sliderWrapper.appendChild(sliderInner);

        // Create dots navigation
        const dotsContainer = document.createElement("div");
        dotsContainer.style.display = "flex";
        dotsContainer.style.justifyContent = "center";
        dotsContainer.style.gap = "10px";
        dotsContainer.style.marginTop = "15px";
        dotsContainer.style.position = "absolute";
        dotsContainer.style.bottom = "20px";
        dotsContainer.style.left = "50%";
        dotsContainer.style.transform = "translateX(-50%)";
        dotsContainer.style.zIndex = "10";

        const dots = [];
        for (let i = 0; i < 2; i++) {
            const dot = document.createElement("div");
            dot.style.width = "12px";
            dot.style.height = "12px";
            dot.style.borderRadius = "50%";
            dot.style.backgroundColor = i === 0 ? "#8d22ff" : "rgb(153, 88, 246)";
            dot.style.cursor = "pointer";
            dot.style.transition = "background-color 0.3s ease, transform 0.3s ease";
            
            dot.addEventListener("mouseenter", () => {
                dot.style.transform = "scale(1.2)";
            });
            dot.addEventListener("mouseleave", () => {
                dot.style.transform = "scale(1)";
            });
            dots.push(dot);
            dotsContainer.appendChild(dot);
        }
        sliderWrapper.appendChild(dotsContainer);

        // Create arrow buttons
        const createArrow = (direction) => {
            const arrow = document.createElement("div");
            arrow.style.position = "absolute";
            arrow.style.top = "50%";
            arrow.style.transform = "translateY(-50%)";
            arrow.style[direction === "left" ? "left" : "right"] = "20px";
            arrow.style.width = "40px";
            arrow.style.height = "40px";
            arrow.style.background = "rgba(193, 50, 245, 0.48)";
            arrow.style.borderRadius = "50%";
            arrow.style.cursor = "pointer";
            arrow.style.display = "flex";
            arrow.style.alignItems = "center";
            arrow.style.justifyContent = "center";
            arrow.style.zIndex = "10";
            arrow.style.transition = "background 0.3s ease, transform 0.3s ease";
            
            arrow.innerHTML = direction === "left" 
                ? `<span style="color: white; font-size: 18px;">&#8249;</span>`
                : `<span style="color: white; font-size: 18px;">&#8250;</span>`;
            
            arrow.addEventListener("mouseenter", () => {
                arrow.style.background = "#8d22ff88";
                arrow.style.transform = "translateY(-50%) scale(1.1)";
            });
            arrow.addEventListener("mouseleave", () => {
                arrow.style.background = "rgba(154, 88, 246, 0.42)";
                arrow.style.transform = "translateY(-50%) scale(1)";
            });
            
            return arrow;
        };

        const leftArrow = createArrow("left");
        const rightArrow = createArrow("right");
        sliderWrapper.appendChild(leftArrow);
        sliderWrapper.appendChild(rightArrow);

        // Slider functionality
        let currentSlide = 0;
        let autoPlayInterval = null;

        function updateSlider() {
            const offset = currentSlide * -50;
            sliderInner.style.transform = `translateX(${offset}%)`;
            
            dots.forEach((dot, index) => {
                dot.style.backgroundColor = index === currentSlide 
                    ? "#ffffff"
                    : "rgb(182, 182, 182)";
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % 2;
            updateSlider();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + 2) % 2;
            updateSlider();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateSlider();
            resetAutoPlay();
        }

        function startAutoPlay() {
            stopAutoPlay();
            autoPlayInterval = setInterval(nextSlide, 5200);
        }

        function stopAutoPlay() {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
                autoPlayInterval = null;
            }
        }

        function resetAutoPlay() {
            stopAutoPlay();
            startAutoPlay();
        }

        // Event listeners
        dots.forEach((dot, i) => {
            dot.addEventListener("click", () => goToSlide(i));
        });

        leftArrow.addEventListener("click", () => {
            prevSlide();
            resetAutoPlay();
        });

        rightArrow.addEventListener("click", () => {
            nextSlide();
            resetAutoPlay();
        });

        // Pause on hover
        sliderWrapper.addEventListener("mouseenter", stopAutoPlay);
        sliderWrapper.addEventListener("mouseleave", startAutoPlay);

        // Touch support
        let touchStartX = 0;
        sliderWrapper.addEventListener("touchstart", (e) => {
            touchStartX = e.touches[0].clientX;
            stopAutoPlay();
        });

        sliderWrapper.addEventListener("touchend", (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > 50) {
                diff > 0 ? nextSlide() : prevSlide();
            }
            startAutoPlay();
        });

        // Keyboard support
        document.addEventListener("keydown", (e) => {
            if (e.key === "ArrowLeft") {
                prevSlide();
                resetAutoPlay();
            } else if (e.key === "ArrowRight") {
                nextSlide();
                resetAutoPlay();
            }
        });

        // Visibility API
        document.addEventListener("visibilitychange", () => {
            document.hidden ? stopAutoPlay() : startAutoPlay();
        });

        // Initialize
        updateSlider();
        startAutoPlay();
    });
})();