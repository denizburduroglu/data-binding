import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'data-binding';
  someValue = "givevalue";
  customers = [{"fname": "FName1","lname": "LName1",},
  {"fname": "FName2","lname": "LName2",},
  {"fname": "FName3","lname": "LName3",},
  {"fname": "FName4","lname": "LName4",},
  {"fname": "FName5","lname": "LName5",}
]
  submit(event) {
    // debugger;
    console.log(event.value);
    this.someValue = event.value;
  }

  flag = true;
  toggle() {
    this.flag = !this.flag;
  }

  setColor(color) {
    console.log(color);
  }

}
