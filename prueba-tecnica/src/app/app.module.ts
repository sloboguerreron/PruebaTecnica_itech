
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

//componentes
import { CrudComponent } from './crud/crud.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DialogCrudComponent } from './dialog-crud/dialog-crud.component';

//Firebase
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    FormularioComponent,
    DialogCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSliderModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
