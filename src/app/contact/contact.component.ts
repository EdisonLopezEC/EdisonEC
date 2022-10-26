import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  description: string;
  bg: string;
  image: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  valor: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.valor = 10;
  }
}
