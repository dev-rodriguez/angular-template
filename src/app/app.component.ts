import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mimeds';

  carousel: boolean =  false;

  mainContent : boolean = true;
  profile: boolean = false


  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver) {}

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.carousel = true
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
        this.carousel = false
      }
    });
  }

  showProfile() {
    this.mainContent = false;
    this.profile = true;
  }
  

}
