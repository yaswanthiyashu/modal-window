const modal = document.querySelector('.modal');
const showmodal = document.querySelectorAll('.showModal');
const close = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const openmodal = function(){
    console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closemodal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden')
}

for(let i = 0; i<showmodal.length; i++)
showmodal[i].addEventListener('click', openmodal)



close.addEventListener('click', closemodal)
overlay.addEventListener('click', closemodal)

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closemodal();
    }
})