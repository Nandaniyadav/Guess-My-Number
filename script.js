// 'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent=10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value=23;

const x = function()
{
    console.log(23);
};
document.querySelector('.check').addEventListener('click',function(){
    console.log(document.querySelector('.guess').value);
    console.log(guess,typeof guess);
    if(!guess){
        document.querySelector('.message').textContent = 
        'No Number!';
    }
});


