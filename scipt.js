

const images = document.querySelectorAll('.slider')

const btnAvançar = document.querySelector('.proximo')
const btnvoltar = document.querySelector('.retorno')
let currentSlide =0
let index = 0
function next(){
   removeI()
   if(currentSlide==images.length -1){
      currentSlide=0
   }else{
      currentSlide++
      
   }
   Adicionar()
  
  
}
function previImgs(){
   removeI()
   if(currentSlide==0){
      currentSlide=images.length-1
   }else{
      currentSlide--
   }
   Adicionar()
   
  
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

const caroseul = document.querySelectorAll('.caroseul')

// caroseul.forEach((el)=>{
//    el.addEventListener('click',(el1)=>{
//      const pegarEv= el1.target
//      pegarEv.classList.toggle('active')
//      console.log(pegarEv)
//    })
// })



   caroseul.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        images.forEach((slide) =>slide.classList.remove('on'));
      
        caroseul.forEach((indicator) =>indicator.classList.remove('active') );
        images[index].classList.add('on');
        console.log(index)
        indicator.classList.add('active');
      });
    });
   
 