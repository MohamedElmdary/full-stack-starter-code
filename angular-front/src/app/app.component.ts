import { Component } from '@angular/core';
import { AppService } from './app.service';
import { NgForm } from '@angular/forms';
import { User } from './User.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: User;
  error: any;
  constructor(private readonly userService: AppService) {}

  public onSubmit({ valid, value }: NgForm) {
    console.log('value', value);
    if (valid) {
      this.userService
        .createUser(value)
        .subscribe(data => (this.data = data), error => (this.error = error));
    }
  }
}
