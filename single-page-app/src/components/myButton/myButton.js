import './myButton.css';

export class MyButton {
  render() {
    const body = document.querySelector('body');
    const button = document.createElement('button');
    button.innerText = "I'm Button";
    button.classList.add('my-button');
    button.onclick = () => {
      const p = document.createElement('p');
      p.innerText = `You clicked button at ${new Date().toDateString()}`;
      p.classList.add('my-para');
      body.appendChild(p);
    };
    body.appendChild(button);
  }
}
