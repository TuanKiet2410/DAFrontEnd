import { Component, computed, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../service/cart';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit{
countCart= computed(()=>this.cartService.carts().length);
constructor(private cartService:CartService){}
  ngOnInit(): void{
   
  }
}
