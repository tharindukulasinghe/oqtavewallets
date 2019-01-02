import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { routerNgProbeToken } from "@angular/router/src/router_module";

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

  category: String = "mw";
  items;

  constructor(
    route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {
    route.queryParamMap.subscribe(params => {
      this.category = params.get("category");
    });

    this.http.get("http://localhost:3000/getMensWallets").subscribe(res => {
      this.items = res;
    });
  }

  ngOnInit() {}

  categoryItemClicked(item) {
    console.log(item);
  }

  itemClicked(i) {
    this.router.navigate([`/checkout`, i]);
  }
}
