let input = document.getElementById('input');
let btn = document.getElementById('btn');
let result = document.getElementById('result');
let btn1 = document.getElementById('btn1');
let copy = document.getElementById('copy');
let copy1= document.querySelector('.copy1');

btn.addEventListener('click',function () {
    output = input.value;
    convert = output.toLowerCase();
    result.innerText = convert;
})
btn1.addEventListener('click',function () {
  let input4 =  input.value.toUpperCase()
  result.innerText = input4;  
})

copy.addEventListener('click',function () {
    output = input.value;
  let newStr =   output.slice(0)
  result.innerText = newStr
// result.innerText      =  input.value
//input.value = '';
});


copy1.addEventListener('click',function () {
    
    output = input.value;
     result.innerText =  input.value.classList.add('abc')
//  result.innerText = output
  
          

})