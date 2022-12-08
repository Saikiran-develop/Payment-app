import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Loginwallet } from 'src/app/entity/loginwallet';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-unregister',
  templateUrl: './unregister.component.html',
  styleUrls: ['./unregister.component.css']
})
export class UnregisterComponent {
  unregisterForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    password: new FormControl(null)
  });
  confirmUnregister;
  unregisterwallet:Loginwallet;
  
  constructor(private wservice:WalletService,private cservice:ConfirmationService,private messageService:MessageService){}

  confirm() {
    this.unregisterwallet={id:this.unregisterForm.value.id,
                            password:this.unregisterForm.value.password}
    this.cservice.confirm({
        message: 'Are you sure that you want to delete this account?',
        accept: () => {
            //Actual logic to perform a confirmation
           
            this.wservice.unregisterAccount(this.unregisterwallet).subscribe(
               (data)=>{
                
                this.processResult(data);
               },
               (err)=> {
                console.log(err);
                ; 
               }
            )
            
        }
    });
    
    
}
processResult(data){
  if(data!=undefined){
   this.messageService.add({severity:'success', summary:'Service Message', detail:'Unregestered  successfully'});
  }
  else if(data==false){
    this.messageService.add({severity:'error',summary:'error',detail:'error'});
    
  }
}

}
