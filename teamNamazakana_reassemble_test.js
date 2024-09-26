// @ts-nocheck
/// <reference path="./static/lib/@types/global.d.ts" />
import {wareHouse, palletData} from "./warehouse.js";
import demandspredict from "./static/data/demandspredict.json" with { type: "json" };


const horizon = ['A','B','C','D','E','F','G','H','I','J','K','L',"M","N","O","P","Q","R","S"];
//ここから
//製品コードとパレット
const productmap = { 
  "1001" : [1, 2],
  "1002" : [2, 2],  
  "2001" : [1, 2],
  "2002" : [1, 2],
  "3001" : [2, 3],
  "3002" : [3, 4]};
//ここまで

class AppController extends AbstractAppController {
  /**
   * 各年に1度呼ばれる初期化処理。
   *
   * @param {number} year 年数。1始まり。
   */
  init(year) {
    // 配置位置情報を管理するMapを初期化
  this.locationMap = new Map(); // orderIdをキーにして配置位置を管理}
  }

  /**
   * 各週に1度呼ばれるアプリの処理。
   *
   * @param {number} year 年数。1始まり。
   * @param {number} week 週数。1始まり。
   * @param {DemandEntity[]} demands 今週の納品依頼情報。
   * @param {Map<string, DemandEntity[]>} prevWeekDeliveries 先週の各社の納品情報。
   */
  execute(year, week, demands, prevWeekDeliveries) {
    // 適当にorderシュミレーション
    if (week == 1 || week == 2 || week % 5 == 0){

    };

      //需要データとシステムの結び付け
      /*
      const demandspredictyear = Object.values(demandspredict)

      const demandspredictweek = []
      for(let i = 0 ; i<10; i++){
        demandspredictweek.push(Object.values(demandspredictyear[i].weeks))
      }
      console.log(demandspredictweek)
      console.log(demandspredictweek[year-1][week-1].demands)
      */


      // orderResults -> [
      //   { productCode: '1001', amount: 10, loation: 'A1', orderId: '000020', isSuccess: true },
      //   { productCode: '3002', amount: 3, loation: 'B1', orderId: '', isSuccess: false },
      // ]


/*
      // 発注結果を確認し、成功したorderの配置位置を保存
      orderResults.forEach(result => {
      if (result.isSuccess) {
        // @ts-ignore
        this.locationMap.set(result.orderId, result.location);
      }
      });
      //console.log(this.locationMap)
    }
    // 在庫情報を取得
    const items = this.getInventryItems(); */




    const items = this.getInventryItems(); // getInventry使えます


    // 在庫管理 sum_warehouseにマップ型で在庫数を格納
    var sum_warehouse = new Map([
      ["1001", 0],
      ["1002", 0],
      ["2001", 0],
      ["2002", 0],
      ["3001", 0],
      ["3002", 0]
    ]);


    for (let i = 0; i < items.length; i++) {
      const order = items[i];
      const productCode = order.productCode;
      var amount = order.amount;
      // @ts-ignore
      var currencyAmount = sum_warehouse.get(productCode) + amount;


      sum_warehouse.set(productCode,currencyAmount);
    }

      // order例
      if (
        sum_warehouse["1001"] < 30 &&
        sum_warehouse["1002"] < 30 &&
        sum_warehouse["2001"] < 30 &&
        sum_warehouse["2002"] < 40 &&
        sum_warehouse["3001"] < 0 &&
        sum_warehouse["3002"] < 3
      ) {
        //console.log("a")
      }

  //納品指示読み取り
  //jsonをweekごとにオブジェクト作成
    // 納品指示の取得
    let demandsarray = Object.values(demands)
    //console.log(week)
    var demandsmap = new Map([
      ["1001",0],
      ["1002",0],
      ["2001",0],
      ["2002",0],
      ["3001",0],
      ["3002",0]
    ]);


    for (let i = 0; i < 6 ; i++){
      let productcode = demandsarray[i].productCode
      let currentdemand = demandsarray[i].amount
      demandsmap.set(productcode,currentdemand)
    }
   //console.log(demandsmap)
   
  //console.log(product)


  //在庫確認




  //期限判定
    //納品に対する在庫判断
    //納品に対する在庫判断
  // 出庫指示リスト
  if(week >= 1){
    console.log("week" + week)
    console.table(warehouse)
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
            console.log("dousa")
            remainingDemand -= deliverAmount;  // 残りの納品指示数量を更新
          }
        });
      }
      else if(warehouseAmount < demandAmount) {
        //console.log("倉庫残数" + warehouseAmount)
        //console.log(deliveryRequests)
        items.forEach(item => {
        //let deliverAmount = Math.min(item.amount, remainingDemand);  // 納品指示数か在庫数のどちらか少ない方を出庫
        //console.log(item.orderId)
        //console.log(item.productCode)
        //console.log(deliveryRequests)
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
                console.log("呼び出し")
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
        });
        };
    });
    //console.log(week)
    //console.log(deliveryRequests)
  
 
   // 出庫処理を実行
   if (deliveryRequests.length > 0) {
    //console.log(week)
   // console.log(deliveryRequests)
    //console.log("前")
    //console.log(items)
    const deliveryResults = this.delivery(deliveryRequests);
    //console.log(deliveryResults)
    //console.log("後")
    //this.items = this.getInventryItems();
    //console.log(items)
    const successDeliveries = deliveryResults.filter(result => result.isSuccess);
    let successarray = Object.values(successDeliveries)
    //console.log(typeof(successarray[0].productCode))

    // @ts-ignore
    successarray.forEach((element) => warehouse.remove_position(toVectorPosition(element.location),productmap[element.productCode]));
    warehouse.check_status()
   };

  }  

        //倉庫ステータス取得(藤原)
        //ここから
        const pIDtoPalletType = { "1001" : [1, 2],
          "1002" : [2, 2],  
          "2001" : [1, 2],
          "2002" : [1, 2],
          "3001" : [2, 3],
          "3002" : [3, 4]};

          let canSets = new Map([
          ["1001",0],
          ["1002",0],
          ["2001",0],
          ["2002",0],
          ["3001",0],
          ["3002",0]
          ]);

          let maxSets = {
            "1001":15,
            "1002":30,
            "2001":10,
            "2002":20,
            "3001":5,
            "3002":3
            }

            var customdemandsmap = new Map([
              ["1001",0],
              ["1002",0],
              ["2001",0],
              ["2002",0],
              ["3001",0],
              ["3002",10]
            ]);

          let canSetPositions = [];

          tmp_warehouse.set_status(warehouse.WarehouseStatus);
          
          demandsmap.forEach((amount, pID) => {
            //それぞれの納品指令に対して空いているポジションの検索を行う
            //積載容量で割って回数分検索
            for(let i = 1; amount - (i*maxSets[pID]) >= 0; i++){
              let get_position = tmp_warehouse.find_position(pIDtoPalletType[pID]);
              if(tmp_warehouse.find_position(pIDtoPalletType[pID])[0] != null && tmp_warehouse.find_position(pIDtoPalletType[pID])[1] != null ){
                  canSets.set(pID, canSets.get(pID) + 1);
                  tmp_warehouse.register_position(get_position,pIDtoPalletType[pID]);
                  canSetPositions.push(get_position);
                  //console.log(get_position)
              }
              //num += 1;
              //canSetPositions[num] = positions;
              //console.log("POSITIONS: " + canSetPositions[num]);
            }
          //console.log("以下value");
          //canSetPositions.forEach(value => console.log(value));
          //console.log("SIZE: " + pIDtoPalletType[pID]);
          //console.log("PID: " + pID + "  AMOUNT: " + amount);
          //console.log("cansetmap: " + );
          //console.table(warehouse.check_status());
          //console.log(warehouse.find_position(pIDtoPalletType[pID]));
          //console.log(canSets);
          //console.log("以下warehouse");
          //warehouse.check_status();
          });

          //ここで発注か否か分岐
                    
          //以下発注関連
          //ここから

          
          function toAlphabetPosition(position){
            let alphabetPositioin = horizon[position[1]] + (position[0]+1);
            return alphabetPositioin;
          }
          

            let alphabetPositionList = [];

            canSetPositions.forEach(value => 
            {
              alphabetPositionList.push(toAlphabetPosition(value));
            }
            );

            //console.log(alphabetPositionList);

            let week_order = [];
            let num = 0;

            canSets.forEach((amount, pID) => {
              for(let p=1; amount >= p; p++){
                week_order.push(new OrderData(pID,maxSets[pID],alphabetPositionList[num]));
                num++;
              }
            }
            );
            //console.log("以下出庫オーダー");
            //console.log(week_order);
            

            const orderResults = this.order(week_order);
           // console.log("以下ORDERRESULTS");
            //console.log(orderResults);

              //warehouseにpositionを返す
              //A6ならposition[0,7]
              //D1ならposition[3,2]
              //const alphabet = 'ABCDEFGHIJKL'; // AからKまで
        
              orderResults.forEach((element) =>{
                if (element.isSuccess) {
                  if(element.location != null){
                    //console.log("SUCCESS_LOCATION: " + element.location);
                    let v_position = toVectorPosition(element.location);
                    warehouse.register_position(v_position, productmap[element.productCode]); //register_positionにposition[]とパレットタイプを渡す
                    //console.log("↓REGISTER_LOCATION↓");
                    //console.log(v_position);
                    warehouse.check_status();
            
            }
            else{
              console.log("データはnullです。");
            }
          }
          });

          function toVectorPosition(alp_position){
                  //A6なら[A, 6]
                    //配列に分割
                    let alphabet_position = alp_position.split('');
                    let vec_position = [];
                    for (let i = 0; i < alphabet_position.length; i++) {
                      let value = alphabet_position[i];
                      if (horizon.includes(value)) {
                        let index = horizon.indexOf(value);
                        if (index != -1) {
                          vec_position[1] = index; // Aを0, Bを1, ..., Kを10に置き換える 11コ
                        }
                      } else {
                        vec_position[0] = Number(value) - 1;
                      }
                    }
                    //console.log(vec_position); //[1,2]とか[3,6]とか 
                    return vec_position;
                    }
        
              //ここまで

