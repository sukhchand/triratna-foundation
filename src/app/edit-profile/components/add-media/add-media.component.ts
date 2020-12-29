import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
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
  fileList;

  constructor(public addMediaService: AddMediaService, private formBuilder: FormBuilder, public fb: FormBuilder,
    private http: HttpClient, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) { 
      this.route.params.subscribe(params => {
        this.defaultAlbumName = params['albumName'];
      });
      this.form = this.fb.group({
        albumName: this.defaultAlbumName,
        link: [''],
        files: [null]
      })
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  uploadFile(event) {
    this.fileList = (event.target as HTMLInputElement).files;
    this.form.patchValue({
      files: this.fileList
    });
    this.form.get('files').updateValueAndValidity()
  }
  ngOnInit(): void {
  }
  submitForm() {
    
    var formData: any = new FormData();
    formData.append("albumName", this.form.get('albumName').value);
    formData.append("link", this.form.get('link').value);
    if (this.fileList!=undefined){
      for (var i = 0; i < this.fileList.length; i++) { 
        formData.append("files", this.fileList[i]);
      }
    }
    
    this.addMediaService.createAlbum(formData).subscribe((result)=>{
      this.thumbnailphotos = result.response;
      this.router.navigateByUrl('/edit-profile/album/'+ this.defaultAlbumName);
    },(error) => {
      this.toastr.error(error.error.message,'',  {
        closeButton:true,
        positionClass: 'toast-top-center',
      });
    });
  }

}
