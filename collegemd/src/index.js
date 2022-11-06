import React, { isValidElement } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get } from 'firebase/database'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiXPO-iHRvnO7P7Ir-JrclPJzegGCvB3M",
  authDomain: "collegemd-c5986.firebaseapp.com",
  databaseURL: "https://collegemd-c5986-default-rtdb.firebaseio.com",
  projectId: "collegemd-c5986",
  storageBucket: "collegemd-c5986.appspot.com",
  messagingSenderId: "427837519478",
  appId: "1:427837519478:web:f95a9bd5633d77441cd157",
  measurementId: "G-Y0PPZ31LWQ"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const reference = ref(db, 'Sicknesses/')

async function updateUserBoolean(ill, symptom, data) {
  const db = getDatabase();
  let truth = false
  for (let i = 0; i < data.length; i++) {
    if ((symptom + ", ") === data[i])
    {
      truth = true
    }
  }
    
  set(ref(db, 'status/' + ill), {
      display: truth
    }
  )};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);