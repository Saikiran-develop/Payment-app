import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Loginwallet } from 'src/app/entity/loginwallet';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup=new FormGroup({
  id: new FormControl(null),
  password:new FormControl(null)
  });
loginWallet:Loginwallet;
loggedIn=false;
getdata:boolean;
constructor(private service:WalletService,private router :Router,private messageService:MessageService){}

ngOnInit() : void{
}
onSubmit(): void{
  
  
  
  this.loginWallet
  ={id:this.loginForm.value.id,
    password:this.loginForm.value.password,
  };
  console.log(this.loginWallet);
  
this.service.checkLogin(this.loginWallet).subscribe(
  (data)=>{
    console.log(data);
   this.processResult(data);
  },
  (error)=>{

  }
  
);

}

processResult(data){
  if(data==true){
   this.messageService.add({severity:'success', summary:'Service Message', detail:'Logged in successfully'});
  }
  else if(data==false){
    this.messageService.add({severity:'error',summary:'error',detail:'error'});
    
  }
}


}
