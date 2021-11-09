import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndData } from 'app/models/endData';
import { ListResponseModel } from 'app/models/ListResponseModel';
import { ProductInfo } from 'app/models/productInfo';
import { ProductInfoDto } from 'app/models/productInfoDto';
import { ResponseModel } from 'app/models/responseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {
 apiUrl="https://localhost:44376/api/";
  constructor(private httpClient:HttpClient) { }
  
  getAllProductInfo() :Observable<ListResponseModel<ProductInfo>>{
   
    let newPath=this.apiUrl+"productinfos/getall"
     return this.httpClient.get<ListResponseModel<ProductInfo>>(newPath);
   }
 

   add(productInfo:ProductInfo):Observable<ResponseModel>
   {  
     let newPath="https://localhost:44376/api/productinfos/add"

return this.httpClient.post<ResponseModel>(newPath,productInfo)

   }

stateUpdate(productInfo:ProductInfo)
{
  let newPath=this.apiUrl+"productinfos/update"
  return this.httpClient.post<ProductInfo>(newPath,productInfo);
}
getProductInfoDto() :Observable<ListResponseModel<ProductInfoDto>>{
   
  let newPath=this.apiUrl+"productinfos/getproductinfodto"
   return this.httpClient.get<ListResponseModel<ProductInfoDto>>(newPath);
 }
 getAllByProductId(productId:number) :Observable<ProductInfoDto>{
   
  let newPath=this.apiUrl+"productinfos/getallbyproductiddto?productId="+productId
   return this.httpClient.get<ProductInfoDto>(newPath);
 }

 NumberOfItemsInAccepted():Observable<number>{
   
  let newPath=this.apiUrl+"productinfos/getnumberıfitemsinaccepted"
   return this.httpClient.get<number>(newPath);
 }
 NumberOfItemsInRepair():Observable<number>{
   
  let newPath=this.apiUrl+"productinfos/getnumberıfitemsinservice"
   return this.httpClient.get<number>(newPath);
 }
 NumberOfItemsInReady():Observable<number>{
   
  let newPath=this.apiUrl+"productinfos/getnumberıfitemsinready"
   return this.httpClient.get<number>(newPath);
 }

 getServiceDto(stateName:string):Observable<ListResponseModel<ProductInfoDto>>
 {
  let newPath=this.apiUrl+"productinfos/getservice?stateName="+stateName
  return this.httpClient.get<ListResponseModel<ProductInfoDto>>(newPath);

 }

 getAllEndDataDto(productId:number):Observable<ListResponseModel<EndData>>
 {
  let newPath=this.apiUrl+"productinfos/getallenddatadto?productId="+productId
  return this.httpClient.get<ListResponseModel<EndData>>(newPath);

 }

 makeThePayment(productId:number):Observable<ResponseModel>
 {  
   let newPath=this.apiUrl+"productinfos/makethepayment?productId="+productId
    return this.httpClient.post<ResponseModel>(newPath,productId);
 }
}
