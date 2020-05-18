function ElectroDevice(name, watt) {
    this.name = name;
    this.watt = watt;
    this.isEnabled = false;
    
    this.enable = function() {
      this.isEnabled = true;
      console.log('The device is connected to the network');
    }
    this.disable = function() {
      this.isEnabled = false;
      console.log('The device is disconnected from the network');
    }
  }
function washer(name, watt) {
    electroDevice.call(this, name, watt);
}
function microwave(name, watt) {
    electroDevice.call(this, name, watt);
}
function room(devices) {
    this.devices = devices;
    this.addDevice = function(device) {
      this.devices.push(device);      
    }
    this.getFullWatt = function() {
      let FullWatt = 0;
      for(let i = 0; i < this.devices.length; i++) {
        FullWatt += this.devices[i].weight;
      }
      return FullWatt;
    }
    this.deviceSearch = function(name) {
      for(let i = 0; i < this.devices.length; i++){
        if (this.devices[i].name === name) {
          console.log('Device found');
          return this.devices[i];
        }
      }
      console.log('Device not found!');
      return 0;
    }
}
let samsungWasher = new washer('samsung', 1000);
let mwTefal = new microwave('tefal', 750);
let myRoom = new room([samsungWasher, mwTefal]);
  
myRoom.deviceSearch('tefal');
mwTefal.enable();
  