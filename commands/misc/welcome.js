const Discord = require('discord.js')
module.exports = {
  name: "hi",
  aliases: [],
  usage: "hi",
  description: "hi",
  run: async (client, message, args) => {
    embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("WELCOME")
      .setFooter("LSPDFR Support")
      .setDescription("WELCOME Member If YOU need ANY Gta5 or lspdfr support DONT BE AFRAID TO ASK you can use our support channels")
      message.reply(embed)
      message.delete()
console.log()
.tolowercase()
  }
}
