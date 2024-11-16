const update = async (book: BookFormSchema): Promise<void> => {
  await new Promise((res) => {
    setTimeout(res, 1000);
  });
};

export default update;
