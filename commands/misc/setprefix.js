const Discord = require("discord.js");
const db = require('quick.db');

module.exports = {
  name: "setprefix",
  aliases: ["sp"],
  usage: "Setprefix <New Prefix>",
  description: "Set The New Bot Prefix!",
  run: async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_GUILD")) {
             const Perms = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription('You Do Not Have Permission To Do That! You Need The Permission **``Manage Server``**.')
          .setFooter("S & S Gaming")
    message.channel.send(Perms);
    return;
    };

            const Prefix = new Discord.MessageEmbed()
          .setColor("RED")
          .setDescription('Please Give A Prefix!')
          .setFooter("S & S Gaming")
    if (!args[0]) return message.channel.send(Prefix);


const Prefix10 = new Discord.MessageEmbed()
          .setColor("RED")
          .setFooter("S & S Gaming")
          .setDescription('Please Give A Prefix Under 10 Characters!')
    if (!args[0]) return message.channel.send(Prefix);
    if (args[0].length > 10) return message.channel.send(Prefix10);

    let Old = await db.fetch(`Prefix_${message.guild.id}`);
    if (!Old) Old = "fsfun/";


    const Current = new Discord.MessageEmbed()
          .setColor("RED")
          .setFooter("S & S Gaming")
          .setDescription('That Is The Current Prefix!')

    if (args[0].toLowerCase() === Old.toLowerCase()) return message.channel.send(Current);

    await db.set(`Prefix_${message.guild.id}`, args[0]);

    const Embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle(`Success`)
    .setFooter("S & S Gaming")
    .setDescription(`New Server Prefix Has Been Set To \`\`\`${args[0]}\`\`\`New Frontier`)
    .setTimestamp();

    return message.channel.send(Embed);
    tolowercase()
  }
};
