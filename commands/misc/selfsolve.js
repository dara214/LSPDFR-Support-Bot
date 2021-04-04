const Discord = require('discord.js')
module.exports = {
  name: "selfsolve",
  aliases: ["ss"],
  usage: "ss",
  description: "hi",
  run: async (client, message, args) => {
    embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("CLEAR, Self Solved")
      .setFooter("LSPDFR Support")
      .setDescription("The LAST member **self solved** there problem you are free to ask for help here")
      message.reply(embed)
      message.delete()
console.log()
.tolowercase()
  }
}
