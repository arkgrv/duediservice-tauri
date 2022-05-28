import { useState } from 'react';
import { MdSettings } from 'react-icons/md';
import { invoke } from '@tauri-apps/api/tauri';
import { ConnectionSettings } from '../utils/settings';

const settings = new ConnectionSettings();

// Load settings
invoke('load_connection_settings').then((connSettings) => {
    settings.fromJSONString(connSettings as string);
});

const SettingsPopup = () => {
    const [showSettings, setShowSettings] = useState(false);
    
  
    return (
      <>
        <button
          className="flex justify-end"
          type="button"
          onClick={() => setShowSettings(true)}
        >
            <MdSettings />
        </button>
  
        {showSettings ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Impostazioni connessione
                    </h3>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <div className="mb-6 pt-3 rounded bg-gray-200">
                      <span className="block text-gray-700 text-sm fond-bold mb-2 ml-3">
                        Hostname
                      </span>
                      <input
                        type="text"
                        id="settings-hostname-input-field"
                        className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3"
                        onChange={(e) => {
                            settings.setHostname(e.target.value);
                        }}
                        defaultValue={settings.getHostname()}
                      />
                    </div>

                    <div className="mb-6 pt-3 rounded bg-gray-200">
                      <span className="block text-gray-700 text-sm fond-bold mb-2 ml-3">
                        Nome utente
                      </span>
                      <input
                        type="text"
                        id="settings-username-input-field"
                        className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3"
                        onChange={(e) => {
                            settings.setUsername(e.target.value);
                        }}
                        defaultValue={settings.getUsername()}
                      />
                    </div>
                    
                    <div className="mb-6 pt-3 rounded bg-gray-200">
                      <span className="block text-gray-700 text-sm fond-bold mb-2 ml-3">
                        Password
                      </span>
                      <input
                        type="password"
                        id="settings-password-input-field"
                        className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3"
                        onChange={(e) => {
                            settings.setPassword(e.target.value);
                        }}
                        defaultValue={settings.getPassword()}
                      />
                    </div>

                    <div className="mb-6 pt-3 rounded bg-gray-200">
                      <span className="block text-gray-700 text-sm fond-bold mb-2 ml-3">
                        Nome database
                      </span>
                      <input
                        type="text"
                        id="settings-dbname-input-field"
                        className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3"
                        onChange={(e) => {
                            settings.setDbname(e.target.value);
                        }}
                        defaultValue={settings.getDbname()}
                      />
                    </div>

                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      id="settings-save-button"
                      className="mr-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 w-full"
                      type="button"
                      onClick={() => {
                        invoke('save_connection_settings', { settings: JSON.stringify(settings) });
                        setShowSettings(false);
                      }}
                    >
                      Salva
                    </button>
                    <button
                      id="settings-cancel-button"
                      className="mr-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 w-full"
                      type="button"
                      onClick={() => {
                        setShowSettings(false);
                      }}
                    >
                      Annulla
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" />
          </>
        ) : null}
      </>
    );
  };

  export default SettingsPopup;