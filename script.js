const body=document.body;
const character=document.querySelector('.character');
const block=document.querySelector('.block');
const dead=document.querySelector('.dead');

body.addEventListener('click',()=>{
    if(!(character.classList.contains('jump'))){
        character.classList.add('jump');
       
        setTimeout(()=>{
            character.classList.remove('jump');
        },300)
    }
})

//every 10ms check if its dead
const checkTouch=setInterval(()=>{
    let characterBottom=parseInt(window.getComputedStyle(character).getPropertyValue('bottom'));
    let characterLeft=parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    let blockRight=parseInt(window.getComputedStyle(block).getPropertyValue('right'));
    
    let blockLeft= blockRight-30;
    let characterRight=characterLeft+30;

    if(blockLeft < characterRight && blockLeft> characterLeft && characterBottom===31){
        dead.style.display='block';
        block.style.display='none';
    }   
    
},10)
