import { Layout, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './header.css';

const { Header } = Layout;
const { Option } = Select;


function PageHeader() {
    return (
        <Header style={{  width: '100%', color: 'white', borderBottom: '1px solid lightGrey' }}>
            <div className="leftBlock">
                <div className="logo" />
            </div>
            <div className="centerBlock">
                <div className="zipcode">
                    <sapn>Zipcode:</sapn>
                    <Select defaultValue={94066} style={{ width: 100, color: 'green', fontWeight: 'bold' }} bordered={false}>
                        <Option value={94066}>94066</Option>
                        <Option value={92122}>92122</Option>
                        <Option value={92092}>92092</Option>
                    </Select>
                </div>
            </div>
            <div className="rightBlock">
                <SearchOutlined style={{ fontSize: '25px', color: 'black', float: 'right', marginRight: '20px'}}/>
            </div>
        </Header>
    )
}
  
export default PageHeader;