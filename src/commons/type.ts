enum Material {
  구리 = '구리',
  알류미늄 = '알류미늄',
  탄소강 = '탄소강',
  강철 = '강철',
  스테인리스강 = '스테인리스강',
  합금강 = '합금강',
}

export interface OrderInfo {
  id: number;
  title: string;
  client: string;
  due: string;
  amount: number;
  method: ('밀링' | '선반')[];
  status: '대기중' | '상담중';
  material: Material;
  count?: number;
  docs?: number;
}
