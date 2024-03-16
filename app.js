function copyPassword() {
  var passwordInput = document.getElementById('password-output');
  passwordInput.select();
  document.execCommand('copy');
  alert('Senha copiada para a área de transferência!');
}

function mostrarPorcentagem(newValue) {
  document.getElementById("passwordLength").innerHTML = newValue;
}

// Função para gerar letras minúsculas
function generateLowercase() {
  return 'abcdefghijklmnopqrstuvwxyz';
}

// Função para gerar letras maiúsculas
function generateUppercase() {
  return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
}

// Função para gerar números
function generateNumbers() {
  return '0123456789';
}

// Função para gerar caracteres especiais
function generateSpecialCharacters() {
  return '!@#-.%*()';
}

// Função para gerar a senha com base nas opções selecionadas
function generatePassword() {
  const length = document.getElementById('num').value;
  mostrarPorcentagem(length); 
  
  let password = '';
  
  // Verifica se a opção de letras minúsculas está marcada e adiciona as letras minúsculas à senha
  if (document.getElementById('lowercase').checked) {
      password += generateLowercase();
  }
  
  // Verifica se a opção de letras maiúsculas está marcada e adiciona as letras maiúsculas à senha
  if (document.getElementById('uppercase').checked) {
      password += generateUppercase();
  }
  
  // Verifica se a opção de números está marcada e adiciona os números à senha
  if (document.getElementById('numbers').checked) {
      password += generateNumbers();
  }
  
  // Verifica se a opção de caracteres especiais está marcada e adiciona os caracteres especiais à senha
  if (document.getElementById('special').checked) {
      password += generateSpecialCharacters();
  }
  
  let generatedPassword = '';
  
  
  for (let i = 0; i < length; i++) {
      generatedPassword += password.charAt(Math.floor(Math.random() * password.length));
  }
  
  
  document.getElementById('password-output').value = generatedPassword;
}


document.getElementById('generate-password-button').addEventListener('click', generatePassword);
