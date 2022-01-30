import { HelloWorld } from './components/helloWorld/helloWorld';
import { MyButton } from './components/myButton/myButton';
import { MyImage } from './components/myImage/myImage';

HelloWorld();

const myImg = new MyImage();
myImg.render();

const myBtn = new MyButton();
myBtn.render();
