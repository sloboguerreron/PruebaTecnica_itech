import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Formulario {
  id: string,
  email: string,
  nombre: string,
  apellido: string,
  numeroCel: string
}

@Injectable()
export class FormularioService {

  contacts: Observable<any>;
  private contactsCollection: AngularFirestoreCollection<any>
  private actividadDoc: AngularFirestoreDocument<Formulario>;

  constructor(private readonly afs: AngularFirestore) {
    this.contactsCollection = afs.collection<any>('contactos')
  }

  async onSaveContact (contactForm: any):Promise<void> {
    return new Promise(async (resolve, rejects) => {
      try {
        const id = this.afs.createId();
        const data = {id, ...contactForm};
        const result = this.contactsCollection.doc(id).set(data);
        resolve(result)
      } catch (error){
        rejects(error.message);
      }
    })
  }

  deleteTarea(id: string): void {
    this.actividadDoc = this.afs.doc<Formulario>(`contactos/${id}`);
    this.actividadDoc.delete();
  }
}
