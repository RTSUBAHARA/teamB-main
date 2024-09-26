import * as warehouse from "/warehouse.js";
import * as Namazakana from "/teamNamazakana.js";

//入庫指示の個数を取得して、在庫数と照らし合わせる。
//やるべきこと；閾値を決めて出荷可否を決める
//やりたいこと；過去数回の出荷状況から閾値を変動させる



  //納品に対する在庫判断
  //納品に対する在庫判断
  // 出庫指示リスト
  export class deliveryJudge(){
    constructor(deliveryRequests){
        console.log(week)
        let deliveryRequests = [];

        // 納品に対する在庫の確認
        demandsmap.forEach((demandAmount, productCode) => {
          const warehouseAmount = sum_warehouse.get(productCode) || 0;
          let remainingDemand = demandAmount;  // 残りの納品指示数量
     
          //console.log("demandAmount" + demandAmount)
     
          if (warehouseAmount >= demandAmount) {
            // 複数のorderで出庫処理を実行
            //console.log("if判定")
            items.forEach(item => {
              let deliverAmount = Math.min(item.amount, remainingDemand);  // 納品指示数か在庫数のどちらか少ない方を出庫
              if (item.productCode === productCode && remainingDemand > 0) {
                //let deliverAmount = Math.min(item.amount, remainingDemand);  // 納品指示数か在庫数のどちらか少ない方を出庫
     
                deliveryRequests.push(new DeliveryData(item.orderId, deliverAmount));
                remainingDemand -= deliverAmount;  // 残りの納品指示数量を更新
              }
            });
            }
            else if(warehouseAmount < demandAmount) {
              //console.log(deliveryRequests)
              items.forEach(item => {
              //let deliverAmount = Math.min(item.amount, remainingDemand);  // 納品指示数か在庫数のどちらか少ない方を出庫
              switch(productCode){
                    case "1001":
                    try{
                        if(item.productCode === productCode && warehouseAmount > demandAmount*0.8){
                        let deliverAmount = Math.min(item.amount, demandAmount);  //納品指示数か在庫数のどちらか少ない方を出庫
                        deliveryRequests.push(new DeliveryData(item.orderId, deliverAmount));
                        }
                        else{
                        //console.log("不足1001");
                        }
                        }catch(error){
                            console.log("動作不可");
                            return null;
                        }
                        break;
                    case "1002":
                    try{
                        if(item.productCode === productCode && warehouseAmount > demandAmount*0.8){
                        let deliverAmount = Math.min(item.amount, demandAmount);  //納品指示数か在庫数のどちらか少ない方を出庫
                        deliveryRequests.push(new DeliveryData(item.orderId, deliverAmount));
                        }
                        else{
                        //console.log("不足1002");
                        }
                        }catch(error){
                            console.log("動作不可");
                            return null;
                        }
                        break;
                    case "2001":
                    try{
                    if(item.productCode === productCode && warehouseAmount > demandAmount*0.8){
                        let deliverAmount = Math.min(item.amount, demandAmount);  //納品指示数か在庫数のどちらか少ない方を出庫
                        deliveryRequests.push(new DeliveryData(item.orderId, deliverAmount));
                    }
                    else{
                        //console.log("不足2001");
                    }
                    }catch(error){
                        console.log("動作不可");
                        return null;
                    }
                    break;
                    case "2002":
                    try{
                        if(item.productCode === productCode && warehouseAmount > demandAmount*0.8){
                        let deliverAmount = Math.min(item.amount, demandAmount);  //納品指示数か在庫数のどちらか少ない方を出庫
                        deliveryRequests.push(new DeliveryData(item.orderId, deliverAmount));
                        }
                        else{
                        //console.log("不足2002");
                        }
                        }catch(error){
                            console.log("動作不可");
                            return null;
                        }
                        break;
                    case "3001":
                    try{
                        if(item.productCode === productCode && warehouseAmount > demandAmount*0.8){
                        let deliverAmount = Math.min(item.amount, demandAmount);  //納品指示数か在庫数のどちらか少ない方を出庫
                        deliveryRequests.push(new DeliveryData(item.orderId, deliverAmount));
                        //console.log(item.orderId)
                        //console.log(item.productCode)
                        //console.log(deliveryRequests)
                        }
                        else{
                        //console.log("不足3001");
                        }
                        }catch(error){
                            console.log("動作不可");
                            return null;
                        }
                        break;
                    case "3002":
                        try{
                        if(item.productCode === productCode && warehouseAmount > demandAmount*0.7){
                            let deliverAmount = Math.min(item.amount, demandAmount);  //納品指示数か在庫数のどちらか少ない方を出庫
                            deliveryRequests.push(new DeliveryData(item.orderId, deliverAmount));
                        }
                        else{
                            //console.log("不足3002");
                        }
                        }catch(error){
                            console.log("動作不可");
                            return null;
                        }
                        break;
                }
            }
        }); 
    }