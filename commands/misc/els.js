const Discord = require('discord.js')
module.exports = {
  name: "scrolllock",
  aliases: ['skrlk'],
  usage: "hi",
  description: "hi",
  run: async (client, message, args) => {
    embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("ELS lock FIX")
      .setFooter("LSPDFR Support")
      .setDescription("Els lock is on because scroll lock was pressed to disengage els lock please press your scroll lock button")
      .setImage('https://cdn.discordapp.com/attachments/806707945874260003/806867657361850399/Screenshot_2020-12-31_114732.png')
      message.reply(embed)
      message.delete()
console.log()
.tolowercase()
  }
}
