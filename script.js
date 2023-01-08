let i = 500;
let para = document.createElement('p');

function isPrime(num) {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }

  return true;
}

while(i > 1){
  if(isPrime(i))
    //template literal
    para.textContent += `${i}, `;
    i--;
}

let section = document.querySelector('section');
section.appendChild(para);
