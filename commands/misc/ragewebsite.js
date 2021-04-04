const Discord = require('discord.js') 

module.exports = {
  name: "ragewebsite", 
  aliases: ["rwebsite"], 
  usage: "", 
  description: "", 
  run: async (client, message, args) => {  
      const embed = new Discord.MessageEmbed()
          .setColor('#fffff') 
    .setTitle('ragepluginhook website')
    .setURL('https://ragepluginhook.net/') 
    .setDescription('Click in the blue text to go to the RPH website')
    .setThumbnail('https://pbs.twimg.com/profile_images/620571615848435712/fLgv8iIl.png') 
    .setTimestamp() 
    .setFooter('LSPDFR support bot'); 
  message.channel.send(embed) 
  .tolowercase()
      }
  }