import { Injectable, signal } from '@angular/core';
import { Bookinterface } from '../interface/bookinterface';

@Injectable({
  providedIn: 'root'
})
export class Bookservice {
  books:Bookinterface[]=[
    {
    id: "ms_book001",
    title: "Atomic Habits",
    image: "/images_book/msbook1.jpg",
    category: "Self-help",
    author: "James Clear",
    description: "A guide to building good habits and breaking bad ones.",
    pages: 320,
    price: 18.99,
    discount: 10,
    stock: 25,
    publishDate: "2018-10-16"
  },
  {
    id: "ms_book002",
    title: "The Alchemist",
    image: "/images_book/msbook2.jpg",
    category: "Fiction",
    author: "Paulo Coelho",
    description: "A philosophical story about following your dreams.",
    pages: 208,
    price: 14.99,
    discount: 5,
    stock: 40,
    publishDate: "1993-05-01"
  },
  {
    id: "ms_book003",
    title: "Sapiens: A Brief History of Humankind",
    image: "/images_book/msbook3.jpg",
    category: "History",
    author: "Yuval Noah Harari",
    description: "Explores the history and impact of Homo sapiens.",
    pages: 464,
    price: 22.5,
    discount: 15,
    stock: 30,
    publishDate: "2015-02-10"
  },
  {
    id: "ms_book004",
    title: "Educated",
    image: "/images_book/msbook5.jpg",
    category: "Memoir",
    author: "Tara Westover",
    description: "A memoir about growing up in a survivalist family.",
    pages: 352,
    price: 17.99,
    discount: 20,
    stock: 18,
    publishDate: "2018-02-20"
  },
  {
    id: "ms_book005",
    title: "The Subtle Art of Not Giving a F*ck",
    image: "/images_book/msbook4.jpg",
    category: "Self-help",
    author: "Mark Manson",
    description: "A counterintuitive approach to living a good life.",
    pages: 224,
    price: 16.99,
    discount: 10,
    stock: 50,
    publishDate: "2016-09-13"
  },
  {
    id: "ms_book006",
    title: "1984",
    image: "/images_book/msbook6.jpg",
    category: "Dystopian",
    author: "George Orwell",
    description: "A chilling depiction of a totalitarian regime.",
    pages: 328,
    price: 12.5,
    discount: 5,
    stock: 35,
    publishDate: "1949-06-08"
  },
  {
    id: "ms_book007",
    title: "Becoming",
    image: "/images_book/msbook7.jpg",
    category: "Biography",
    author: "Michelle Obama",
    description: "The memoir of the former First Lady of the United States.",
    pages: 448,
    price: 19.99,
    discount: 10,
    stock: 22,
    publishDate: "2018-11-13"
  },
  {
    id: "ms_book008",
    title: "To Kill a Mockingbird",
    image: "/images_book/msbook8.jpg",
    category: "Classic",
    author: "Harper Lee",
    description: "A novel about racial injustice in the Deep South.",
    pages: 336,
    price: 13.99,
    discount: 5,
    stock: 28,
    publishDate: "1960-07-11"
  },
  {
    id: "ms_book009",
    title: "The Power of Now",
    image: "/images_book/msbook9.jpg",
    category: "Spirituality",
    author: "Eckhart Tolle",
    description: "A guide to spiritual enlightenment and living in the present.",
    pages: 236,
    price: 15.5,
    discount: 12,
    stock: 20,
    publishDate: "2004-08-19"
  }

  ]
  allBooks= signal<Bookinterface[]>(this.books);
  onSearch(query: any) {
    let lower=query.toLowerCase();
    if(!lower ){
      return this.allBooks.set(this.books)
      console.log('hux')
    }else{
      this.allBooks.set (
      this.books.filter((item) =>
      item.title.toLowerCase().includes(lower.toLowerCase())  ||//tìm kiếm tên bài "includes: kiểm tra item.title có = lower hay không (có:true   không:false)"
      item.author.toLowerCase().includes(lower.toLowerCase()) || //tiềm kiếm tác giả
      item.category.toLowerCase().includes(lower.toLowerCase())
    )
    ) 
    console.log("ra")
    }
  }
    getBookId(id:string){
    return this.books.find((b)=>b.id==id)
  }
}
