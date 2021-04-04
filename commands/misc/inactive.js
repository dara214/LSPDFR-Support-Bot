const Discord = require('discord.js')
module.exports = {
  name: "inactive",
  aliases: ['ina'],
  usage: "hi",
  description: "hi",
  run: async (client, message, args) => {
    embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("CLEAR, Inactice")
      .setFooter("LSPDFR Support")
      .setDescription("The LAST member was **INACTIVE** you are free to type here")
      message.channel.send(embed)
  
  
 
    embed2 = new Discord.MessageEmbed()
      .setColor("red")
      .setTitle(`Inactive Channel in ${message.guild.name}`)
      .setFooter("LSPDFR Support")
      .setDescription(`You made a channel inactive in ${message.guild.name} i was just making sure you know what your doing`)
      message.delete()
      console.log()
      message.author.send(embed2)
      .tolowercase()
  }
  
}


