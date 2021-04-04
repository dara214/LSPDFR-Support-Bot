const Discord = require('discord.js')
const client = new Discord.Client

module.exports = {
  name: "gameconfig",
  aliases: ['gc'],
  usage: "hi",
  description: "hi",
  run: async (client, message, args) => {
    embed = new Discord.MessageEmbed()
      .setColor("red")
      .setTitle("Memory error")
      .setFooter("LSPDFR Support")
      .setDescription("Your gam is crashing because you do not have a gameconfig please install the folowing files")
      .addFields(
		{ name: 'GameConfig', value: 'https://www.gta5-mods.com/misc/gta-5-gameconfig-300-cars' },
		{ name: 'HeapAdjuster', value: 'https://www.gta5-mods.com/tools/heap-limit-adjuster-600-mb-of-heap' },
		{ name: 'PackFileLimit Adjuster', value: 'https://www.gta5-mods.com/tools/packfile-limit-adjuster' }
	)
      message.reply(embed)
      message.delete()
      console.log()
      tolowercase()
      
  }
}
