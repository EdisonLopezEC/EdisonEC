import { Injectable } from '@angular/core';
import { collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { addDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
interface Proyecto{
  id?: string;
  nombre: string;
  descripcion: string;
  url: string;
  tecnologias: string;
  plataformas: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private firebase: Firestore) { }

  addProject(skill: Proyecto) {
    const skillsRef = collection(this.firebase, 'projects');
    return addDoc(skillsRef, skill);
  }

  deleteProjects(id: string) {
    const skillRef = doc(this.firebase, `projects/${id}`);
    return deleteDoc(skillRef);
  }
  updateProjects(id: string, skill: any) {
    return updateDoc(doc(this.firebase, 'projects', id), skill);
  }

  getProjects(): Observable<Proyecto[]> {
    const skillsRef = collection(this.firebase, 'projects');
    return collectionData(skillsRef, { idField: 'id' }) as Observable<Proyecto[]>;
  }
  editProyecto(skill: Proyecto) {
    const skillRef = doc(this.firebase, `projects/${skill.id}`);
  }
}
