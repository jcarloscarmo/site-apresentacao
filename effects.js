document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll('[data-anime]');
    elementsToAnimate.forEach((element, index) => {
        setTimeout(() => {
            element.dataset.anime = "true";
        }, index * 200); // 200ms delay between each element
    });
});