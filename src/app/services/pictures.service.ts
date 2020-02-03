import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  constructor() { }

  private pictures: Picture[] = [
    {
      imagen: "assets/img/IMG-6507.JPG",
      info: "1/9 Kaia Gerber"
    },
    {
      imagen: "assets/img/IMG-6511.JPG",
      info: "2/9 Lucky Blue"
    },
    {
      imagen: "assets/img/IMG-6512.JPG",
      info: "3/9 Gigi Hadid"
    },
    {
      imagen: "assets/img/IMG-6515.JPG",
      info: "4/9 Harry Styles"
    },
    {
      imagen: "assets/img/IMG-6518.JPG",
      info: "5/9 Shawn Mendes"
    },
    {
      imagen: "assets/img/IMG-6530.JPG",
      info: "6/9 ZYAN"
    },
    {
      imagen: "assets/img/IMG-6546.JPG",
      info: "7/9 Kylie Jenner"
    },
    {
      imagen: "assets/img/IMG-6547.JPG",
      info: "8/9 Miley Cyrus"
    },
    {
      imagen: "assets/img/IMG-6562.JPG",
      info: "9/9 Kylie"
    }

  ]

  //DEVUELVE EL ARRAY DE PICTURES
  getPictures(): Picture[] {
    return this.pictures;
  }
}

//SE CREA UNA 'interface' PARA PODER USAR ARRAYS DE PICTURES
export interface Picture {
  imagen: string;
  info: string;
}