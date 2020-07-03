export const listToObject = (list) => {
  return Object.assign(
    ...list.map((object) => ({ [object.name]: object.value }))
  );
};
