import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationPopupComponent } from 'src/app/shared/confirmation-popup/confirmation-popup.component';
import { NewsPopupComponent } from './components/news-popup/news-popup.component';
import { EditNewsService } from './services/edit-news.service';

@Component({
  selector: 'edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditNewsComponent implements OnInit {
  getdata: any;
  htmlContent: any = '';
  page = 1;
  pageSize = 10;
  totalNews = 0;
  allNews: any = [];

  constructor(
    private modalService: NgbModal,
    private router: Router,
    public editNewsService: EditNewsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getPagination();
    this.getAllNews();
  }

  getPagination() {
    this.editNewsService.getPagination().subscribe((result) => {
      this.totalNews = result.response;
    }, error => {
      this.toastr.error(error, '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
    });
  }

  getAllNews() {
    this.editNewsService
      .getNews(this.page, this.pageSize)
      .subscribe((result) => {
        if(result.response!==null){
          this.allNews = result.response;
        }
      }, error => {
        this.toastr.error(error, '', {
          closeButton: true,
          positionClass: 'toast-top-center',
        });
      });
  }

  newsPopup(news?: any) {
    const newsPopupModal = this.modalService.open(NewsPopupComponent, {
      centered: true,
      windowClass: 'news-popup-modal',
      size: 'lg'

    });
    if (!!news) {
      newsPopupModal.componentInstance.data = {
        news,
      };
    }
    newsPopupModal.result.then((data) => {
      this.ngOnInit();
    });
  }

  deleteNews($e, newsId) {
    $e.stopPropagation();
    const confirmationModal = this.modalService.open(
      ConfirmationPopupComponent
    );
    confirmationModal.result.then((data) => {
      if (data == 'success') {
        this.editNewsService.deleteNewsById(newsId).subscribe((result) => {
          this.toastr.success(result.message, '', {
            closeButton: true,
            positionClass: 'toast-top-center',
          });
          this.ngOnInit();
        }, error => {
          this.toastr.error(error, '', {
            closeButton: true,
            positionClass: 'toast-top-center',
          });
        });
      }
    });
  }

  editNews($e, story) {
    $e.stopPropagation();
    this.newsPopup(story);
  }

  public viewNews(news) {
    this.router.navigateByUrl('/edit-profile/news/view-news/' + news.id);
  }

  handlePageChange(event) {
    this.page = event;
    this.getAllNews();
  }
}
