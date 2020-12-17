import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from './services/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  thumbnailphotos;
  page = 1;
  pageSize = 10;
  albumName;
  constructor(public albumService: AlbumService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllMedias();
  }
  getAllMedias() {
    this.route.params.subscribe(params => {
      this.albumName = params['id'];
      console.log("kjbjhbj" + this.albumName);
    });
    this.albumService.getImages(this.albumName, this.page, this.pageSize).subscribe((result)=>{
      this.thumbnailphotos = result.response;
    });
  }
  clickToDelete(id) {
    this.albumService.deleteImages(id).subscribe((result)=>{
      this.thumbnailphotos = result.response;
    });
    debugger;
    this.getAllMedias();
  }
}
