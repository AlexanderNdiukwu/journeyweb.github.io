import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routePages/App.js';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './routePages/contact.js';
import Signup from './routePages/signup.js'
import Error from './routePages/error.js';
import Login from './routePages/login.js';
import Intro from './sideDetailsNote/intro.js'
import Introduction from './sideDetailsNote/introduction.js'
import Lboh from './sideDetailsNote/lboh.js'
import Svscode from './sideDetailsNote/svscode.js'
import Lbojs from './sideDetailsNote/lbojs.js'
import LProj1 from './sideDetailsNote/lproj1.js'
import Proj1 from './sideDetailsNote/proj1.js'
import Proj2 from './sideDetailsNote/proj2.js'
import LProj2 from './sideDetailsNote/lproj2.js'
import Lreact from './sideDetailsNote/lreact.js'
import Lapi from './sideDetailsNote/lapi.js'
import Lcss from './sideDetailsNote/lcss.js'
import Ltailwind  from './sideDetailsNote/ltailwind.js'
import LreponsC from './sideDetailsNote/lreponsC.js'
import Youtubelinks from './sideDetailsNote/youtubelinks.js'
import Welcome from './routePages/welcome.js'
import store from './store/store.js'
import {Provider} from 'react-redux'
// import userSlice from './userSlicer/userSlicer.js'



const router = createBrowserRouter([
  { path: '/', element: <App />,
    errorElement:<div>errorElement</div>,
    children:[
      { path: "/", element: <Welcome /> },
      { path: "/INTRO", element: <Intro /> },
      { path: "/INTRODUCTION", element: <Introduction /> },
      { path: "/SETTING UP VSCODE", element: <Svscode /> },
      { path: "/LEARNING BASIS OF HTML", element: <Lboh /> },
      { path: "/LEARNING CSS", element: <Lcss /> },
      { path: "/LEARN RESPONSIVE CSS", element: <LreponsC /> },
      { path: "/LEARNING TAILWIND", element: <Ltailwind /> },
      { path: "/LEARN BASIS OF JAVASCRIPT(JS)", element: <Lbojs /> },
      { path: "/PROJECTS ON HTML,TAILWIND AND JS", element: <LProj1 /> },
      { path: "/START BUILDING PROJECTS", element: < Proj1/> },
      { path: "/LEARN REACT", element: <Lreact /> },
      { path: "/LEARN API", element: <Lapi /> },
      { path: "/PROJECTS ON REACTS", element: <LProj2 /> },
      { path: "/START BUILDING PROJECTS ON REACTS", element: <Proj2/> },
      { path: "/YOUTUBE LINKS", element: <Youtubelinks /> },
    
    ]
   },
  { path: 'contact', element: <Contact /> },
  { path: '/signup', element: <Signup /> },
  { path: '/login', element: <Login /> },
  { path: '*', element: <Error /> },
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <RouterProvider router={router}/>

  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
