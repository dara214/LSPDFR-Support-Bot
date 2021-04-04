const Discord = require('discord.js')
module.exports = {
  name: "lspdfr",
  aliases: ['website'],
  usage: "hi",
  description: "hi",
  run: async (client, message, args) => {
    embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("WELCOME")
      .setTitle("Website")
      .setFooter("LSPDFR Support")
      .setDescription("This is the LSPDFR.com link please download your plugins here `(click the welcome text to open it)`")
      .setURL('https://www.lcpdfr.com/')
      message.reply(embed)
      message.delete()
console.log()
.tolowercase()
  }
}
