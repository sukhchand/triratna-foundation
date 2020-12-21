import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewsPopupComponent } from './components/news-popup/news-popup.component';
import { EditNewsService } from './services/edit-news.service';

@Component({
  selector: 'edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.scss']
})
export class EditNewsComponent implements OnInit {
  getdata: any;
  htmlContent:any ='';
  page = 1;
  pageSize = 10;
  allNews: any = [];

  constructor(private modalService: NgbModal, private router: Router, public editNewsService: EditNewsService) { }

  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews() {
    this.editNewsService.getNews(this.page, this.pageSize).subscribe(result => {
      this.allNews = result.response;
    })
  }

  newsPopup(news?:any) {
    const newsPopupModal = this.modalService.open(NewsPopupComponent, {
      centered: true,
    });
    if(!!news){
      newsPopupModal.componentInstance.data = {
        news
      };
    }
    newsPopupModal.result.then((data) => {
      this.ngOnInit();
    });
  }

  deleteNews(newsId) {
    this.editNewsService.deleteNewsById(newsId).subscribe(result=>{
      debugger;
      this.ngOnInit();
    });
  }

  editNews(story) {
    this.newsPopup(story)
  }

  public viewNews(news){
    this.router.navigateByUrl('/edit-profile/news/view-news/'+news.id);
  }

  handlePageChange(event) {
    this.page = event;
  }
}
