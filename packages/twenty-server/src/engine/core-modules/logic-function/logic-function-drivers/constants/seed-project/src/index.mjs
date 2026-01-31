export const main = async (params) => {
  const { a, b } = params;
  const message = `Hello, input: ${a} and ${b}`;
  return { message };
};
