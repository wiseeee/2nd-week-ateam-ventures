import { Material, Method, Status } from './common';

export type MaterialType = keyof typeof Material;
export type MethodType = keyof typeof Method;

export interface OrderInfo {
  id: number;
  title: string;
  client: string;
  due: string;
  amount: number;
  method: MethodType[];
  status: Status;
  material: MaterialType[];
  count: number;
}

export interface FilterCondition {
  method: MethodType[];
  material: MaterialType[];
}

export type Category = 'method' | 'material';
