import { AbstractData } from '../../controller/type/AbstractData';
/**
 * 発注・入庫指示データを表すクラス。
 */
export declare class OrderData extends AbstractData {
    /** 商品コード。 */
    productCode: string;
    /** 数量。 */
    amount: number;
    /** 入庫場所。 */
    location: string;
    /**
     * コンストラクタ。
     *
     * @param productCode 商品コード。
     * @param amount 数量。
     * @param location 入庫場所。
     */
    constructor(productCode: string, amount: number, location: string);
    /**
     * @inheritdoc
     */
    validateParam(): boolean;
}
