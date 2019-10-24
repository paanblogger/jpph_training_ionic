import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient , HttpHeaders } from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Component({
  selector: 'app-new-user-page',
  templateUrl: './new-user-page.page.html',
  styleUrls: ['./new-user-page.page.scss'],
})
export class NewUserPagePage implements OnInit {
  name = "";
  email = "";
  biography = "";
  constructor(public toast:ToastController , public router:Router , public http:HttpClient) { }

  ngOnInit() {
  }
  onSubmit()
  {
    console.log('Success submit form');
    this.presentToast("Thanks "+this.name);
    this.postData();
    this.router.navigate(['home']);
  }
  postData()
  {
    let new_data = {
      "name":this.name,
      'email':this.email,
      'biography':this.biography,
    };
    this.http.post("http://test_api.test/api/user" , JSON.stringify(new_data) , httpOptions).subscribe(resp => {
      console.log(resp);
    });
  }
  async presentToast(message)
  {
    const toast = await this.toast.create({
      message : message,duration:2000
    });
    toast.present();
  }
}
