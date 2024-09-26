// @ts-check
/// <reference path="./static/lib/@types/global.d.ts" />
import * as warehouse from "./warehouse.js";

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
    if (week ==1){
      const orderResults = this.order([
      new OrderData('1001', 10, 'A1'),
      new OrderData('3001', 5, 'A6'),
      new OrderData('3001', 5, 'G6'),
      new OrderData('3001', 5, 'D6'),
      new OrderData('3002', 3, 'D1'),
      ]);
      // orderResults -> [
      //   { productCode: '1001', amount: 10, loation: 'A1', orderId: '000020', isSuccess: true },
      //   { productCode: '3002', amount: 3, loation: 'B1', orderId: '', isSuccess: false },
      // ]



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
  const items = this.getInventryItems();


  //const items = this.getInventryItems(); // getInventry使えます

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
  // 出庫指示リスト
  if(week >1){
  let deliveryRequests = [];
  // 納品に対する在庫の確認
  demandsmap.forEach((demandAmount, productCode) => {
    const warehouseAmount = sum_warehouse.get(productCode) || 0;
    let remainingDemand = demandAmount;  // 残りの納品指示数量

    if (warehouseAmount >= demandAmount) {
      // 複数のorderで出庫処理を実行
      items.forEach(item => {
        if (item.productCode === productCode && remainingDemand > 0) {
          let deliverAmount = Math.min(item.amount, remainingDemand);  // 納品指示数か在庫数のどちらか少ない方を出庫

          deliveryRequests.push(new DeliveryData(item.orderId, deliverAmount));

          remainingDemand -= deliverAmount;  // 残りの納品指示数量を更新
        } 
      });
    }
  });
  //console.log(deliveryRequests)


  // 出庫処理を実行
  if(deliveryRequests.length>0){
  console.log(week)
    //console.log(deliveryRequests)
    console.log("前")
    console.log(items)
    const deliveryResults = this.delivery(deliveryRequests);
    console.log(deliveryResults)
    console.log("後")
    this.items = this.getInventryItems();
    console.log(items)
  }
}
}


  //再度出庫判断

  


  //倉庫ステータス取得(藤原)
  


  //リサイクル判断



  //棚卸し(tuba)

  

}}


AppController.registerController(AppController, 'なまざかな株式会社', 'teamB.svg');
