import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Auth0ProviderWithHistory from './Auth0ProviderWithHistory';
import LoginButton from './auth0/login';
import Profile from './auth0/profile';
import LogoutButton from './auth0/logout';
import React, { useEffect } from 'react';
import ReactLoading from "react-loading";
import './css/navbar.css'

const Home = () => {
    const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

    useEffect(() => {
        console.log('isAuthenticated:', isAuthenticated);
    }, [isAuthenticated]);
    if (isLoading) {
        return <center> <ReactLoading type="balls" color="#0000FF"
            height={100} width={80} /></center>;
    }



    return (
        <Auth0ProviderWithHistory>
            <div className='con'>

                <div className='nav'>
                    <img className='img' width={"5%"} src="../logo192.png" alt="Description of the image" />
                    <Link to="/" className="btn">
                        Home
                    </Link>
                    <Link to="/chat" className="btn">
                        Chat Area
                    </Link>
                    <Link to="/news" className="btn">
                        News
                    </Link>
                    <Link to="/about" className="btn">
                        about
                    </Link>
                    <div className='right'>
                        {isAuthenticated ? (
                            <div className='profile'>

                                <Profile className='pro' />   .  . .
                                <LogoutButton className='logout' />

                            </div>
                        ) : (
                            <div className='profile'>
                                <LoginButton className='login' />
                            </div>
                        )}
                    </div>
                </div>

            </div>


        </Auth0ProviderWithHistory>
    );
}

export default Home;
