document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".sliders-img-1 img");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const dotsContainer = document.querySelector(".dots-container");
    let index = 0;

    // Function to display current image
    function showImage() {
        images.forEach(img => img.style.display = "none");
        images[index].style.display = "block";
    }

    // Function to handle next button click
    function nextImage() {
        index = (index + 1) % images.length;
        showImage();
        updateDots();
    }

    // Function to handle previous button click
    function prevImage() {
        index = (index - 1 + images.length) % images.length;
        showImage();
        updateDots();
    }

    // Function to update dots indicating current image
    function updateDots() {
        dotsContainer.innerHTML = "";
        for (let i = 0; i < images.length; i++) {
            const dot = document.createElement("span");
            dot.classList.add("dot");
            if (i === index) {
                dot.classList.add("active");
            }
            dotsContainer.appendChild(dot);
        }
    }

    // Event listeners for next and previous buttons
    nextBtn.addEventListener("click", nextImage);
    prevBtn.addEventListener("click", prevImage);

    // Initialize slideshow
    showImage();
    updateDots();

    // Automatic slideshow
    setInterval(nextImage, 5000);
});
