const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});






client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Member,"));
    });




client.on('message', async message => {
  let args = message.content.slice(3);
  if(message.content.startsWith(prefix + 'bc')) {
    if(!message.guild.members.get(message.author.id).hasPermission('ADMINISTRATOR')) return message.channel.send('Required Administrator Permission')
       message.guild.members.forEach(m => {
      
      m.send(args.replace('[user]', m).replace('[server]', m.guild.name).replace('[sender]', message.author.username))
    })
  }
})

 client.on('message', message => {

 var ms = require('ms')

 var moment = require('moment');
  
 if (message.author.bot) return;

 if (!message.content.startsWith(prefix)) return;

 let command = message.content.split(" ")[0];

 command = command.slice(prefix.length);

 let args = message.content.split(" ").slice(1);

 let messageArray = message.content.split(" ");

 let embed = new Discord.RichEmbed()

.setImage("https://d.top4top.net/p_10880lo1r1.png")

 if (command == "ban") {

 if(!message.channel.guild) return message.reply('** This command only for servers**');
         
 if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**:x: You Don't Have ` BAN_MEMBERS ` Permission**");

 if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**:x: I Don't Have ` BAN_MEMBERS ` Permission**");

 let user = message.mentions.users.first();

 let Reason = message.content.split(" ").slice(3).join(" ");

 let time = messageArray[2];

 if (message.mentions.users.size < 1) return message.channel.sendEmbed(embed)
  
 if (!message.guild.member(user).bannable) return message.reply("**:x:I Don't Have Permission For Ban This User**");

 if(!time.match(/[1-60][s,m,h,d,w]/g))  return message.channel.send(':x: This Time Is Incorrect')

 if(!Reason)  {

 message.guild.member(user).ban({reason: Reason})

 }

  if(!Reason && time) {

  message.guild.member(user).ban(7, user);

  }  

  if(!time) {

  message.guild.member(user).ban(7, user);

  }
  if(time) {
  
  setTimeout(() => {

  message.guild.unban(user);

  }, ms(time));

  }

  if(time && Reason && user) {

  message.guild.member(user).ban({reason: Reason})
	  
	  
  setTimeout(() => {

  message.guild.unban(user);
  
  }, ms(time));

  }

  message.channel.send(`:white_check_mark:  ${user.tag} banned from the server ! :airplane:`)

  }

  });


client.on('message', message => {

  var ms = require('ms')
 
  var moment = require('moment');
 
   
  if (message.author.bot) return;
 
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
 
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  let messageArray = message.content.split(" ");
 
  let muteRole = message.guild.roles.find("name", "Muted");
	
  let embed = new Discord.RichEmbed()
 
 .setImage("https://c.top4top.net/p_108825enp1.png")
 
  if (command == "mute") {
    
  if(!muteRole) return message.guild.createRole({ name: "Muted", permissions: [] });

  if(!message.channel.guild) return message.reply('** This command only for servers**');
          
  if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.reply("**:x: You Don't Have ` MUTE_MEMBERS ` Permission**");
 
  if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**:x: I Don't Have ` MUTE_MEMBERS ` Permission**");
 
  let user = message.mentions.users.first();
 
  let Reason = message.content.split(" ").slice(4).join(" ");
 
  let time = messageArray[2];
 
  if (message.mentions.users.size < 1) return message.channel.sendEmbed(embed)
   
  if (!message.guild.member(user).bannable) return message.reply("**:x:I Don't Have Permission For Mute This User**");
 
  if(!Reason)  {
 
    message.guild.member(user).addRole(muteRole);
 
  }
 
   if(!Reason && time) {
 
    message.guild.member(user).addRole(muteRole);
 
   }  
 
   if(!time) {
 
    message.guild.member(user).addRole(muteRole);
 
   }
   if(time) {
    if(!time.match(/[1-60][s,m,h,d,w]/g))  return message.channel.send(':x: This Time Is Incorrect')

   setTimeout(() => {
 
    message.guild.member(user).removeRole(muteRole);
 
   }, ms(time));
 
   }
 
   if(time && Reason && user) {
 
    message.guild.member(user).addRole(muteRole);
 
	   
   setTimeout(() => {
 
    message.guild.member(user).removeRole(muteRole);
   
   }, ms(time));
 
   }
 
   message.channel.send(`:white_check_mark: ${user} has been muted ! :zipper_mouth:`)
 
   }
 
});


