import { DemandEntity, ResultEntity, RecycleEntity } from '../store/entity';
import { DeliveryData, InventryItem, OrderData, ReassembleData, RecycleData } from '../controller/type';
import { Product } from '../constant/type/Product';
import { PaletteType } from '../constant/type/PaletteType';
/**
 * 抽象コントローラクラス。
 * アプリ側コントローラクラスはこのクラスを必ず継承すること。
 */
export declare abstract class AbstractAppController {
    /** 商品一覧。 */
    static readonly PRODUCTS: Product[];
    /** パレットタイプ一覧。 */
    static readonly PALETTES: PaletteType[];
    /** 会社コード。 */
    readonly companyCode: string;
    /** 会社名。 */
    readonly companyName: string;
    /** アイコンファイル名。 */
    readonly iconFileName: string;
    /**
     * アプリ側コントローラクラスを登録する。
     *
     * @param controller アプリ側コントローラクラス。
     * @param companyName 会社名。
     * @param iconFileName アイコンファイル名。
     */
    static registerController<T extends AbstractAppController>(controller: {
        new (companyName: string, iconFileName: string): T;
    }, companyName: string, iconFileName?: string): void;
    /**
     * テキストファイル(.txt, .csv 等)を同期的に読み込む。
     *
     * @param filepath 読み込むファイルのパス。
     * @returns ファイルの内容。
     */
    static readTextFile(filepath: string): string;
    /**
     * コンストラクタ。
     *
     * @param companyName 会社名。
     * @param iconFileName アイコンファイル名。
     */
    constructor(companyName: string, iconFileName: string);
    /**
     * 各年に1度呼ばれる初期化処理。
     * アプリ側コントローラクラスで実装する。
     *
     * @param year 年数。1始まり。
     */
    abstract init(year: number): void;
    /**
     * 各週に1度呼ばれるアプリの処理。
     * アプリ側コントローラクラスで実装する。
     *
     * @param year 年数。1始まり。
     * @param week 週数。1始まり。
     * @param demands 今週の納品依頼情報。
     * @param prevWeekDeliveries 先週の各社の納品情報。
     */
    abstract execute(year: number, week: number, demands: DemandEntity[], prevWeekDeliveries: Map<string, DemandEntity[]>): void;
    /**
     * リサイクル処理を実施する。
  
     * @param data リサイクル指示データ。
     * @returns 結果情報。指示データと指示の成否(isSuccessがtrueであれば成功)を表す配列を返す。
     */
    protected recycle(data: RecycleData[]): RecycleEntity[];
    /**
     * 棚卸処理を実施する。
     *
     * @param data 棚卸指示データ。
     * @returns 結果情報。指示データと指示の成否(isSuccessがtrueであれば成功)を表す配列を返す。
     */
    protected reassemble(data: ReassembleData[]): ResultEntity[];
    /**
     * 発注・入庫処理を実施する。
     *
     * @param data 発注・入庫指示データ。
     * @returns 結果情報。指示データと指示の成否(isSuccessがtrueであれば成功)を表す配列を返す。失敗した場合は発注IDが発行されない。
     */
    protected order(data: OrderData[]): ResultEntity[];
    /**
     * 納品処理を実施する。
  
     * @param data 納品指示データ。
     * @returns 結果情報。指示データと指示の成否(isSuccessがtrueであれば成功)を表す配列を返す。
     */
    protected delivery(data: DeliveryData[]): ResultEntity[];
    /**
     * 倉庫内の在庫情報を取得する。
     *
     * @returns 倉庫内の在庫情報。
     */
    protected getInventryItems(): InventryItem[];
}
