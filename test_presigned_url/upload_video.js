var request = require('request');
var fs = require('fs');
request({
  method: 'PUT',
  uri: "https://s3bucket.s3.us-west-2.amazonaws.com/videos/file", // place your presigned url here
  body: fs.readFileSync('/home/kulasangar/Documents/tellabout/mytests/SampleVideo_1280x720_1mb.mp4'),
  headers: {
    'Content-Type': 'video/mp4'
  }
},
function(error, response, body) {
  if (error) {
    console.error(error);
  } else {
    console.log('upload successful:', body);
  }
});