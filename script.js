const container = document.querySelector('.container');

/*
for(let i=0; i<256; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
}
*/

const btn = document.querySelector('button');
btn.addEventListener('click',() => {
  let num = prompt();
  while (num > 100) {
    num = prompt();
  }
  for(let i=0; i<num*num; i++) {
    const div = document.createElement('div');
    let dim = 960/num - 2;
    div.style.height = `${dim}px`;
    div.style.width = `${dim}px`;
    container.appendChild(div);
  }
});

const divs = document.querySelectorAll('div');
divs.forEach((div) => {
  div.addEventListener('mouseover', (e) => {
    div.style.backgroundColor = "red";
    e.stopPropagation();
  });
});

