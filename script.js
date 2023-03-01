const btnonn = document.querySelector('.btn_on');
const btnoff = document.querySelector('.btn_off');

btnonn.addEventListener('click',function(){
    document.querySelector('.image').src = 'buonn.png';
    document.querySelector('#lightCome').classList.remove('hidden');
    document.querySelector('#lightgone').classList.add('hidden')
})

btnoff.addEventListener('click',function(){
    document.querySelector('.image').src = 'nobgb.png';
    document.querySelector('#lightgone').classList.remove('hidden');
    document.querySelector('#lightCome').classList.add('hidden');
    

})