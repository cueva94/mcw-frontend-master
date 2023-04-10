import { Component, OnInit,Inject, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDataBuy } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-dialog-buy',
  templateUrl: './dialog-buy.component.html',
  styleUrls: ['./dialog-buy.component.scss']
})
export class DialogBuyComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogBuyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataBuy,

  ) {}

  ngOnInit(): void {
  
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
