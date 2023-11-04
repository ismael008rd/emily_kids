

const images = document.querySelectorAll('.slider')
const caroseul = document.querySelectorAll('.caroseul')
const btnAvançar = document.querySelector('.proximo')
const btnvoltar = document.querySelector('.retorno')
let currentSlide =0

function next(){
   removeI()
   if(currentSlide==images.length -1){
      currentSlide=0
   }else{
      currentSlide++
      
   }
   Adicionar()
   atualalizarIconC(currentSlide)
   
  
  
}
function previImgs(){
   removeI()
   if(currentSlide==0){
      currentSlide=images.length-1
   }else{
      currentSlide--
   }
   Adicionar()
   atualalizarIconC(currentSlide)
  
}
function removeI(){
   images.forEach((e)=>{
      e.classList.remove('on')
     })
}
function Adicionar(){
   images[currentSlide].classList.add('on')

    
}

// function prevImgs(){

// }

btnAvançar.addEventListener('click', next)
btnvoltar.addEventListener('click', previImgs)

// caroseul indicato






   caroseul.forEach((indicator, index) => {
     
      indicator.addEventListener('click', () => {
        images.forEach((slide) =>slide.classList.remove('on'));
      
        caroseul.forEach((indicator) =>{indicator.classList.remove('active')
        console.log(indicator) });
        images[index].classList.add('on');
       
        indicator.classList.add('active');
      });
    });
   
 function atualalizarIconC(index){
   caroseul.forEach((el)=>{
      el.classList.remove('active')
   })

      if(caroseul[index].getAttribute('class','carrosel')){
          caroseul[index].classList.add('active')

      }
 }