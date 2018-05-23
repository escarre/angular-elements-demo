import { Component, ChangeDetectorRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'ng-basic',
  template: `
    <h1>i'm an angular element</h1>
    <button (click)="onClick()">{{title}}</button>
  `,
  styles: [
    `
    :host {
      display: flex;
      justify-content: center;
      width: 350px;
      flex-wrap: wrap;
      margin: auto;
      color: #ec5501;
    }
  `,
    `button {
      background-color: #1b9888;
      padding: 1em 2em;
      text-transform: uppercase;
      font-family: sans-serif;
      color: white;
      font-weight: 500;
  }`,
  ],
  encapsulation: ViewEncapsulation.Native,
})
export class BasicComponent {
  @Input() title = 'click me';
  @Output() action = new EventEmitter<string>();
  potentialTitles = ['Click Me', 'Built with Angular', 'Click counted', 'Angular Elements?', 'Clickity Click'];
  private count = 0;

  constructor(private http: Http, private ref: ChangeDetectorRef) {}

  onClick() {
    this.count++;
    this.changeTitle();
    this.action.emit(`click counter - ${this.count}`);
  }

  changeTitle() {
    const index = this.count % this.potentialTitles.length;
    this.title = this.potentialTitles[index];
    this.ref.detectChanges();
  }
}
