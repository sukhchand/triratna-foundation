import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'full-story-details',
  templateUrl: './full-story-details.component.html',
  styleUrls: ['./full-story-details.component.scss']
})
export class FullStoryDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params['idUser']);
  });
  }

}
