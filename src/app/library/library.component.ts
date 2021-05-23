import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  url='';
  loadPDFView:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  loadPDF(url:string){
    this.url=url;
    this.loadPDFView=true;
  }
  changePDFStatus(flag:boolean){
    this.loadPDFView=flag;
  }

}
