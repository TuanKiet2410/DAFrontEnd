import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrangChu } from "./trang-chu/trang-chu";
import { Login } from "./login/login";
import { LienHe } from "./lien-he/lien-he";
import { Vechungtoi } from "./vechungtoi/vechungtoi";
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { Eror } from "./error/eror";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TrangChu, Login, LienHe, Vechungtoi, Navbar, Footer, Eror],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('501240068');
}
