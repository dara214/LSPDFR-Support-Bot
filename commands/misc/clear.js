const Discord = require('discord.js')
module.exports = {
  name: "clear",
  aliases: ['c'],
  usage: "hi",
  description: "hi",
  run: async (client, message, args) => {
    embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("CLEAR")
      .setFooter("LSPDFR Support")
      .setDescription("Issue solved you can now ask for help here.")
      message.reply(embed)
      message.delete()
console.log()
     embed2 = new Discord.MessageEmbed()
      .setColor("red")
      .setTitle(`you cleared a Channel in ${message.guild.name}`)
      .setFooter("LSPDFR Support")
      .setDescription(`You cleared a channel  in ${message.guild.name} i was just making sure you know what your doing`)
      message.delete()
      console.log()
      message.author.send(embed2)
      .tolowercase()
  }
  
}