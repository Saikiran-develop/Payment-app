import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wallet } from '../entity/wallet';
import { Observable } from 'rxjs';
import { Loginwallet } from '../entity/loginwallet';
import { Walletdto } from '../entity/walletdto';

@Injectable({
  providedIn: 'root'
})
export class WalletService  {

  constructor(private httpClient:HttpClient) { }
  public addWallet(newWallet:Wallet):Observable<any>{

    return this.httpClient.post("http://localhost:8080/wallet/register",newWallet,{responseType:"text"});
  }
  public checkLogin(newWallet:Loginwallet):Observable<any>{

    return this.httpClient.post("http://localhost:8080/wallet/login",newWallet);
  }
  public checkBalance(balanceId):Observable<any>{
    return this.httpClient.get("http://localhost:8080/wallet/"+balanceId);
  }
  public addAmounttoWallet(newWallet:Walletdto):Observable<any>{

    return this.httpClient.patch("http://localhost:8080/wallet",newWallet,{responseType:"json"});
  }
  public unregisterAccount(newWallet:Loginwallet):Observable<any>{

    return this.httpClient.post("http://localhost:8080/wallet/unregister",newWallet);
  }
  public fundAmounttoWallet(newWallet:Walletdto):Observable<any>{

    return this.httpClient.post("http://localhost:8080/wallet/fund",newWallet,{responseType:"json"});
  }
}
