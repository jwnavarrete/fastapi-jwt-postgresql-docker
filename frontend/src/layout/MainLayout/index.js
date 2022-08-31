// project imports
import react, { useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import Menu from './Menu';
import AuthService from '@services/AuthService'
import { useNavigate } from 'react-router-dom'

// import navigation from 'menu-items';
// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if(!AuthService.isLoggedIn()){
            navigate('auth/login')
        }
    }, []);

    return (
        <>
            <Header />

            <Sidebar>
                <Menu />
            </Sidebar>

            <Main/>
        </>
    );
};

export default MainLayout;