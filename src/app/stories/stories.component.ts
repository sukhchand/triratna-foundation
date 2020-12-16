import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StoriesService } from './services/stories.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  eventResult:any;
  page = 1;
  pageSize = 10;
  constructor(
    private modalService: NgbModal,
    private router: Router,
    private formBuilder: FormBuilder,
    public StoriesService: StoriesService,
  ) {}

  ngOnInit(): void {
    this.getEvents();
  }
  
  public getEvents() {
    this.StoriesService.getEvents(this.page, this.pageSize).subscribe(result => {
      this.eventResult=result;
    }, (error) => {
      console.log(error);
    })
  }

}
