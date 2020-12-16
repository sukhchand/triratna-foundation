import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { EditGalleryService } from './services/edit-gallery.service';

@Component({
  selector: 'app-edit-gallery',
  templateUrl: './edit-gallery.component.html',
  styleUrls: ['./edit-gallery.component.scss']
})
export class EditGalleryComponent implements OnInit {
  createAlbumForm: FormGroup;
  mediasList = [];
  mediaType = 'Images';
  page = 1;
  pageSize = 10;
  thumbnailphotos;
  createAlbumDiv: boolean=false;
  form: FormGroup;
  constructor(public editGalleryService: EditGalleryService, private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      albumName: [''],
      avatar: [null]
    })
  }

  ngOnInit(): void {
    // this.getAllMedias();
    // this.createAlbumForm = this.formBuilder.group({
    //   albumName: ['', Validators.required],
    // });
  }

  // getAllMedias() {
  //   this.editGalleryService.getPhotos().subscribe((result)=>{
  //     this.thumbnailphotos = result.response;
  //   });
  // }
  // openCreateAlbum(){
  //   this.createAlbumDiv=true;
  // }
  // onSubmit() {
  //   alert("hi");
  //   this.editGalleryService.createAlbum(this.createAlbumForm.value).subscribe(result => {

  //   }, (error) => {
  //     console.log(error);
  //   })
  // }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar').updateValueAndValidity()
  }

  submitForm() {
    var formData: any = new FormData();
    formData.append("albumName", this.form.get('albumName').value);
    //formData.append("avatar", this.form.get('avatar').value);

    // this.http.post('http://localhost:4000/api/create-user', formData).subscribe(
    //   (response) => console.log(response),
    //   (error) => console.log(error)
    // )
    this.editGalleryService.createAlbum(formData).subscribe(result => {
      debugger;
    }, (error) => {
          console.log(error);
    })
  }
}
