/**
 * 倉庫の在庫情報を表すクラス。
 */
export declare class InventryItem {
    /** 発注ID。 */
    orderId: string;
    /** 商品コード。 */
    productCode: string;
    /** 数量。 */
    amount: number;
    /** 入庫週。 */
    entryWeek: number;
    /**
     * コンストラクタ。
     *
     * @param orderId 発注ID。
     * @param productCode 商品コード。
     * @param amount 数量。
     * @param entryWeek 入庫週。
     */
    constructor(orderId: string, productCode: string, amount: number, entryWeek: number);
}
