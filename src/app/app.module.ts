import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ClassicTemplate } from './classic-template/classic-template';
import { UserDetails } from './user-details/user-details';
import { ReactiveFormsModule } from '@angular/forms';
import { routing } from './routes/app-routes';



@NgModule({
  declarations: [AppComponent,
    ClassicTemplate,
    UserDetails
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    routing
  ],

  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule { }
