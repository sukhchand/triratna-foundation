import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {
  ModalDismissReasons,
  NgbActiveModal,
  NgbModal,
  NgbModalConfig,
} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

import { EditGalleryService } from './services/edit-gallery.service';

@Component({
  selector: 'app-edit-gallery',
  templateUrl: './edit-gallery.component.html',
  styleUrls: ['./edit-gallery.component.scss']
})
export class EditGalleryComponent implements OnInit {
  getAlbum;
  thumbnailphotos;
  form: FormGroup;
  deleteAlbumName;
  constructor(
    public editGalleryService: EditGalleryService,
    private modalService: NgbModal,
    config: NgbModalConfig,
    private router: Router,
    private formBuilder: FormBuilder,
    public fb: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllMedias();
    this.form = this.fb.group({
      albumName: ['']
    })
  }

  getAllMedias() {
    this.editGalleryService.getAlbum().subscribe((result) => {
      this.getAlbum = result.response;
    });
  }

  clickToAlbum(albumName) {
    this.router.navigateByUrl('/edit-profile/gallery/album/' + albumName);
  }
 
  createAlbum(content) {
    this.modalService.open(content);
  }

  submitForm() {
    var formData: any = new FormData();
    formData.append("albumName", this.form.get('albumName').value);
    this.editGalleryService.createAlbum(formData).subscribe((result) => {
      this.thumbnailphotos = result.response;
      this.getAllMedias();
      this.toastr.success('New Album Added', '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
      this.form = this.fb.group({
        albumName: ['']
      })
    },(error) => {
      this.toastr.error(error.error.message, '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
    });
  }
  // Delete Functionality Start
  clickToDeleteAlbum(albumName, deleteAlbum) {
    this.modalService.open(deleteAlbum);
    this.deleteAlbumName=albumName;
  }
  deleteForm() {
    this.editGalleryService.deleteAlbum(this.deleteAlbumName).subscribe((result) => {
      this.getAllMedias();
      this.toastr.success(result.response + ' ' + 'Album Deleted', '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
    },(error) => {
      this.toastr.error(error.error.message, '', {
        closeButton: true,
        positionClass: 'toast-top-center',
      });
    });
  }
  // Delete Functionality End
}
