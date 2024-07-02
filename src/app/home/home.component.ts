import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  //add click events to buttons to open model
  images = document.querySelectorAll('.gallery') as NodeList;
  imgPath = '';

  onClickImg(imgPath: string) {
    this.imgPath = imgPath;
    console.log('clicked', imgPath);
  }

  onModalWasClosed() {
    this.imgPath = '';
  }
}
