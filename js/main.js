$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000')

    $('#CPF').mask('000.000.000-00', { placeholder: '___.___.___-__' });

    $('#CEP').mask('00000-000', { placeholder: '_____-___' })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true
            },
            CPF: {
                required: true
            },
            endereco: {
                required: true
            },
            CEP: {
                required: true
            }
        },
        menssages: {
            nome: 'Por Favor preencha o campo'
        },
    })
})