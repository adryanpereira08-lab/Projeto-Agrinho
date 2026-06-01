document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MENU RESPONSIVO (HAMBÚRGUER) ---
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('#nav-menu a');

    // Abre e fecha o menu ao clicar no botão de barras
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Altera o ícone entre barras e "X" quando aberto
        const icon = mobileMenuBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-xmark');
        } else {
            icon.classList.replace('fa-xmark', 'fa-bars');
        }
    });

    // Fecha o menu automaticamente ao clicar em qualquer link (para rolar até a seção)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
        });
    });


    // --- 2. VALIDAÇÃO E ENVIO DO FORMULÁRIO ---
    const form = document.querySelector('.contact-form');

    if (form) {
        form.addEventListener('submit', (event) => {
            // Evita o recarregamento padrão da página ao enviar
            event.preventDefault();

            // Pega os valores dos campos
            const nome = form.querySelector('input[type="text"]').value.trim();
            const email = form.querySelector('input[type="email"]').value.trim();
            const mensagem = form.querySelector('textarea').value.trim();

            // Validação simples
            if (nome === '' || email === '' || mensagem === '') {
                alert('Por favor, preencha todos os campos antes de enviar.');
                return;
            }

            // Simulação de envio bem-sucedido
            alert(`Obrigado pelo contato, ${nome}! Sua mensagem sobre sustentabilidade no agro foi enviada com sucesso.`);
            
            // Limpa o formulário após o envio
            form.reset();
        });
    }
});
