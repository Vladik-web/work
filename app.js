const look = document.querySelector('.look');

//Добавить
const avatar = document.getElementById('avatar');
const name = document.getElementById('name');
const last = document.getElementById('last');
const dob = document.querySelector('.dob');
const list = document.querySelector('.list');

let comand = {};

dob.addEventListener('click',addInObj);

const time = setInterval(function (){
    if(name.value.length < 3 || last.value.length < 3){
        dob.disabled = true;
        
        
    }else {
        dob.disabled = false;
    }
},1000);

function addInObj(){

    

    comand[name.value] = {
        avatar : avatar.value,
        name : name.value,
        ln : last.value
    }
    saveToLocalStorage();

    avatar.value = '';
    name.value = '';
    last.value = '';

}
function saveToLocalStorage(){
    localStorage.setItem('user', JSON.stringify(comand));
}