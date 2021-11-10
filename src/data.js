import {
    UserOutline,
    TextOutline
} from 'antd-mobile-icons';
import { ShoppingFilled } from '@ant-design/icons';


const tabs = [
    {
        key: 'home',
        title: 'Home',
        icon: <ShoppingFilled />,
    },
    {
        key: 'orders',
        title: 'Orders',
        icon: <TextOutline />,
    },
    {
        key: 'personalCenter',
        title: 'Account',
        icon: <UserOutline />,
    },
]

const userCategories = [
    {
        key: 'All',
        title: 'All',
        value: 'all'
    },
    {
        key: 'Following',
        title: 'Following',
        value: 'following'
    },
    {
        key: 'Category1',
        title: 'Category1',
        value: 'category1'
    },
    {
        key: 'Category2',
        title: 'Category2',
        value: 'category2'
    },
    {
        key: 'Category3',
        title: 'Category3',
        value: 'category3'
    }
]

const users = [
    {
        key: 'user1',
        title: 'First Name',
        value: 'First Name'
    },
    {
        key: 'user2',
        title: 'First Name',
        value: 'First Name'
    },
    {
        key: 'user3',
        title: 'First Name',
        value: 'First Name'
    },
    {
        key: 'user4',
        title: 'First Name',
        value: 'First Name'
    },
    {
        key: 'user4',
        title: 'First Name',
        value: 'First Name'
    },
    {
        key: 'user4',
        title: 'First Name',
        value: 'First Name'
    },
    {
        key: 'user5',
        title: 'First Name',
        value: 'First Name'
    }
]

const items = [
    {
        key: '1',
        title: 'Redness Store',
        deadline: '9/31/2021 12:00 PM',
        storeOwner: 'Store Owner',
        image: 'https://s3-alpha-sig.figma.com/img/fac4/a74a/af68f39450ff693469a70ebf7c82b1ea?Expires=1637539200&Signature=YJe~Gbew8kzoYtVtpJH~maDGwtAvtpOuxvRwOQo7708g~hhYWMButXOwFHs4Fs84sVaudExL1Kj8t8eFlB4QvdQq3-CHAdnNmvOC2bthrNkYmNf-N94haWALgpvrU~eskENmW82bFWhfhg4oNBYk~aIbEldJhaiI9kd1j7hAVsUcHBYR1r-JQcRW08QwEMyZi32NsZpbN5reoZzZ6v4qJKPVgGXOs9vcluiQCEKtXhpp07OBwTd2Z220L8hDTQa5dgX9BVbSPVs6LvLbaxU37B5XpgBgSXMobjM9QAMcjAimwj1Aenev5afBjU9kJQD~FU8Q9g~6~Lkr7GMtLdIZPw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
        key: '2',
        title: 'Dullness Store',
        deadline: '9/31/2021 12:00 PM',
        storeOwner: 'Store Owner',
        image: 'https://s3-alpha-sig.figma.com/img/fac4/a74a/af68f39450ff693469a70ebf7c82b1ea?Expires=1637539200&Signature=YJe~Gbew8kzoYtVtpJH~maDGwtAvtpOuxvRwOQo7708g~hhYWMButXOwFHs4Fs84sVaudExL1Kj8t8eFlB4QvdQq3-CHAdnNmvOC2bthrNkYmNf-N94haWALgpvrU~eskENmW82bFWhfhg4oNBYk~aIbEldJhaiI9kd1j7hAVsUcHBYR1r-JQcRW08QwEMyZi32NsZpbN5reoZzZ6v4qJKPVgGXOs9vcluiQCEKtXhpp07OBwTd2Z220L8hDTQa5dgX9BVbSPVs6LvLbaxU37B5XpgBgSXMobjM9QAMcjAimwj1Aenev5afBjU9kJQD~FU8Q9g~6~Lkr7GMtLdIZPw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
        key: '3',
        title: 'Dullness Store',
        deadline: '9/31/2021 12:00 PM',
        storeOwner: 'Store Owner',
        image: 'https://s3-alpha-sig.figma.com/img/fac4/a74a/af68f39450ff693469a70ebf7c82b1ea?Expires=1637539200&Signature=YJe~Gbew8kzoYtVtpJH~maDGwtAvtpOuxvRwOQo7708g~hhYWMButXOwFHs4Fs84sVaudExL1Kj8t8eFlB4QvdQq3-CHAdnNmvOC2bthrNkYmNf-N94haWALgpvrU~eskENmW82bFWhfhg4oNBYk~aIbEldJhaiI9kd1j7hAVsUcHBYR1r-JQcRW08QwEMyZi32NsZpbN5reoZzZ6v4qJKPVgGXOs9vcluiQCEKtXhpp07OBwTd2Z220L8hDTQa5dgX9BVbSPVs6LvLbaxU37B5XpgBgSXMobjM9QAMcjAimwj1Aenev5afBjU9kJQD~FU8Q9g~6~Lkr7GMtLdIZPw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
        key: '4',
        title: 'Dullness Store',
        deadline: '9/31/2021 12:00 PM',
        storeOwner: 'Store Owner',
        image: 'https://s3-alpha-sig.figma.com/img/fac4/a74a/af68f39450ff693469a70ebf7c82b1ea?Expires=1637539200&Signature=YJe~Gbew8kzoYtVtpJH~maDGwtAvtpOuxvRwOQo7708g~hhYWMButXOwFHs4Fs84sVaudExL1Kj8t8eFlB4QvdQq3-CHAdnNmvOC2bthrNkYmNf-N94haWALgpvrU~eskENmW82bFWhfhg4oNBYk~aIbEldJhaiI9kd1j7hAVsUcHBYR1r-JQcRW08QwEMyZi32NsZpbN5reoZzZ6v4qJKPVgGXOs9vcluiQCEKtXhpp07OBwTd2Z220L8hDTQa5dgX9BVbSPVs6LvLbaxU37B5XpgBgSXMobjM9QAMcjAimwj1Aenev5afBjU9kJQD~FU8Q9g~6~Lkr7GMtLdIZPw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    }
]

export default {
    tabs,
    userCategories,
    items,
    users
};