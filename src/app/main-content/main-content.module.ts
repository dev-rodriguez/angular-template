import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './profile/profile.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    PrincipalPageComponent,
    CarouselComponent,
    ProfileComponent,
  ],
  exports:[
    PrincipalPageComponent,
    CarouselComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    IvyCarouselModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    BrowserAnimationsModule
    
    
    
  ]
})
export class MainContentModule { }
