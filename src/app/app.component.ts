import { Component, OnInit } from "@angular/core";
import {
  GeoApiGouvAddressResponse,
  GeoApiGouvAddressService
} from "@placeme/ngx-geo-api-gouv-address";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private geoApiGouvAddressService: GeoApiGouvAddressService) {}

  ngOnInit(): void {
    // Search API
    this.geoApiGouvAddressService
      .query({ q: "27 rue des Blanchers, 31000 Toulouse" })
      .subscribe((geoApiGouvAddressResponse: GeoApiGouvAddressResponse) => {
        console.log(geoApiGouvAddressResponse);
      });

    // Reverse API
    this.geoApiGouvAddressService
      .reverse({ lat: 43.602508, lon: 1.437591 })
      .subscribe((geoApiGouvAddressResponse: GeoApiGouvAddressResponse) => {
        console.log(geoApiGouvAddressResponse);
      });
  }
}
