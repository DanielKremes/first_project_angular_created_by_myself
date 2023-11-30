import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.css']
})
export class FooterPageComponent implements OnInit {

  name_footer_dev: string = 'Daniel Renato Kremes';

  constructor() { }

  ngOnInit(): void {
  }

}
