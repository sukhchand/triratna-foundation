import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditStoriesService } from '../../services/edit-stories.service';

@Component({
  selector: 'app-view-story',
  templateUrl: './view-story.component.html',
  styleUrls: ['./view-story.component.scss']
})
export class ViewStoryComponent implements OnInit {
  htmlContent = '';
  storyId: string = '';

  constructor(public editStoriesService: EditStoriesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.storyId = params['id'];
    });
    this.editStoriesService.getStoryById(this.storyId).subscribe(result=> {
      this.htmlContent = result.response.content;
    })
  }

}
