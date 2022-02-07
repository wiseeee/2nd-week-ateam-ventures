export interface OrderInfo {
  id: number;
  title: string;
  client: string;
  due: string;
  amount: number;
  method: ('밀링' | '선반')[];
  material: ('구리' | '알류미늄' | '탄소강' | '강철' | '스테인리스강')[];
  status: '대기중' | '상담중';
  count?: number;
  docs?: number;
}
