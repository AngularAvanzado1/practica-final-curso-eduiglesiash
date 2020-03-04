import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DataModule } from '@wb-data';


const MyModules =  [
  DataModule
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    ...MyModules,
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
