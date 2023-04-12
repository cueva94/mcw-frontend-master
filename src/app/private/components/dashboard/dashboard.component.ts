import { Component, OnInit,ViewChild } from '@angular/core';
import { CryptoService } from 'src/app/share/services/crypto.service';
import { CryptoUserService } from 'src/app/share/services/cryptoUser.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogBuyComponent } from '../dialog-buy/dialog-buy.component';
import { DialogSellComponent } from '../dialog-sell/dialog-sell.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
amount: string
user= JSON.parse(sessionStorage.getItem('user'))
loading = false
loadingCheck: boolean

  displayedColumns: string[] = [
    'crypto_name',
    'value',
    'stock',
     'amount',
    'transactions' 
  ];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
     private dialog: MatDialog,
     private router : Router, 
     private cryptoService: CryptoService,
     private cryptoUserService : CryptoUserService
      ) {}

  ngOnInit(): void {
    this.getCryptoList();
    this.getCryptoUser()
  }

  getCryptoList(){
    this.cryptoService.allCryptoList().subscribe({
      next: (res) => {
       this.dataSource = new MatTableDataSource(res);
       this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator;
       console.log(res)
      },
    })
  } 

  getCryptoUser(){
    this.cryptoUserService.getCryptoUser(this.user.user_id)
    .subscribe( resUserCrypto => {
      console.log(resUserCrypto)
      resUserCrypto.forEach(db_coin => {
        const data = this.dataSource.data
        data.forEach(coin => {
          console.log(resUserCrypto)
          if(coin.crypto_id == db_coin.crypto_id){
            coin.amount = db_coin.amount
          }
        })
      })
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
  const dialogRef =  this.dialog.open(DialogBuyComponent, {
      data: this.user
    })

    dialogRef.afterClosed().subscribe( result => {
      console.log(result)
      this.amount
    })
  }

  openDialogSell(): void{
    const dialogRef =  this.dialog.open(DialogSellComponent, {
        data: this.user
      })
  
      dialogRef.afterClosed().subscribe( result => {
        console.log(result)
        this.amount
      })
    }

  iconImg (name: String){
    return `../../../assets/crypto/${name}.png`
  }
  logOut(){
    sessionStorage.removeItem('user')
   this.router.navigate(['login'])
  }
}





