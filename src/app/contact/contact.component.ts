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


    //Controlar que los campos no esten vacios
    if(this.email === '' || this.mensaje === '' || this.nombre === '' || this.apellido === '' || this.telefono === ''){
      console.log('Campos vacios');
      return;
    }


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
        //Vaciar los campos
        this.email = '';
        this.mensaje = '';
        this.nombre = '';
        this.apellido = '';
        this.telefono = '';

        // Navegar a la posicion 0 de la pagina con la animacion smooth
        window.scrollTo({ top: 0, behavior: 'smooth' });
        

        // console.log('Correo enviado con éxito', respuesta);
      },
      (error) => {
          //Vaciar los campos
          this.email = '';
          this.mensaje = '';
          this.nombre = '';
          this.apellido = '';
          this.telefono = '';
          
      }
    );
  }
}
