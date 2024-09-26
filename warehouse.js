//入庫する関数　引数はパレットの大きさと位置
//position[縦x横]、size[縦x横]

//パレットサイズ
const A = [1,2];
const B = [2,2];
const C = [2,3];
const D = [3,4];

export class wareHouse{

    //宣言後の呼び出し => 倉庫の初期化
    constructor(height, width){
        this.height = height;
        this.width = width;
        this.WarehouseStatus = [];
        for(let i=0; i<height; i++){
            this.WarehouseStatus[i] = [];
            for(let j=0; j<width; j++){
                this.WarehouseStatus[i][j] = 0;
            }
        }
    };

    //倉庫のステータスを全設定
    set_status(status){
        for(let i=0; i<this.height; i++){
            for(let j=0; j<this.width; j++){
                this.WarehouseStatus[i][j] = status[i][j];
            }
        }
        console.log("配列データを倉庫ステータスに設定しました");
    }

    //倉庫のステータスの確認
    check_status(){
       // console.table(this.WarehouseStatus);        
    }

    //任意位置とパレットサイズ => 空いているかを確認
    isEmpty(position, pallet_size){
        if(A[0] == pallet_size[0] && A[1] == pallet_size[1]){
                try{
                    if(this.WarehouseStatus[position[0]][[position[1]]] == 0 && this.WarehouseStatus[position[0]][[position[1]+1]] == 0){
                        return true;
                    }
                    else if(this.WarehouseStatus[position[0]][[position[1]+1]] == undefined){
                        //console.log("検索しようとした範囲は倉庫範囲内に収まりません。");
                        return null;
                    }
                    else{
                        //console.log("範囲内に既に登録されている荷物があります。");
                        return false;
                    }
                }catch(error){
                    //console.log("検索しようとした範囲は倉庫範囲内に収まりません。");
                    return null;
                }
            }

            else if(B[0] == pallet_size[0] && B[1] == pallet_size[1]){
                try{
                    if(this.WarehouseStatus[position[0]][[position[1]]] == 0 && this.WarehouseStatus[position[0]][[position[1]+1]] == 0 && this.WarehouseStatus[position[0]+1][[position[1]]] == 0 && this.WarehouseStatus[position[0]+1][[position[1]+1]] == 0){
                        return true;
                    }
                    else{
                        //console.log("範囲内に既に登録されている荷物があります。");
                        return false;
                    }
                }catch(error){
                    //console.log("検索しようとした範囲は倉庫範囲内に収まりません。");
                    return null;
                }
            }

            else if(C[0] == pallet_size[0] && C[1] == pallet_size[1]){
                try{
                    if(this.WarehouseStatus[position[0]][[position[1]]] == 0 && this.WarehouseStatus[position[0]][[position[1]+1]] == 0 && this.WarehouseStatus[position[0]][[position[1]+2]] == 0 && this.WarehouseStatus[position[0]+1][[position[1]]] == 0 && this.WarehouseStatus[position[0]+1][[position[1]+1]] == 0 && this.WarehouseStatus[position[0]+1][[position[1]+2]] == 0){
                        return true;
                    }
                    else{
                        //console.log("範囲内に既に登録されている荷物があります。");
                        return false;
                }}catch(error){
                    //console.log("検索しようとした範囲は倉庫範囲内に収まりません。");
                    return null;
                }
            }

            else if(D[0] == pallet_size[0] && D[1] == pallet_size[1]){
                try{
                    if(this.WarehouseStatus[position[0]][[position[1]]] == 0 && 
                        this.WarehouseStatus[position[0]][[position[1]+1]] == 0 &&
                        this.WarehouseStatus[position[0]][[position[1]+2]] == 0 &&
                        this.WarehouseStatus[position[0]][[position[1]+3]] == 0 &&
                        this.WarehouseStatus[position[0]+1][[position[1]]] == 0 && 
                        this.WarehouseStatus[position[0]+1][[position[1]+1]] == 0 && 
                        this.WarehouseStatus[position[0]+1][[position[1]+2]] == 0 && 
                        this.WarehouseStatus[position[0]+1][[position[1]+3]] == 0 &&
                        this.WarehouseStatus[position[0]+2][[position[1]]] == 0 && 
                        this.WarehouseStatus[position[0]+2][[position[1]+1]] == 0 && 
                        this.WarehouseStatus[position[0]+2][[position[1]+2]] == 0 && 
                        this.WarehouseStatus[position[0]+2][[position[1]+3]] == 0){
                        
                        return true;
                    }
                    else{
                        //console.log("範囲内に既に登録されている荷物があります。");
                        return false;
                    }
                }catch(error){
                    //console.log("検索しようとした範囲は倉庫範囲内に収まりません。");
                    return null;
                    }
        }
    }
    


