import { Outlet } from 'react-router-dom';
// project imports
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import Menu from './Menu';
// import navigation from 'menu-items';
// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
    return (
        <>
            <Header />

            <Sidebar>
                <Menu />
            </Sidebar>

            <Main>
                <Outlet />
            </Main>
        </>
    );
};

export default MainLayout;