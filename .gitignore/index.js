const Discord = require("discord.js");

var bot = new Discord.Client()

bot.on("ready", function() {
    bot.user.setGame("$help pour de l'aide");
    console.log("Je suis prêt !");
});

bot.login(process.env.TOKEN);
