
import data from '../data';
import { Layout, Button, Card } from 'antd';
import { UserOutlined, FieldTimeOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

import './content.less';

const { Content } = Layout;

const { items, users, userCategories } = data;

function PageContent() {
    const [selectedUserCategory, updateSelectedUserCategory] = useState('all')
    const [selectedItemCategory, updateSelectedItemCategory] = useState('all')
    const [lastVisitedItem, updatelastVisitedItem] = useState('1')

    return (
        <Content className="site-layout">
            <div className="site-layout-background" style={{ minHeight: 500 }}>
                <div className="imagePlace">
                    <img
                        alt="example"
                        src="https://s3-alpha-sig.figma.com/img/b548/7384/1efdee96c77b2e50aa34ca4d684f0aa9?Expires=1637539200&Signature=UCnIxE0F1HISW5a2fOT3uLRFBGfYz9Sro8-SnuXh7nhM2EqLX5RC7v9REKBsEGQ6zeQd1hRjiUnVSO8U1tOkgTla2j-tYb1Sy6oT784erIe~VBf-adi9l8qdgXCwHjNLC2sP1WxfTRFMY11bl1HHwpziN4Yj7wqj7tHNDOEXkuIavkJbszql0ZG44P-9HUMP1LpFXxQ2LzUB~oguhg66xHz~zO9ANgSUQI-~MxdyPd5aOlfmEHruWlx02PDAPZeFz1Oh0ngz9NkMoWgI2RHSo94Hz9QxVVuh4A8RdPnv7k~Od4Wqk23NdCbRVhDDLZRbVeezPI6NISi4N09bLB8HAw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        className='imageStyle'
                    />
                    <div className="imageTextHeader">
                        AirMart
                    </div>
                    <div className="imageTextBlock">
                        Offering only the best, freshest <br />
                        harvest from local stores!
                    </div>
                </div>
                <div className="category">
                    {userCategories.map(item => (
                        <Button 
                            type={item.value === selectedUserCategory ? 'primary' : 'default'} 
                            className="categoryItem" 
                            shape="round" 
                            size={"large"}
                            onClick={() => updateSelectedUserCategory(item.value)}
                        >
                            {item.title}
                        </Button>
                    ))}
                </div>
                <div className="userGroup">
                    {users.map(item => (
                        <div className="userItem">
                            <UserOutlined style={{ paddingLeft: '30%', fontSize: '25px' }} />
                            <div>{item.title}</div>
                        </div>
                    ))}
                </div>
                <div className="category">
                    {userCategories.map(item => (
                        <Button 
                            type={item.value === selectedItemCategory ? 'primary' : 'default'} 
                            className="categoryItem" 
                            shape="round" 
                            size={"large"}
                            onClick={() => updateSelectedItemCategory(item.value)}
                        >
                            {item.title}
                        </Button>
                    ))}
                </div>
                <div className="itemList">
                    {items.map(item => (
                        <Card
                            className="itemCard"
                            hoverable
                            style={{ width: 343, height: 350 }}
                            cover={<img alt="example" className="itemCardImage" src={item.image} />}
                            onClick={() => updatelastVisitedItem(item.key)}
                        >
                            <div className="cardTitleText">
                                <span>{item.title}</span>
                            </div>
                            <br />
                            <div className="cardDeadlineText">
                                <FieldTimeOutlined />{" Deadline: " + item.deadline}
                            </div>
                            <br />
                            <div className="cardOwnerText">
                                <UserOutlined />{" " + item.storeOwner}
                                {lastVisitedItem === item.key ?
                                    <Button style={{ borderRadius: '50px', color: 'green', fontWeight: 'bold', float: 'right', marginLeft: 100}}>
                                        Last Visited
                                    </Button>
                                : ""}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </Content>
    )
}

export default PageContent;