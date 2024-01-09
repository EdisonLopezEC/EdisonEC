import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skillcard.component.html',
  styleUrls: ['./skillcard.component.css']
})
export class SkillCard {
  @Input() imageUrl: string | undefined;

  // Puedes agregar lógica aquí si es necesario en el futuro
  // Por ejemplo, puedes agregar propiedades o métodos según tus necesidades.
  
  
}
