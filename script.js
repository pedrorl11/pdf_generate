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