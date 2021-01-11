import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewsComponent implements OnInit {

  allNews:any;
  page = 1;
  pageSize = 10;
  totalNews = 0;

  constructor(public newsService:NewsService,private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getPagination();
    this.getNews();
  }

  getPagination() {
    this.newsService.getPagination().subscribe(result => {
      this.totalNews = result.response;
    },error=>{
      this.toastr.error(error, '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
    });
  }

  public getNews() {
    this.newsService.getNews(this.page, this.pageSize).subscribe(result => {
      this.allNews=result.response;
    }, (error) => {
      this.toastr.error(error, '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
    })
  }

  viewNews(news) {
    this.router.navigateByUrl('/informations/news/news-details/'+news.id);
  }

  handlePageChange(event) {
    this.page = event;
  }
}
