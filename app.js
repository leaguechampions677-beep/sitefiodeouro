document.addEventListener('DOMContentLoaded', () => {

    // Lógica para a página de Cadastro
    const cadastroForm = document.getElementById('cadastro-form');
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o envio padrão do formulário

            const nome = document.getElementById('nome-cadastro').value;
            const email = document.getElementById('email-cadastro').value;
            const senha = document.getElementById('senha-cadastro').value;
            const confirmarSenha = document.getElementById('confirmar-senha').value;

            // Validação simples
            if (senha !== confirmarSenha) {
                alert('As senhas não coincidem!');
                return;
            }

            // Simulação de cadastro
            alert(`Usuário ${nome} cadastrado com sucesso!`);
            // Em um sistema real, aqui você enviaria os dados para um servidor.
            // window.location.href = 'login.html'; // Redireciona para a página de login
        });
    }

    // Lógica para a página de Login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o envio padrão do formulário

            const email = document.getElementById('email-login').value;
            const senha = document.getElementById('senha-login').value;
            
            // Simulação de verificação de login
            if (email === 'teste@exemplo.com' && senha === 'senha123') {
                alert('Login bem-sucedido!');
                // window.location.href = 'agendamento.html'; // Redireciona para a página de agendamento
            } else {
                alert('E-mail ou senha incorretos.');
            }
        });
    }
});

