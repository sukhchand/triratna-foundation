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

  allStories:any;
  page = 1;
  pageSize = 10;
  constructor(
    private modalService: NgbModal,
    private router: Router,
    private formBuilder: FormBuilder,
    public storiesService: StoriesService,
  ) {}

  ngOnInit(): void {
    this.getStories();
  }

  public getStories() {
    this.storiesService.getStories(this.page, this.pageSize).subscribe(result => {
      this.allStories=result.response;
    }, (error) => {
      console.log(error);
    })
  }

  handlePageChange(event) {
    this.page = event;
  }

  viewStory(story) {
    this.router.navigate(['full-story-details'], {queryParams: {id: story.id}});
    // this.router.navigateByUrl(`/informations/stories/full-story-details/${story.id}`);
  }

}