    //指定位置にパレットを登録
    register_position(position, pallet_size){
        //position = pallet.position;
        //pallet_size = pallet.pallet_size;
        if(A[0] == pallet_size[0] && A[1] == pallet_size[1]){
                try{
                    if(this.WarehouseStatus[position[0]][[position[1]]] == 0 && this.WarehouseStatus[position[0]][[position[1]+1]] == 0){
                        this.WarehouseStatus[position[0]][[position[1]]] = 1;
                        this.WarehouseStatus[position[0]][[position[1]+1]] = 1;
                        //console.log(position + "に荷物を登録しました。");
                    }
                    else{
                        //console.log("範囲内に既に登録されている荷物があります。");
                    }
                }catch(error){
                    //console.log("配置しようとした荷物は倉庫範囲内に収まりません。");
                }
                this.check_status();
            }
            else if(B[0] == pallet_size[0] && B[1] == pallet_size[1]){
                try{
                    if(this.WarehouseStatus[position[0]][[position[1]]] == 0 && this.WarehouseStatus[position[0]][[position[1]+1]] == 0 && this.WarehouseStatus[position[0]+1][[position[1]]] == 0 && this.WarehouseStatus[position[0]+1][[position[1]+1]] == 0){
                        this.WarehouseStatus[position[0]][[position[1]]] = 1;
                        this.WarehouseStatus[position[0]][[position[1]+1]] = 1;
                        this.WarehouseStatus[position[0]+1][[position[1]]] = 1;
                        this.WarehouseStatus[position[0]+1][[position[1]+1]] = 1;
                        //console.log(position + "に荷物を登録しました。");
                    }
                    else{
                        //console.log("範囲内に既に登録されている荷物があります。");
                    }
                }catch(error){
                    //console.log("配置しようとした荷物は倉庫範囲内に収まりません。");
                    
                }
                this.check_status();


            }
            else if(C[0] == pallet_size[0] && C[1] == pallet_size[1]){
                try{
                    if(this.WarehouseStatus[position[0]][[position[1]]] == 0 && this.WarehouseStatus[position[0]][[position[1]+1]] == 0 && this.WarehouseStatus[position[0]][[position[1]+2]] == 0 && this.WarehouseStatus[position[0]+1][[position[1]]] == 0 && this.WarehouseStatus[position[0]+1][[position[1]+1]] == 0 && this.WarehouseStatus[position[0]+1][[position[1]+2]] == 0){
                        this.WarehouseStatus[position[0]][[position[1]]] = 1;
                        this.WarehouseStatus[position[0]][[position[1]+1]] = 1;
                        this.WarehouseStatus[position[0]][[position[1]+2]] = 1;
                        this.WarehouseStatus[position[0]+1][[position[1]]] = 1;
                        this.WarehouseStatus[position[0]+1][[position[1]+1]] = 1;
                        this.WarehouseStatus[position[0]+1][[position[1]+2]] = 1;
                        //console.log(position + "に荷物を登録しました。");
                    }
                    else{
                        //console.log("範囲内に既に登録されている荷物があります。");
                }}catch(error){
                    //console.log("配置しようとした荷物は倉庫範囲内に収まりません。");

                }
                this.check_status();

            }
            else if(D[0] == pallet_size[0] && D[1] == pallet_size[1]){
                try{
                    if(this.WarehouseStatus[position[0]][[position[1]]] == 0 && 
                        this.WarehouseStatus[position[0]][[position[1]+1]] == 0 &&
                        this.WarehouseStatus[position[0]][[position[1]+2]] == 0 &&
                        this.WarehouseStatus[position[0]][[position[1]+3]] == 0 &&
                        this.WarehouseStatus[position[0]+1][[position[1]]] == 0 && 
                        this.WarehouseStatus[position[0]+1][[position[1]+1]] == 0 && 
                        this.WarehouseStatus[position[0]+1][[position[1]+2]] == 0 && 
                        this.WarehouseStatus[position[0]+1][[position[1]+3]] == 0 &&
                        this.WarehouseStatus[position[0]+2][[position[1]]] == 0 && 
                        this.WarehouseStatus[position[0]+2][[position[1]+1]] == 0 && 
                        this.WarehouseStatus[position[0]+2][[position[1]+2]] == 0 && 
                        this.WarehouseStatus[position[0]+2][[position[1]+3]] == 0){
                        
                        this.WarehouseStatus[position[0]][[position[1]]] = 1;
                        this.WarehouseStatus[position[0]][[position[1]+1]] = 1; 
                        this.WarehouseStatus[position[0]][[position[1]+2]] = 1;
                        this.WarehouseStatus[position[0]][[position[1]+3]] = 1;
                        this.WarehouseStatus[position[0]+1][[position[1]]] = 1;
                        this.WarehouseStatus[position[0]+1][[position[1]+1]] = 1;
                        this.WarehouseStatus[position[0]+1][[position[1]+2]] = 1;
                        this.WarehouseStatus[position[0]+1][[position[1]+3]] = 1;
                        this.WarehouseStatus[position[0]+2][[position[1]]] = 1;
                        this.WarehouseStatus[position[0]+2][[position[1]+1]] = 1;
                        this.WarehouseStatus[position[0]+2][[position[1]+2]] = 1;
                        this.WarehouseStatus[position[0]+2][[position[1]+3]] = 1;
                        //console.log(position + "に荷物を登録しました。");
                    }
                    else{
                        //console.log("範囲内に既に登録されている荷物があります。");
                    }
                }catch(error){
                    //console.log("配置しようとした荷物は倉庫範囲内に収まりません。");

                    }
                this.check_status();

        }
    }

