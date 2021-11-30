import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() emitter = new EventEmitter<string>();
  route;

  onRouting(route: string) {
    this.route = route
    this.emitter.emit(this.route);
  }

}
