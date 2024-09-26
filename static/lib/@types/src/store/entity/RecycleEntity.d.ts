import { AbstractEntity } from '../../store/entity/AbstractEntity';
/**
 * リサイクル情報を表すクラス。
 */
export declare class RecycleEntity extends AbstractEntity {
    /** 発注ID。 */
    orderId: string;
    /** 数量。 */
    amount: number;
    /** 指示の成否。 */
    isSuccess: boolean;
    /**
     * コンストラクタ。
     *
     * @param orderId 発注ID。
     * @param amount 数量。
     */
    constructor(orderId: string, amount: number);
}
