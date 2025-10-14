import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartService } from '../service/cart';

@Component({
  selector: 'app-cart',
  imports: [RouterModule, FormsModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  cartService = inject(CartService) //tương đương như constructor(private cartService: CartService)

  carts=this.cartService.carts// ✅ Dùng trực tiếp signal từ service active: boolean = false; 
active: boolean = false; 
increaseQuantity(item: any): void { 
this.cartService.updateQuantity(item, item.quantity + 1); 
} 
decreaseQuantity(item: any): void { 
if (item.quantity > 1) { 
this.cartService.updateQuantity(item, item.quantity - 1); 
} 
} 
removeItem(item: any): void { 
this.cartService.removeCart(item); 
} 
toggleBuy(item: any) { 
this.cartService.toggleActive(item); 
} 
toggleBuyAll(active: boolean) { 
this.cartService.toggleActiveAll(active); 
} 
onSelectAllChange(event: Event): void { 
const checked = (event.target as HTMLInputElement).checked; 
this.toggleBuyAll(checked); 
} 
// Tất cả đã được chọn hay chưa 
allSelected = computed( 
() => this.carts().length > 0 && this.carts().every((item) => item.active) ); 
// Tạo computed cho tổng tiền 
totalPrice = computed(() => 
this.carts() 
.filter((item) => item.active) 
.reduce((sum, item) => sum + item.price * item.quantity, 0) 
);
}
