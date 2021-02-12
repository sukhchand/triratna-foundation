import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditNewsService } from '../../services/edit-news.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewNewsComponent implements OnInit {
  newsId: string;
  newsDetails: any;

  constructor(private route: ActivatedRoute, private editNewsService: EditNewsService, private location: Location, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => this.newsId = params.id );
    this.getNewsById();
  }

  getNewsById() {
    this.editNewsService.getNewsById(this.newsId).subscribe(result => {
      this.newsDetails = result.response;
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
