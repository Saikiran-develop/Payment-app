import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Wallet } from 'src/app/entity/wallet';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registrationForm = new FormGroup({
    id:new FormControl(),
    name: new FormControl(''),
    password: new FormControl(''),
    
  });
  newWallet: Wallet;
  getWallet;
  loadReset(){
    this.registrationForm.setValue({
      id:"",
      name:"",
      password:""
    })
  }
  msg="";
  
  

  constructor(private service:WalletService,private messageService:MessageService){
  }

  addUser(): void{
    this.newWallet
  ={id:this.registrationForm.value.id,
    name:this.registrationForm.value.name,
    balance:0.0,
    password:this.registrationForm.value.password,
  };
  
    console.log("add user called");
    console.log(this.newWallet);

    this.service.addWallet(this.newWallet).subscribe(
      (data)=>{this.processResult(data)},
      (error)=>{console.log(error);
      ;}
  );

  }
  processResult(data){
    if(data!=undefined){
      this.getWallet=JSON.stringify(data);
     
     this.messageService.add({severity:'success', summary:'Service Message', detail:'Regestered successfully'});
    }
    else if(data==false){
      this.messageService.add({severity:'error',summary:'error',detail:'error'});
      
    }
  }

  
}


