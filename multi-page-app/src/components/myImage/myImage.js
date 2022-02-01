import myImage from './anand.jpg';

export class MyImage {
  render() {
    const img = document.createElement('img');
    img.src = myImage;
    const body = document.querySelector('body');
    body.appendChild(img);
  }
}
