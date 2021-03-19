import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  onMouseOver(event){
    console.log(event);
    console.log("onMouseOver")
  }
  onMouseOut(event){
    console.log(event);
    console.log("onMouseOut")
  }

  location: Location = {
    latitude: 19.0760,
    longitude: 72.8777,
    zoom: 17,
    isFullScreen: true,
    markers: [
      {
        lat: 27.0352532,
        lng: 89.0147344,
        address:"Samtse Bhutan"
        
      },
      {
        lat: 27.2475715,
        lng: 88.6197175,
        address:"Pakyong, Sikkim, India"
      },
      {
        lat: 41.2994275,
        lng: -96.0097445,
        address:"6313 Ames Avenue, Omaha, NE 68104, United State"
      },      
      {
        lat: 26.7311718,
        lng: 87.9804833,
        address:"Khudunabari, Jhapa, Nepal"
      }
    ]
  };

  constructor() { }
  getLocation(event){
    console.log(event);
  }

  ngOnInit(): void {
  }

}
export interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
  isFullScreen?: boolean;
  mapType?: string;
  markers?: Array<Marker>;
}
export interface Marker {
  lat: number;
  lng: number;
  address:string;
}
