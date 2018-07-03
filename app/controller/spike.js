'use strict';

const Controller = require('egg').Controller;

class SpikeController extends Controller {

    async update() {
        // update redis
        const productId = this.ctx.params.id;

        var success = await this.ctx.service.redisService.updateStock(this.app.redis, productId);
        //send message to kafka
        if(success) {
            await this.ctx.service.kafkaService.sendMessage(productId);
        }
        this.ctx.body = {
            productId: productId,
            success: success

        }
        this.ctx.status = 200;
    }

}

module.exports = SpikeController;
