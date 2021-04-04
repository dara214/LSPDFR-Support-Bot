const Discord = require('discord.js')
const db = require('quick.db');

module.exports = {
  name: "help",
  aliases: [],
  usage: "help",
  description: "Get all commands!",
  run: async (client, message, args) => {
      const embed = new Discord.MessageEmbed()
      .setTitle('Help - All Commands on This Bot')
      .setDescription("Get all of the commands on the server")
      .setColor("#9B2335")
      .setFooter("LSPDFR SUPPORT")
      .addFields(
        {
            name: "Prefix",
            value: ("`/` note: it has to be capitals"),
        },
        {
          name: '**SUPPORT Commands**',
          value: 'log(rph), selfsolve(ss), clear(c), inactive(ina), mod-folder(mdfol), scrolllock(skrlk), 6000(crash), inactivet(inat), modfolder(mdfol), transfer(tf)lspdfr(website), gameconfog(gc), ragewebsite(rwebsite), scripthookweb(shw)  ',
        },
        {
          name: '**Utility Commands**',
          value: 'Help',
        }
      )
      message.author.send(embed)
      message.channel.send(`**${message.author.username}** i have send you a Dm go check it out`)
      message.delete()
      console.log()
  }
}