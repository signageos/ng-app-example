import { Component, OnInit } from '@angular/core';
import sos from '@signageos/front-applet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ng-app';
  public sosIsReady: boolean = false;

  public ngOnInit(): void {
    this.initSos();
  }

  private initSos(): void {
    sos.onReady().then(() => {
      console.log('Ready to rock');
      this.sosIsReady = true;
    });
  }
}
