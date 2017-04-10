import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app',
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <h1>Helo</h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  public ngOnInit() {
    console.log('Init app');
  }

}
