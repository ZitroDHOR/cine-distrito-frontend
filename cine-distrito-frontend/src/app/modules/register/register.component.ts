import { Component, OnInit } from '@angular/core';
import { UserToRegiser } from 'src/app/models/userToRegister';
import { UserService } from 'src/app/services/register/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public userToRegister: UserToRegiser;
  constructor(private registerService: UserService) { 
    this.userToRegister = new UserToRegiser('','',0,new Date(),'','');
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.registerService.nuevoUsuario(this.userToRegister).subscribe();
  }
}
