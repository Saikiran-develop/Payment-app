import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAmountComponent } from './component/add-amount/add-amount.component';
import { FundTransferComponent } from './component/fund-transfer/fund-transfer.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ShowBalanceComponent } from './component/show-balance/show-balance.component';
import { UnregisterComponent } from './component/unregister/unregister.component';
import { WalletComponent } from './component/wallet/wallet.component';


const routes: Routes = [
  {path:"register", component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"wallet",component:WalletComponent},
  {path:"balance",component:ShowBalanceComponent},
  {path:"addamount",component:AddAmountComponent},
  {path:"fund",component:FundTransferComponent},
  {path:"unregister",component:UnregisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
