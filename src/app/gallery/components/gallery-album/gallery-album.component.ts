import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from '@angular/platform-browser';
import { GalleryAlbumService } from './services/gallery-album.service';

@Component({
  selector: 'app-gallery-album',
  templateUrl: './gallery-album.component.html',
  styleUrls: ['./gallery-album.component.scss']
})
export class GalleryAlbumComponent implements OnInit {
  thumbnailphotos;
  totalAlbumItem;
  page = 1;
  pageSize = 10;
  albumName;
  form: FormGroup;
  defaultAlbumName;
  fileList;
  safeURL;
  youtubeLink;
  imageSource;
  paginationObj;
  constructor(public galleryAlbumService: GalleryAlbumService, private formBuilder: FormBuilder, public fb: FormBuilder,
    private http: HttpClient, private route: ActivatedRoute, private router: Router, private toastr: ToastrService, private modalService: NgbModal,
    config: NgbModalConfig, private _sanitizer: DomSanitizer, private sanitizer: DomSanitizer) {
    this.route.params.subscribe(params => {
      this.defaultAlbumName = params['id'];
    });

    this.form = this.fb.group({
      albumName: this.defaultAlbumName,
      link: [''],
      files: [null]
    })
  }

  ngOnInit(): void {
    this.getPagination();
    this.getAllMedias();
  }
  getPagination() {
    this.route.params.subscribe(params => {
      this.albumName = params['id'];
    });
    this.paginationObj= {
      collectionName:"gallery",
      albumName: this.albumName
    }
    this.galleryAlbumService.getPagination(this.paginationObj).subscribe((result) => {
      this.totalAlbumItem = result.response;
    }, error => {
      this.toastr.error(error, '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
    });
  }
  getAllMedias() {
    this.route.params.subscribe(params => {
      this.albumName = params['id'];
    });
    this.galleryAlbumService.getImages(this.albumName, this.page, this.pageSize).subscribe((result) => {
      this.thumbnailphotos = result.response;
      for (let i = 0; i < this.thumbnailphotos.length; i++) {
        var str = new String(this.thumbnailphotos[i].link);
        var n = str.includes("youtube")
        if (n && this.thumbnailphotos[i].link != null) {
          this.youtubeLink = true;
        } else {
          this.youtubeLink = false;
        }
        if (this.youtubeLink) {
          this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.thumbnailphotos[i].link);
          this.thumbnailphotos[i].imp = [];
          this.thumbnailphotos[i].imp.push(this.safeURL);
        }
      }
      for (let i = 0; i < this.thumbnailphotos.length; i++) {
        if (this.thumbnailphotos[i].file != null) {
          this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${this.thumbnailphotos[i].file.data}`);
          this.thumbnailphotos[i].fileImp = [];
          this.thumbnailphotos[i].fileImp.push(this.imageSource);
        }
      }
    });
  }

  handlePageChange(event) {
    this.page = event;
    this.getAllMedias();
  }
}
