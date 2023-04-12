import { Component, OnInit,Inject, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { users } from 'src/app/share/interfaces/users';
@Component({
  selector: 'app-dialog-sell',
  templateUrl: './dialog-sell.component.html',
  styleUrls: ['./dialog-sell.component.scss']
})
export class DialogSellComponent implements OnInit {
  amount:string = ""
  constructor(
    public dialogRef: MatDialogRef<DialogSellComponent>,
    @Inject(MAT_DIALOG_DATA) public data: users,
  ) {}

    ngOnInit(): void {
      console.log(this.data) 
    }
    onNoClick(): void {
      this.dialogRef.close();
    }
    onSubibmit():void{
      const DATA = {amount: this.amount}
      this.dialogRef.close(DATA)
    }
  }


