import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorService } from './services/color.service';
import { Color } from './Models/color';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public currentColor$: Observable<any>;
  public pickedColor: string;
  public colorToHex = Color.rgbToHex;

  constructor(private colorService: ColorService) {
    this.currentColor$ = colorService.getCurrentColor();
  }

  public displayCurrentColor(color) {
    const styles = {
      background: Color.rgbToHex(color.red, color.green, color.blue)
    };
    return styles;
  }

  public onColorPicked(hex: string) {
    this.pickedColor = hex;
  }

  public async setColor() {
    const colorToSet = new Color(this.pickedColor);
    try {
      await this.colorService.setCurrentColor(colorToSet);
      alert('Color set');
    } catch (error) {
      console.log('error :', error);
    }
  }

}
