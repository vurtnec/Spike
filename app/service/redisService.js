'use strict';
const Service = require('egg').Service;

class RedisService extends Service {

    async updateStock(redis, productId) {
        var inStock = true;

        await redis.get('counter', function (err, result) {
            console.log(result);

            if(parseInt(result) == 0) {
                console.log('out of stock');
                inStock = false;
            } else {
                console.log('in stock');
                redis.set('counter',result - 1);
            }
        });

        return inStock;
    }

}
module.exports = RedisService;