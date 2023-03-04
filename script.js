const container = document.querySelector('.container');

for(let i=0; i<256; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
}

const divs = document.querySelectorAll('div');
divs.forEach((div) => {
  div.addEventListener('mouseover', (e) => {
    div.style.backgroundColor = "red";
    e.stopPropagation();
  }, capture = false);
});

