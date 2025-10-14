import { Routes } from '@angular/router';
import { Eror } from "./error/eror";
import { TrangChu } from "./trang-chu/trang-chu";
import { Login } from "./login/login";
import { LienHe } from "./lien-he/lien-he";
import { Vechungtoi } from "./vechungtoi/vechungtoi";
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { KhoaHoc } from './khoa-hoc/khoa-hoc';
import { Tailieu } from './tailieu/tailieu';
import { Bookdetail } from './bookdetail/bookdetail';
import { Cart } from './cart/cart';

export const routes: Routes = [
  { path: 'error', component: Eror },
  {path:'trang-chu',component:TrangChu},
  {path:'login', component:Login},
  {path:'lien-he', component:LienHe},
  {path: 've-chung-toi', component:Vechungtoi},
  {path:'navbar',component:Navbar},
  {path:'fotter',component:Footer},
  {path:'khoa-hoc', component:KhoaHoc},
  {path:'tai-lieu', component:Tailieu},
  {path:'book/:id', component:Bookdetail, title: "Book Detail"},
  {path:'cart', component:Cart},
  // Route mặc định hoặc các route khác
  { path: '', redirectTo: '/error', pathMatch: 'full' },
  { path: '**', component: Eror } // bắt tất cả các route không tồn tại
];