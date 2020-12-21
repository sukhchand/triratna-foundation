import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { EditGalleryService } from './services/edit-gallery.service';

@Component({
  selector: 'app-edit-gallery',
  templateUrl: './edit-gallery.component.html',
  styleUrls: ['./edit-gallery.component.scss']
})
export class EditGalleryComponent implements OnInit {
  getAlbum;

  constructor(public editGalleryService: EditGalleryService, private router: Router) {}

  ngOnInit(): void {
    this.getAllMedias();
  }

  getAllMedias() {
    this.editGalleryService.getAlbum().subscribe((result)=>{
      this.getAlbum = result.response;
    });
  }

  clickToAlbum(albumName) {
    this.router.navigateByUrl('/edit-profile/album/'+ albumName);
  }
  
  createAlbum() {
    this.router.navigateByUrl('/edit-profile/create-album');
  }
  clickToDeleteAlbum(albumName) {
    this.editGalleryService.deleteAlbum(albumName).subscribe((result)=>{
      this.getAllMedias();
    });
  }
}
