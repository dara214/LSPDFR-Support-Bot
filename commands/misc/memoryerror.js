const Discord = require('discord.js') // the required files to run the command this is requireing the discord.API

module.exports = {
  name: "memory", // the name that you type to run the command
  aliases: ["memory"], // another way to start the command
  usage: "", // this dosnt matter call it the same as the name
  description: "Test", // the description of the command
  run: async (client, message, args) => { // what to un note: after this bit is what will show up on the Embed
      const embed = new Discord.MessageEmbed()
          .setColor('#0099ff') // the colour has to be a hex colour
    .setTitle('Test1')// the title of the Embed
    .setURL('https://imgvol.cdn.lcpdfr.com/screenshots/monthly_2020_01/466309146_2020-01-2918_46_58-Greenshot.png.ecb89f4da6d22732b1162ec964e36806.png') // a url note: to open this url you have to click on the Title
    .setDescription('Some description here')// this is what is the text in an embed
    .setThumbnail('https://i.imgur.com/wSTFkRM.png') // htis is a thumbnail this appears in the top right of a file
    .addFields(
        { name: 'Regular field title', value: 'Some value here' }, // these are fields the docs that i link will explain this more
    )
    .setImage('https://i.imgur.com/wSTFkRM.png') // this is an image this appears inder the Description
    .setTimestamp() // optional
    .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png'); // this is what it say at the very bottom of the file
  message.channel.send(embed) // this messages the channel that the command started in
  tolowercase()
  message.delete()
      }
  }