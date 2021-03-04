const crypto = require('crypto') // crypto comes with Node.js

const API_KEY = 'kN4OOc2FSseBnEOXYS35pg';
const API_SECRET = 'F3K0ZPViCHg8MHB3Yc8OG5YXGLm556QLxkGd';

const index = function (req, res, next) {
    res.send("Meeting page!");
}

const signature = function(req, res, next) {

    let meetingNumber = req.body.meetingNumber;
    let role = req.body.role;
    let apiKey = req.body.apiKey;
    let apiSecret = API_SECRET;

    sign = generateSignature(apiKey, apiSecret, meetingNumber, role);
    res.send(sign);
}

function generateSignature(apiKey, apiSecret, meetingNumber, role) {

    // Prevent time sync issue between client signature generation and zoom 
    const timestamp = new Date().getTime() - 30000
    const msg = Buffer.from(apiKey + meetingNumber + timestamp + role).toString('base64')
    const hash = crypto.createHmac('sha256', apiSecret).update(msg).digest('base64')
    const signature = Buffer.from(`${apiKey}.${meetingNumber}.${timestamp}.${role}.${hash}`).toString('base64')

    return signature
}

    // pass in your Zoom JWT API Key, Zoom JWT API Secret, Zoom Meeting Number, and 0 to join meeting or webinar or 1 to start meeting
// console.log(generateSignature(process.env.API_KEY, process.env.API_SECRET, 123456789, 0))

module.exports.index = index;
module.exports.signature = signature;