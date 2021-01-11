import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StoriesService } from '../../services/stories.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'full-story-details',
  templateUrl: './full-story-details.component.html',
  styleUrls: ['./full-story-details.component.scss']
})
export class FullStoryDetailsComponent implements OnInit {
  storyId: string;
  storyDetails: any;

  constructor(private route: ActivatedRoute, public storiesService: StoriesService, private location: Location, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => this.storyId = params.id );
    this.getStoryById();
  }

  getStoryById() {
    this.storiesService.getStoryById(this.storyId).subscribe(result => {
      this.storyDetails = result.response;
    }, error=>{
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
