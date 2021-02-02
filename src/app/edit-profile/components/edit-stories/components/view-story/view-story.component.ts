import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditStoriesService } from '../../services/edit-stories.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-story',
  templateUrl: './view-story.component.html',
  styleUrls: ['./view-story.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewStoryComponent implements OnInit {
  storyDetails:any;
  storyId: string = '';

  constructor(public editStoriesService: EditStoriesService, private route: ActivatedRoute, private location: Location, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.storyId = params['id'];
    });
    this.getStoryById();
  }

  getStoryById() {
    this.editStoriesService.getStoryById(this.storyId).subscribe(result => {
      this.storyDetails = result.response;
    }, error => {
      this.toastr.error(error, '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
    });
  }

  navigateBack() {
    this.location.back();
  }

}
