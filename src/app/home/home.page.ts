import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users = [];
  keyword = "";
  constructor(public http: HttpClient , public toast:ToastController) { }
  ngOnInit() {
    this.getData();
  }
  ionViewDidEnter()
  {
    this.getData();
  }
  getData() {
    this.http.get('http://test_api.test/api/user')
      .subscribe(resp => {
        var result = Object.keys(resp).map(function (key) {
          return resp[key];
        });
        this.users = result;
      });
  }
  onDelete(id)
  {
    let new_data = {
      "user_id":id,
      "_method":"delete",
    };
    this.http.post("http://test_api.test/api/user" , JSON.stringify(new_data) , httpOptions).subscribe(resp => {
      console.log(resp);
      this.presentToast("Success delete");
      this.getData();
    });
  }
  onSearch()
  {
    let new_data = {
      "keyword":this.keyword,
    };
    this.http.post("http://test_api.test/api/user/search" , JSON.stringify(new_data) , httpOptions).subscribe(resp => {
      var result = Object.keys(resp).map(function (key) {
        return resp[key];
      });
      this.users = result;
    });
  }
  reset()
  {
    this.getData();
    this.keyword = "";
  }
  async presentToast(message)
  {
    const toast = await this.toast.create({
      message : message,duration:500,color:"danger"
    });
    toast.present();
  }
}