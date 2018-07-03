# Spike

### Installation
- Install zookeeper
- Install kafka
- Install docker
- Exec $docker-compose up -d to install redis & mysql, or you can install those two in your local, please do not use mysql version 8+.

Create a counter key in redis.

## SQL
CREATE TABLE SPIKE (msg VARCHAR(2000), date TIMESTAMP);

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### test
use postman to request http://localhost:7001/api/spike/'productId', make to type as PUT.

