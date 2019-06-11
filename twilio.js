// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure

/* const accountSid = "AC15340f24121d1b98fd0d86b876da8050";
const authToken = "17bf47ec4309eac28a0b2f6306869025";
const notifyServiceSid = "IScc3ef56dd1b6e213d0d85211bf6535ef";
const client = require("twilio")(accountSid, authToken);
const smsList = require("./sms.js");

client.notify
  .services(notifyServiceSid)
  .notifications.create({
    toBinding: JSON.stringify([
      binding_type: 'sms', address: '** First phone number here **',
      binding_type: 'sms', address: '** Second phone number here **',
      // This also works for iOS, Android, and FB Messenger.
      // You can mix and match binding_type in the toBinding.
    ]),
    body: "BOOZ TIME!!! -1000% Dcto!! en https://www.booz.cl"
  })
  .then(notification => console.log(notification.sid))
  .catch(error => console.log(error)); */

const accountSid = "AC15340f24121d1b98fd0d86b876da8050";
const authToken = "17bf47ec4309eac28a0b2f6306869025";
const client = require("twilio")(accountSid, authToken);

const notificationOpts = {
  toBinding: JSON.stringify({
    binding_type: "sms",
    address: "+1651000000000"
  }),
  body: "Knock-Knock! This is your first Notify SMS"
};

const telephones = [
  { name: "Antonio", number: "+56953199597" },
  { name: "Nicolás", number: "+56983615464" },
  { name: "Eduardo", number: "+56944424389" },
  { name: "Pedro", number: "+56956578403" },
  { name: "Silvio", number: "+56992511799" }
];

/* telephones.forEach(result => console.log(result.name, result.number)); */

telephones.forEach(result => {
  client.notify
    .services("IScc3ef56dd1b6e213d0d85211bf6535ef")
    .notifications.create({
      toBinding: JSON.stringify({
        binding_type: "sms",
        address: `${result.number}`
      }),
      body: `${
        result.name
      }!! CyberDays en www.booz.cl!! Hasta 60% Dcto en Vinos, Cervezas Whiskys y Más!!`
    })
    .then(notification => console.log(notification.sid))
    .catch(error => console.log(error));
});

/* client.notify
  .services("IScc3ef56dd1b6e213d0d85211bf6535ef")
  .notifications.create(notificationOpts)
  .then(notification => console.log(notification.sid))
  .catch(error => console.log(error)); */
