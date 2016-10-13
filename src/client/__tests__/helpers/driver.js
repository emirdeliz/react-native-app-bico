import './config';
import realWd from 'wd';
import wd from 'yiewd';
import color from 'colors';

const driverResult = (callback) => {
    console.log("DRIVER: starting it up");

    appiumPromise.then(() => {
        console.log("DRIVER: will init");
        driver = wd.remote(server);

        driver.on('status', (info) => {
            console.log(info.cyan);
        });
        driver.on('command', (meth, path, data) => {
            console.log(' > ' + meth.yellow, path.grey, data || '');
        });

        current = {};

        handler = (error, el) => {
            if (error) {
                console.log('error', error);
            }
            else if(typeof el === 'object'){
                console.log("Returned in current");
                current = el;
            }
            else {
                console.log("Returned following string", el);
            }

        };

        quit = () => {
            driver.quit(function(){
                process.exit(1);
            });
        };

        driver.init(caps, () => {
            console.log('driver started');
            callback({
                driver: driver,
                realWd: realWd,
                localServer: localServer,
                wd: wd,
            });
        });
    });
};

export default driverResult;
