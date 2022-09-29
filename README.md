### IP PUBLIC CHECKER
This script allow you to get ip public from `https://ipinfo.io/what-is-my-ip` and send the result to telegram channel 

#### How to configure?
Rename env.sample to .env
```
mv .env.sample .env
```
Update configuration based on your need
```
TELEGRAM_BOT_TOKEN=xxxxx
TELEGRAM_CHANNEL_ID=xxxxx
```

#### How to run?
Install dependency first
```
npm install
```

Only need to trigger using node js
```
node index.js
```


