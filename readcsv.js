//CSVファイルを読み込む関数getCSV()の定義
    function getCSV() {
        return new Promise((resolve, reject) => {
        var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成、サーバと非同期通信するためのAPI
        req.open("get", "/static/data/需要予測.csv", true); // アクセスするファイルを指定
        req.onload = () => {
            if (req.readyState === 4 && req.status === 0) {
            resolve(convertCSVtoArray(req.responseText));
            } else {
            reject(new Error(req.statusText));
            }
        };
        req.onerror = () => {
            reject(new Error(req.statusText));
        };
        req.send(null); // HTTPリクエストの発行
        });
    }


    // 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
    function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
        var result = []; // 最終的な二次元配列を入れるための配列
        var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成

        // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
        for(var i=0;i<tmp.length;++i){
            result[i] = tmp[i].split(',');
        }
        alert(result[0][1])
        return result;
    }

