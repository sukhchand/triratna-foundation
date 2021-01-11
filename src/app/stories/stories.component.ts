import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { StoriesService } from './services/stories.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StoriesComponent implements OnInit {

  allStories:any;
  page = 1;
  pageSize = 10;
  totalStories = 0;
  constructor(
    private modalService: NgbModal,
    private router: Router,
    private formBuilder: FormBuilder,
    public storiesService: StoriesService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getPagination();
    this.getStories();
  }

  public getStories() {
    this.storiesService.getStories(this.page, this.pageSize).subscribe(result => {
      this.allStories=result.response;
    }, (error) => {
      this.toastr.error(error, '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
    })
  }

  getPagination() {
    this.storiesService.getPagination().subscribe(result => {
      this.totalStories = result.response;
    }, error=>{
      this.toastr.error(error, '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
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
