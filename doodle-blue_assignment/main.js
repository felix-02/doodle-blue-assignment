let form =document.querySelector('.consultation .form-container form');
let firstName=document.querySelector('#firstName');
let lastName=document.querySelector('#lastName');
let phone=document.querySelector('#phone');
let email=document.querySelector('#email');
let invest=document.querySelector('#invest');
let message=document.querySelector('#message');
let firstnameSpan=document.querySelector('.firstname-span');
let lastnameSpan=document.querySelector('.lastname-span');
let phoneSpan=document.querySelector('.phone-span');
let messageSpan=document.querySelector('.message-span');

let arr = [firstName, lastName, phone, message];
let arr2=[firstnameSpan,lastnameSpan,phoneSpan,messageSpan]

for(let i=0;i<arr.length;i++){
    arr[i].addEventListener('input',()=>{
        arr[i].classList.remove('error');
        arr2[i].classList.remove('show');
    })
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let regex = /^[A-Za-z]+$/;
    if (!regex.test(firstName.value)){
    firstName.classList.add('error');
firstnameSpan.classList.add('show');
     }
    if (!regex.test(lastName.value)){
        lastName.classList.add('error');
        lastnameSpan.classList.add('show');
     }
     if(phone.value.length>10||phone.value.length<10){
         phone.classList.add('error');
         phoneSpan.classList.add('show');
     }
     if(firstName.value.length<3||firstName.value.length>15){
         firstName.classList.add('error');
     }
     if(lastName.value.length<3||lastName.value.length>15){
         lastName.classList.add('error');
     }
     if(message.value.length<2||message.value.length>50){
         message.classList.add('error');
         messageSpan.classList.add('show');

     }


})

