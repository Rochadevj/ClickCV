function printpdf() {
    var content = document.getElementById("resume");


    const allButtons = document.querySelectorAll("#print button");
    allButtons.forEach(button => {
        button.style.display = "none";
    });

    let allInputCheckboxes = document.querySelectorAll(".input-checkbox");
    allInputCheckboxes.forEach(input => {
        input.style.display = "none";
    });

 
    html2pdf(content, {
        html2canvas: { scale: 1, logging: true, dpi: 500 },
        pagebreak: { mode: 'avoid-all' } 
    }).then(() => {
     
        allButtons.forEach(button => {
            button.style.display = "inline-block";
        });
        allInputCheckboxes.forEach(input => {
            input.style.display = "inline-block";
        });
    });
}

function addedu() {
  const head = document.createElement('div');
  document.getElementById("education").appendChild(head);
  head.innerHTML = ('<div class="edublock"><span><input type="checkbox" class="input-checkbox"></span><span class="education-head" contenteditable="true">SEU DIPLOMA</span><div ><span contenteditable="true">Nome da Instituição</span> - <span contenteditable="true">Ano</span></div></div>');
  saveresume();
}
function remedu(event) {
  let val = 0;
  let empty = true;
  const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
  const array = Array.from(allInputCheckboxes);
  if (array.length === 0) {
      alert("Não há nada para deletar!")
  }
  else {
      console.log(array);
      array.forEach(element => {
          if (element.checked === true) {
              val = 1;
              element.parentElement.parentElement.remove();
          }
      })
      if (val === 0) alert("Por favor, marque as caixas de seleção para excluir o campo obrigatório!")
  }
  saveresume();
}


function addskill() {
  const head = document.createElement('div');
  document.getElementById("skills").appendChild(head);
  head.innerHTML = ('<div class="skill"><span><input type="checkbox" class="input-checkbox"></span><span><i class="fas fa-chevron-circle-right"></i></span>&nbsp&nbsp&nbsp<span contenteditable="true">Sua expêriencia aqui</span></div>');
  saveresume();
}

function remskill(event) {
  let val = 0;
  const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
  const array = Array.from(allInputCheckboxes);
  if (array.length === 0) {
      alert("Não há nada para deletar!")
  }
  else {
      console.log(array);
      array.forEach(element => {
          if (element.checked === true) {
              val = 1;
              element.parentElement.parentElement.remove();
          }
      })
      if (val === 0) alert("Por favor, marque as caixas de seleção para excluir o campo obrigatório!")
  }
  saveresume();
}


function addLang() {
  const head = document.createElement('div');
  document.getElementById("languages").appendChild(head);
  head.innerHTML = ('<div class="language"><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Suas Skills</span>&nbsp-&nbsp<span contenteditable="true">Nível</span></div>');
  saveresume();
}
function remLang(event) {
  let val = 0;
  const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
  const array = Array.from(allInputCheckboxes);
  if (array.length === 0) {
      alert("Não há nada para deletar!")
  }
  else {
      console.log(array);
      array.forEach(element => {
          if (element.checked === true) {
              val = 1;
              element.parentElement.parentElement.remove();
          }
      })
      if (val === 0) alert("Por favor, marque as caixas de seleção para excluir o campo obrigatório!")
  }
  saveresume();
}


function addAch() {
  const head = document.createElement('div');
  document.getElementById("achievement").appendChild(head);
  head.innerHTML = ('<div class="achieve" ><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Escreva seus Projetos</span></div>');
  saveresume();
}
function remAch(event) {
  let val = 0;
  const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
  const array = Array.from(allInputCheckboxes);
  if (array.length === 0) {
      alert("Não há nada para deletar!")
  }
  else {
      console.log(array);
      array.forEach(element => {
          if (element.checked === true) {
              val = 1;
              element.parentElement.parentElement.remove();
          }
      })
      if (val === 0) alert("Por favor, marque as caixas de seleção para excluir o campo obrigatório!")
  }
  saveresume();
}


function addInt() {
  const head = document.createElement('div');
  document.getElementById("interest").appendChild(head);
  head.innerHTML = ('<div class="achieve" ><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Seus Idiomas</span></div>');
  saveresume();
}
function remInt(event) {
  let val = 0;
  const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
  const array = Array.from(allInputCheckboxes);
  if (array.length === 0) {
      alert("Não há nada para deletar!")
  }
  else {
      array.forEach(element => {
          if (element.checked === true) {
              val = 1;
              element.parentElement.parentElement.remove();
          }
      })
      if (val === 0) alert("Por favor, marque as caixas de seleção para excluir o campo obrigatório!")
  }
  saveresume();
}

let maxNewSection = 1;
function addsec() {
  if (maxNewSection < 2) {
      const head = document.createElement('div');
      document.getElementById("newsec").appendChild(head);
      if (maxNewSection === 0) {
          head.innerHTML = ('<div><span><input type="checkbox" class="input-checkbox"></span><span class="title" contenteditable="true">NOVO TÓPICO</span><br><br><div contenteditable="true">Esta é a parte de descrição da sua nova seção (opcional). Tente ficar dentro do limite e escreva algo que tenha menos de 400 caracteres. Os espaços e símbolos que você usa também serão incluídos.</div></div>');
      }
      else {
          head.innerHTML = ('<div><br><br><span><input type="checkbox" class="input-checkbox"></span><span class="title" contenteditable="true">NOVO TÓPICO</span><br><br><div contenteditable="true">Esta é a parte de descrição da sua nova seção (opcional). Tente ficar dentro do limite e escreva algo que tenha menos de 400 caracteres. Os espaços e símbolos que você usa também serão incluídos.</div></div>');
      }

      maxNewSection = maxNewSection + 1;
  }
  else {
      alert("Somente dois novos tópicos podem ser adicionados!")

  }
  saveresume();
}
function remsec(event) {
  let val = 0;
  const allInputCheckboxes = event.target.parentElement.getElementsByClassName("input-checkbox");
  const array = Array.from(allInputCheckboxes);
  if (array.length === 0) {
      alert("Não há nada para deletar!")
  }
  else {
      console.log(array);
      array.forEach(element => {
          if (element.checked === true) {
              val = 1;
              maxNewSection = maxNewSection - 1;
              element.parentElement.parentElement.remove();
          }
      })
      if (val === 0) alert("Por favor, marque as caixas de seleção para excluir o campo obrigatório!")
  }
  saveresume();
}

function saveresume() {
  var sec = document.getElementById("print");
  value1 = sec.innerHTML;
  var info = document.getElementById("custinfo");
  info.value = value1;
}

function isMobile() {
    return window.innerWidth <= 768; 
}

function updateMobileView() {
    if (isMobile()) {
        document.querySelectorAll(".input-checkbox").forEach(input => {
            input.style.width = "20px"; 
            input.style.height = "20px";
        });

        document.querySelectorAll("#print button").forEach(button => {
            button.style.fontSize = "14px";  
            button.style.padding = "8px";  
        });

        document.getElementById("resume").style.fontSize = "14px"; 
    }
}


window.addEventListener("load", updateMobileView);
window.addEventListener("resize", updateMobileView);


function adjustForPrint() {
    document.querySelectorAll("h2, h3").forEach(title => {
        let nextElement = title.nextElementSibling;
        
        if (nextElement && nextElement.getBoundingClientRect().top - title.getBoundingClientRect().bottom < 50) {
            title.classList.add("new-page"); 
        }
    });
}
window.addEventListener("load", adjustForPrint);
