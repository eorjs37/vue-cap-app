import { App } from '@capacitor/app';
import { Device } from '@capacitor/device';

const getOsInfo = () => {
  return App.getInfo();
};
const logDeviceInfo = () => {
  return Device.getInfo();
};

export { getOsInfo, logDeviceInfo };
