import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import CardRepo from './service/card_repo';

const authService = new AuthService();
const imageUploader=new ImageUploader();
const FileInput=props=>(<ImageFileInput {...props} imageUploader={imageUploader}/>);
const cardRepo=new CardRepo();
ReactDOM.render(
  <React.StrictMode>
    <App cardRepo={cardRepo} authService={authService} FileInput={FileInput}/>
  </React.StrictMode>,
  document.getElementById('root')
);
