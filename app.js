const Discord = require('discord.js');
const bot = new Discord.Client();
const { perfix, token } = require('./config.json')

bot.on('ready', () => {
	console.log('Ready!');
});

bot.on('message', message => {

	let arg = message.content.substring(perfix.length).split(" ");
	if (message.content.startsWith(perfix) || message.author.id !== '849302317239894046') {
		if (arg[0] === "To-Gameowner") {
			bot.channels.cache.get("849371404172132392").send(message.author.username + " " + " send : " + "\n" + message.content.split("#To-Gameowner"))
			console.log(message.author.username + " " + " send : " + "\n" + message.content.split("#To-Gameowner"))
		}
	}
});

bot.login(token);