let content = document.querySelector('.content');
let h2 = document.querySelector('.content h2');
let heading  = document.querySelector('#heading');
let headingcont  = document.querySelector('.headingcont');
let num = 1 ;
h2.addEventListener('click' , function(){
    if(num === 1){
        headingcont.style.display = "block"
        num = 2;
    }else{
        headingcont.style.display = "none"
        num = 1;
    }
    
})
let a = 0;

function changeh(){
     h2.innerHTML = heading.value;
     headingcont.style.display = "none"
}
    


let idCounter = 0;
function addInp(){
    let input = document.createElement('INPUT');
    input.id = 'input-' + idCounter++;
    input.value = "hi i am newborn"
    input.draggable = true;
    input.ondragstart = function drag(event){
       event.dataTransfer.setData("text", event.target.id);
    }
    input.classList.add('inp');
    content.appendChild(input);
}

function allowDrop(event){
    event.preventDefault();
}

function drop(event){
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    const targetElement = event.target;
    if(targetElement.classList.contains('inp')){
        const targetRect = targetElement.getBoundingClientRect();
        mouseY = event.clientY; 
        const insertAbove = mouseY < targetRect.top + targetRect.height/2;
        if(insertAbove){
            targetElement.parentNode.insertBefore(draggedElement, targetElement)
        }else{
            targetElement.parentNode.insertBefore(draggedElement, targetElement.nextSibling)
        }
    }
}

content.addEventListener('dragover', allowDrop)
content.addEventListener('drop', drop);
//getting questions 

let write = document.querySelector('.write');
let que = document.querySelector('.que');
let  question = document.querySelector("#question");
write.addEventListener('click', ()=>{
    que.style.display = 'block';
})

let section
let Q =1;
let sectionID = 0;
function addque(){
  section = document.createElement('SECTION');
  section.id = 'section-'+ sectionID++;
  section.draggable = true;
  section.classList.add('sect')
  section.ondragstart = function drag(event){
    event.dataTransfer.setData("text", event.target.id)
  }
content.appendChild(section);
let h3 = document.createElement('H3');
  h3.innerHTML = "Q"+Q++ +":"+ "  "+  question.value ;
  section.appendChild(h3);
  que.style.display = "none";
}

//add answer input fileld in input
function addANs(){
    let ans = document.createElement('INPUT');
    ans.value= "write your answer"
    section.appendChild(ans);
  }

//popup
let showpp = document.querySelector('.showpp');
let lam1 = 1;
function showpop(){
    if(lam1 === 1){
        showpp.style.display = "block";
        lam1 = 0;
    }else{
        showpp.style.display = "none";
        lam1 = 1;
    }
}

  let opid = 0;
  function addmcq(){
    let inp = document.querySelector('.optionv')
    //making div 
    let div = document.createElement('DIV');
    div.classList.add('option');
    section.appendChild(div);
    //making input
    let mcq = document.createElement('INPUT');
      mcq.type = "checkbox";
      mcq.id = 'mcid-' + opid++;
      div.appendChild(mcq);
      //making label
      let label = document.createElement('LABEL');
    label.innerHTML = inp.value;
    div.appendChild(label);
    //display noneof showpp
    showpp.style.display = "none";
  }

  function allowDrop(event){
    event.preventDefault();
}

function drop(event){
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    const targetElement = event.target;
    if(targetElement.classList.contains('sect')){
        const targetRect = targetElement.getBoundingClientRect();
        mouseY = event.clientY; 
        const insertAbove = mouseY < targetRect.top + targetRect.height/2;
        if(insertAbove){
            targetElement.parentNode.insertBefore(draggedElement, targetElement)
        }else{
            targetElement.parentNode.insertBefore(draggedElement, targetElement.nextSibling)
        }
    }
} 


let showS = document.querySelector('.showSELCT');
let lam2 = 1;
function showpop(){
    if(lam2 === 1){
        showS.style.display = "block";
        lam2 = 0;
    }else{
        showS.style.display = "none";
        lam2 = 1;
    }
}

function addSEL(options, sectionID){
    let optionv = document.querySelector('.optionS');
    let select = document.createElement('SELECT');
    select.value = "media"
    section.appendChild(select)
    
        let option = document.createElement('OPTION');
        option.value = optionv.value;
        option.text = optionv.value;
        select.appendChild(option)
    
    
}