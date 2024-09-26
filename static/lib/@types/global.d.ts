import { AbstractAppController as Controller } from './src/controller/AbstractAppController';
import {
  DeliveryData as Delivery,
  OrderData as Order,
  ReassembleData as Reassemble,
  RecycleData as Recycle,
} from './src/controller/type';
import { DemandEntity as Demand } from './src/store/entity/DemandEntity';

declare global {
  declare const AbstractAppController: typeof Controller;
  declare const DeliveryData: typeof Delivery;
  declare const OrderData: typeof Order;
  declare const ReassembleData: typeof Reassemble;
  declare const RecycleData: typeof Recycle;
  declare const DemandEntity: Demand;
}
