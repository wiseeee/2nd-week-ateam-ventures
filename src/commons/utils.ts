import { OrderInfo, Category } from './type';

export default function getApi(address: string) {
  const data = fetch(address, { mode: 'cors' })
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson: { requests: [] }) {
      return myJson.requests;
    });

  return data;
}

export const makeCondition = (
  checkedArray: boolean[],
  options: string[],
): string[] => {
  let result: string[] = [];

  checkedArray.forEach((checked: boolean, index: number) => {
    if (checked) {
      result.push(options[index]);
    }
  });

  return result;
};

export const orderFilter = (
  FilterCondition: { material: string[]; method: string[] },
  category: Category,
  beforeFilter: OrderInfo[],
) => {
  const optional: string[] = FilterCondition[category];
  let afterFilter: OrderInfo[] = [];

  if (optional.length === 0) {
    afterFilter = beforeFilter;
  } else {
    beforeFilter.forEach((order: OrderInfo) => {
      const found = order[category].some((r) => optional.includes(r));

      if (found) {
        afterFilter.push(order);
      }
    });
  }
  return afterFilter;
};
