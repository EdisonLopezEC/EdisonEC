import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

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
  constructor(private userService: UserService, private route: Router) { }
  isFocused = false;
  email:string = '';
  password: string = '';

  isMobile(){
    return window.innerWidth < 1065;
  }
  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.login(this.email, this.password)
    .then((user) => {
      this.route.navigate(['/admin']);
    }
    ).
    catch((error) => {
      console.log(error);
    }
    );
  }
}
