import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { EditGalleryService } from './services/edit-gallery.service';

@Component({
  selector: 'app-edit-gallery',
  templateUrl: './edit-gallery.component.html',
  styleUrls: ['./edit-gallery.component.scss']
})
export class EditGalleryComponent implements OnInit {

  getAlbum;
  createAlbumDiv;
  constructor(public editGalleryService: EditGalleryService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.getAllMedias();
    this.submitImage();
  }

  getAllMedias() {
    this.editGalleryService.getAlbum().subscribe((result)=>{
      this.getAlbum = result.response;
    });
  }
  clickToAlbum() {
    alert('hi');
  }

  submitImage() {
    this.editGalleryService.postAlbum().subscribe((result) => {
      console.log(result);
    })
  }


  openCreateAlbum() {
    console.log('hi');
  }


}
