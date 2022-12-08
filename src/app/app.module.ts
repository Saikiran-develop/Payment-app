import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UnregisterComponent } from './component/unregister/unregister.component';
import { AddAmountComponent } from './component/add-amount/add-amount.component';
import { FundTransferComponent } from './component/fund-transfer/fund-transfer.component';
import { ShowBalanceComponent } from './component/show-balance/show-balance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { WalletService } from './service/wallet.service';
import { WalletComponent } from './component/wallet/wallet.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UnregisterComponent,
    AddAmountComponent,
    FundTransferComponent,
    ShowBalanceComponent,
    WalletComponent
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    ConfirmDialogModule,
    MessageModule,
    MessagesModule,
    ToastModule
  ],
  providers: [WalletService,ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
