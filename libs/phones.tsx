import ph from "./data.json";

const phones = ph.phones;

export function getPhoneData(id: number) {
  const i = phones.findIndex((x) => x.id === id);

  return phones[i];
}

// paths [ { params: { id: 'pre-rendering' } }, { params: { id: 'ssg-ssr' } } ]
export function getAllPhoneIds() {
  return phones.map((phone) => {
    return { params: { id: phone.id.toString() } };
  });
}
