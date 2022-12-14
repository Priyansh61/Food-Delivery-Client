import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartQuantity=0;
  user:any;
  constructor(cartService:CartService,private userService:UserService) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })
    }
  ngOnInit(): void {
    this.user = this.userService.userDetails();
  }

  logout(){
    this.userService.logout();
  }

  isAuth():boolean{
    if (this.userService.isLoggedIn()){
      return true;
    }
    return false;
  }
}
