import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  ModalDismissReasons,
  NgbActiveModal,
  NgbModal,
  NgbModalConfig,
} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

import { GalleryService } from './services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  getAlbum;
  public showSpinner: boolean = false;
  constructor(
    public galleryService: GalleryService,
    private modalService: NgbModal,
    config: NgbModalConfig,
    private router: Router) { }

  ngOnInit(): void {
    this.showSpinner = true;
    this.getAllMedias();
  }
  getAllMedias() {
    this.galleryService.getAlbum().subscribe((result) => {
      this.showSpinner = false;
      this.getAlbum = result.response;
    });
  }
  clickToAlbum(albumName) {
    this.router.navigateByUrl('/informations/gallery/album/' + albumName);
  }


}
