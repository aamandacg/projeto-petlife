var elementoDuvida = document.querySelectorAll('.duvida')
// document.querySelector = Usado para selecionar e retornar todos os elementos que coincidem com um seletor CSS específico em um documento HTML.
elementoDuvida.forEach(function (duvida) { // executar uma ação para cada elemento dúvida que eu peguei.
// forEach: PARA CADA = função que vai ser executada uma vez para cada elemento que está na lista.    
    duvida.addEventListener('click', function () { //dentro da função vou adicionar para cada elemento de dúvida um evento de 'click'.
    duvida.classList.toggle('ativa') // o evento de 'click' vai executar essa ação.
// adicionar um ouvidor de eventos = como se tivesse criando um mecanismo para ficar escutando os eventos.
    })


})
