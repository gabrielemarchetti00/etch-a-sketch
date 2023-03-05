function createGrid(num) {
  for(let i=0; i<num*num; i++) {
    let div = document.createElement('div');
    let dim = 960/num - 2;
    div.style.height = `${dim}px`;
    div.style.width = `${dim}px`;
    container.appendChild(div);
  }
  let divs = document.querySelectorAll('div');
  return divs;
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function randomRGB() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
  return RGBColor;
}

let container = document.querySelector('.container');
let grid = createGrid(16);
grid.forEach((div) => {
  div.addEventListener('mouseover', (e) => {
    div.style.backgroundColor = randomRGB();
    e.stopPropagation();
  });
});

const btn = document.querySelector('button');
btn.addEventListener('click',() => {
  let num = prompt();
  while (num > 100) {
    num = prompt();
  }
  removeAllChildNodes(container);
  grid = createGrid(num);
  grid.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
      div.style.backgroundColor = randomRGB();
      e.stopPropagation();
    });
  });
});



