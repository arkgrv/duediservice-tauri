class ConnectionSettings {
    private hostname: string;
    private username: string;
    private password: string;
    private dbname: string;

    constructor(hostname: string = '', username: string = '', password: string = '', dbname: string = '') {
        this.hostname = hostname;
        this.username = username;
        this.password = password;
        this.dbname = dbname;
    }

    public getHostname(): string {
        return this.hostname;
    }

    public setHostname(hostname: string): void {
        this.hostname = hostname;
    }

    public getUsername(): string {
        return this.username;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public getDbname(): string {
        return this.dbname;
    }

    public setDbname(dbname: string): void {
        this.dbname = dbname;
    }

    public toString(): string {
        return `${this.hostname}/${this.dbname}`;
    }

    public fromJSONString(json: string): void {
        const settings = JSON.parse(json);
        this.hostname = settings.hostname;
        this.username = settings.username;
        this.password = settings.password;
        this.dbname = settings.dbname;
    }
}

export {
    ConnectionSettings,
}