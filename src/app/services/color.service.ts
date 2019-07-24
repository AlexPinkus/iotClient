import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Color } from '../Models/color';


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private db: AngularFireDatabase) { }

  getCurrentColor() {
    return this.db.object('color').valueChanges();
  }

  setCurrentColor(color: Color) {
    return this.db.object('color').set(color.getRGB());
  }

}
