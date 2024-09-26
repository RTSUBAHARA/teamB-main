//棚卸クラス

export class Reassemble{

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
              let get_reassemble_alp_position = toAlphabetPosition(get_reassemble_position)
              console.log(get_reassemble_alp_position)
              blankwarehouse.register_position(get_reassemble_position,pIDtoPalletType[sortedwarehouse_item.productCode]);
              
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
        new ReassembleData('000016', 'A1'),
        new ReassembleData('000017', 'C1'),
        new ReassembleData('000018', 'E1'),
        new ReassembleData('000019', 'G1'),
        new ReassembleData('000014', 'I1'),
        new ReassembleData('000015', 'K1'),
        new ReassembleData('000020', 'M1'),
        new ReassembleData('000021', 'O1'),
        new ReassembleData('000022', 'Q1'),
        new ReassembleData('000023', 'A2'),
        new ReassembleData('000024', 'C2')
      ]);

      console.log(reassembleResults)
      console.log(warehouse)
  }


}