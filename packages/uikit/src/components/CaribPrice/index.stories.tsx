import React from "react";
import { CaribPrice, CaribPriceProps } from ".";
import { Flex } from "../Box";

export default {
  title: "Components/CaribPrice",
  component: CaribPrice,
};

const Template: React.FC<React.PropsWithChildren<CaribPriceProps>> = ({ ...args }) => {
  return (
    <Flex p="10px">
      <CaribPrice {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {
  caribPriceUsd: 20.0,
};
