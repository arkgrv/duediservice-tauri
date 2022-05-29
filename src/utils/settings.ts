const defaultSettings = {
    hostname: '',
    username: '',
    password: '',
    database: '',
};

type ConnectionSettings = typeof defaultSettings;

export type { ConnectionSettings };

export {
    defaultSettings
}