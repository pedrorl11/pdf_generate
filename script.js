const btnGenerate = document.querySelector("#botao");


btnGenerate.addEventListener("click", () => {
    const content = document.querySelector("#content");
    const nomeInput = document.querySelector("#nome");
    const nome = nomeInput.value;
  
    const options = {
      filename: `${nome}.pdf`,
      image: { type: 'jpeg', quality: 1 },
      html2canvas: {
        dpi: 300,
        letterRendering: true,
        useCORS: true,
        scale: 6
      },
      jsPDF: { unit: "pt", format: [content.offsetWidth, content.offsetHeight], orientation: "portrait" }
    };
  
    if (nome.trim() !== '') {
      html2pdf().set(options).from(content).save();
    } else {
      alert("Por favor, insira um nome antes de gerar o certificado.");
    }
  });