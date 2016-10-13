// APPIUM -----------------
import child_process from 'child_process';
import Promise from 'promise';

// KOA -----------------
import localServer from './server';
import './packager';

const appiumProc = child_process.spawn('appium', [
    '-p', '4724',
    '--default-capabilities', '{"fullReset":true}'
]);

const server = {
    host: 'localhost',
    port: 4724 // one off from normal
};

let loadedAppium = null;

const appiumPromise = new Promise((resolve, reject) => {
    appiumProc.stdout.on('data', (data) => {
        if (loadedAppium) return;
        console.log('APPIUM: ' + data);

        if (data.indexOf('Appium REST http interface listener started') >= 0) {
            loadedAppium = true;
            resolve(data);
        }
    });
});

appiumProc.stderr.on('data', (data) => {
    console.log('APPIUM err: ' + data);
    appiumProc.kill();
});

process.on('exit', () => {
    appiumProc.kill();
});

// Config for Appium
const UNLIMITED = 100000;

let caps = {
    browserName: '',
    'appium-version': '1.5.1',
    platformName: 'iOS',
    platformVersion: '9.3',
    deviceName: 'iPhone 6s',
    autoLaunch: 'true',
    newCommandTimeout: UNLIMITED,
    app: process.cwd() + "/testbuild/test_ios/sample_ios.zip"
};
