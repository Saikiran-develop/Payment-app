import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Walletdto } from 'src/app/entity/walletdto';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-add-amount',
  templateUrl: './add-amount.component.html',
  styleUrls: ['./add-amount.component.css']
})
export class AddAmountComponent {

  addAmountForm:FormGroup=new FormGroup({
    id:new FormControl(null),
    amount:new FormControl(null)
  });
  newwallet:Walletdto;
  newBalance;
  constructor(private service:WalletService,private messageService:MessageService){}

  onSubmit(){
    this.newwallet={idOne:this.addAmountForm.value.id,
                    amount:this.addAmountForm.value.amount};
    console.log(this.newwallet);
    
    this.service.addAmounttoWallet(this.newwallet).subscribe(
      (data)=>{
        console.log(data);
        this.processResult(data);
        
      },
      (error)=>{console.log(error);}
    );
}
processResult(data){
  this.newBalance=data;
  if(data!=undefined){
   this.messageService.add({severity:'success', summary:'Service Message', detail:'Added amount successfully'});
  }
  else {
    this.messageService.add({severity:'error',summary:'error',detail:'error'});
    
  }
}

}
