import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  newsId: string;
  newsDetails: any;

  constructor(private route: ActivatedRoute, public newsService: NewsService, private location: Location,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => this.newsId = params.id );
    this.getNewsById();
  }

  getNewsById() {
    this.newsService.getNewsById(this.newsId).subscribe(result => {
      this.newsDetails = result.response;
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
