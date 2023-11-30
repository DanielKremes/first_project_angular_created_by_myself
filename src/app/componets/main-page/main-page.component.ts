import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: [
    './main-page.component.css',
    './main-page.component.responsible.css',
  ],
})
export class MainPageComponent implements OnInit {
  @Input()
  title: string = '';

  @Input()
  photoTitle: string = '';

  @Input()
  description: string = '';

  @Input()
  alt: string = '';

  constructor() {}

  ngOnInit(): void {}
}
