import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRoute = 'recipes';
  // showList = false;
  handleEmit(route: string)  {
    this.showRoute = route;
  }
}
