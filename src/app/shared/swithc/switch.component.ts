import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-toggle',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  encapsulation: ViewEncapsulation.None  // Esta línea desactiva la encapsulación de estilos
})
export class ToggleComponent implements OnInit {
  @Output() onChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleChanged(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.onChange.emit(isChecked);
  }

  constructor() { }

  ngOnInit() {
  }

}
