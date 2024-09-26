import { AbstractEntity } from '../../store/entity/AbstractEntity';
/**
 * 需要・納品情報を表すエンティティクラス。
 */
export declare class DemandEntity extends AbstractEntity {
    /** 商品コード。 */
    productCode: string;
    /** 数量。 */
    amount: number;
    /**
     * コンストラクタ。
     *
     * @param productCode 商品コード。
     * @param amount 数量。
     */
    constructor(productCode: string, amount: number);
}
