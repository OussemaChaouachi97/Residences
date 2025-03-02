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
   searchAddress= '';
   filteredResidences: Residence[] = [];
   filterResidences() {
    const search = this.searchAddress.trim().toLowerCase();
    this.filteredResidences = this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(search) || residence.name.toLowerCase().includes(search)
    );
  }

   show(R: Residence) {
    R.showAddress = !R.showAddress; // Chaque résidence aura sa propre propriété
    if (R.address === "inconnu") {
      alert("L'adresse de cette résidence est inconnue");
    }
    
  }
  favorites: Residence[] = [];

likeResidence(R: Residence) {
  this.favorites.push(R);
  alert(`${R.name} ajouté aux favoris!`);
}

  
  
}
