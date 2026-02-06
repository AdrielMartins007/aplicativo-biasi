function confirmacao(botao){

        alert('notificação enviada')
        botao.style.backgroundColor = 'yellow'
    }

function confirmacao(botao) {
    const confirmar = confirm('Deseja confirmar o envio da nota?')

    if (confirmar) {
        botao.style.display = 'none'
    }
}

