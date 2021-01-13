import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AlbumService } from './services/album.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  thumbnailphotos;
  totalNews;
  page = 1;
  pageSize = 10;
  albumName;
  form: FormGroup;
  defaultAlbumName;
  fileList;
  deleteMediaID;
  safeURL;
  youtubeLink;
  imageSource;

  constructor(public albumService: AlbumService, private formBuilder: FormBuilder, public fb: FormBuilder,
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

  uploadFile(event) {
    this.fileList = (event.target as HTMLInputElement).files;
    this.form.patchValue({
      files: this.fileList
    });
    this.form.get('files').updateValueAndValidity()
  }
  ngOnInit(): void {
    this.getAllMedias();
  }
  getAllMedias() {
    this.route.params.subscribe(params => {
      this.albumName = params['id'];
    });
    this.albumService.getImages(this.albumName, this.page, this.pageSize).subscribe((result) => {
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

  addMedia(content) {
    this.modalService.open(content);
  }

  submitForm() {
    var formData: any = new FormData();
    formData.append("albumName", this.form.get('albumName').value);
    formData.append("link", this.form.get('link').value.replace('watch?v=', "embed/").split('&')[0].trim());
    if (this.fileList != undefined) {
      for (var i = 0; i < this.fileList.length; i++) {
        formData.append("files", this.fileList[i]);
      }
    }

    this.albumService.createAlbum(formData).subscribe((result) => {
      // this.thumbnailphotos = result.response;
      this.getAllMedias();
      this.toastr.success('New Media/Link Added', '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
      this.form = this.fb.group({
        albumName: this.defaultAlbumName,
        link: [''],
        files: [null]
      })
      this.fileList = [];
    }, (error) => {
      this.toastr.error(error.error.message, '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
    });
  }
  // Delete Functionality Start
  clickToDelete(id, deleteMedia) {
    this.modalService.open(deleteMedia);
    this.deleteMediaID = id;
  }

  deleteForm() {
    this.albumService.deleteImages(this.deleteMediaID).subscribe((result) => {
      this.getAllMedias();
      this.toastr.success('Media Deleted', '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
    }, (error) => {
      this.toastr.error(error.error.message, '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
    });
  }
  handlePageChange(event) {

  }
  // Delete Functionality End
}
