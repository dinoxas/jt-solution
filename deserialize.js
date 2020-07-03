export const deserialize = (data) => {
  let obj = {};
  let rows = [];

  for (let i = 0; i < 2; i++) {
    let row = {};
    row.name = data[`row${i}_name`];
    row.value = data[`row${i}_value`];
    rows.push(row);
  }

  obj.row = rows;
  obj.total = data['total'];

  return obj;
};
