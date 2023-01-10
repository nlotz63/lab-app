import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab-app';

  public testSlider(value: any | null) {
    console.log(value.target.value);
  }
}
