import { Component, OnInit } from '@angular/core';
import { gitUserServices } from 'src/app/services/gitUser.services';
import {IuserData} from '../../shared/model/userData';
import {IfollowerData} from '../../shared/model/followerData';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public userData : IuserData;
  public followerData : IfollowerData;
  public searchModel;

  constructor(private gitUserServices : gitUserServices) { }
  
  ngOnInit() {

  }

  Search(){
    this.gitUserServices.Users(this.searchModel)
    .subscribe(data => {
      this.userData = data;
     // console.log(data)
      
    });

    this.gitUserServices.Followers(this.searchModel)
    .subscribe(data =>{
      this.followerData = data;
    //  console.log(data)
    });
   // console.log(this.searchModel)
  }

}
