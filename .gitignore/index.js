const Discord = require("discord.js");

var bot = new Discord.Client()

bot.on("ready", function() {
    bot.user.setGame("$help pour de l'aide");
    console.log("Je suis prêt !");
});

bot.login("NTQ3MTE1ODYxMjg3MzcwNzcz.D0yMIw.lJxm65Te1KBJy7Z6RkbeW7tOXZU");
