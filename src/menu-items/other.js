import { MdDashboard } from 'react-icons/md';

const icons = {
    MdDashboard
}

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const other = {
    id: 'other',
    title: 'Other',
    type: 'group',
    children: [
        {
            id: 'one',
            title: 'one',
            type: 'item',
            url: '/one',
            icon: icons.MdDashboard,
            breadcrumbs: false
        },
        {
            id: 'two',
            title: 'two',
            type: 'item',
            url: '/two',
            icon: icons.MdDashboard,
            breadcrumbs: false
        }
    ]
};

export default other;