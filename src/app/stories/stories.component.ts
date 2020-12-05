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
  myDate: Date;
  obj: any;
  
  constructor(
    private modalService: NgbModal,
    private router: Router,
    private formBuilder: FormBuilder,
    public StoriesService: StoriesService,
  ) {}

  ngOnInit(): void {
    this.obj={
      startTime: new Date()
    }
    this.getEvents();
  }
  
  public getEvents() {
    this.StoriesService.getEvents(this.obj).subscribe(result => {
      this.eventResult=result;
    }, (error) => {
      console.log(error);
    })
  }

}
