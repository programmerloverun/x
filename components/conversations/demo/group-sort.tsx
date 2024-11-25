import { CommentOutlined } from '@ant-design/icons';
import type { ConversationsProps } from '@ant-design/x';
import { Conversations } from '@ant-design/x';
import { type GetProp, Space, theme } from 'antd';
import React from 'react';

const items: GetProp<ConversationsProps, 'items'> = Array.from({ length: 6 }).map((_, index) => {
  const timestamp = index <= 3 ? Date.now() : Date.now() - 1000 * 60 * 60 * 24 * 2;

  return {
    key: `item${index + 1}`,
    label: `Conversation - ${new Date(timestamp + index * 60 * 60).toLocaleTimeString()}`,
    timestamp: timestamp + index * 60,
    group: index <= 3 ? 'Today' : 'Yesterday',
  };
});

const App = () => {
  const { token } = theme.useToken();

  // Customize the style of the container
  const style = {
    width: 256,
    background: token.colorBgContainer,
    borderRadius: token.borderRadius,
  };

  const groupable: GetProp<typeof Conversations, 'groupable'> = {
    sort(a, b) {
      if (a === b) return 0;

      return a === 'Today' ? -1 : 1;
    },
    title: (group, { components: { GroupTitle } }) =>
      group ? (
        <GroupTitle>
          <Space>
            <CommentOutlined />
            <span>{group}</span>
          </Space>
        </GroupTitle>
      ) : (
        <GroupTitle />
      ),
  };

  return (
    <Conversations style={style} groupable={groupable} defaultActiveKey="demo1" items={items} />
  );
};

export default App;
