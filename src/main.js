import Logo from './Logo.js';


function updateElements(elements) {
  requestAnimationFrame(() => {
    updateElements(elements);
  });

  elements.forEach((element) => {
    element.move();
  });
}


const bounds = {
  x: {
    max: 0,
    min: 0,
  },
  y: {
    max: 0,
    min: 0,
  },
};

function updateBounds() {
  bounds.x.max = window.innerWidth;
  bounds.x.min = 0;
  bounds.y.max = window.innerHeight;
  bounds.y.min = 0;
}

function start() {
  window.addEventListener('resize', () => {
    updateBounds();
  });

  updateBounds();

  const logo = new Logo(bounds, 'logo');
  updateElements([logo]);
}

start();
