import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddMediaService } from './services/add-media.service';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.scss']
})
export class AddMediaComponent implements OnInit {
  thumbnailphotos;
  form: FormGroup;
  defaultAlbumName;

  constructor(public addMediaService: AddMediaService, private formBuilder: FormBuilder, public fb: FormBuilder,
    private http: HttpClient, private route: ActivatedRoute, private router: Router) { 
      this.route.params.subscribe(params => {
        this.defaultAlbumName = params['albumName'];
      });
      this.form = this.fb.group({
        albumName: this.defaultAlbumName,
        link: [''],
        files: [null]
      })
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      files: file
    });
    this.form.get('files').updateValueAndValidity()
  }
  ngOnInit(): void {
  }
  submitForm() {
    var formData: any = new FormData();
    formData.append("albumName", this.form.get('albumName').value);
    formData.append("link", this.form.get('link').value);
    formData.append("files", this.form.get('files').value);
    this.addMediaService.createAlbum(formData).subscribe((result)=>{
      this.thumbnailphotos = result.response;
      this.router.navigateByUrl('/edit-profile/album/'+ this.defaultAlbumName);
    });
  }

}
