import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlphabaticPaginationComponent } from './alphabatic-pagination/alphabatic-pagination.component';
// import { SeriesListComponent } from './series-list/series-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AlphabaticPaginationComponent,
    // SeriesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
