import React from 'react';
import { invoke } from '@tauri-apps/api/tauri';

import logo from '../assets/logo.png';
import '../styles/tailwind.css';
import SettingsPopup from './SettingsPopup';

const Login = () => {
    return (
        <div className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0 object-contain object-scale-down unselectable">
          <header className="max-w-lg mx-auto my-auto">
            <h1 className="text-4xl my-auto font-bold text-black text-center object-scale-down">
              Due Di Service - CRM
            </h1>
            <img
              id="logo-image"
              src={logo}
              alt="logo"
              className="mx-auto my-auto max-w-md w-1/4 mt-8 mb-8"
            />
          </header>
          <main className="flexbg-white max-w-lg mx-auto my-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
            <div className="flex justify-between">
              <h3 className="font-bold text-1xl">Accedi al sistema</h3>
              <span className="">
                <SettingsPopup />
              </span>
            </div>
    
            <section className="mt-5">
              <form className="flex flex-col">
                <span
                  id="error-area"
                  className="text-red-500 text-bold text-sm mb-6 justify-center"
                />
                <div className="mb-6 pt-3 rounded bg-gray-200">
                  <span className="block text-gray-700 text-sm fond-bold mb-2 ml-3">
                    Nome utente
                  </span>
                  <input
                    type="text"
                    id="username-input-field"
                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3"
                    onChange={(e) => {
                    }}
                  />
                </div>
                <div className="mb-6 pt-3 rounded bg-gray-200">
                  <span className="block text-gray-700 text-sm fond-bold mb-2 ml-3">
                    Password
                  </span>
                  <input
                    type="password"
                    id="password-input-field"
                    className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3"
                    onChange={(e) => {
                    }}
                  />
                </div>
                <span
                  className="text-red-500 text-sm font-bold mb-2 ml-3"
                  id="login-error-message"
                />
                <div id="login-button-group" className="flex items-stretch">
                  <button
                    id="login-button"
                    className="mr-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 w-full"
                    type="button"
                    onClick={() => {
                    }}
                  >
                    Accedi
                  </button>
                  <button
                    id="exit-button"
                    className="mr-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 w-full"
                    type="button"
                    onClick={() => {
                        invoke('exit_app');
                    }}
                  >
                    Esci
                  </button>
                </div>
              </form>
            </section>
          </main>
        </div>
      );
};

export default Login;
