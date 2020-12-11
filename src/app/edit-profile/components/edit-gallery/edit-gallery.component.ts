import { Component, OnInit } from '@angular/core';
import { EditGalleryService } from './services/edit-gallery.service';

@Component({
  selector: 'app-edit-gallery',
  templateUrl: './edit-gallery.component.html',
  styleUrls: ['./edit-gallery.component.scss']
})
export class EditGalleryComponent implements OnInit {
  mediasList = [];
  mediaType = 'Images';
  page = 1;
  pageSize = 10;
  constructor(public editGalleryService: EditGalleryService) {}

  ngOnInit(): void {
    this.getAllMedias();
  }

  getAllMedias() {
    if(this.mediaType=="Images") {
      this.editGalleryService.getImages(this.page, this.pageSize).subscribe((result)=>{
        this.mediasList = result.response;
      });
    }
    if(this.mediaType=='Videos') {
      this.editGalleryService.getVideos(this.page, this.pageSize).subscribe((result)=>{
        this.mediasList = result.response;
      });
    }

  }

  changeRole(event){
    this.getAllMedias();
  }

  handlePageChange(event) {
    this.page = event;
  }

}
