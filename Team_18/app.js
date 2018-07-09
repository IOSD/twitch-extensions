var tmi = require("tmi.js");


var option = {
	option:{
		debug :true
	},
	connection:{
		cluster: "aws",
		reconnect : true
	},
	identity : {
		username : "mani14011998",
		password : "oauth:jowpgt8wvtvfymqfb0cm3ce8k0nroi"
	},
	channels: ["mani14011998"]
};
var client = new tmi.client(option);
client.connect();

client.on('connected',function(channel, user, message, self) {
	if (message==="!twitter") {
		client.action("mani14011998","Take a look at Maninder (@Maninde39383395): https://twitter.com/Maninde39383395?s=09");
	}
 client.action("mani14011998", user['display-name'] + "you r in bot"   )
});

client.on('connected', function (address, port) {
    client.action("mani14011998","hello by server ");
});