    remove_position(position, pallet_size){
        if(this.isEmpty(position, pallet_size) == false){
            if(A[0] == pallet_size[0] && A[1] == pallet_size[1]){
                    this.WarehouseStatus[position[0]][[position[1]]] = 0;
                    this.WarehouseStatus[position[0]][[position[1]+1]] = 0;
                    //console.log(position+"の範囲を削除しました");
            }
                
            else if(B[0] == pallet_size[0] && B[1] == pallet_size[1]){
                    this.WarehouseStatus[position[0]][[position[1]]] = 0;
                    this.WarehouseStatus[position[0]][[position[1]+1]] = 0;
                    this.WarehouseStatus[position[0]+1][[position[1]]] = 0;
                    this.WarehouseStatus[position[0]+1][[position[1]+1]] = 0;
                    //console.log(position+"の範囲を削除しました");
            }

            else if(C[0] == pallet_size[0] && C[1] == pallet_size[1]){
                    this.WarehouseStatus[position[0]][[position[1]]] = 0;
                    this.WarehouseStatus[position[0]][[position[1]+1]] = 0;
                    this.WarehouseStatus[position[0]][[position[1]+2]] = 0;
                    this.WarehouseStatus[position[0]+1][[position[1]]] = 0;
                    this.WarehouseStatus[position[0]+1][[position[1]+1]] = 0;
                    this.WarehouseStatus[position[0]+1][[position[1]+2]] = 0;
                    //console.log(position+"の範囲を削除しました");
            }

            else if(D[0] == pallet_size[0] && D[1] == pallet_size[1]){
                    this.WarehouseStatus[position[0]][[position[1]]] = 0;
                    this.WarehouseStatus[position[0]][[position[1]+1]] = 0; 
                    this.WarehouseStatus[position[0]][[position[1]+2]] = 0;
                    this.WarehouseStatus[position[0]][[position[1]+3]] = 0;
                    this.WarehouseStatus[position[0]+1][[position[1]]] = 0;
                    this.WarehouseStatus[position[0]+1][[position[1]+1]] = 0;
                    this.WarehouseStatus[position[0]+1][[position[1]+2]] = 0;
                    this.WarehouseStatus[position[0]+1][[position[1]+3]] = 0;
                    this.WarehouseStatus[position[0]+2][[position[1]]] = 0;
                    this.WarehouseStatus[position[0]+2][[position[1]+1]] = 0;
                    this.WarehouseStatus[position[0]+2][[position[1]+2]] = 0;
                    this.WarehouseStatus[position[0]+2][[position[1]+3]] = 0;
                    //console.log(position+"の範囲を削除しました");
            }
        }
    }

    //倉庫内の位置を走査して取得し、isEmptyに渡す
    find_position(pallet_size){

        //console.log("空きポジション探索中");
        for(let p=0; p<this.height; p++){
            for(let j=0; j<this.width - 1; j++){
                try{
                if (this.WarehouseStatus[p][j] == 0) {
                    const position = [p, j];
                    const result = this.isEmpty(position, pallet_size); // 関数の呼び出し
                    if (result == true){
                        return position;
                    }
                    else if (result == null){
                        continue;
                    }
                    else{

                    }
                }
            }catch(error){
                console.log("skip");
                continue;
            }
            }
        }
        //console.log("空いているところが見つかりませんでした" + pallet_size);
        return [null,null];
    }
}

    
export class palletData{
    //注文番号、商品コード、数量、入荷週、位置、パレットタイプ
    constructor(orderID, productCode, amount, entryWeek, position, pallet_size){
        this.orderID = orderID;
        this.productCode = productCode;
        this.amount = amount;
        this.entryWeek = entryWeek;
        this.position = position;
        this.pallet_size = pallet_size;
        //console.log("パレットを登録しました");
    }

    setPalletPosition(position){
        this.position = position;
        //console.log("パレットのポジションを更新しました");
    }
}
    



//倉庫の初期化
//const height = 11;
//const width = 19;
//const warehouse = new wareHouse(height, width);



//const pallet = new palletData(1,1,1,23,null,A); 
//let empty_position = warehouse.find_position(pallet.pallet_size);
//pallet.setPalletPosition(empty_position);
//warehouse.register_position(empty_position,pallet.pallet_size);

//倉庫の内容確認
//warehouse.check_status();

//指定位置に登録
//warehouse.register_position([0,0],A);
//warehouse.register_position([5,1],B);
//warehouse.remove_position([5,1],B);

//warehouse.check_status();
//let result = warehouse.find_position([1,2]);
//console.log("検索結果"+result);














//console.log(WarehouseStatus);

//console.table(WarehouseStatus);
