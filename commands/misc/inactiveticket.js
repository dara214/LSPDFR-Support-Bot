const Discord = require('discord.js')
module.exports = {
  name: "inactivet",
  aliases: ['inat'],
  usage: "hi",
  description: "hi",
  run: async (client, message, args) => {
    embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("THIS TICKET IS INACTIVE")
      .setFooter("LSPDFR Support")
      .setTimestamp()
      .setDescription(`${message.author.username} has called this ticket **INACTIVE** Tickets can be **INACTIVE** for up to **24 hours** so please respond within **24Hrs**`)
      .setImage('https://media1.tenor.com/images/9cb9da36a14d39704a2d3fd546f7f88f/tenor.gif?itemid=10502127')
      message.channel.send()
      message.delete()
      console.log()
    
    embed2 = new Discord.MessageEmbed()
      .setColor("red")
      .setTitle(`Inactive Ticket in ${message.guild.name}`)
      .setFooter("LSPDFR Support")
      .setDescription(`You made a Ticket inactive in ${message.guild.name} i was just making sure you know what your doing`)
      message.delete()
      console.log()
      message.author.send(embed2)
      .tolowercase()
  }
  
}