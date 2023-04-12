import { Component, OnInit,Inject, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { users } from 'src/app/share/interfaces/users';

@Component({
  selector: 'app-dialog-buy',
  templateUrl: './dialog-buy.component.html',
  styleUrls: ['./dialog-buy.component.scss']
})
export class DialogBuyComponent implements OnInit {
amount: string = ""
  constructor(
    public dialogRef: MatDialogRef<DialogBuyComponent>,
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
