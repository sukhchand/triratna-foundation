import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AlbumService } from './services/album.service';

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
  constructor(public albumService: AlbumService, private formBuilder: FormBuilder, public fb: FormBuilder,
    private http: HttpClient, private route: ActivatedRoute, private router: Router, private toastr: ToastrService, private modalService: NgbModal,
    config: NgbModalConfig) {
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
    });
  }
  clickToDelete(id) {
    this.albumService.deleteImages(id).subscribe((result) => {
      this.thumbnailphotos = result.response;
      this.getAllMedias();
    });
  }
  addMedia(content) {
    this.modalService.open(content);
  }

  submitForm() {
    var formData: any = new FormData();
    formData.append("albumName", this.form.get('albumName').value);
    formData.append("link", this.form.get('link').value);
    if (this.fileList != undefined) {
      for (var i = 0; i < this.fileList.length; i++) {
        formData.append("files", this.fileList[i]);
      }
    }

    this.albumService.createAlbum(formData).subscribe((result) => {
      this.thumbnailphotos = result.response;
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
    }, (error) => {
      this.toastr.error(error.error.message, '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
    });
  }

  handlePageChange(event) {

  }
}
