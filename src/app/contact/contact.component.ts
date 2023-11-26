import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { CorreoService } from '../services/correo.service';

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
  styleUrls: ['./contact.component.css']

})
export class ContactComponent implements OnInit {
  constructor(private userService: UserService, private route: Router, private correoService: CorreoService) { }
  isFocused = false;
  email:string = '';
  password: string = '';
  mensaje: string = '';
  nombre: string = '';
  apellido: string = '';
  telefono: string = '';


  isMobile(){
    return window.innerWidth < 1065;
  }
  ngOnInit(): void {
  }

  enviar(){
    const mensajeHTML = `<html><head><style>
    /* Agrega tus estilos aquí */
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f2f2f2;
    }
    p {
      color: #333;
      font-size: 16px;
      line-height: 1.5;
    }
    strong {
      font-weight: bold;
    }
    </style></head><body>
    <p><strong>Mensaje:</strong> ${this.mensaje}</p>
    <p><strong>Teléfono:</strong> ${this.telefono}</p>
    </body></html>`;

    this.correoService
    .enviarCorreo(this.email, 'Correo Portafolio', mensajeHTML, this.nombre, this.apellido, this.telefono)
    .subscribe(
      (respuesta) => {
        console.log('Correo enviado con éxito', respuesta);
      },
      (error) => {
        console.error('Error al enviar el correo', error);
      }
    );
  }
}
