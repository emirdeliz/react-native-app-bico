import child_process from 'child_process';

let pwd  = process.cwd();
let path = pwd + '/node_modules/react-native/packager/packager.sh'
let packager = child_process.spawn(path, ['--port', '9091']);
let packagerReady = false;

packager.stdout.on('data', (data) => {
    if (packagerReady) return;
    console.log('PACKAGER: ' + data);
    if (data.indexOf('React packager ready.') >=0) {
        packagerReady = true;
    }
});

packager.stderr.on('data', (data) => {
    console.log('PACKAGER err: ' + data);
});

packager.on('close', (code) => {
    console.log('PACKAGER exited with code: ' + code);
});

process.on('exit', () => {
    packager.kill();
});

// ios/node_modules/react-native/packager/packager.sh --port 9091
// node /Users/brian/taskrabbit/tasker/ios/node_modules/react-native/packager/packager.js --port 9091

export default packager;
