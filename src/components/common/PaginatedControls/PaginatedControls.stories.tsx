import { Meta, StoryObj } from "@storybook/react";
import PaginatedControls from "./PaginatedControls";
import { expect, fn, userEvent, within } from "@storybook/test";

const meta: Meta<typeof PaginatedControls> = {
  title: "Components/Common/PaginatedControls",
  component: PaginatedControls,
  args: {
    goToFirstPage: fn(),
    goToPrevPage: fn(),
    goToNextPage: fn(),
    canGoToNext: true,
    canGoToPrev: true,
    currentPage: 5,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SmallScreen: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobileVertical",
    },
  },
};

export const ShowCurrentPage: Story = {
  args: {
    currentPage: 99,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLCanvasElement);

    const text = canvas.getByText("99");

    await expect(text).toBeDefined();
    await expect(text).toBeVisible();
  },
};

export const ClickGoToFirstPage: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement as HTMLCanvasElement);

    const button = canvas.getByLabelText(GO_TO_FIRST_PAGE_BUTTON_ARIA_LABEL);

    await expect(button).toBeDefined();
    await expect(button).toBeVisible();
    await expect(button).not.toBeDisabled();

    await userEvent.click(button);

    await expect(args.goToFirstPage).toHaveBeenCalledOnce();
  },
};

export const ClickGoToPrevPage: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement as HTMLCanvasElement);

    const button = canvas.getByLabelText(GO_TO_PREV_PAGE_BUTTON_ARIA_LABEL);

    await expect(button).toBeDefined();
    await expect(button).toBeVisible();
    await expect(button).not.toBeDisabled();

    await userEvent.click(button);

    await expect(args.goToPrevPage).toHaveBeenCalledOnce();
  },
};

export const ClickGoToNextPage: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement as HTMLCanvasElement);

    const button = canvas.getByLabelText(GO_TO_NEXT_PAGE_BUTTON_ARIA_LABEL);

    await expect(button).toBeDefined();
    await expect(button).toBeVisible();
    await expect(button).not.toBeDisabled();

    await userEvent.click(button);

    await expect(args.goToNextPage).toHaveBeenCalledOnce();
  },
};

export const DisbleGoToFirstPageButton: Story = {
  args: {
    canGoToPrev: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLCanvasElement);

    const button = canvas.getByLabelText(GO_TO_FIRST_PAGE_BUTTON_ARIA_LABEL);

    expect(button).toBeDefined();
    expect(button).toBeVisible();
    expect(button).toBeDisabled();
  },
};

export const DisbleGoToPrevPageButton: Story = {
  args: {
    canGoToPrev: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLCanvasElement);

    const button = canvas.getByLabelText(GO_TO_PREV_PAGE_BUTTON_ARIA_LABEL);

    expect(button).toBeDefined();
    expect(button).toBeVisible();
    expect(button).toBeDisabled();
  },
};

export const DisbleGoToNextPageButton: Story = {
  args: {
    canGoToNext: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement as HTMLCanvasElement);

    const button = canvas.getByLabelText(GO_TO_NEXT_PAGE_BUTTON_ARIA_LABEL);

    expect(button).toBeDefined();
    expect(button).toBeVisible();
    expect(button).toBeDisabled();
  },
};

const GO_TO_FIRST_PAGE_BUTTON_ARIA_LABEL = "go to first page";
const GO_TO_PREV_PAGE_BUTTON_ARIA_LABEL = "go to previous page";
const GO_TO_NEXT_PAGE_BUTTON_ARIA_LABEL = "go to next page";
