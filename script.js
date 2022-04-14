/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

const all= document.querySelectorAll('.choice-grid div')

function check(event){

    const unchecked = event.currentTarget;
    const image = unchecked.querySelector('.checkbox');

    const uncheck_all = document.querySelectorAll('.choice-grid div'); 
    for(const box of uncheck_all){
        if(box.dataset.questionId == unchecked.dataset.questionId && box.dataset.choiceId  != unchecked.dataset.choiceId){
            const image = box.querySelector('.checkbox');
            image.src = "images/unchecked.png";
            box.classList.add('img_uncheck'); //aggiungo il css delle immagini uncheck ai div non scelti
            box.classList.remove('img_check'); // rimuovo il css delle immagini check ai div non scelti
            unchecked.classList.remove('img_uncheck'); //rimuovo il css delle immagini uncheck ai div scelti
        }

        
       
    } 
    contenitore[unchecked.dataset.questionId]=unchecked.dataset.choiceId;
    console.log(contenitore["one"]);
   

    image.src = "images/checked.png";
    unchecked.classList.add('img_check');
    
   

    if(gameOver()){
        ricomincia.classList.remove("nascosto");
        rimuoviClick();
        verifica();
    }

    

}



function rinizia(){
    const unchecked= document.querySelectorAll('.choice-grid div');
    for(const box of unchecked){
        box.classList.remove('img_check');
        box.classList.remove('img_uncheck');
        const image = box.querySelector('.checkbox');
        image.src = "images/unchecked.png";
        box.addEventListener('click',check);
        
        
    }
    contenitore["one"]=undefined;
    contenitore["two"]=undefined;
    contenitore["three"]=undefined;
    ricomincia.classList.add('nascosto');

}




const unchecked = document.querySelectorAll('.choice-grid div');
for(const box of unchecked){ 
    box.addEventListener('click', check);
} 

const again = document.querySelector('button')
again.addEventListener('click', rinizia);



const toTop= document.querySelector("button");
toTop.addEventListener('click',backToTop)

function backToTop(){
    window.scrollTo(0,0);
}



const memorizza=document.querySelector('.choice-grid div');
const contenitore={};
const emozione={};




function gameOver(){
    if(contenitore["one"] != undefined && contenitore["two"] != undefined && contenitore["three"] != undefined){
        return true;
    }
    else{
        return false;
    }
}

function rimuoviClick(){

    if(gameOver()){
        for(const box of all){
            box.removeEventListener('click',check);
        }
       
    }

}

function verifica(){
    if(contenitore["one"]===contenitore["two"])
    stampa("one");

    if(contenitore["one"]===contenitore["three"])
    stampa("one");

    if(contenitore["two"]===contenitore["three"])
    stampa("two");
    if(contenitore["one"]!==contenitore["two"]!==contenitore["three"])
    stampa("one");
}





function stampa(index){

    const result=document.querySelector('#ricomincia')
    const titolo= result.querySelector(".titolo");
    const paragrafo= result.querySelector(".paragrafo");

    const title=document.createElement("h1");
    const paragrafe=document.createElement("p");

    title.textContent= RESULTS_MAP[contenitore[index]].title;
    paragrafe.textContent= RESULTS_MAP[contenitore[index]].contents;

    titolo.innerHTML="";
    paragrafo.innerHTML="";

    titolo.appendChild(title);
    paragrafo.appendChild(paragrafe);

}













/*window.addEventListener('scroll', () =>{
    if(window.pageYOffset>100){
        toTop.classList.add('active');
    }
    else{
        toTop.classList.remove('active');
    }   
    })
    serve per mostrare il pulsante da premere dopo 100px dalla Y
    */ 
