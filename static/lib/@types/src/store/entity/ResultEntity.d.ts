import { AbstractEntity } from '../../store/entity/AbstractEntity';
/**
 * 商品の発注・入庫情報を表すエンティティクラス。
 */
export declare class ResultEntity extends AbstractEntity {
    /** 商品コード。 */
    productCode?: string;
    /** 数量。 */
    amount?: number;
    /** 入庫場所。 */
    location?: string;
    /** 発注ID。 */
    orderId?: string;
    /** 指示の成否。 */
    isSuccess?: boolean;
}
