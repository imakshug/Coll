document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.transition-link');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            
            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
});
