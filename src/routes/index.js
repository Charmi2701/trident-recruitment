import AddData from '../components/addData.js';
import DisplayStatus from '../components/displayStatus.js';

const routes = [
    {
        path: '/',
        component: DisplayStatus,
        title: 'Trident Recruitment'
    },
    {
        path: '/adddata',
        component: AddData,
        title: 'New Data'
    },
];

export default routes;