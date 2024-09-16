document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.card-page');
    let currentPage = 0; // Start with the first page

    function showPage(pageIndex) {
        pages.forEach((page, index) => {
            // Calculate the rotation angle
            const rotation = (index - pageIndex) * 90;
            page.style.transform = `rotateY(${rotation}deg)`;
            page.style.zIndex = (index === pageIndex) ? 1 : 0; // Optional: Bring the current page to the front
        });
    }

    function prevPage() {
        currentPage = (currentPage > 0) ? currentPage - 1 : pages.length - 1; // Decrement for previous page
        showPage(currentPage);
    }

    function nextPage() {
        currentPage = (currentPage < pages.length - 1) ? currentPage + 1 : 0; // Increment for next page
        showPage(currentPage);
    }

    document.getElementById('prev-page').addEventListener('click', prevPage);
    document.getElementById('next-page').addEventListener('click', nextPage);

    showPage(currentPage); // Show the initial page
});
