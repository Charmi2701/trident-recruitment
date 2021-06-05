import AddData from '../components/addData.js';
import DisplayStatus from '../components/displayStatus.js';
import SignIn from '../components/sign_in.js';

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
    {
        path: '/signin',
        component: SignIn,
        title: 'Sign In'
    },
];

export default routes;