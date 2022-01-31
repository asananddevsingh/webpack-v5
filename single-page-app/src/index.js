import { HelloWorld } from './components/helloWorld/helloWorld';
import { MyButton } from './components/myButton/myButton';
import { MyImage } from './components/myImage/myImage';

HelloWorld();

const myImg = new MyImage();
myImg.render();

const myBtn = new MyButton();
myBtn.render();

if (process.env.NODE_ENV === 'development') {
  console.log('Development Mode');
} else if (process.env.NODE_ENV === 'production') {
  console.log('Production Mode');
} else {
  console.log('None Mode');
}

myBtn.errorMethod(); // It is easy to debug this in development mode of webpack.
