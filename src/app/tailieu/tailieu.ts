import { Component, computed, OnInit, signal } from '@angular/core';
import { Bookservice } from '../service/bookservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tailieu',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './tailieu.html',
  styleUrl: './tailieu.css'
})
export class Tailieu implements OnInit  {
  constructor(public bookService:Bookservice){}
search:any='';


  discountPrice(price: any, discount: any) {
return price- (price * (parseFloat(discount) / 100))
}
onSearch() {
    this.bookService.onSearch(this.search);
  }
  ngOnInit(): void{
    // this.countCart.set(this.cartService.carts().length)
  }

// //Phân trang 
//   //số trang hiện tại
//   currentPage=signal(1);//tự động thông báo cho angula khi biến thay đổi giá trị giúp cập nhập dữ liệu
//   //số sách mỗi trang
//   pageSize=signal(4);
//   //tính tổng số trang
//   totalPages=computed(()=>Math.ceil(this.bookService.allBooks().length/  this.pageSize())); //computed đánh dấu đây là biến tự động cập nhập khi các signal liên quan thay đổi
//         //Math.ceil(number) : làm tròn lên
//         //Math.floor(number) : làm tròn xuống
//         //Math.round(number) : làm tròn theo nguyên tắc 0.5 sẽ đẩy lên 1
//         //Math.trunc(number) : loại bỏ phần thập phân

// //danh sách rong trang hiện tại 
// //  pagedBooks = computed(()=>{
// //   const start = (this.currentPage()-1)*this.pageSize();
// //   const end =start +this.pageSize();
// //   return this.bookService.allBooks().slice(start, end)// cắt chuỗi(điểm bắt đầu, điểm kết thúc or để trống)
// //  });

// //
// getPagination(): (number | string)[] {  
//   const pageNumbers: (number | string)[] = [];

//   // Lấy giá trị thật của signals
//   const total = this.totalPages();
//   const current = this.currentPage();

//   if (total <= 5) {
//     for (let i = 1; i <= total; i++) {
//       pageNumbers.push(i);
//     }
//   } else {
//     if (current > 3) pageNumbers.push(1, "...");

//     const start = Math.max(2, current - 1);
//     const end = Math.min(total - 1, current + 1);

//     for (let i = start; i <= end; i++) {
//       pageNumbers.push(i);
//     }

//     if (current < total - 2) pageNumbers.push("...", total);
//   }

//   return pageNumbers;
// }
// setCurrentPage(page: number | string): void {
//   if (typeof page === "number" && page > 0 && page <= this.totalPages() && page !== this.currentPage()) {
//     this.currentPage.set(page);
//   }
// }
// pagedBooks = computed(() => {
//   const start = (this.currentPage() - 1) * this.pageSize();
//   const end = start + this.pageSize();
//   console.log("Trang hiện tại:", this.currentPage(), "Start:", start, "End:", end);
//   return this.bookService.allBooks().slice(start, end);
// });

}
