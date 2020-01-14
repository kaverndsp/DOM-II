const textOne = document.querySelector('.intro');

textOne.addEventListener('click', function(){
    textOne.style.backgroundColor = 'slategrey';
    

})

const headerOne = document.querySelector('.intro h2');

headerOne.addEventListener('click', (event) => {
    headerOne.style.fontSize = '5.0rem';
    event.stopPropagation();
})

const newImg = document.querySelector('.intro img');

window.addEventListener("resize", function(){
  newImg.src = 'https://images.pexels.com/photos/2216498/pexels-photo-2216498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
})

const full = document.querySelector('body');

full.addEventListener('wheel', function(){
    full.style.backgroundColor = 'rgb(237, 255, 255)';
})

const imageRise = document.querySelectorAll('.img-content');

// imageRise.addEventListener('load', function(){
//     imageRise.style.backgroundColor = 'red';
// })
const funBus = document.querySelectorAll('.text-content h2');

for (let i = 0; i < funBus.length; i++){
funBus[i].addEventListener('dblclick', function(){
    funBus[i].style.fontSize = '4.0rem';
   
    })
}


for (let i = 0; i < imageRise.length; i++){
    imageRise[i].addEventListener('click', function(){
        imageRise[i].style.height = '50vh';
    })
}

