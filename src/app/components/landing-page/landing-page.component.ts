import { Component, OnInit } from '@angular/core';
import { PicturesService } from 'src/app/services/pictures.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /*CREAMOS UN OBJETO DE TIPO 'PicturesService' para poder acceder al método
  'getPictures()' y poder extraer los datos*/
  private picture: PicturesService = new PicturesService();
  arrayPictures = this.picture.getPictures();
}
