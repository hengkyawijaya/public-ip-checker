const axios = require('axios').default
const os = require("os");
require('dotenv').config()

async function main() {
    const res = await axios.get('https://ipinfo.io/what-is-my-ip', {
    headers: {
        'Accept': 'application/json'
    }})

    await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_CHANNEL_ID}`, {
        "text": `hostname ${os.hostname} public ip: ${res.data.ip}`,
    })
}

main()
