import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StoryPopupComponent } from './components/story-popup/story-popup.component';
import { ViewStoryComponent } from './components/view-story/view-story.component';
import { EditStoriesService } from './services/edit-stories.service';

@Component({
  selector: 'app-edit-stories',
  templateUrl: './edit-stories.component.html',
  styleUrls: ['./edit-stories.component.scss']
})
export class EditStoriesComponent implements OnInit {
  getdata: any;
  htmlContent:any ='';
  page = 1;
  pageSize = 10;
  allStories: any = [];
  totalStories = 0;

  constructor(public editStoriesService: EditStoriesService, private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.getPagination();
    this.getAllStories();
  }

  getPagination() {
    this.editStoriesService.getPagination().subscribe(result => {
      this.totalStories = result.response;
    })
  }

  getAllStories() {
    this.editStoriesService.getStories(this.page, this.pageSize).subscribe(result => {
      this.allStories = result.response;
    })
  }

  deleteStories(storyId) {
    this.editStoriesService.deleteStoryById(storyId).subscribe(result=>{
      debugger;
      this.ngOnInit();
    });
  }
  editStories(story) {
    this.storyPopup(story)
  }

  storyPopup(story?:any) {
    const storyPopupModal = this.modalService.open(StoryPopupComponent, {
      centered: true,
    });
    if(!!story){
      storyPopupModal.componentInstance.data = {
        story
      };
    }
    storyPopupModal.result.then((data) => {
      this.ngOnInit();
    });
  }

  handlePageChange(event) {
    this.page = event;
    this.getAllStories();
  }

  public viewStory(story){
    this.router.navigateByUrl('/edit-profile/stories/view-story/'+story.id);
  }

}
