import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { QuotesComponent } from './quotes/quotes.component';
import { DetailsComponent } from './details/details.component';
import { CountPipePipe } from './count-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    QuotesComponent,
    DetailsComponent,
    CountPipePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
