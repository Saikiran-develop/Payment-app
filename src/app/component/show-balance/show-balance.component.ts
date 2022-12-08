import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-show-balance',
  templateUrl: './show-balance.component.html',
  styleUrls: ['./show-balance.component.css']
})
export class ShowBalanceComponent implements OnInit {

  public walletId;
  showBalanceForm:FormGroup=new FormGroup({
    id:new FormControl()
  }); 
  getbalance;
  constructor(private service:WalletService,private router:Router,private messageService:MessageService){
  }
ngOnInit(){
// let id= parseInt(this.router.snapshot.)
}
 onSubmit(){
 let balanceId=this.showBalanceForm.value.id
 this.service.checkBalance(balanceId).subscribe(
  (data)=>{
    console.log(data);
    this.processResult(data);
  },
  (error)=>{
    console.log(error);
    
  }
 );
 }
 processResult(data){
  this.getbalance=data;
  if(data!=undefined){
   this.messageService.add({severity:'success', summary:'Show balance success', detail:'Show balance successfully'});
  }
  else if(data==false){
    this.messageService.add({severity:'error',summary:'error',detail:'error'});
    
  }
}

}
