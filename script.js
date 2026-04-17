const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
  const boxes = document.createElement('div');
  boxes.classList.add('box');
  container.appendChild(boxes);

  boxes.addEventListener('mouseenter', () => {
    boxes.style.backgroundColor = 'black';
  });
}
