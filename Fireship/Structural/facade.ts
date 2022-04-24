// Facade

class PlumbingSystem {
    // low level access to pumping system
    setPressure(v: number) { }
    turnOn() { }
    trunOff() { }
}

class ElectricalSystem {
    // low level access to electrical system
    setVoltage(v: number) { }
    turnOn() { }
    trunOff() { }
}

class House{
    private plumbing=new PlumbingSystem();
    private electrical= new ElectricalSystem();

    public turnOnSystem() {
        this.electrical.setVoltage(120);
        this.electrical.turnOn();
        
        this.plumbing.setPressure(500);
        this.plumbing.turnOn();
    }

    public shutDown() {
        this.plumbing.trunOff();
        this.electrical.trunOff();
    }
}

const client=new House();
client.turnOnSystem();
client.shutDown();