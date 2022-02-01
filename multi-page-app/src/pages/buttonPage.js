import { HelloWorld } from '../components/helloWorld/helloWorld';
import { MyButton } from '../components/myButton/myButton';
import _ from 'lodash';

HelloWorld(_.upperCase('button'));

const myBtn = new MyButton();
myBtn.render();
