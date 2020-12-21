import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateAlbumService } from './services/create-album.service';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.scss']
})
export class CreateAlbumComponent implements OnInit {
  thumbnailphotos;
  form: FormGroup;
  constructor(public createAlbumService: CreateAlbumService, private formBuilder: FormBuilder, public fb: FormBuilder,
    private http: HttpClient, private router: Router) {
      this.form = this.fb.group({
        albumName: ['']
      })
  }
  ngOnInit(): void {
    //this.getAllMedias();
  }
  submitForm() {
    var formData: any = new FormData();
    formData.append("albumName", this.form.get('albumName').value);
    this.createAlbumService.createAlbum(formData).subscribe((result)=>{
      this.thumbnailphotos = result.response;
      this.router.navigateByUrl('/edit-profile/album');
    });
  }

}
