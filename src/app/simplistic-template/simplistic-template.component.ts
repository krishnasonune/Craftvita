import { Component } from '@angular/core';

@Component({
  selector: 'app-simplistic-template',
  templateUrl: './simplistic-template.component.html',
  styleUrl: './simplistic-template.component.css'
})
export class SimplisticTemplateComponent {
  constructor() { }

  download() {
    window.print();
  }
}
