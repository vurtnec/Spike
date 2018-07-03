'use strict';

var kafka = require('kafka-node');
var Consumer = kafka.Consumer;
var client = new kafka.Client();

var consumer = new Consumer(
        client,
        [
            {topic: 'test', partition: 0}
        ],
        {
            autoCommit: false
        }
    );

var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'SPIKE'
});

connection.connect();

consumer.on('message', function (message) {
    console.log('received message.');
    connection.query('INSERT INTO SPIKE values(?,?)', [message.value, new Date()], function(error, results, fields){
        if(error){
            console.error(error);
        }
        console.log('insert: ' + results);
    });
});

consumer.on('error', function(err) {
    console.log('error', err);
});

client.once('connect', function () {
    client.loadMetadataForTopics([], function (error, results) {
        if (error) {
            return console.error(error);
        }
        console.log('connect');
    });
});