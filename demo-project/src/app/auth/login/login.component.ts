import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  DesignImagePath = "https://testapi.dreamcreateperform.com/Files/Orders/2263/2825/PolyCotton-DSPCM066-2825-1.png";
  PatternName = "Cut And Sew PC Leavers Jerseys";
  ngOnInit() {
  }
  facebookSharing() {

    // put image url
    const u = this.DesignImagePath;
    // put title text
    const t = this.PatternName;
     window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t)  + '&access_token=EAAlgKogpUqYBAF3GoxazMf8cLpbrYY1ZAJ0oLZCBO5tI78oD7xQZCgOZBTSdZCoNxok82Dn8xPsldjeeFGpxxJXPFZALNaQbZBs6107wRgq31f3JZCpOc5LiwOsra4ZCV4si548h7RbwisjF9Uq5YUgBGgdOknfm3j4FPT7z0KZBX9yXEcqcvtzgcU4YUyokmNwkgZD' ,'sharer', 'toolbar=0,status=0,width=626,height=436'); return false;
  // }
  //   "https://graph.facebook.com/v8.0/instagram_oembed?url=https://www.instagram.com/p/fA9uwTtkSN/&access_token=IGQVJ..."
  }
  book() {
    this.router.navigateByUrl('home/book');
  }
  book2() {
    this.router.navigateByUrl('home/book2');
  }
}
// 442322623