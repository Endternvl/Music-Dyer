const discord = require("discord.js");

module.exports = {
  name: "help",
  run: async (client, message, args) => {
    const embed = new discord.MessageEmbed()

      .setTitle(`${client.user.username} HELP MENU`)

      .setThumbnail(
        message.author.displayAvatarURL({ dynamic: true, size: 1024 })
      )

      .setDescription(
        `

**MUSIC COMMANDS**
\`play[p],search,pause,resume,stop,skip,skipall,skipto,nowplaying[np],queue,loop,remove,volume\`


**INFO COMMANDS**
\`ping,help\`

__**ABOUT BOT**__
Music-Dyer is a **DISCORD MUSIC BOT** with 10+ commands! easy to use!
[My github repo](https://github.com/Endternvl/Music-Dyer)
`
      )
      .setFooter(Created by Skaryey#5622 ● message.guild);
    message.channel.send(embed);
  }
};
