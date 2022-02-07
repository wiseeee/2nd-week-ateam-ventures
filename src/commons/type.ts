import { Material } from './common';
import { Status } from './common';

export interface OrderInfo {
  id: number;
  title: string;
  client: string;
  due: string;
  amount: number;
  method: ('밀링' | '선반')[];
  status: Status;
  material: Material;
  count?: number;
  docs?: number;
}
