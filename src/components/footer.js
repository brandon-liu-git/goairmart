import React, { useState } from 'react';
import { TabBar } from 'antd-mobile';
import { Layout } from 'antd';
import data from '../data';

const { Footer } = Layout;

const { tabs } = data;

function PageFooter() {
    const [activeKey, setActiveKey] = useState('todo')

    return (
        <Footer style={{ textAlign: 'center', background: 'white' }}>
          <TabBar activeKey={activeKey} onChange={setActiveKey}>
            {tabs.map(item => (
              <TabBar.Item style={{ display: 'inline-block' }} key={item.key} icon={item.icon} title={item.title} />
            ))}
          </TabBar>
        </Footer>
    )
}

export default PageFooter;