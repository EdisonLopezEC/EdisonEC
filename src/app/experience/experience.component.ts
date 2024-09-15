import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  description: string;
  bg: string;
  image: string;
  experience?: string;
}
interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}

interface Experience {

  nombreEmpresa: string;
  tecnologias: string;
  puesto: string;
  fechaInicio: string;
  fechaFin: string;
  descripcion: string;
  logo: string;      
}
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit {


  events: Experience[];

  constructor() {
      this.events = [
        {
          nombreEmpresa: 'Plasticaucho Industrial',
          tecnologias: 'Angular, .Net Core, SQL Server, Fácturación Electrónica SRI, Python, PWA',
          puesto: 'Desarrollador Full Stack',
          fechaInicio: 'Abril 2024',
          fechaFin: 'Actualidad',
          descripcion: 'Logré lanzar a producción un sistema que llevaba tres años en desarrollo. Este sistema es una plataforma de gestión de inventarios y ventas para los distintos clientes de la empresa.',
          logo: 'https://plasticaucho.hiringroom.com/data/accounts/plasticaucho/microsite/8553d69abf9839e27a50b281a36ab77d.jpeg'
        },
        {
          nombreEmpresa: 'Ingedemy',
          tecnologias: 'React, Firebase, Bash, Whatsapp API, OpenIA API, Docker, AWS',
          puesto: 'Desarrollador Full Stack',
          fechaInicio: 'Agosto 2023',
          fechaFin: 'Marzo 2024',
          descripcion: 'Logré reducir los tiempos de atención y gestión al cliente en un 80% mediante la automatización de procesos y la implementación de un chatbot con inteligencia artificial y técnicas de Web Scraping.',
          logo: 'assets/ingedemy.jpg'
        },
        {
          nombreEmpresa: 'Empresa Eléctrica Ambato',
          tecnologias: 'Spring, React, Oracle, Linux',
          puesto: 'Desarrollador Full Stack',
          fechaInicio: 'Enero 2023',
          fechaFin: 'Julio 2023',
          descripcion: 'Logré solucionar cada una de las incidencias asignadas por el equipo de desarrollo y logré implementar una nueva funcionalidad en la aplicación móvil de la empresa.',
          logo: 'assets/eeasa.png'
        },
        {
          nombreEmpresa: 'Sounter',
          tecnologias: 'Next.js, Ionic, Node.js, MongoDB, Firebase, Flutter, WebSockets',
          puesto: 'Desarrollador Full Stack',
          fechaInicio: 'Junio 2021',
          fechaFin: 'Diciembre 2022',
          descripcion: 'Logré solucionar cada una de las incidencias asignadas por el equipo de desarrollo y logré implementar una nueva funcionalidad en la aplicación móvil de la empresa.',
          logo: '/assets/sounter.png'
        },
        {
          nombreEmpresa: 'Freelancer',
          tecnologias: 'Next.js, Ionic, Node.js, MongoDB, Firebase, Flutter, WebSockets',
          puesto: 'Desarrollador Full Stack',
          fechaInicio: 'Enero 2019',
          fechaFin: 'Actualidad',
          descripcion: 'Trabaje como freelancer en distintos proyectos de desarrollo de software, desde aplicaciones móviles hasta aplicaciones web. Algunas de las empresas son: Mecadomi, Crediplus, Ferreteria, Venta de Software a estudiantes, entre otros.',
          logo: '/assets/mercadomi.png'
        }
      ];
  }
    
 
  ngOnInit(): void {

  }



}
