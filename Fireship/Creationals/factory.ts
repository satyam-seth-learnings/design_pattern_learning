// Factory

class IOSButton { }

class AndroidButton { }

const os = 'ios'

// Without Factory
const button1 = os === 'ios' ? new IOSButton() : new AndroidButton()

// With Factory
class ButtonFactory {
    createButton(os: string): IOSButton | AndroidButton {
        if (os === 'ios') {
            return new IOSButton();
        } else {
            return new AndroidButton();
        }
    }
}

const factory = new ButtonFactory();
const btn1 = factory.createButton(os);