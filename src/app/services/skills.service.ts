import { Injectable } from '@angular/core';
import { collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { addDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
interface Skill {
  id?: string;
  name: string;
  level: number;
  description: string;
  bg: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private firebase: Firestore) { }

  addSkill(skill: any) {
    const skillsRef = collection(this.firebase, 'skills');
    return addDoc(skillsRef, skill);
  }

  deleteSkill(id: string) {
    const skillRef = doc(this.firebase, `skills/${id}`);
    return deleteDoc(skillRef);
  }

  updateSkill(id: string, skill: any) {
    return updateDoc(doc(this.firebase, 'skills', id), skill);
  }

  getSkills(): Observable<Skill[]> {
    const skillsRef = collection(this.firebase, 'skills');
    return collectionData(skillsRef, { idField: 'id' }) as Observable<Skill[]>;
  }

  editSkill(skill: Skill) {
    const skillRef = doc(this.firebase, `skills/${skill.id}`);
  }
  
}
