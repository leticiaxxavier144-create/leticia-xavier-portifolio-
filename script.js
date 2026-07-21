// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {

    // 1. Menu Mobile Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. Dark Mode Toggle
    const darkButton = document.getElementById("dark-mode-btn");

    if (darkButton) {
        darkButton.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                darkButton.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                darkButton.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
    }

    // 3. Botão "Voltar ao topo" (Back to Top)
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        // Exibe o botão quando faz scroll para baixo
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        });

        // Rola suavemente até o topo ao clicar
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});