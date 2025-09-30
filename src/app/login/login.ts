import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  // constructor(private router: Router) {}

  // goToError() {
  //   this.router.navigate(['/error']);
  // } //tạo hàm đều hướng RouterLink

}
