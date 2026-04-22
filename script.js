const container = document.querySelector('#container');
const gridBtn = document.querySelector('.gridBtn');

gridBtn.addEventListener('click', () => {
  const userInput = prompt(
    'How many grids per side do you want? Please enter a value from 1 to 100'
  );

  if (userInput === null) return;
  if (userInput >= 1 && userInput <= 100) {
    createGrid(userInput);
  } else {
    alert('Please enter a number and this number has to be from 1 to 100');
  }
});

function createGrid(value) {
  container.replaceChildren();
  for (let i = 0; i < value * value; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = 100 / value + '%';
    box.style.height = 100 / value + '%';
    container.appendChild(box);

    box.addEventListener('mouseenter', () => {
      box.style.backgroundColor = 'red';
      box.style.border = 'solid black';
    });
  }
}

createGrid(16);
