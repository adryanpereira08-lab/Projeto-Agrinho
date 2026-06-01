document.addEventListener("DOMContentLoaded", () => {
    // 1. MENU RESPONSIVO (HAMBÚRGUER)
    const navbar = document.querySelector('.navbar');
    
    // Cria o botão do menu dinamicamente para mobile
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    
    // Insere o botão antes do menu de navegação
    const nav = document.querySelector('nav');
    navbar.insertBefore(menuToggle, nav);

    // Evento de clique para abrir/fechar o menu
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        // Alterna o ícone entre barras e "X"
        const icon = menuToggle.querySelector('i');
        if (nav.classList.contains('active')) {
            icon.className = 'fa-solid fa-xmark';
        } else {
            icon.className = 'fa-solid fa-bars';
        }
    });

    // Fecha o menu ao clicar em qualquer link (melhor experiência do usuário)
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuToggle.querySelector('i').className = 'fa-solid fa-bars';
        });
    });

    // 2. VALIDAÇÃO E ENVIO DO FORMULÁRIO DE CONTATO
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o recarregamento da página
            
            // Captura os dados dos campos
            const nome = form.querySelector('input[type="text"]').value.trim();
            const email = form.querySelector('input[type="email"]').value.trim();
            const mensagem = form.querySelector('textarea').value.trim();

            // Validação simples
            if (nome === "" || email === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos antes de enviar.");
                return;
            }

            // Simulação de envio bem-sucedido
            // Em um cenário real, aqui você usaria a função 'fetch' para enviar os dados ao servidor
            alert(`Obrigado pelo contato, ${nome}! Sua mensagem sobre sustentabilidade no agro foi recebida com sucesso.`);
            
            // Limpa o formulário
            form.reset();
        });
    }
});
