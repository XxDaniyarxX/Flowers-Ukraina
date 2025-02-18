import { createBrowserRouter } from 'react-router-dom'
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import News from "./pages/News.jsx";
import Reviews from "./pages/Reviews.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Forum from "./pages/Forum.jsx";
import Profile from './pages/Profile.jsx';
import FotoDostavki from './pages/FotoDostavki.jsx';
import VideoOtchet from './pages/VideoOtchet.jsx';
import GiftClient from './pages/GiftClient.jsx'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '*',
                element: <NotFound/>
            },
            {
                path: 'news',
                element: <News/>
            },
            {
                path: 'reviews',
                element: <Reviews />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'forum',
                element: <Forum />
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'fotodostavki',
                element: <FotoDostavki />
            },
            {
                path: "videootchet",
                element: <VideoOtchet />
            },
            {
                path: "giftclients",
                element: <GiftClient />
            }

        ]
    }
])
