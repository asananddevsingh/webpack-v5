import './helloWorld.css';

export const HelloWorld = () => {
  const h2 = document.createElement('h2');
  h2.innerText = 'Say Hello to Webpack World!';
  h2.classList.add('hello-world');
  const body = document.querySelector('body');
  body.appendChild(h2);
};
