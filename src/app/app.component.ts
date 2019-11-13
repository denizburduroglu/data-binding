import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  someValue = "givevalue";
  submit(event) {
    // debugger;
    console.log(event.value);
    this.someValue = event.value;
  }
}
