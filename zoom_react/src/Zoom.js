import { ZoomMtg } from '@zoomus/websdk';
import { useEffect } from 'react';
import './Zoom.css';

const crypto = require('crypto') // crypto comes with Node.js

function generateSignature(apiKey, apiSecret, meetingNumber, role) {

  return new Promise((res, rej) => {
    // Prevent time sync issue between client signature generation and zoom 
    const timestamp = new Date().getTime() - 30000;
    const msg = Buffer.from(apiKey + meetingNumber + timestamp + role).toString('base64');
    const hash = crypto.createHmac('sha256', apiSecret).update(msg).digest('base64');
    const signature = Buffer.from(`${apiKey}.${meetingNumber}.${timestamp}.${role}.${hash}`).toString('base64');

    res(signature)
  });
}

// // pass in your Zoom JWT API Key, Zoom JWT API Secret, Zoom Meeting Number, and 0 to join meeting or webinar or 1 to start meeting
// console.log(generateSignature(process.env.API_KEY, process.env.API_SECRET, 123456789, 0))

// setup your signautre endpoint here: https://github.com/zoom/websdk-sample-signature-node.js
// var signatureEndpoint = 'http://localhost:4000'
var apiKey = 'kN4OOc2FSseBnEOXYS35pg'
var apiSecret = 'F3K0ZPViCHg8MHB3Yc8OG5YXGLm556QLxkGd'
var meetingNumber = 71696501330
var role = 0
var leaveUrl = 'http://localhost:3001'
var userName = 'WebSDK'
var userEmail = 'email@email.com'
var passWord = 'DV3Ua3'

var signature = '';

generateSignature(apiKey, apiSecret, meetingNumber, 0).then((res) => {
  signature = res;
}); // need one here, let's generate one using the old server

const Zoom = () => {
  // loading zoom lib before joining on component mount
  useEffect(() => {
    showZoomDiv();
    ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.0/lib', '/av');
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();
    initiateMeeting();
  }, []);

  const showZoomDiv = () => {
    document.getElementById('zmmtg-root').style.display = 'block';
  }

  const initiateMeeting = () => {
    ZoomMtg.init({
      leaveUrl: leaveUrl,
      isSupportAV: true,
      success: (success) => {
        console.log(success)
    
        ZoomMtg.join({
          signature: signature,
          meetingNumber: meetingNumber,
          userName: userName,
          apiKey: apiKey,
          userEmail: userEmail,
          passWord: passWord,
          success: (success) => {
            console.log(success)
          },
          error: (error) => {
            console.log(error)
          }
        })
    
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  return (
    <div className="App">Zoom</div>
  );
}

export default Zoom;
