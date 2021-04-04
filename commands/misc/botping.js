const Discord = require("discord.js")

module.exports = {
  name: "botping",
  aliases: [],
  usage: "botping",
  description: "Pong!",
  run: async (client, message, args) => {
      embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("Bot Ping Test")
      .setFooter("LSPDFR Support")
      .addFields(
        {
            name: "Bot Latency",
            value: `🏓Latency is ${Date.now() - message.createdTimestamp}ms.`,
        },
        {
          name: 'API Latency',
          value: `🏓API Latency is ${Math.round(client.ws.ping)}ms`,
        },
      )
      message.author.send(embed)
      message.delete()
      console.log()
      .tolowercase()
  }
}