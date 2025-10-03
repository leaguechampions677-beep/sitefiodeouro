document.addEventListener('DOMContentLoaded', () => {
    const metodoPagamentoSelect = document.getElementById('metodo-pagamento');
    const cartaoFields = document.getElementById('cartao-fields');
    const pixFields = document.getElementById('pix-fields');
    const pagamentoForm = document.getElementById('pagamento-form');

    // Função para alternar a exibição dos campos de pagamento
    function toggleMetodoPagamento() {
        if (metodoPagamentoSelect.value === 'cartao') {
            cartaoFields.style.display = 'block';
            pixFields.style.display = 'none';
        } else if (metodoPagamentoSelect.value === 'pix') {
            cartaoFields.style.display = 'none';
            pixFields.style.display = 'block';
        }
    }

    // Adiciona o evento para alternar os campos quando o método de pagamento for alterado
    metodoPagamentoSelect.addEventListener('change', toggleMetodoPagamento);

    // Garante que a exibição inicial esteja correta
    toggleMetodoPagamento();

    // Lógica para finalizar o pagamento
    pagamentoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const metodo = metodoPagamentoSelect.value;
        let pagamentoConfirmado = false;

        if (metodo === 'cartao') {
            // Lógica de validação do cartão (simplificada)
            const numeroCartao = document.getElementById('numero-cartao').value;
            if (numeroCartao.length < 16) {
                alert('Número do cartão inválido.');
                return;
            }
            pagamentoConfirmado = true;
        } else if (metodo === 'pix') {
            // Simulação de pagamento Pix
            pagamentoConfirmado = confirm('Ao clicar em OK, você confirma que o pagamento via Pix foi realizado.');
        }

        if (pagamentoConfirmado) {
            alert('Pagamento processado com sucesso! Seu agendamento está confirmado.');
            // Redireciona para uma página de confirmação
            // window.location.href = 'confirmacao.html';
        } else {
            alert('O pagamento não foi finalizado. Tente novamente.');
        }
    });
});