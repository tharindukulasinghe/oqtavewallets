import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"]
})
export class CheckoutComponent implements OnInit {
  id;

  images = [
    "https://picsum.photos/1000/300/?random=1",
    "https://picsum.photos/1000/300/?random=2",
    "https://picsum.photos/1000/300/?random=3"
  ];
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      this.id = this.route.snapshot.paramMap.get("id");
      console.log(this.id);
      this.http
        .get(`http://localhost:3000/getItemById?id=${this.id}`)
        .subscribe(res => {
          this.images[0] = JSON.parse(JSON.stringify(res))[0].photo_url;
          console.log(res);
        });
    });
  }

  ngOnInit() {}
}
