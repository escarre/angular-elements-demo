import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpModule } from '@angular/http';

import { createCustomElement } from '@angular/elements';

import { BasicComponent } from './basic/basic.component';

@NgModule({
  declarations: [BasicComponent],
  imports: [BrowserModule, HttpModule],
  entryComponents: [BasicComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const basicComponent = createCustomElement(BasicComponent, { injector });
    customElements.define('ng-basic', basicComponent);
  }
  ngDoBootstrap() {}
}
