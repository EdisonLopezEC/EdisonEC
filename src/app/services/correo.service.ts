// correo.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CorreoService {
  private brevoApiKey = environment.apik;
  private brevoApiUrl = 'https://api.brevo.com/v3/smtp/email';

  constructor(private http: HttpClient) {}

  enviarCorreo(correo: string, asunto: string, cuerpo: string, nombre: string, apellido: string, telefono: string) {
    const mensaje = {
      sender: {
        name: nombre + ' ' + apellido,
        email: correo
      },
      to: [
        {
          email: 'edisonlopezec@gmail.com',
          name: 'John Doe'
        }
      ],
      subject: asunto,
      htmlContent: cuerpo
    };

    const headers = new HttpHeaders({
      'accept': 'application/json',
      'api-key': this.brevoApiKey,
      'content-type': 'application/json'
    });

    return this.http.post(this.brevoApiUrl, mensaje, { headers });
  }
}
