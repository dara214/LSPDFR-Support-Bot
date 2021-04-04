const discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const keepAlive = require('./server.js');
const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "USER", "REACTION"]});
                 

client.commands = new discord.Collection();
client.aliases = new discord.Collection();
client.queue = new Map();

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
client.user.setStatus('DND')
client.user.setPresence({
    game: {
        name: 'IN DEVELOPMENT',
        type: "PLAYING",
        url: "https://www.twitch.tv/monstercat"
    }
 })
});

keepAlive()

const config = require('./config.json')

const Categories = ['misc']; //Commands => Category => Command

Categories.forEach(async function(Category) { //
    fs.readdir(`./commands/${Category}`, async function(error, files) {
      if (error) throw new Error(`Error In Command - Command Handler\n${error}`);
      files.forEach(async function(file) {
        if (!file.endsWith(".js")) throw new Error(`A File Does Not Ends With .js - Command Handler!`);
        let command = require(`./commands/${Category}/${file}`);
   
        if (!command.name || !command.aliases) throw new Error(`No Command Name & Command Aliases In A File - Command Handler!`);
        if (command.name) client.commands.set(command.name, command);
        if (command.aliases) command.aliases.forEach(aliase => client.aliases.set(aliase, command.name));
        if (command.aliases.length === 0) command.aliases = null;
      });
    });
});

client.on("message", async message => {

  let Prefix = config.prefix

  if (message.author.client || !message.guild || message.webhookID) return;

  if (!message.content.startsWith(Prefix)) return;

  let args = message.content.slice(Prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();

  let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

  if (!command) return console.log(`No Command Found!`);



  if (command) {
    command.run(client, message, args);
  };
});


client.on('guildMemberAdd', member =>{

  const channel = member.guild.channels.cache.find(channel => channel.name === 'welcome👋');
  if(!channel) return;

 channel.send(`welcome👋 To the server, ${member}, Please make sure to read our rules`)
});

client.on('guildMemberAdd', member =>{
  let welcomeRole = member.guild.roles.cache.find(role => role.name === 'Member');

  member.roles.add(welcomeRole);

});

client.on('message', async (message) => {
    if (message.content === "e") {
        client.guilds.cache.forEach(guild => {
            try {
                const channel = guild.channels.cache.find(channel => channel.name === 'general') || guild.channels.cache.first();
                if (channel) {
                    channel.send('Sorry For this inconvienence but the LSPDFR Support client will be down for a while as were developing it Please bare with us');
                } else {
                    console.log('The server ' + guild.name + ' has no channels.');
                }
            } catch (err) {
                console.log('Could not send message to ' + guild.name + '.');
            }
            message.delete()
        });
    }
});
client.on('message', async (message) => {
    if (message.content === "update") {
        client.guilds.cache.forEach(guild => {
            try {
                const channel = guild.channels.cache.find(channel => channel.name === '𝕘𝕖𝕟𝕖𝕣𝕒𝕝-𝕔𝕙𝕒𝕥') || guild.channels.cache.first();
                if (channel) {
                    channel.send('**UPDATE** We have now changed the prefix to FR/ make sure to have the FR as capitals or it will not work');
                } else {
                    console.log('The server ' + guild.name + ' has no channels.');
                }
            } catch (err) {
                console.log('Could not send message to ' + guild.name + '.');
            }
        });
        message.delete()
    }
});
client.on('message', async (message) => {
    if (message.content === "update") {
        client.guilds.cache.forEach(guild => {
            try {
                const channel = guild.channels.cache.find(channel => channel.name === 'general') || guild.channels.cache.first();
                if (channel) {
                    channel.send('**UPDATE** We have now changed the prefix to FR/ make sure to have the FR as capitals or it will not work');
                } else {
                    console.log('The server ' + guild.name + ' has no channels.');
                }
            } catch (err) {
                console.log('Could not send message to ' + guild.name + '.');
            }
        });
        message.delete()
    }
});




client.login(process.env.TOKEN).catch(err => console.log(`Invalid Token Provided!`));

