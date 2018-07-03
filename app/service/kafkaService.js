'use strict';
const Service = require('egg').Service;
var kafka = require('kafka-node');
var Producer = kafka.Producer;
var kafkaClient = new kafka.Client();
var producer = new Producer(kafkaClient);

class KafkaService extends Service {

    async sendMessage(productId) {
        console.log('sendMessage');
        var payloads = [
            { topic: 'test', messages: 'buy one product: ' + productId, partition: 0 }
        ];

        producer.send(payloads, function (err, data) {
            console.log(data);
        });

        producer.on('error', function (err) {
            console.log(err);
        });
        return true;
    }

}
module.exports = KafkaService;