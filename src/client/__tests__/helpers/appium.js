import 'colors';
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
global.expect = chai.expect;
var should = chai.should();

import bootAppium from './driver';

let resetEachTime = false;

// GLOBAL TRACKING -----------------
let rootDriver = null;
let localServer = null;
let allPassed = true;
let timeoutTime = 300000;

const resetSimulator = (callback) => {
    if (!rootDriver) {
        callback(true);
        return;
    }

    localServer.before();

    rootDriver.run(function* () {
        // wait for it to show up from appium
        let i = 0;
        while (i < 50) {
            try {
                // best-case first
                // reset data
                yield rootDriver.elementById('ResetTest').click();
                break;
            }
            catch (e) {
                console.log(e);
            }

            try {
                // if on crashed (red) app
                yield rootDriver.elementById('redbox-reload').click();
            }
            catch (e) {
                console.log(e);
            }

            try {
                // is there an alert?
                yield rootDriver.elementByName('OK').click();
            }
            catch (e) {
                console.log(e);
            }

            try {
                // now does it work?
                // reset data
                yield rootDriver.elementById('ResetTest').click();
                break;
            }
            catch (e) {
                console.log(e);
            }

            try {
                // ok, fine. shake it and click reload
                yield rootDriver.shake();
                yield rootDriver.elementById('Reload').click();
            }
            catch (e) {
                console.log(e);
            }

            // wait for a bit
            yield rootDriver.sleep(250);
            i++;
        }

        if (i >= 50) {
            // it's not coming back
            console.log("SIMULATOR DIED");
            callback(true);
        }
        else {
            callback(false);
        }
    });
};

const launchSimulator = (callback) => {
    bootAppium(function(options) {
        console.log("booted!")
        rootDriver  = options.driver;
        realWd      = options.realWd;
        wd          = options.wd;
        localServer = options.localServer;

        chaiAsPromised.transferPromiseness = realWd.transferPromiseness;

        resetSimulator(callback);
    });
};

const quitSimulator = (callback) => {
    if (!rootDriver) {
        callback();
    }
    else {
        rootDriver.run(function* () {
            console.log("quitting");
            try {
                yield rootDriver.quit();
                console.log("quit");
            }
            catch(e) {
                console.log("ERROR quitting: " + e);
            }

            rootDriver = null;
            callback();
        });
    }
};

// BEFORE ENTIRE SUITE -----------------

beforeEach((done) => {
    // console.log("before suite");
    this.timeout(timeoutTime);
    done();
});

// AFTER ENTIRE SUITE -----------------

afterEach((done) => {
    this.timeout(timeoutTime);
    // console.log("after suite");
    quitSimulator(() => {
        done();
    });
});

// BEFORE EACH TEST -----------------

let testCount = 0;
beforeEach((done) => {
    this.timeout(timeoutTime);
    testCount++;
    console.log("beforeEach");
    resetSimulator((error) => {
        if (error) {
            console.log("error; will quit");
            quitSimulator(() => {
                launchSimulator((error) => {
                    if (error) {
                        throw ("unable to launch simulator");
                    }
                    else {
                        done();
                    }
                });
            });
        }
        else {
            done();
        }
    });

});

// AFTER EACH TEST -----------------
afterEach((done) => {
    this.timeout(timeoutTime);
    console.log("afterEach");
    allPassed = allPassed && this.currentTest.state === 'passed';
    localServer.after();

    if (resetEachTime) {
        quitSimulator(() => {
            done();
        });
    }
    else {
        done();
    }
});

// EXPORT HELPER -----------------

// override "it" to remove test boilerplate
const newIt = (name, callback) => {
    it(name, (done) => {
        this.timeout(timeoutTime);
        rootDriver.run(function* () {
            yield callback(rootDriver, done)
        });
    });
};

// override "it" to remove test boilerplate
const itOnly = (name, callback) => {
    it.only(name, (done) => {
        this.timeout(timeoutTime);
        rootDriver.run(function* () {
            yield callback(rootDriver, done)
        });
    });
};

// override "it" to remove test boilerplate
const itPending = (name, callback) => {
    it.skip(name, (done) => {
        this.timeout(timeoutTime);
        rootDriver.run(function* () {
            yield callback(rootDriver, done)
        });
    });
};

export default newIt;
export { itOnly, itPending };
