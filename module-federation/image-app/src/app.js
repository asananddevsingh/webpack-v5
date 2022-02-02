import { HelloWorld } from './components/helloWorld/helloWorld';
import { MyImage } from './components/myImage/myImage';
import _ from 'lodash';

HelloWorld(_.upperCase('image'));

const myImg = new MyImage();
myImg.render();
