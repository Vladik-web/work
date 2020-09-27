const btns = document.querySelectorAll('.btn');
const settings = document.querySelector('.settings');
const looks = document.querySelector('.looks');
const exit = document.querySelectorAll('.exit');
const addC = document.querySelector('.addC');



btns.forEach(item=>{
    item.addEventListener('click', (e)=>{
        const target = e.target;

        if(target.closest('.look')){

            settings.classList.add('dn');
            looks.classList.remove('dn');

        }else if(target.closest('.add')){
            settings.classList.add('dn');
            addC.classList.remove('dn')

        }else if(target.closest('.exit')){
            settings.classList.remove('dn');
            looks.classList.add('dn');
            addC.classList.add('dn')
        }
    })
})
exit.forEach(item=>{
    item.addEventListener('click', (e)=>{
        settings.classList.remove('dn');
        looks.classList.add('dn');
        addC.classList.add('dn')
    })
})
