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
        address:"Arjundhara-3, Jhapa, Nepal"
      },      
      {
        lat: 40.2820984,
        lng: -80.0922118,
        address:"375 Valley Brook Road, MCMURRAY, PA 15317"
      },      
      {
        lat: 26.7311718,
        lng: 87.9804833,
        address:"2714 Parkview Place, Lewisville, Texas, 75067"
      },      
      {
        lat: 33.025054931640625,
        lng: -97.08573150634766,
        address:"Chauntra, District Mandi, India Himachal Pradesh"
      },      
      {
        lat: -40.3658,
        lng: 175.5885,
        address:"142A Rugby st, Awapuni, post code 4412, Palmerston North, New Zealand"
      },      
      {
        lat: 33.61803,
        lng: 130.42655,
        address:"Fukuoka city Higashi-ku Hakozaki Memorial Hakozaki 503, Japan"
      },      
      {
        lat: 27.75,
        lng: 86.75,
        address:"Sagardanda, 05 Likhupike, Solukhumbu, Nepal"
      },      
      {
        lat: 23.10787,
        lng: 91.97007,
        address:"Wakchari, Manikchhari, Khagrachhari, Bangladesh"
      },      
      {
        lat: 37.9949705,
        lng: -105.7009757,
        address:"Crestone Colorado 81131, USA"
      },
      {
        lat: 50.44876,
        lng: -104.61731,
        address:"Regina, SK, Canada"
      }
      ,
      {
        lat: 51.5256078,
        lng: 4.4847057,
        address:"Amarildijk 139, 4706 AD Roosendaal, Netherlands"
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
