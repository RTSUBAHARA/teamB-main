import { AbstractData } from '../../controller/type/AbstractData';
/**
 * 棚卸指示データを表すクラス。
 */
export declare class ReassembleData extends AbstractData {
    /** 発注ID。 */
    orderId: string;
    /** 新しい配置場所。 */
    newLocation: string;
    /**
     * コンストラクタ。
     *
     * @param orderId 発注ID。
     * @param amount 新しい配置場所。
     */
    constructor(orderId: string, newLocation: string);
    /**
     * @inheritdoc
     */
    validateParam(): boolean;
}
