const b = document.querySelector('body')
const buttons = document.querySelectorAll('.button');

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',()=>{
        const color = buttons[i].id;
        b.style.backgroundColor = color;
    })
}