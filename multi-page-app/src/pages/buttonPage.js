import { HelloWorld } from '../components/helloWorld/helloWorld';
import { MyButton } from '../components/myButton/myButton';

HelloWorld('Button Page');

const myBtn = new MyButton();
myBtn.render();
