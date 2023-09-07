$(document).ready(function(){

   $('header button').click(function(){
   $('form').slideDown()
   })
   $('#botao-cancelar').click(function(){
    $('form').slideUp()
   })
   $('form').on('submit', function(e){
    e.preventDefault()
    const enderecoDaNovaImage = $('#endereco-img-nova').val()
    const novoItem = $('<li style="display:none"></li>')
    $(`<img src="${enderecoDaNovaImage}"/>`).appendTo(novoItem)
    $(`<div class="overlay-imagem-link">
        <a href="${enderecoDaNovaImage}" target="_blank" title="Ver imagem em tamanho real">
        Ver imagem em tamnho real
        </a>
    `).appendTo(novoItem)
    $(novoItem).appendTo('ul')
    $(novoItem).fadeIn(1000)
    $('#endereco-img-nova').val('')

})
})