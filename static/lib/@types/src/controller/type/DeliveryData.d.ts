import { AbstractData } from '../../controller/type/AbstractData';
/**
 * 納品指示データを表すクラス。
 */
export declare class DeliveryData extends AbstractData {
    /** 発注ID。 */
    orderId: string;
    /** 数量。 */
    amount: number;
    /**
     * コンストラクタ。
     *
     * @param orderId 発注ID。
     * @param amount 数量。
     */
    constructor(orderId: string, amount: number);
    /**
     * @inheritdoc
     */
    validateParam(): boolean;
}
