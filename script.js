const btnGenerate = document.querySelector("#botao");

btnGenerate.addEventListener("click", () =>{
    const content = document.querySelector("#content");
    const nomeInput = document.querySelector("#nome");
    const nome = nomeInput.value;
    
    const options = {
        filename: `${nome}.pdf`,
        scale: 3,
        jsPDF:{unit:"mm", format:"a4", orientation:"portrait"}
    };
    if (nome.trim() !== '') {
        html2pdf().set(options).from(content).save();
    } else {
        alert("Por favor, insira um nome antes de gerar o certificado.");
    }
});