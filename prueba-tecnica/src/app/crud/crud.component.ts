import { DialogCrudComponent } from './../dialog-crud/dialog-crud.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormularioService } from '../services/formulario.services';
import { MatDialog } from '@angular/material/dialog';

export interface Contacto {
  id: string,
  nombre: string,
  apellido: string,
  email: string,
  numeroCel: string
}

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  providers: [FormularioService]
})
export class CrudComponent implements OnInit {

  contactosCollection: AngularFirestoreCollection<Contacto>;
  crudForm: FormGroup;


  contactos: Observable<Contacto[]>;

  constructor(private fb: FormBuilder, private formSvc: FormularioService, private afs: AngularFirestore, public dialog: MatDialog) {
    this.contactosCollection = afs.collection<Contacto>('contactos');
    this.contactos = this.contactosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Contacto;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  ngOnInit(): void {

  }

  onDeleteTarea(id: string): void {
    const confirmacion = confirm('Esta seguro de eliminar la tarea');
    if (confirmacion) {
      this.formSvc.deleteTarea(id);
    }
  }

  abrirDialogo(data: Contacto) {
    this.dialog.open(DialogCrudComponent, data);
  }
}
