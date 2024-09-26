/**
 * パレット情報を表すインタフェース。
 */
export interface PaletteType {
    /** パレット種別。 */
    TYPE: string;
    /** パレットサイズ(x, y)。 */
    SIZE: {
        X: number;
        Y: number;
    };
}
