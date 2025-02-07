document.addEventListener('DOMContentLoaded', () => {
    const quantitySpan = document.getElementById('quantity');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    let quantity = 0;

    incrementButton.addEventListener('click', () => {
        quantity++;
        quantitySpan.textContent = quantity;
    });

    decrementButton.addEventListener('click', () => {
        if (quantity > 0) {
            quantity--;
            quantitySpan.textContent = quantity;
        }
    });
});

const thumbnails = document.querySelectorAll('.thumbnails img');
const popup = document.getElementById('image-popup');
const popupImage = document.getElementById('popup-image');
const closePopup = document.getElementById('close-popup');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        showPopup(thumbnail.src);
    });
});

function showPopup(imageSrc) {
    popup.style.display = 'flex';
    popupImage.src = imageSrc;
}

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : thumbnails.length - 1;
    popupImage.src = thumbnails[currentIndex].src;
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < thumbnails.length - 1) ? currentIndex + 1 : 0;
    popupImage.src = thumbnails[currentIndex].src;
});