//棚卸機能
    //在庫情報を取得
    const warehouse_items = this.getInventryItems();
    console.log(warehouse_items)

      /*{orderId: '000014', productCode: '1001', amount: 30, entryWeek: 1},
        {orderId: '000015', productCode: '1002', amount: 30, entryWeek: 1},
        {orderId: '000016', productCode: '2001', amount: 10, entryWeek: 1},
        {orderId: '000017', productCode: '3001', */

    //棚卸優先順位を決定
    var ReassembleOrder = new Map([
      ["1001", 1],
      ["1002", 4],
      ["2001", 3],
      ["2002", 5],
      ["3001", 2],
      ["3002", 6]
    ]);

    let sortedwarehouse_items = warehouse_items.sort((a, b) => {
      // ReassembleOrder内でのproductCodeに対する順序を取得
      let orderA = ReassembleOrder.get(a.productCode);
      let orderB = ReassembleOrder.get(b.productCode);
      
      return orderA - orderB;
    });
    
    console.log(sortedwarehouse_items); //優先順位で在庫リストを並び替え

      /*{orderId: '000014', productCode: '1001', amount: 30, entryWeek: 1},
        {orderId: '000015', productCode: '3001', amount: 30, entryWeek: 1},
        {orderId: '000016', productCode: '2001', amount: 10, entryWeek: 1},
        {orderId: '000017', productCode: '1002', */

    let blankwarehouse = new wareHouse(height,width);
    //console.table(blankwarehouse)

    var ReassembleMap = new Map();
    
    sortedwarehouse_items.forEach( sortedwarehouse_item => {
        //productCodeからパレットを判別してfind_positionに渡す
        //返ってきたpositionとパレットタイプをregisterに渡す
          //console.log(sortedwarehouse_item.productCode)
          //console.log(pIDtoPalletType)
          //console.log(pIDtoPalletType[sortedwarehouse_item.productCode])
          let get_reassemble_position = [];

          if(blankwarehouse.find_position(pIDtoPalletType[sortedwarehouse_item.productCode])[0] != null && blankwarehouse.find_position(pIDtoPalletType[sortedwarehouse_item.productCode])[1] != null ){
              //再配置できる座標を求める
              //console.log((pIDtoPalletType[sortedwarehouse_item.productCode]))
              let get_reassemble_position = blankwarehouse.find_position(pIDtoPalletType[sortedwarehouse_item.productCode])
              let get_reassemble_alp_position = toAlphabetPosition(get_reassemble_position) //A6とかC8とかに変換
              console.log(get_reassemble_alp_position)
              blankwarehouse.register_position(get_reassemble_position,pIDtoPalletType[sortedwarehouse_item.productCode]); //blankwarehouseに位置情報を登録
              ReassembleMap.set(sortedwarehouse_item.orderId, get_reassemble_alp_position);
              //console.log("空いてる")
          }else{
            console.log("空きなし")
          }
          //console.table(blankwarehouse)

      });
      console.log(Array.from(ReassembleMap.entries()));
      /*[orderID, position]
        ['000001', 'A6']
        ['000002', 'C6']
        ['000003', 'D7']
      */
      //console.table(blankwarehouse)

      //warehouse = blankwarehouse; 新しく再配置した倉庫を代入
      
      const reassembleResults = this.reassemble([
        ReassembleMap.forEach(item =>{
          new ReassembleData(item.orderId, item.position)
        })
      ]);

      console.log(reassembleResults)
      console.log(warehouse)
  }



  //再度出庫判断


 




  //倉庫ステータス取得(藤原)
 




  //リサイクル判断





  
  //numberOfpllet =  sum_warehouse/(製品ごとの積載量)
  

 
  //出庫成功したアイテムの内，パレットの積載個数が０になったものがある場合、倉庫のパレットを削除する
  //warehouse.remove_position("ポジション","パレットサイズ"); <<< これが削除
  /*
  //発注・入庫指示
  function func_orderItem(){
    //投げられたポジションに対してnew OrderDataを作成
    const orderResults = this.order([
      new OrderData('1001', 10, 'A1'),
      new OrderData('3002', 3, 'B1'),
    ]);
    // orderResults -> [
    //   { productCode: '1001', amount: 10, loation: 'A1', orderId: '000020', isSuccess: true },
    //   { productCode: '3002', amount: 3, loation: 'B1', orderId: '', isSuccess: false },
    // ]
    
    // 成功した指示データを取得し、そのロケーション（ポジション）とパレットサイズを投げて倉庫に登録する
    orderResults.forEach(result => {
      if (result.isSuccess) {
        warehouse.register_position("ポジション","パレットサイズ");
      }
    });
  }

*/

}






//倉庫の初期化
const height = 11;
const width = 19;
const warehouse = new wareHouse(height, width);
const tmp_warehouse = new wareHouse(height, width);




AppController.registerController(AppController, 'なまざかな株式会社', 'teamB.svg');
