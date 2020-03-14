export default class Logo {
  constructor(bounds, id, speed = 3, colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff']) {
    this.htmlElement = document.getElementById(id);
    this.bounds = bounds;
    this.direction = 'se';
    this.y = 0;
    this.x = 0;
    this.colors = colors;
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.speed = speed;
  }

  move() {
    switch (this.direction) {
      case 'ne':
        this.x += this.speed;
        this.y -= this.speed;
        break;
      case 'nw':
        this.x -= this.speed;
        this.y -= this.speed;
        break;
      case 'sw':
        this.x -= this.speed;
        this.y += this.speed;
        break;
      case 'se':
        this.x += this.speed;
        this.y += this.speed;
        break;
      default:
        break;
    }
    this.updateDirection();
    this.htmlElement.style.transform = `translate(${this.x}px, ${this.y}px)`;
    if (this.htmlElement.tagName === 'OBJECT') {
      this.htmlElement.style.fill = this.color;
    } else {
      this.htmlElement.style.backgroundColor = this.color;
    }
  }

  updateDirection() {
    if (this.x <= (this.bounds.x.min - this.htmlElement.offsetLeft)) {
      if (this.direction === 'nw') {
        this.direction = 'ne';
      } else if (this.direction === 'sw') {
        this.direction = 'se';
      }
      this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    if (this.x >= this.bounds.x.max - this.htmlElement.offsetLeft - this.htmlElement.offsetWidth) {
      if (this.direction === 'ne') {
        this.direction = 'nw';
      } else if (this.direction === 'se') {
        this.direction = 'sw';
      }
      this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    if (this.y <= this.bounds.y.min - this.htmlElement.offsetTop) {
      if (this.direction === 'ne') {
        this.direction = 'se';
      } else if (this.direction === 'nw') {
        this.direction = 'sw';
      }
      this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }

    if (this.y >= this.bounds.y.max - this.htmlElement.offsetTop - this.htmlElement.offsetHeight) {
      if (this.direction === 'se') {
        this.direction = 'ne';
      } else if (this.direction === 'sw') {
        this.direction = 'nw';
      }
      this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    }
  }
}