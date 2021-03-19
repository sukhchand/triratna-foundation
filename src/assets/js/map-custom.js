// var map, infoWindow;
// var Locationdata = [{
//     lat: 39.101662,
//     lon: -77.181220,
//     animation: google.maps.Animation.DROP,
//     title: '<p><b>Corporate Headquarters</b></p><p>#2273 Research Blvd,<br>Suite 400, Rockville, MD 20850, <br> 301-795-1616</p>',
//     html: '<b>Triratna International Foundation, Inc</b><br>#2273 Research Blvd, Suite 400, MD<br>20850 Rockville',
//     zoom: 18,
//     cssclass: 'customMapList',
//     icon: '../assets/images/TP-map.svg'
//   }, {
//     lat: 40.241087,
//     lon: -77.029369,
//     zoom: 18,
//     animation: google.maps.Animation.DROP,
//     cssclass: 'customMapList',
//     icon: '../assets/images/TP-map.svg',
//     title: '<p><b>Regional <br> Office</b></p><p>300 Sterling Parkway, Suite 104, Mechanicsburg, PA 17050 </p>',
//     html: '<b>Triratna International Foundation, Inc</b><br/>300 Sterling Parkway, Suite 104, Mechanicsburg, PA 17050'

//   }, {
//     lat: 46.872973,
//     lon: -96.860244,
//     zoom: 18,
//     animation: google.maps.Animation.DROP,
//     cssclass: 'customMapList',
//     icon: '../assets/images/TP-map.svg',
//     title: '<p><b>Regional <br> Office</b></p><p>#300 45th St S,<br> Suite 318, Fargo, ND, 58103 <br> 701-433-788</p>',
//     html: '<b>Triratna International Foundation, Inc</b><br/>#300 45th St S,<br> Suite 318, Fargo, ND, 58103'
//   },
//   {
//     lat: 12.94758,
//     lon: 77.594929,
//     zoom: 18,
//     animation: google.maps.Animation.DROP,
//     cssclass: 'customMapList',
//     icon: '../assets/images/TP-map.svg',
//     title: '<p><b>International Office</b></p><p>#20 Park Area, Wilson Gardens,<br> Bangalore 560027, India <br> 080 22131120</p>',
//     html: '<b>Triratna International Foundation, Inc</b><br/>#20 Park Area, Wilson Gardens,<br> Bangalore 560027, India'
//   }, {
//     lat: 12.961117,
//     lon: 77.585653,
//     zoom: 18,
//     animation: google.maps.Animation.DROP,
//     cssclass: 'customMapList',
//     icon: '../assets/images/TP-map.svg',
//     labelContent: "ABCD",
//     title: '<p><b>International Office</b></p><p>#31, TBR Towers,New Mission Road, <br> J.C Road, Bangalore - 560027, India <br>080-22485185/3226</p>',
//     html: '<b>Triratna International Foundation, Inc</b><br/>#31, TBR Towers, New Mission Road,<br> J.C Road, Bangalore - 560027, India'
//   }
// ];

// $(document).ready(function () {
//   infoWindow = new google.maps.InfoWindow({});
//   var map = new Maplace({
//     locations: Locationdata,
//     controls_type: 'list',
//     view_all: false,
//     controls_on_map: false
//   }).Load();

//   if (map.Loaded()) {
//     $('ul.controls li').each(function () {
//       var ntitle = $('a', this).attr('title').replace(/(<([^>]+)>)/ig, " ");
//       $('a', this).attr('title', ntitle);
//     });
//   }


// });

// function pinSymbol(color) {
//   return {
//     path: 'M49.898,11C35.48,11,23.795,22.688,23.795,37.105c0,4.137,0.986,8.035,2.699,11.51L49.898,83l23.402-34.385   C75.014,45.14,76,41.242,76,37.105C76,22.688,64.314,11,49.898,11 M50.222,50.535v0.08c-0.11-0.004-0.215-0.035-0.325-0.043   c-0.108,0.008-0.213,0.039-0.322,0.043v-0.08c-6.025-0.484-10.782-5.459-10.782-11.609c0-6.152,4.757-11.127,10.782-11.611v-0.08   c0.109,0.004,0.214,0.035,0.322,0.043c0.11-0.008,0.215-0.039,0.325-0.043v0.08c6.026,0.484,10.783,5.459,10.783,11.611   C61.005,45.076,56.248,50.051,50.222,50.535',
//     fillColor: color,
//     fillOpacity: 1,
//     strokeColor: '#000',
//     strokeWeight: 1,
//     scale: 1
//   };
// }
