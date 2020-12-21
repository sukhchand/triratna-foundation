import { Component, Input, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EditNewsService } from '../../services/edit-news.service';

@Component({
  selector: 'app-news-popup',
  templateUrl: './news-popup.component.html',
  styleUrls: ['./news-popup.component.scss']
})
export class NewsPopupComponent implements OnInit {
  @Input() data: any = null;
  newsId: string = '';
  htmlContent = '';
  isPublished: boolean = false;
  newsTitle: string = '';
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

  constructor(public activeModal: NgbActiveModal, public editNewsService: EditNewsService) { }

  ngOnInit(): void {
    if(this.data) {
      this.getNewsById();
    }
  }

  public getNewsById() {
    this.editNewsService.getNewsById(this.data.news.id).subscribe(result=> {
      this.htmlContent = result.response.content;
      this.newsTitle = result.response.heading;
      this.fileToUpload = result.response.thumbnail;
      this.isPublished = result.response.active;
      this.newsId = result.response.id;
    })
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  onSubmit(){
    let newsData = new FormData();
    newsData.append('content', this.htmlContent);
    newsData.append('title', this.newsTitle);
    newsData.append('id', this.newsId);
    newsData.append('thumbnail', this.fileToUpload);
    newsData.append('active', JSON.stringify(this.isPublished));
    if(this.data){
      this.editNewsService.updateNews(newsData).subscribe(result=>{
        console.log(result);
        this.activeModal.close();
      })
    } else {
      this.editNewsService.createNews(newsData).subscribe(result=>{
        console.log(result);
        this.activeModal.close();
      })
    }
  }

}
