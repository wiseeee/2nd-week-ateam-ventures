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
