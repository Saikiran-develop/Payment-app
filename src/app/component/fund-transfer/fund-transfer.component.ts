import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Walletdto } from 'src/app/entity/walletdto';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent {
  fundForm:FormGroup=new FormGroup({
    idOne:new FormControl(null),
    idTwo:new FormControl(null),
    amount:new FormControl(null)
  });
  newwallet:Walletdto;
  newBalance;
  constructor(private service:WalletService,private messageService:MessageService){}

  onSubmit(){
    this.newwallet={idOne:this.fundForm.value.idOne,
                    idTwo:this.fundForm.value.idTwo,
                    amount:this.fundForm.value.amount};
    console.log(this.newwallet);
    
    this.service.fundAmounttoWallet(this.newwallet).subscribe(
      (data)=>{
        console.log(data);
        this.processResult(data);
        this.newBalance=data;
      },
      (error)=>{console.log(error);}
    );
}
processResult(data){
  if(data!=undefined){
    this.newBalance=data;
   this.messageService.add({severity:'success', summary:'Service Message', detail:'Fund transfer successfully'});
  }
  else if(data==false){
    this.messageService.add({severity:'error',summary:'error',detail:'error'});
    
  }
}

}
