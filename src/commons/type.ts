import { Material } from './common';
import { Status } from './common';

export type MaterialType = keyof typeof Material;

export interface OrderInfo {
  id: number;
  title: string;
  client: string;
  due: string;
  amount: number;
  method: ('밀링' | '선반')[];
  status: Status;
  material: MaterialType[];
  count?: number;
  docs?: number;
}
