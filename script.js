const btnGenerate = document.querySelector("#botao");

btnGenerate.addEventListener("click", () =>{
    const content = document.querySelector("#content");
    const nomeInput = document.querySelector("#nome");
    const nome = nomeInput.value;
    
    const options = {
        margin: [15, 0, 15, 0],
        filename: `${nome}.pdf`,
        scale: 4,
        image: { type: 'jpeg', quality: 1},
        html2canvas: {
            dpi: 300,
            scale:4,
            enableLinks:true,
            DisablePdfCompression:1,
            letterRendering: true,
            useCORS: true
          },
        jsPDF:{unit:"pt", format:"a4", orientation:"portrait"}
    };
    if (nome.trim() !== '') {
        html2pdf().set(options).from(content).save();
    } else {
        alert("Por favor, insira um nome antes de gerar o certificado.");
    }
});