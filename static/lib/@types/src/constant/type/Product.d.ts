/**
 * 商品情報を表すインタフェース。
 */
export interface Product {
    /** 商品コード。 */
    CODE: string;
    /** 商品名。 */
    NAME: string;
    /** 仕入原価。 */
    COST: number;
    /** 納品価格。 */
    PRICE: number;
    /** パレット種別。 */
    PALETTE_TYPE: string;
    /** 1パレットあたりの積載可能量。 */
    MAX_AMOUNT: number;
    /** 大口発注割引が適用される最低数量。 */
    DISCOUNT_AMOUNT: number;
    /** 大口発注割引率。 */
    DISCOUNT_PERCENT: number;
    /** 有効期限(週数)。-1の場合は無期限。 */
    EXPIRE_TERM: number;
    /** リサイクル手数料。 */
    RECYCLE_FEE: number;
}
