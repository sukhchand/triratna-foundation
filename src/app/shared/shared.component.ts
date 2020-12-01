import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  @Input() result;
  constructor() { }

  ngOnInit(): void {
  }
  //console.log(result);
}
