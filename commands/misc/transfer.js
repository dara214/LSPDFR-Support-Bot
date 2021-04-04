const Discord = require('discord.js')
const client = new Discord.Client
const channel = client.channels.cache.find(channel => channel.name === channelName)

module.exports = {
  name: "transfer",
  aliases: ['tf'],
  usage: "transfer",
  description: "transfer",
  run: async (client, message, args) => {
    embed = new Discord.MessageEmbed()
      .setColor("red")
      .setTitle("TRANSFER")
      .setFooter("LSPDFR Support")
      .setDescription(`Support team ${message.author} has called for a **TRANSFER** please help here asap `)
      message.reply(embed)
      message.delete()
    console.log()
    .tolowercase()
  }
}
