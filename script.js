// script.js

// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Select all product image containers
    const productImagesContainers = document.querySelectorAll('.product-images');

    // Set the initial index for each product's images (starting at 0)
    let currentIndex = 0;

    // Function to cycle through images
    function showNextImages() {
        // Loop through each product images container
        productImagesContainers.forEach(function (container) {
            const images = container.querySelectorAll('img');
            // Hide all images in the current container
            images.forEach(function (img) {
                img.style.display = 'none';
            });
            // Show the image at the current index
            if (images.length > 0) {
                images[currentIndex].style.display = 'block';
            }
        });

        // Increment the index for the next cycle (and reset to 0 if at the end)
        currentIndex = (currentIndex + 1) % productImagesContainers[0].querySelectorAll('img').length;
    }

    // Initial call to show images
    showNextImages();

    // Set an interval to cycle through images every 3 seconds (3000ms)
    setInterval(showNextImages, 3000);
});
