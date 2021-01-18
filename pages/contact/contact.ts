import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-contact",
  templateUrl: "contact.html",
  styleUrls: ["contact.css"]
})
export class ContactPage {
  sex: string;
  sMessage: string;
  hMessage: string;
  ftHeight: number;
  inHeight: number;
  miller: number;
  robinson: number;
  devine: number;
  hamwi: number;

  constructor(public navCtrl: NavController) {}
  calculateWeight() {
    var x = document.getElementById("sMessage");
    x.style.display = "none";
    var y = document.getElementById("hMessage");
    y.style.display = "none";

    if (this.sex == "male" || this.sex == "female") {
      if (isNaN(this.ftHeight) || isNaN(this.inHeight)) {
        this.hMessage = "Please input height properly.";
        y.style.display = "inline";
      } else {
        if (this.ftHeight < 0 || this.inHeight < 0) {
          this.hMessage = "Negative values are invalid.";
          y.style.display = "inline";
        } else {
          if (this.inHeight >= 12) {
            this.hMessage = "Please convert 12 inches to 1 foot.";
            y.style.display = "inline";
          } else {
            if (this.ftHeight < 5) {
              this.hMessage = "This is only accurate for those atleast 5 ft.";
              y.style.display = "inline";
            } else {
              if (
                this.ftHeight >= 9 ||
                (this.ftHeight >= 8 && this.inHeight > 11.1)
              ) {
                this.hMessage = "Sure? The world record is 8 ft. 11.1 in tall";
                y.style.display = "inline";
              } else {
                if (this.sex == "male") {
                  this.miller = Math.round(
                    56.2 +
                      1.41 * ((this.ftHeight - 5) * 12) +
                      1.41 * this.inHeight
                  );
                  this.robinson = Math.round(
                    52 + 1.9 * ((this.ftHeight - 5) * 12) + 1.9 * this.inHeight
                  );
                  this.devine = Math.round(
                    50 + 2.3 * ((this.ftHeight - 5) * 12) + 2.3 * this.inHeight
                  );
                  this.hamwi = Math.round(
                    48 + 2.7 * ((this.ftHeight - 5) * 12) + 2.7 * this.inHeight
                  );
                } else if (this.sex == "female") {
                  this.miller = Math.round(
                    53.1 +
                      1.36 * ((this.ftHeight - 5) * 12) +
                      1.36 * this.inHeight
                  );
                  this.robinson = Math.round(
                    49 + 1.7 * ((this.ftHeight - 5) * 12) + 1.7 * this.inHeight
                  );
                  this.devine = Math.round(
                    45.5 +
                      2.3 * ((this.ftHeight - 5) * 12) +
                      2.3 * this.inHeight
                  );
                  this.hamwi = Math.round(
                    45.5 +
                      2.2 * ((this.ftHeight - 5) * 12) +
                      2.2 * this.inHeight
                  );
                }
              }
            }
          }
        }
      }
    } else {
      this.sMessage = "Please select sex.";
      x.style.display = "block";
    }
  }
}