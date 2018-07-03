'use strict';


module.exports = app => {
    app.beforeStart(async () => {
        console.log('hello, start server.');
    });

    app.beforeClose(async () => {
        console.log('hello, close server.');
    });
};