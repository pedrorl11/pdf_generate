// ao apertar no botão, gera pdf de #content

const btnGenerate = document.querySelector("#botao");

btnGenerate.addEventListener("click", () => {
  const content = document.querySelector("#content");
  const nomeInput = document.querySelector("#nome");
  const nome = nomeInput.value;
  const width_in_mm = 105;
  const height_in_mm = 150;

  const options = {
    filename: `${nome}.pdf`,
    margin:[0,0,0,0],
    image: { type: 'jpeg', quality: 1 },
    html2canvas: {
      dpi: 300,
      letterRendering: true,
      useCORS: true,
      scale: 6
    },
    jsPDF: { unit: "mm", format: [width_in_mm, height_in_mm], orientation: "portrait" }
  };
  if (nome.trim() !== '') {
    html2pdf().set(options).from(content).save();
  } else {
    alert("Por favor, insira um nome antes de gerar o certificado.");
  }
});

// Preenchimentos automáticos

function formatCPF(input) {
  // Remove todos os caracteres não numéricos
  var cpf = input.value.replace(/\D/g, '');

  // Formata o CPF de acordo com a quantidade de números inseridos
  if (cpf.length <= 3) {
    input.value = cpf;
  } else if (cpf.length <= 6) {
    input.value = cpf.slice(0, 3) + '.' + cpf.slice(3);
  } else if (cpf.length <= 9) {
    input.value = cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6);
  } else {
    input.value = cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9, 11);
  }
}

function formatTelefone(input) {
  // Remove todos os caracteres não numéricos
  var telefone = input.value.replace(/\D/g, '');

  // Formata o telefone de acordo com a quantidade de números inseridos
  if (telefone.length <= 2) {
    input.value = '(' + telefone;
  } else if (telefone.length <= 6) {
    input.value = '(' + telefone.slice(0, 2) + ') ' + telefone.slice(2);
  } else if (telefone.length <= 10) {
    input.value = '(' + telefone.slice(0, 2) + ') ' + telefone.slice(2, 6) + '-' + telefone.slice(6);
  } else {
    input.value = '(' + telefone.slice(0, 2) + ') ' + telefone.slice(2, 7) + '-' + telefone.slice(7, 11);
  }
}

function formatDate(input) {
  // Remove todos os caracteres não numéricos
  var data = input.value.replace(/\D/g, '');

  // Formata a data de acordo com a quantidade de números inseridos
  if (data.length <= 2) {
    input.value = data;
  } else if (data.length <= 4) {
    input.value = data.slice(0, 2) + '/' + data.slice(2);
  } else if (data.length <= 6) {
    input.value = data.slice(0, 2) + '/' + data.slice(2, 4) + '/' + data.slice(4);
  } else {
    input.value = data.slice(0, 2) + '/' + data.slice(2, 4) + '/' + data.slice(4, 8);
  }
}

function formatCEP(input) {
  // Remove todos os caracteres não numéricos
  var cep = input.value.replace(/\D/g, '');

  // Limita o CEP a 8 dígitos
  cep = cep.slice(0, 8);

  // Formata o CEP com o traço apenas quando tiver mais de 5 números
  if (cep.length > 5) {
    cep = cep.slice(0, 5) + '-' + cep.slice(5);
  }
  input.value = cep;
}

function formatUF(input) {
  input.value = input.value.trim().toUpperCase(); // Converte para maiúsculas e remove espaços extras
  if (input.value.length > 2) {
    input.value = input.value.slice(0, 2); // Limita a 2 letras
  }
}