majd.on('message', function(msg) {
if(msg.content.startsWith (prefix  + 'server')) {
 let embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setThumbnail(msg.guild.iconURL)
 .setTitle(`Showing Details Of  **${msg.guild.name}*`)
 .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
 .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
 .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
 .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
 .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
 .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
 .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
 .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
 .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
 msg.channel.send({embed:embed});
}
});

client.on('message',async message => {
  if(message.author.bot) return;
var prefix = "-"
if(message.content.indexOf(prefix) !== 0) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if(command === "start") {
var title = args[0].split('-').join(" ");
if(args[2]) {
  message.channel.send(` \`\`\`MD
  # Title format <word>-<word>-<word> 
  < do not use spaces use - insted
   \`\`\``);
}
var time = args[1].split(":");
var sec = time[3];
var min = time[2];
var hou = time[1];
var day = time[0];

if((hou * 1) > 24) {
  message.channel.send(` \`\`\`MD
  # time format <days> : <hours> : <minutes> : <secondes>
  < hours must be 24 or less
   \`\`\``);
}
else if((sec * 1) > 60) {
  message.channel.send(` \`\`\`MD
  # time format <days> : <hours> : <minutes> : <secondes>
  < minutes must be 60 or less 
  \`\`\``);
}
else if((min * 1) > 60) {
  message.channel.send(` \`\`\`MD
  # time format <days> : <hours> : <minutes> : <secondes>
  < seconds must be 60 or less
  \`\`\``);
} 
else  {

var upgradeTime = sec;
upgradeTime = upgradeTime * 2 / 2 + (min * 60);
upgradeTime = upgradeTime * 2 / 2 + (hou * 60 * 60);
upgradeTime = upgradeTime * 2 / 2 + (day * 24 * 60 * 60);
var seconds = upgradeTime;
var duration = (upgradeTime * 1000)
  if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **s You Dont Have Premission**');
  if(!args) return message.channel.send(`**Use : #start  <Presentse> <Time>**`);
  if(!title) return message.channel.send(`**Use : **\`#start ${args[0]} Minutes\`** <Presentse>**`);
  if(!isNaN(args[1])) return message.channel.send(':heavy_multiplication_x:| **The Time Be Nambers `` Do the Commend Agin``**');
        let giveEmbed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setDescription(`**${title}** \nReact Whit 🎁 To Enter! \n**Ends  after   ${day} day  ${hou} hour  ${min} minute ${sec} second**`)
      .setFooter(message.author.username, message.author.avatarURL);
      message.channel.send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
          message.delete();
          m.react('🎁');
              var giveAwayCut = setInterval(function() {
                  var days        = Math.floor(seconds/24/60/60);
                  var hoursLeft   = Math.floor((seconds) - (days*86400));
                  var hours       = Math.floor(hoursLeft/3600);
                  var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
                  var minutes     = Math.floor(minutesLeft/60);
                  var remainingSeconds = seconds % 60;
                  if (seconds != 0) {
                    seconds--;
                  }
              let updateGiveEmbed = new Discord.RichEmbed()
              .setAuthor(message.guild.name, message.guild.iconURL)
              .setDescription(`**${title}** \nReact With 🎁 To Enter! \n**Ends  after   ${days} day  ${hours} hour  ${minutes} minute ${remainingSeconds} second**`)
              .setFooter(message.author.username, message.author.avatarURL);
              m.edit(updateGiveEmbed)
            }, 1000);
         setTimeout(() => {
          clearInterval(giveAwayCut)
           let users = m.reactions.get("🎁").users;
           let list = users.array().filter(u => u.id !== client.user.id);
           let gFilter = list[Math.floor(Math.random() * list.length) + 0]
           let endEmbed = new Discord.RichEmbed()
           endEmbed.setAuthor(message.author.username, message.author.avatarURL)
           endEmbed.setTitle(title)
           endEmbed.addField('Giveaway End !🎁',`Winners : ${gFilter}`)
         m.edit('** 🎁 GIVEAWAY ENDED 🎁**' , {embed: endEmbed});
         },duration);
       });
  }
}
});


client.login(process.env.BOT_TOKEN);

client.login(process.env.BOT_TOKEN);
