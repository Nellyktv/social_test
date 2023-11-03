import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';






const dialogsData = [{
  id: 1,
  name: 'Ира'
},

{
  id: 2,
  name: 'Настя'
},

{
  id: 3,
  name: 'Оля'
}]


const messagesData = [{
  id: 1,
  message: 'Hi'
},

{
  id: 2,
  message: 'How is your it-kamasutra?'
},

{
  id: 3,
  message: 'Yo'
}]

const postsData = [{
  id: 1,
  message: 'Hi,how are you',
  likesCount:12
},

{
  id: 2,
  message: 'It"s my first post',
  likesCount:5
}]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
