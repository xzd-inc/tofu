import { useState } from 'react'
import { Menu } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import Test1 from './views/Test1'
import Test2 from './views/Test2'
import Test3 from './views/Test3'

import type { MenuProps } from 'antd';

const commpont = {
  Test1,
  Test2,
  Test3
}

const items: MenuProps['items'] = [
  {
    label: '学习debugger、key、array',
    key: 'Test1',
    icon: <MailOutlined />,
  },
  {
    label: '学习自定义hook',
    key: 'Test2',
    icon: <AppstoreOutlined />,
  },
  {
    label: '学习组件传值',
    key: 'Test3',
    icon: <SettingOutlined />,
  },
];

export default function App() {
  const [current, setCurrent] = useState('Test1');

  const onClick: MenuProps['onClick'] = e => {
    setCurrent(e.key);
  };

  const Child = commpont[current as keyof typeof commpont]

  return (
    <div className='App'>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <div style={{ marginTop: 50 }}>
        <Child />
      </div>
    </div>
  )
}
