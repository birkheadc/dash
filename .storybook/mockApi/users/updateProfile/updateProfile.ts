const updateProfile = async (): Promise<void> => {
  await new Promise((res) => {
    setTimeout(res, 1000);
  });
};

export default updateProfile;
