import { Component } from '@angular/core';
import { Residence } from '../Core/Models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":"../assets/R1.jpg", status: "Disponible"},
     {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../assets/R2.jpg", status: "Disponible" },
     {id:3,"name": "El Arij", "address":"Rades","image":"../assets/R3.jpg", status: "Vendu"},
     {id:4,"name": "El Anber","address":"inconnu", "image":"../assets/R4.jpg", status: "En Construction"}
   ];
   showA=false;
 show(R:Residence){
  if (R.address=="inconnu"){alert("Adresse Inconnue!!")}
  else {this.showA=true;}
 }
}
