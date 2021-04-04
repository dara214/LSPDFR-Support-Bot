
const discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const keepAlive = require('./server.js');
const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "USER", "REACTION"]});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'test') {
		message.channel.send('The test worked!.');
	} else if (command === 'beep') {
		message.channel.send('Boop.');
	}
	// other commands...
});