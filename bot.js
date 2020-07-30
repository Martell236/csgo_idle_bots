const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');
const SteamCommunity = require('steamcommunity');
const TradeOfferManager = require('steam-tradeoffer-manager');

const client = new SteamUser();
const community = new SteamCommunity();
const config = require("./configs/" + process.argv[2]);

const logOnOptions = {
	accountName: config.username,
	password: config.password,
	twoFactorCode: SteamTotp.generateAuthCode(config.shared)
};

const manager = new TradeOfferManager({
	steam: client,
	community: community,
	language: 'en'
});

function sendItem() {
  manager.loadInventory(730, 2, true, (err, inventory) => {
    if (err) {
      console.log(err);
    } else {
      const offer = manager.createOffer(config.p_id);
    if(inventory.length != 0) {
      var i;
      for (i = 0; i < inventory.length; i++) {
        offer.addMyItem(inventory[i]);
      }
    }
      offer.setMessage(`Sent By CSGO Bot`);
      offer.send((err, status) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Sent offer. Status: ${status}.`);
        }
      });
    }
  });
}

client.on('webSession', (sessionid, cookies) => {
  manager.setCookies(cookies);

  community.setCookies(cookies);
  community.startConfirmationChecker(10000, config.shared);
  sendItem();
});

client.logOn(logOnOptions);

client.on('loggedOn', () => {
	console.log('logged in!');
});


