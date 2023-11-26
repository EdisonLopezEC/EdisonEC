// correo.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {
  private brevoApiKey = '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'; // Reemplaza con tu clave API de Brevo
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
