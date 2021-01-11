import { Component, Input, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { EditStoriesService } from '../../services/edit-stories.service';


@Component({
  selector: 'app-story-popup',
  templateUrl: './story-popup.component.html',
  styleUrls: ['./story-popup.component.scss']
})
export class StoryPopupComponent implements OnInit {
  @Input() data: any = null;
  title: string = 'Create Story';
  storyId: string = '';
  htmlContent = '';
  isPublished: boolean = false;
  storyTitle: string = '';
  getdata: any;
  fileToUpload: File = null;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  constructor(public activeModal: NgbActiveModal, public editStoriesService: EditStoriesService, private toastr: ToastrService) { }

  ngOnInit(): void {
    if(this.data) {
      this.title = 'Edit Story';
      this.getStoryById();
    }
  }

  public getStoryById() {
    this.editStoriesService.getStoryById(this.data.story.id).subscribe(result=> {
      this.htmlContent = result.response.content;
      this.storyTitle = result.response.title;
      this.fileToUpload = result.response.thumbnail;
      this.isPublished = result.response.active;
      this.storyId = result.response.id;
    }, error => {
      this.toastr.error(error, '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
    })
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  onSubmit(){
    let storyData = new FormData();
    storyData.append('content', this.htmlContent);
    storyData.append('title', this.storyTitle);
    storyData.append('id', this.storyId);
    storyData.append('thumbnail', this.fileToUpload);
    storyData.append('active', JSON.stringify(this.isPublished));
    if(this.data){
      this.editStoriesService.updateStory(storyData).subscribe(result=>{
        this.toastr.success(result.message, '', {
          closeButton: true,
          positionClass: 'toast-top-center',
        });
        this.activeModal.close();
      }, error => {
        this.toastr.error(error, '', {
          closeButton: true,
          positionClass: 'toast-top-center',
        });
      })
    }
    else {
      this.editStoriesService.createStory(storyData).subscribe(result=>{
        this.toastr.success(result.message[0], '', {
          closeButton: true,
          positionClass: 'toast-top-center',
        });
        this.activeModal.close();
      }, error => {
        this.toastr.error(error, '', {
          closeButton: true,
          positionClass: 'toast-top-center',
        });
      })
    }
  }
}
