import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

/* user = JSON.parse(sessionStorage.getItem('user')) */


  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  logOut(){
    sessionStorage.removeItem('user')
   this.router.navigate(['login'])
  }

}
