
// Single Element
//const form = document.getElementById('my-form');
//console.log(form);

//Multiple Element
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));//class name
//console.log(document.getElementsByTagName('li'));//tag name


//const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent='Hello';
//ul.children[1].innerText='Brand';
//ul.lastElementChild.innerHTML='<h4>Hello</h4>';

//const btn = document.querySelector('.btn');
//btn.style.background ='red';

//const btn = document.querySelector('.btn');

//btn.addEventListener('click',(e) =>{
 //   e.preventDefault();
 //   c
//});





const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit',onSubmit);

 function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter fields';
        alert('Please Enter fields');

        setTimeout(() => msg.remove(), 3000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

        userList.appendChild(li);
        
        
        //clear fields
        nameInput.value='';
        emailInput.value='';
    }

 };
