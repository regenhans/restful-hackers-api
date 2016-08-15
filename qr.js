var qr = require('qrcode');


qr.toDataURL('http://localhost:3000/api/members/57b226df59ac73c616d06d9f', function(err,url) {
   console.log(url);
});
