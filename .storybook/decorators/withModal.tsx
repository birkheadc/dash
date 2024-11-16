import React from "react";

import Modal from "react-modal";
import declareModalStyles from "../../src/modalStyles";

declareModalStyles(Modal);
Modal.setAppElement("#storybook-root");

/**
 * Decorator to style the modal for storybook to match the application.
 * @param Story - The story to wrap.
 * @returns A wrapped story with the modal provided.
 */
const withModal = (Story: any) => {
  return <Story />;
};

export default withModal;
