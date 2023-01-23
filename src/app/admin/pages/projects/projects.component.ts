import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
import { UserService } from '../../../services/user.service';
import { SkillsService } from '../../../services/skills.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {


  skills: any= [];
  constructor(private userService: UserService, private router: Router, private projectsService: SkillsService) {  
    this.skills = this.projectsService.getSkills()
    // console.log(this.skills);


  }

  display: boolean = false;

  showContent(){
    this.display = true;
  }

  logout(){
    this.userService.logout().then
    (() => {
      this.router.navigate(['/auth/login']);
    }
    ).catch((error) => {
      console.log(error);
    }
    );
  }  


  ngOnInit(): void {
    console.log(this.router.url.toString());
  }

}
