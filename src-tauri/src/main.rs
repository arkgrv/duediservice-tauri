#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod settings;

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler!(settings::save_connection_settings))
    .invoke_handler(tauri::generate_handler!(settings::load_connection_settings))
    .invoke_handler(tauri::generate_handler!(settings::exit_app))
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
