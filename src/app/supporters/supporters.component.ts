import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { map } from 'rxjs/operators';
import { BASE_URL } from '../constant';
@Component({
  selector: 'app-supporters',
  templateUrl: './supporters.component.html',
  styleUrls: ['./supporters.component.scss']
})
export class SupportersComponent implements OnInit {

  constructor(private http: HttpClient,) { }
 
  public ORG_COUNT: number = 0;
  public DONOR_COUNT: number = 0;
  public WELLWISHER_COUNT: number = 0;
  public SPONSOR_COUNT: number = 0;
  public MONKS_COUNT: number = 0;
  public DEVOTEE_COUNT: number = 0;

  ngOnInit(): void {
    this.getAllSupportersCount();
  //   $('.counter-count').each(function () {
  //     $(this).prop('Counter',0).animate({
  //         Counter: $(this).text()
  //     }, {
  //         duration: 5000,
  //         easing: 'swing',
  //         step: function (now) {
  //             $(this).text(Math.ceil(now));
  //         }
  //     });
  // });

  }

  getAllSupportersCount() {
    const path = `${BASE_URL}/util/userGroupCount`;
    this.http
      .get(path)
      .pipe(map((response: any) => response)).subscribe((data) => {
        if (data.response != null && data.response.length > 0) {
          data.response.forEach(element => {
            if (element.id === 'ORG')
              this.ORG_COUNT = element.count;
            if (element.id === 'DONOR')
              this.DONOR_COUNT = element.count;
            if (element.id === 'WELLWISHER')
              this.WELLWISHER_COUNT = element.count;
            if (element.id === 'SPONSOR')
              this.SPONSOR_COUNT = element.count;
            if (element.id === 'MONKS')
              this.MONKS_COUNT = element.count;
            if (element.id === 'DEVOTEE')
              this.DEVOTEE_COUNT = element.count;
          });
        }
      }, (err) => {

      }
      );
    }

}
