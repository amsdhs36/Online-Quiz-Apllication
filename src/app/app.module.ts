import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { QuizhomeComponent } from './quizhome/quizhome.component';
import { QuizdisplayComponent } from './quizdisplay/quizdisplay.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuizcontentsService } from './services/quizcontents.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewComponent } from './review/review.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GetstartedComponent,
    QuizhomeComponent,
    QuizdisplayComponent,
    ReviewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [QuizcontentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
