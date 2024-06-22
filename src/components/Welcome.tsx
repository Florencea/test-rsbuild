import {
  App,
  Button,
  DatePicker,
  Descriptions,
  Flex,
  Space,
  Tag,
  version,
} from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import rsbuildLogo from "../assets/rsbuild.svg";

export const Welcome = () => {
  const { message } = App.useApp();

  const [count, setCount] = useState(0);

  return (
    <Flex
      className="h-svh"
      vertical
      justify="center"
      align="center"
      gap="middle"
    >
      <a href="https://rsbuild.dev/zh" target="_blank" rel="noreferrer">
        <img
          src={rsbuildLogo}
          className="pointer-events-none h-[256px] w-[256px]"
          alt="Rsbuild logo"
        />
      </a>
      <h1 className="text-3xl font-bold text-primary">
        Rsbuild + React + TailwindCSS + antd
      </h1>
      <Descriptions bordered>
        <Descriptions.Item label="antd">
          <Space>
            <Tag color="processing">{version}</Tag>
            <DatePicker
              name="date"
              onChange={(date) => {
                if (dayjs.isDayjs(date)) {
                  void message.info(date.toDate().toLocaleString());
                }
              }}
            />
            <Button
              data-testid="btn"
              type="primary"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Count is {count}
            </Button>
          </Space>
        </Descriptions.Item>
      </Descriptions>
    </Flex>
  );
};
