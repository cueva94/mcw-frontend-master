import { Component, OnInit,ViewChild } from '@angular/core';
import { CryptoService } from 'src/app/share/services/crypto.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogBuyComponent } from '../dialog-buy/dialog-buy.component';

export interface DialogDataBuy{
 
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
/*    user= JSON.parse(sessionStorage.getItem('user'))  */

loading = false
loadingCheck: boolean

  displayedColumns: string[] = [
  
    'crypto_name',
    'value',
    'stock',
   /*  'amount', */
    'transactions'
    
  ];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private router : Router, private _clservice: CryptoService) {

  }

  ngOnInit(): void {
    this.getCryptoList();

  }

  getCryptoList(){
    this._clservice.getCryptoList().subscribe({
      next: (res) => {
       this.dataSource = new MatTableDataSource(res);
       this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator;
      },
      
      error: console.log,
    })
 
  } 

  filter (event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openDialogBuy(): void{
    this.dialog.open(DialogBuyComponent)
  }

  iconImg (name: String){
    return `../../../assets/crypto/${name}.png`
  }
  logOut(){
    sessionStorage.removeItem('user')
   this.router.navigate(['login'])
  }

  onLoading(){
    if(this.loading = true) 
   setTimeout(()=>{
    this.loading = false
    this.router.navigate(['dashboard'])
    
   },3000)
} 
}





