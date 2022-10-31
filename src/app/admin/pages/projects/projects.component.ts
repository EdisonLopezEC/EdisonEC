import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {  
  
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
