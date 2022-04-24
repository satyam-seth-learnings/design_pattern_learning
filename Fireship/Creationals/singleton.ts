// Singleton

class Settings {
    static instance: Settings;

    // prevent new with private contructor
    private constructor() {

    }

    static getInstance(): Settings {
        if (!Settings.instance) {
            Settings.instance = new Settings();
        }

        return Settings.instance;
    }
}

// const settings = new Settings();
const settings = Settings.getInstance();