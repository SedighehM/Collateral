import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statics',
  templateUrl: './statics.component.html',
  styleUrls: ['./statics.component.scss'],
})
export class StaticsComponent implements OnInit {
  constructor() {}
  @Input() header: string = '';
  @Input() counter: number = 0;

  ngOnInit(): void {}
}
