import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from 'src/app/service/common.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public productSource:any;
  displayedColumnsupc:string[]=["login","id","node_id","avatar_url","gravatar_id","url","html_url","followers_url","following_url","gists_url",
"starred_url","subscriptions_url","organizations_url","repos_url","events_url","received_events_url","type","site_admin"]

  constructor(private common:CommonService) { }

  ngOnInit(): void {
    this.common.getlist().subscribe((res)=>{
      this.productSource = new MatTableDataSource<Data>(res);
    })
  }

}
export interface Data
{
  login:string,
   id: number,
   node_id:string,
   avatar_url:string,
   gravatar_id:string,
   url:string,
   html_url:string,
   followers_url:string,
   following_url:string,
   gists_url:string,
   starred_url:string,
   subscriptions_url:string,
   organizations_url:string,
   repos_url:string,
   events_url:string,
   received_events_url:string,
   type:string,
   site_admin:boolean
}
