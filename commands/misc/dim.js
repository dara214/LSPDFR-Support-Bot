const Discord = require('discord.js')
module.exports = {
  name: "dim-lights",
  aliases: ['dim'],
  usage: "hi",
  description: "hi",
  run: async (client, message, args) => {
    embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("Dim Lights Fix")
      .setFooter("LSPDFR Support")
      .setDescription("To stop you lights looking like this download visual v or radience v or any light mod there are three linked below")
      .setImage('https://imgvol.cdn.lcpdfr.com/uploads/monthly_2017_06/Capture.PNG.679775f2cf447fe1f98e249498de5927.PNG')
       .addFields(
        {
            name: "**Note:**",
            value: ("If your lights are still Dim you may need to go to GTA5 settigs and make shaders `ULTRA`"),
        },
        {
          name: '**RaidenceV** By Bxbugs123',
          value: 'https://www.lcpdfr.com/downloads/gta5mods/datafile/9357-radiance-v/',
        },
        {
          name: '**VisualV** By cpivpack',
          value: 'https://www.lcpdfr.com/downloads/gta5mods/datafile/15516-visualv/',
        },
         {
          name: '**Better Emergency Lights** By LeXin11',
          value: 'https://www.lcpdfr.com/downloads/gta5mods/datafile/18520-better-emergency-lights-16/',
        }
       )
      message.reply(embed)
      message.delete()
console.log()
tolowercase()
  }
}
