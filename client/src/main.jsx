import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import Error from './pages/Error.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

// subjects

import Story from './pages/Story.jsx';
import HeroJourney from './pages/HeroJourney.jsx';
import Premise from './pages/Premise.jsx';
import Plot from './pages/Plot.jsx';
import Themes from './pages/Themes.jsx';
import Conflict from './pages/Conflict.jsx';
import Scenes from './pages/Scenes.jsx';
import MainCharacters from './pages/MainCharacters.jsx';
import SecondaryCharacters from './pages/SecondaryCharacters.jsx';
import Setting from './pages/Setting.jsx';
import Subtext from './pages/Subtext.jsx';
import Description from './pages/Description.jsx';
import Dialogue from './pages/Dialogue.jsx';
import Suspense from './pages/Suspense.jsx';
import POV from './pages/POV.jsx';
import Voice from './pages/Voice.jsx';
import Antagonists from './pages/Antagonists.jsx';
import TheFirstWords from './pages/TheFirstWords.jsx';
import TheNextWords from './pages/TheNextWords.jsx';
import TheLastWords from './pages/TheLastWords.jsx';
import WritingDevices from './pages/WritingDevices.jsx';
import WritersBlock from './pages/WritersBlock.jsx';
import Editing from './pages/Editing.jsx';
import Title from './pages/Title.jsx';
import Logline from './pages/Logline.jsx';
import Synopsis from './pages/Synopsis.jsx';
import References from './pages/References.jsx';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Story',
        element: <Story />,
      },
      {
        path: '/HeroJourney',
        element: <HeroJourney />,
      },
      {
        path: '/Premise',
        element: <Premise />,
      },
      {
        path: '/Plot',
        element: <Plot />,
      },
      {
        path: '/Themes',
        element: <Themes />,
      },
      {
        path: '/Conflict',
        element: <Conflict />,
      },
      {
        path: '/Scenes',
        element: <Scenes />,
      },
      {
        path: '/MainCharacters',
        element: <MainCharacters />,
      },
      {
        path: '/SecondaryCharacters',
        element: <SecondaryCharacters />,
      },
      {
        path: '/Setting',
        element: <Setting />,
      },
      {
        path: '/Subtext',
        element: <Subtext />,
      },
      {
        path: '/Description',
        element: <Description />,
      },
      {
        path: '/Dialogue',
        element: <Dialogue />,
      },
      {
        path: '/Suspense',
        element: <Suspense />,
      },
      {
        path: '/POV',
        element: <POV />,
      },
      {
        path: '/Voice',
        element: <Voice />,
      },
      {
        path: '/Antagonists',
        element: <Antagonists />,
      },
      {
        path: '/TheFirstWords',
        element: <TheFirstWords />,
      },
      {
        path: '/TheNextWords',
        element: <TheNextWords />,
      },
      {
        path: '/TheLastWords',
        element: <TheLastWords />,
      },
      {
        path: '/WritingDevices',
        element: <WritingDevices />,
      },
      {
        path: '/WritersBlock',
        element: <WritersBlock />,
      },
      {
        path: '/Editing',
        element: <Editing />,
      },
      {
        path: '/Title',
        element: <Title />,
      },
      {
        path: '/Logline',
        element: <Logline />,
      },
      {
        path: '/Synopsis',
        element: <Synopsis />,
      },
      {
        path: '/References',
        element: <References />,
      },

      {
        path: '/login',
        element: <Login />
      },

      {
        path: '/signup',
        element: <Signup />
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
