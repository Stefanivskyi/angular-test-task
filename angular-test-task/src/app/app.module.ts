import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DropdownModule } from './shared/components/dropdown/dropdown.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DropdownModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
