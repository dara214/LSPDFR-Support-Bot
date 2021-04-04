const Discord = require('discord.js')
module.exports = {
  name: "mod-folder",
  aliases: ["mdfol"],
  usage: "",
  description: "",
  run: async (client, message, args) => {
      embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("Mod Folder")
      .setFooter("LSPDFR Support")
      .setImage('https://cdn.discordapp.com/attachments/806707945874260003/806867660868288512/Screenshot_2021-01-05_031243.png')
      .addFields(
        {
            name: "**SET UP**",
            value: `At first, OpenIV needs to be installed and the location of the game specificed. Then, the ASI Manager tool (found in the menu bar under Tools > ASI Manager) needs to be opened. To allow the game to use modified archives, an ASI Loader and the OpenIV.asi need to be installed. They can be installed by simply clicking the "Install" button.`,
        },
        {
          name: '**Copying archives into the mods folder**',
          value: `The mods folder is located inside your Grand Theft Auto V folder. The archives inside need to have the exact same path as the original file. If you want to copy update > update.rpf into the mods folder, it then needs to have the following path: mods > update > update.rpf.`,
        },
      )
      message.reply(embed)
      message.delete()
      .tolowercase()
      console.log()
  }
}
