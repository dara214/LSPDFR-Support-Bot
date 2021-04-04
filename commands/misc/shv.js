const Discord = require('discord.js') 

module.exports = {
  name: " scripthookweb", 
  aliases: ["shw"], 
  usage: "", 
  description: "", 
  run: async (client, message, args) => {  
      const embed = new Discord.MessageEmbed()
          .setColor('#fffff') 
    .setTitle('Script Hook V website')
    .setURL('http://www.dev-c.com/gtav/') 
    .setDescription('Click in the blue text to go to the SHV website') 
    .setTimestamp() 
    .setFooter('LSPDFR support bot'); 
  message.channel.send(embed) 
  .tolowercase()
      }
  }