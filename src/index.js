import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './i18n';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import ShowPage from './routes/showPage';
import RulePage from './routes/rule';
import CardDb from './routes/cardDb';
import News from './routes/news';
import About from './routes/about';
import NewContent, { loader as newsLoader } from './routes/newContent';
import Devlopment from './routes/devlopment';



const router =
  createHashRouter(
    [
      {
        path: "/",
        element: <Root></Root>,
        children: [
          {
            path: "/",
            element: <ShowPage></ShowPage>,
          },
          {
            path: "rule",
            element: <RulePage></RulePage>
          },
          {
            path: "store",
            element: <CardDb></CardDb>
          },
          {
            path: "news",
            element: <News></News>
          },
          {
            path: "news/:path",
            element: <NewContent></NewContent>,
            loader: newsLoader,
          },
          {
            path: "about",
            element: <About></About>
          },
          {
            path: "devlopment",
            element: <Devlopment />
          }
        ]
      },
    ]
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
