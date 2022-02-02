import './helloWorld.css';

export const HelloWorld = (pageName) => {
  const h2 = document.createElement('h2');
  h2.innerText = `I'am ${pageName} page.`;
  h2.classList.add('hello-world');
  const body = document.querySelector('body');
  body.appendChild(h2);
};
