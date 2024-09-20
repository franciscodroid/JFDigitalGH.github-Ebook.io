<script>
document.getElementById('comprar').addEventListener('click', function() {
  alert('Obrigado pelo seu interesse! Nossa página de pagamento está em manutenção. Por favor, tente novamente mais tarde.');
});

// Função para tornar o conteúdo editável
function tornarEditavel() {
  document.designMode = "on";
  alert('Modo de edição ativado. Clique em qualquer texto para editá-lo.');
}

// Adicionar botão para ativar modo de edição
const editButton = document.createElement('button');
editButton.textContent = 'Ativar Modo de Edição';
editButton.style.position = 'fixed';
editButton.style.bottom = '20px';
editButton.style.right = '20px';
editButton.style.zIndex = '1000';
editButton.addEventListener('click', tornarEditavel);
document.body.appendChild(editButton);
</script>