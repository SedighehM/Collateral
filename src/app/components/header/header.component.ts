import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  now: string='';
  constructor() {
    setInterval(() => {
      this.now = new Date().toString();
    }, 1);
}

  ngOnInit(): void {}
}
