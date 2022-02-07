export enum ProcessingMethod {
  밀링 = '밀링',
  선반 = '선반',
}

export const PROCESSING_METHOD = Object.keys(ProcessingMethod);

export enum Material {
  구리 = '구리',
  알루미늄 = '알루미늄',
  탄소강 = '탄소강',
  강철 = '강철',
  스테인리스강 = '스테인리스강',
  합금강 = '합금강',
}

export const MATERIAL = Object.keys(Material);

export enum Status {
  대기중 = '대기중',
  상담중 = '상담중',
}
