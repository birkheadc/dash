import React from "react";
import { DecoratorFunction } from "storybook/internal/types";
import { ReactRenderer } from "@storybook/react";
import { MeContext } from "../../src/contexts/MeContext/MeContext";
import { UserPermission } from "../../src/types/user/userPermission";
import { RolePermission } from "../../src/types/user/rolePermission";

/**
 * Decorator to provide a user for `useMe` to the story. Extracts the user from the story parameters.
 * @param Story - The story to wrap.
 * @param options - The options for the story.
 * @returns A wrapped story with the user provided.
 */
const withUser: DecoratorFunction<ReactRenderer, { [x: string]: any }> = (
  Story,
  options,
) => {
  const user = options?.parameters?.user ?? undefined;
  const canI = (permission: UserPermission): boolean => {
    if (user == null) return false;
    return RolePermission.doesRolesHavePermission(user.roles.roles, permission);
  };
  const setUser = () => {};
  const updateUserProfile = async () => {};
  return (
    <MeContext.Provider value={{ user, canI, setUser, updateUserProfile }}>
      <Story />
    </MeContext.Provider>
  );
};

export default withUser;
