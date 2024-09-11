import type { Meta } from "@storybook/react";

import { Navigation } from "./Navigation";

const meta: Meta<typeof Navigation> = {
  component: Navigation,
  render: Story,
};

export default meta;

export const Default = {};

function Story() {
  return (
    <div style={{ gap: 8, display: "flex" }}>
      <Navigation>
        <Navigation.Item href={"#"} isCurrent={true}>
          About
        </Navigation.Item>
        <Navigation.Item href={"#"}>Blog</Navigation.Item>
      </Navigation>
    </div>
  );
}
