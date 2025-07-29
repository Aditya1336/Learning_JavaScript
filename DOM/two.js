const parent = document.querySelector('.week')
console.log(parent);
console.log(parent.children);
console.log(parent.children[0]);

for(let i=0;i<parent.children.length;i++){
    console.log(parent.children[i].innerHTML)
}

parent.firstElementChild.style.color='yellow';
parent.lastElementChild.style.color='blue';
console.log(parent.firstElementChild.parentElement.className);
console.log(parent.firstElementChild.nextElementSibling.innerHTML);
console.log(parent.childNodes);