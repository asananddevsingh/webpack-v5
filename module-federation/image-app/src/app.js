import { HelloWorld } from './components/helloWorld/helloWorld';
import { MyImage } from './components/myImage/myImage';
import _ from 'lodash';

HelloWorld(_.upperCase('image'));

const myImg = new MyImage();
myImg.render();

// Since it loads async, we are loading it as dynamic import.
import('RemoteButtonApp/myButton').then((RemoteButtonModule) => {
  const { MyButton } = RemoteButtonModule;
  console.log('RemoteButtonModule', RemoteButtonModule);
  const myBtn = new MyButton();
  myBtn.render();
});
