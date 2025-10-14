import { Component, computed, signal } from '@angular/core';
import { Bookservice } from '../service/bookservice';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CartService } from '../service/cart';

@Component({
  selector: 'app-bookdetail',
  imports: [RouterModule],
  templateUrl: './bookdetail.html',
  styleUrl: './bookdetail.css'
})
export class Bookdetail {
bookId=signal<string>('');
  bookDetail = computed(()=>(this.bookService.getBookId(this.bookId())))
  quantity =signal(1)
  constructor(private bookService: Bookservice, private router: ActivatedRoute, private carService:CartService){}
  ngOnInit(): void{
    this.router.paramMap.subscribe((params)=>{
      const id = params.get('id');
      if(id) this.bookId.set(id);
    });
    // //cuộn lên đầu trang khi  vào trang chi tiết 
    if(typeof window!=='undefined'){
      window.scrollTo(0,0)
    }
  }

discountPrice(price: any, discount: any) {
return price- (price * (parseFloat(discount) / 100))
}
decreaseQuantity(){
  this.quantity.update((q)=>(q>1?(q=q-1):q))
}
increaseQuantity(){
  this.quantity.update((q)=>q+1)
}
addToCart(){
  if(this.bookDetail()){
    this.carService.addToCart(this.bookDetail(), this.quantity())
  }
}
}
