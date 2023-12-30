document.addEventListener('DOMContentLoaded', function () {
    // Referências aos elementos HTML
    var listElement = document.querySelector('ul');
    var inputElement = document.getElementById('item');
    var buttonElement = document.querySelector('button');
  
    // Adicionar um ouvinte de evento ao botão
    buttonElement.addEventListener('click', addItemToList);
  
    function addItemToList() {
      // Obter o valor atual do elemento de entrada
      var inputValue = inputElement.value;
  
      if (inputValue.trim() !== "") {
        // Limpar o valor do elemento de entrada após armazenar
        inputElement.value = '';
  
        // Criar novos elementos
        var newListItem = document.createElement('li');
        var spanElement = document.createElement('span');
        var deleteButton = document.createElement('button');
  
        // Configurar os conteúdos dos elementos
        spanElement.textContent = inputValue;
        deleteButton.textContent = 'Excluir';
  
        // Adicionar o span e o botão como filhos do item da lista
        newListItem.appendChild(spanElement);
        newListItem.appendChild(deleteButton);
  
        // Adicionar o novo elemento à lista
        listElement.appendChild(newListItem);
  
        // Adicionar um ouvinte de evento ao botão de exclusão
        deleteButton.addEventListener('click', function () {
          listElement.removeChild(newListItem);
        });
  
        // Focar no elemento de entrada para o próximo item
        inputElement.focus();
      }
    }
  });







