export const objectToList = (obj) => {
  const shallow = JSON.parse(JSON.stringify(obj));
  return Object.keys(shallow).map((key) => {
    return {
      name: key,
      value: shallow[key]
    };
  });
};
