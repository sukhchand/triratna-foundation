import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { BLOCK_MARKER } from '@angular/localize/src/utils';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PDFDocumentProxy, PdfViewerComponent } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-custom-pdf-viewer',
  templateUrl: './custom-pdf-viewer.component.html',
  styleUrls: ['./custom-pdf-viewer.component.scss']
})
export class CustomPDFViewerComponent implements OnInit,AfterViewInit {
  @Input('url') url:string;
  @ViewChild('openPopup') openPopupElement: ElementRef;
  @Output('isPDFOpen') isPDFOpen = new EventEmitter<boolean>();
  @ViewChild(PdfViewerComponent, {static: false})  pdfComponent: PdfViewerComponent;

  pageNo=1;
  totalPage=0;
  zoom=1;
 

  constructor(private modalService: NgbModal) {}

  ngAfterViewInit(): void {
   this.openPopupElement.nativeElement.click();
  }

  ngOnInit(): void {
    console.log("PDF init"+new Date)
  }

  open(content) {
    this.modalService.open(content, 
      {ariaLabelledBy: 'modal-basic-title',size:'xl', scrollable: true })
      .result.then((result) => {
      console.log(result)
      this.isPDFOpen.emit(false);
    }, (reason) => {     
      this.isPDFOpen.emit(false);
    });
  }
  nextPage(){
    if(this.pageNo<this.totalPage)
      this.pageNo=this.pageNo+1;
  }
  prevPage(){
    if(this.pageNo>1)
    this.pageNo=this.pageNo-1;
  }
  callBackFn(pdf: PDFDocumentProxy) {
    console.log("PDF loaded"+new Date)
    this.totalPage=pdf._pdfInfo.numPages;
  }

  zoomIn(){
    this.zoom=this.zoom+0.1;
  }
  zoomOut(){
    if(this.zoom>0)
      this.zoom=this.zoom-0.1;
  }

}