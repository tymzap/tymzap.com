import { Meta } from "@storybook/react";

import { Navigation } from "~/components/Navigation";

import { NavigationBar } from "./NavigationBar";

const navigation = (
  <Navigation>
    <Navigation.Item href={"#"} isCurrent={true}>
      About
    </Navigation.Item>
    <Navigation.Item href={"#"}>Blog</Navigation.Item>
  </Navigation>
);

const meta: Meta<typeof NavigationBar> = {
  component: NavigationBar,
  args: {
    navigation,
  },
};

export default meta;

export const Default = {};
