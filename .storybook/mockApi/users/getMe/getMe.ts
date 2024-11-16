import { User } from "../../../../src/types/user/user";
import { UserRole } from "../../../../src/types/user/userRole";

const getMe = async (): Promise<User> => {
  await new Promise((res) => {
    setTimeout(res, 1000);
  });
  const user = new User();

  user.emailAddress = "test@test.com";
  user.profile = {
    displayName: "Test User",
  };
  user.roles = {
    roles: [UserRole.Admin],
  };
  return user;
};

export default getMe;
