#[derive(Clone, serde::Deserialize, serde::Serialize)]
struct ConnectionSettings {
    hostname: String,
    username: String,
    password: String,
    dbname: String
}

use preferences::{AppInfo, PreferencesMap, Preferences};
const APP_INFO: AppInfo = AppInfo{name: "Due Di Service - CRM", author: "Arkadiy Grigor'yevich"};

const PREFS_KEY: &str = "WMv5kL7QNhtpdMRJ";

#[tauri::command]
pub fn save_connection_settings(settings: String) {
    // Parse the settings into a ConnectionSettings struct
    let settings: ConnectionSettings = serde_json::from_str(&settings).unwrap();
    let mut preferences = PreferencesMap::new();

    // Save settings using prefernces
    preferences.insert("conn_hostname".into(), settings.hostname);
    preferences.insert("conn_username".into(), settings.username);
    preferences.insert("conn_password".into(), settings.password);
    preferences.insert("conn_dbname".into(), settings.dbname);

    // Save the preferences
    preferences.save(&APP_INFO, PREFS_KEY).unwrap();
}

#[tauri::command]
pub fn load_connection_settings() -> String {
    // Load the preferences
    let load_result = PreferencesMap::<String>::load(&APP_INFO, PREFS_KEY);

    let preferences = match load_result {
        Ok(preferences) => preferences,
        Err(_) => {
            // If the preferences are not found, return an empty ConnectionSettings struct
            return serde_json::to_string(&ConnectionSettings{
                hostname: "".into(),
                username: "".into(),
                password: "".into(),
                dbname: "".into()
            }).unwrap();
        }
    };

    // Get the settings
    let hostname = preferences.get("conn_hostname").unwrap().clone();
    let username = preferences.get("conn_username").unwrap().clone();
    let password = preferences.get("conn_password").unwrap().clone();
    let dbname = preferences.get("conn_dbname").unwrap().clone();

    // Return the settings
    let settings = ConnectionSettings {
        hostname,
        username,
        password,
        dbname
    };

    // Return the settings
    let settings = serde_json::to_string(&settings).unwrap();
    return settings;
}

#[tauri::command]
pub fn exit_app() {
    std::process::exit(0);
}