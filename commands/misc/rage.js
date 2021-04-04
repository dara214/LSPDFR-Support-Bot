const Discord = require('discord.js')

module.exports = {
  name: "log",
  aliases: ["rph"],
  usage: "hi",
  description: "hi",
  run: async (client, message, args) => {
    embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("Support Help")
      .setFooter("LSPDFR Support")
      .setImage('https://cdn.discordapp.com/attachments/806707945874260003/806867655386071071/RageLogExample.png')
      .setDescription("**please send your rage log to this channel so our support team can better dignose your problem,  if you search rage in your directory you can find it as a text document**")
      message.reply(embed)
      message.delete()
console.log()
.tolowercase()
  }
}
