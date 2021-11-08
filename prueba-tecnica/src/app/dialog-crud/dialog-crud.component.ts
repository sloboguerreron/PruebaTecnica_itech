import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface Contacto {
  id: string,
  nombre: string,
  apellido: string,
  email: string,
  numeroCel: string
}

@Component({
  selector: 'app-dialog-crud',
  templateUrl: './dialog-crud.component.html',
  styleUrls: ['./dialog-crud.component.scss']
})
export class DialogCrudComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogCrudComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Contacto)
  {}

  ngOnInit(): void {
    console.log();

  }

  cancelar() {
    this.dialogRef.close();
  }

}
