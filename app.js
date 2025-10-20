document.addEventListener('DOMContentLoaded', () => {

    // Função para validar e-mail
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Função para validar força da senha (mínimo 6 caracteres, com letra e número)
    function validarSenha(senha) {
        return senha.length >= 6 && /[a-zA-Z]/.test(senha) && /\d/.test(senha);
    }

    // Lógica para a página de Cadastro
    const cadastroForm = document.getElementById('cadastro-form');
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o envio padrão do formulário

            const nome = document.getElementById('nome-cadastro').value.trim();
            const email = document.getElementById('email-cadastro').value.trim();
            const senha = document.getElementById('senha-cadastro').value;
            const confirmarSenha = document.getElementById('confirmar-senha').value;

            // Validações
            if (!nome) {
                alert('Nome é obrigatório.');
                return;
            }
            if (!validarEmail(email)) {
                alert('E-mail inválido.');
                return;
            }
            if (!validarSenha(senha)) {
                alert('A senha deve ter pelo menos 6 caracteres, incluindo letras e números.');
                return;
            }
            if (senha !== confirmarSenha) {
                alert('As senhas não coincidem!');
                return;
            }

            // Verificar se e-mail já existe
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            if (usuarios.find(u => u.email === email)) {
                alert('E-mail já cadastrado.');
                return;
            }

            // Salvar usuário
            usuarios.push({ nome, email, senha });
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            alert(`Usuário ${nome} cadastrado com sucesso!`);
            window.location.href = 'login.html'; // Redireciona para a página de login
        });
    }

    // Lógica para a página de Login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o envio padrão do formulário

            const email = document.getElementById('email-login').value.trim();
            const senha = document.getElementById('senha-login').value;

            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            const usuario = usuarios.find(u => u.email === email && u.senha === senha);

            if (usuario) {
                alert('Login bem-sucedido!');
                localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
                window.location.href = 'agendamento.html'; // Redireciona para a página de agendamento
            } else {
                alert('E-mail ou senha incorretos.');
            }
        });
    }

    // Lógica para a página de Agendamento
    const agendamentoForm = document.getElementById('agendamento-form');
    if (agendamentoForm) {
        agendamentoForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
            if (!usuarioLogado) {
                alert('Você precisa fazer login primeiro.');
                window.location.href = 'login.html';
                return;
            }

            const servico = document.getElementById('servico').value;
            const data = document.getElementById('data').value;
            const hora = document.getElementById('hora').value;

            if (!servico || !data || !hora) {
                alert('Preencha todos os campos.');
                return;
            }

            // Salvar agendamento
            const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
            agendamentos.push({ usuario: usuarioLogado.email, servico, data, hora });
            localStorage.setItem('agendamentos', JSON.stringify(agendamentos));

            alert('Agendamento realizado com sucesso!');
            window.location.href = 'index.html'; // Redireciona para pagamento
        });
    }
});

