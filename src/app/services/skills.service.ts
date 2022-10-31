import { Injectable } from '@angular/core';
import { collection, Firestore } from '@angular/fire/firestore';
import { addDoc } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private firebase: Firestore) { }

  addSkill(skill: any) {
    const skillsRef = collection(this.firebase, 'skills');
    return addDoc(skillsRef, skill);
  }
}
