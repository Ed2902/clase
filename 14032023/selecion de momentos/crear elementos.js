"use strict"

const myElement = document.createElement('div');
myElement.id='div1'
myElement.className='div1'
myElement.innerHTML='ESTE ES IN DIV CREADO DESDE JS';
myElement.style ="color:red";
//insertar

document.body.appendChild(myElement);

const header = document.getElementById('myherader');
header.appendChild(myElement);


const myparrafo1 = document.createElement('p');
myparrafo1.serAttribute('class','sec3');
const myparrafo2 = documen.createElement('p');
myparrafo2 = myparrafo1;
const sec2 =document.getElementById('sec2');
sec2.appendChild(myparrafo2);
sec2,appendChild(myparrafo1)