import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  catogeries = [
    { name: "Men's Wallets", key: "mw" },
    { name: "Women's Wallets", key: "ww" },
    { name: "Men's Watches", key: "mwa" },
    { name: "Women's Watches", key: "wwa" },
    { name: "Accessories", key: "ac" }
  ];

  category: String;

  constructor(route: ActivatedRoute) {
    route.queryParamMap.subscribe(params => {
      this.category = params.get("category");
    });
  }

  ngOnInit() {}
}
