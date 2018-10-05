console.log("Loading... 10%");
const Discord = require('discord.js');
const robot = new Discord.Client();
const embed = new Discord.RichEmbed();
const prefix = `#`
const moment = require('moment')
embed.setTitle('Tlauncher Скачать');
embed.setColor('#0xfdc211');                                        // A Hex color
embed.setDescription('Лучшая игра `Maenkraft`');
embed.setImage(url="https://cdn.discordapp.com/attachments/480791622095863818/495852332769214464/Boat.png")
embed.setURL('https://tlauncher.org/');                           // A URL to include
embed.setAuthor('Lolendor', icon_url="https://cdn.discordapp.com/avatars/394547289076793344/0b841fbd0a31669c90a024bd72dc6ce3.webp?size=1024");                                 // Author of the object
embed.addField(name='HackMySamp', value="https://discord.gg/nxHEpxe")
embed.setFooter(text="Топовый игра это Maenokraft")
embed.addField(name='Invite Bot', value="https://discordapp.com/oauth2/authorize?client_id=495603438135017482&scope=bot&permissions=0")
const embedd = new Discord.RichEmbed();
embedd.setTitle('HackMySamp');
embedd.setColor('#0xfdc211');                                        // A Hex color
embedd.setDescription('Лучшая игра `Maenkraft`');
embedd.setImage(url="https://cdn.discordapp.com/attachments/480791622095863818/495852332769214464/Boat.png")
embedd.setURL('https://discord.gg/BtGNbSb');                           // A URL to include
embedd.setAuthor('Lolendor', icon_url="https://cdn.discordapp.com/avatars/394547289076793344/0b841fbd0a31669c90a024bd72dc6ce3.webp?size=1024");                                 // Author of the object
embedd.addField(name='Комманды', value=`1. мявк \n 2. ${prefix}help \n 3. ${prefix}info \n 4. ${prefix}deleteme \n 5. ${prefix}ban \n 6. ${prefix}Обнова \n 7. ${prefix}avatar \n 8. ${prefix}ржомба \n 9. ${prefix}myinfo`)
embedd.setFooter(text="Топовый игра это Maenokraft") 
const embeddd = new Discord.RichEmbed();
embeddd.setTitle('HackMySamp');
embeddd.setColor('#0xfdc211');                                        // A Hex color
embeddd.setDescription('Лучшие `Правила`');
embeddd.setImage(url="https://cdn.discordapp.com/attachments/480791622095863818/495894500451811348/ffgag.png")
embeddd.setURL('https://discord.gg/BtGNbSb');                           // A URL to include
embeddd.setAuthor('Lolendor', icon_url="https://cdn.discordapp.com/avatars/394547289076793344/0b841fbd0a31669c90a024bd72dc6ce3.webp?size=1024");                                 // Author of the object
embeddd.addField(name='Правила', value="1. Запрешено какац \n 2. Запрещено матикаться на беспомощных людишек!")
embeddd.setFooter(text="Правила могут изменяться!")
const embedf = new Discord.RichEmbed();
embedf.setTitle('НУ ЭТА Тупа бан');
embedf.setColor('#0xfdc211');                                        // A Hex color
embedf.setDescription('Лучшие `Баны`');
embedf.setImage(url="https://cdn.discordapp.com/attachments/480791622095863818/495966356873674774/1527862832198597480.png")                         // A URL to include
embedf.setAuthor('Тупа бан', icon_url="https://cdn.discordapp.com/attachments/480791622095863818/495966172827615232/rzhomba-prikol-rabotaet-rzhaka.png");                                 // Author of the object
embedf.setFooter(text="Тупа бан!")
const embedddd = new Discord.RichEmbed();
embedddd.setTitle('Бомжатник');
embedddd.setColor('#0xfdc211');                                        // A Hex color
embedddd.setDescription('Лучшие `Правила`');
embedddd.setImage(url=`https://cdn.discordapp.com/attachments/480791622095863818/495976964352376852/fasfga.png`)                           // A URL to include
embedddd.setAuthor('Lolendor', icon_url="https://cdn.discordapp.com/avatars/394547289076793344/0b841fbd0a31669c90a024bd72dc6ce3.webp?size=1024");                                 // Author of the object
embedddd.addField(name='Правила в чате', value="1.1 - Оскорбление юзеров сервера. - устн.пред потом 5 минут мута. \n 1.2 - Использование канала не по назначению - сначала устн.пред. потом варн. \n 1.3 - Запрещен спам - мут 2 минуты. \n 1.4 - Запрещено что-либо просить (например роль) - варн. \n 1.5 - Запрещено разжигание розни - варн")
embedddd.setFooter(text="Правила могут изменяться!")
console.log("Loading... 50%");

robot.login("NDk1NjAzNDM4MTM1MDE3NDgy.DpEeWg.TDk2iGfvK4BL6D40MeWdr3UOCNQ");

console.log("Loading... 90%");

robot.on('ready', async () => {
  robot.user.setActivity('Lolendor | BOT')
  console.clear()
  console.log(``);
  console.log(`///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////`);
  console.log(``);
  console.log(`      Logged in as ${robot.user.tag}`);
  console.log(`      Аватар бота - ${robot.user.avatarURL}`);
  console.log(`      Префикс бота - ${prefix}`);
  console.log(`      Запущено!`);
  console.log(``);
  console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
  console.log(``);
});

console.log("Successfully Loading!");

robot.on('message', (message)=>{
  if(message.content==`${prefix}Обнова`){
    console.log(`==================================================================================================================\n`);
    console.log(`Использовано! (${prefix}Обнова) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
    message.channel.sendFile("https://cdn.discordapp.com/attachments/480791622095863818/496573904186376194/TextByLolendor.luac");
    message.reply("/text.help - Чтобы узнать все комманды");
    console.log(``);
}
});

robot.on('message', (message)=>{
  if(message.content==`${prefix}обнова`){
    console.log(`==================================================================================================================\n`);
    console.log(`Использовано! (${prefix}обнова) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
    message.channel.sendFile("https://cdn.discordapp.com/attachments/480791622095863818/496573904186376194/TextByLolendor.luac");
    message.reply("/text.help - Чтобы узнать все комманды");
    console.log(``);
}
});

robot.on('message', (message)=>{
  if(message.content==`${prefix}Avatar`){
    var evba = new Discord.RichEmbed()
        .setColor(0xfdc211)
        .setImage(message.author.avatarURL)
        .setAuthor(message.author.tag, message.author.avatarURL)
    message.channel.send(evba);
    console.log(`==================================================================================================================\n`);
    console.log(`Использовано! (${prefix}Avatar) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
    console.log(``);
}
});

robot.on('message', (message)=>{
  if(message.content==`${prefix}myinfo`){
    let memberToUse = message.mentions.members.first() || message.author
    const joinDiscord = moment(memberToUse.createdAt).format('llll')
    const joinServer = moment(memberToUse.joinedAt).format('llll')
    var evbad = new Discord.RichEmbed()
        .setColor(0xfdc211)
        .setImage(memberToUse.avatarURL)
        .addField('Статус', memberToUse.presence.status, true)
        .addField('Подключился к серверу', joinServer, true)
        .addField('Регистрация', joinDiscord, true)
        .setTimestamp()
        .setAuthor(memberToUse.username, memberToUse.avatarURL)
    message.channel.send(evbad);
    console.log(`==================================================================================================================\n`);
    console.log(`Использовано! (${prefix}myinfo) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
    console.log(``);
}
});

robot.on('message', (message)=>{
  if(message.content==`${prefix}Myinfo`){
    let memberToUse = message.mentions.members.first() || message.author
    const joinDiscord = moment(memberToUse.createdAt).format('llll')
    const joinServer = moment(memberToUse.joinedAt).format('llll')
    var evbad = new Discord.RichEmbed()
        .setColor(0xfdc211)
        .setImage(memberToUse.avatarURL)
        .addField('Статус', memberToUse.presence.status, true)
        .addField('Подключился к серверу', joinServer, true)
        .addField('Регистрация', joinDiscord, true)
        .setTimestamp()
        .setAuthor(memberToUse.username, memberToUse.avatarURL)
    message.channel.send(evbad);
    console.log(`==================================================================================================================\n`);
    console.log(`Использовано! (${prefix}Myinfo) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
    console.log(``);
}
});

robot.on('message', (message)=>{
  if(message.content==`${prefix}info`){
    const creteServer = moment(message.guild.createdAt).format('ll')
    var evbaf = new Discord.RichEmbed()
        .setColor(0xfdc211)
        .addField("Название этого сервера", message.guild.name)
        .addField("Количество людей на сервере", message.guild.memberCount)
        .addField('Каналов', message.guild.channels.size, true)
        .addField('Создатель сервера', `<@${message.guild.ownerID}>`, true)
        .addField('Регион', message.guild.region, true)
        .setFooter('ID: ' + message.guild.id + ' | ' + 'Сервер создан: ' + creteServer)
        .addField("Имя бота", robot.user.username)
        .addField("Префикс бота", prefix)
        .addField(name='HackMySamp', value="https://discord.gg/nxHEpxe")
        .addField(name='Invite Bot', value="https://discordapp.com/oauth2/authorize?client_id=495603438135017482&scope=bot&permissions=0")
        .setDescription('Лучшая игра `Maenkraft`')
        .setTitle('Tlauncher Скачать')
        .setURL('https://tlauncher.org/') 
        .setImage(url="https://cdn.discordapp.com/attachments/480791622095863818/495852332769214464/Boat.png")
        .addField("Создатель бота", "Lolendor#9728")
        .setThumbnail(message.guild.iconURL)
    message.channel.send(evbaf);
    message.reply("😎 Вот информация! 😎");
    console.log(`==================================================================================================================\n`);
    console.log(`Использовано! (${prefix}info) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
    console.log(``);
}
});

robot.on('message', (message)=>{
  if(message.content==`${prefix}Info`){
    const creteServer = moment(message.guild.createdAt).format('ll')
    var evbaf = new Discord.RichEmbed()
        .setColor(0xfdc211)
        .addField("Название этого сервера", message.guild.name)
        .addField("Количество людей на сервере", message.guild.memberCount)
        .addField('Каналов', message.guild.channels.size, true)
        .addField('Создатель сервера', `<@${message.guild.ownerID}>`, true)
        .addField('Регион', message.guild.region, true)
        .setFooter('ID: ' + message.guild.id + ' | ' + 'Сервер создан: ' + creteServer)
        .addField("Имя бота", robot.user.username)
        .addField("Префикс бота", prefix)
        .addField(name='HackMySamp', value="https://discord.gg/nxHEpxe")
        .addField(name='Invite Bot', value="https://discordapp.com/oauth2/authorize?client_id=495603438135017482&scope=bot&permissions=0")
        .setDescription('Лучшая игра `Maenkraft`')
        .setTitle('Tlauncher Скачать')
        .setURL('https://tlauncher.org/') 
        .setImage(url="https://cdn.discordapp.com/attachments/480791622095863818/495852332769214464/Boat.png")
        .addField("Создатель бота", "Lolendor#9728")
        .setThumbnail(message.guild.iconURL)
    message.channel.send(evbaf);
    message.reply("😎 Вот информация! 😎");
    console.log(`==================================================================================================================\n`);
    console.log(`Использовано! (${prefix}Info) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
    console.log(``);
}
});

robot.on('message', (message)=>{
  if(message.content==`${prefix}avatar`){
    var evba = new Discord.RichEmbed()
       .setColor(0xfdc211)
       .setImage(message.author.avatarURL)
       .setAuthor(message.author.tag, message.author.avatarURL)
    message.channel.send(evba);
    console.log(`==================================================================================================================\n`);
    console.log(`Использовано! (${prefix}avatar) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
    console.log(``);
}
});

robot.on('message', (message)=>{
  if(message.content==`${prefix}Ржомба`){
    var evba = new Discord.RichEmbed()
       .setColor(0xfdc211)
       .setImage("https://cdn.discordapp.com/attachments/461138720578338826/496381597138812928/PicsArt_10-01-09.00.03.jpg")
       .setAuthor("Ржомба", message.author.avatarURL)
    message.channel.send(evba);
    console.log(`==================================================================================================================\n`);
    console.log(`Использовано! (${prefix}Ржомба) Сервер: `+ message.guild.name +  `Пользователь: `+ message.author.tag);
    console.log(``);
}
});

robot.on('message', (message)=>{
  if(message.content==`${prefix}ржомба`){
    var evba = new Discord.RichEmbed()
       .setColor(0xfdc211)
       .setImage("https://cdn.discordapp.com/attachments/461138720578338826/496381597138812928/PicsArt_10-01-09.00.03.jpg")
       .setAuthor("ржомба", message.author.avatarURL)
    message.channel.send(evba);
    console.log(`==================================================================================================================\n`);
    console.log(`Использовано! (${prefix}ржомба) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
    console.log(``);
}
});

//https://cdn.discordapp.com/attachments/461138720578338826/496381597138812928/PicsArt_10-01-09.00.03.jpg

robot.on('message', (message)=>{
  if(message.content=="мявк"){
      console.log(`==================================================================================================================\n`);
      console.log(`Использовано! (мявк) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
      message.reply("Гав!");
      console.log(``);
  }
});

robot.on('message', (message)=>{
  if(message.content=="фокси"){
      console.log(`==================================================================================================================\n`);
      console.log(`Использовано! (фокси) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
      message.channel.send("Лошара");
      console.log(``);
  }
});

robot.on('message', (message)=>{
  if(message.content=="лолендор"){
      console.log(`==================================================================================================================\n`);
      console.log(`Использовано! (лолендор) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
      message.channel.send("Крутой");
      console.log(``);
  }
});

robot.on('message', (message)=>{
  if(message.content=="Лолендор"){
      console.log(`==================================================================================================================\n`);
      console.log(`Использовано! (Лолендор) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
      message.channel.send("Крутой");
      console.log(``);
  }
});

robot.on('message', (message)=>{
  if(message.content=="Lolendor"){
      console.log(`==================================================================================================================\n`);
      console.log(`Использовано! (Lolendor) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
      message.channel.send("Крутой");
      console.log(``);
  }
});

robot.on('message', (message)=>{
  if(message.content=="lolendor"){
      console.log(`==================================================================================================================\n`);
      console.log(`Использовано! (lolendor) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
      message.channel.send("Крутой");
      console.log(``);
  }
});

robot.on('message', (message)=>{
  if(message.content=="Фокси"){
      console.log(`==================================================================================================================\n`);
      console.log(`Использовано! (Фокси) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
      message.channel.send("Лошара");
      console.log(``);
  }
});

robot.on('message', (message)=>{
  if(message.content=="Foxy"){
      console.log(`==================================================================================================================\n`);
      console.log(`Использовано! (Foxy) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
      message.channel.send("Лошара");
      console.log(``);
  }
});

robot.on('message', (message)=>{
  if(message.content=="foxy"){
      console.log(`==================================================================================================================\n`);
      console.log(`Использовано! (foxy) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
      message.channel.send("Лошара");
      console.log(``);
  }
});

robot.on('message', (message)=>{
  if(message.content=="Foxy1e3t"){
      console.log(`==================================================================================================================\n`);
      console.log(`Использовано! (Foxy1e3t) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
      message.channel.send("Лошара");
      console.log(``);
  }
});

robot.on('message', (message)=>{
  if(message.content=="foxy1e3t"){
      console.log(`==================================================================================================================\n`);
      console.log(`Использовано! (foxy1e3t) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
      message.channel.send("Лошара");
      console.log(``);
  }
});

robot.on("message", (message) => {
  if (message.content.startsWith(`${prefix}help`)) {
    console.log(`==================================================================================================================\n`);
    console.log(`Использовано! (${prefix}help) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
    message.channel.send(embedd);
    console.log(``);
  }
}); 

robot.on("message", (message) => {
  if (message.content.startsWith(`${prefix}Help`)) {
    console.log(`==================================================================================================================\n`);
    console.log(`Использовано! (${prefix}Help) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
    message.channel.send(embedd);
    console.log(``);
  }
}); 

robot.on("message", (message) => {
  if (message.content.startsWith(`${prefix}deleteme`)) {
    console.log(`==================================================================================================================\n`);
    console.log(`Использовано! (${prefix}deleteme) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
    message.delete(`${prefix}deleteme`)
    console.log(``);
  }
}); 

robot.on("message", (message) => {
  if (message.content.startsWith(`${prefix}Deleteme`)) {
    console.log(`==================================================================================================================\n`);
    console.log(`Использовано! (${prefix}Deleteme) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
    message.delete(`${prefix}Deleteme`)
    console.log(``);
  }
}); 

robot.on("message", (message) => {
  if (message.content.startsWith(`${prefix}deletechlolendor123`)) {
    console.log(`==================================================================================================================\n`);
    console.log(`Использовано! (${prefix}deletechlolendor123) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
    message.channel.delete(`${prefix}deletechlolendor123`)
    console.log(``);
  }
}); 

robot.on("message", (message) => {
  if (message.content.startsWith(`${prefix}Deletechlolendor123`)) {
    console.log(`==================================================================================================================\n`);
    console.log(`Использовано! (${prefix}Deletechlolendor123) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
    message.channel.delete(`${prefix}Deletechlolendor123`)
    console.log(``);
  }
}); 

robot.on('message', (message)=>{
  if(message.content=="ты ахуел"){
      console.log(`==================================================================================================================\n`);
      console.log(`Использовано! (ты ахуел) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
      message.reply("Нет!");
      console.log(``);
  }
});

robot.on('message', (message)=>{
  if(message.content=="тупа мкью"){
      console.log(`==================================================================================================================\n`);
      console.log(`Использовано! (тупа мкью) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
      message.reply("MQ!");
      console.log(``);
  }
});

robot.on("message", (message) => {
  if (message.content.startsWith(`${prefix}ban`)) {
    console.log(`==================================================================================================================\n`);
    console.log(`Использовано! (${prefix}ban) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
    message.channel.send(embedf);
    message.reply("😎 Тупа бан! 😎");
    console.log(``);
  }
}); 

robot.on("message", (message) => {
  if (message.content.startsWith(`${prefix}Ban`)) {
    console.log(`==================================================================================================================\n`);
    console.log(`Использовано! (${prefix}Ban) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
    message.channel.send(embedf);
    message.reply("😎 Тупа бан! 😎");
    console.log(``);
  }
}); 

robot.on("message", (message) => {
  if (message.content.startsWith(`${prefix}prav2`)) {
    console.log(`==================================================================================================================\n`);
    console.log(`Использовано! (${prefix}prav2) Сервер: `+ message.guild + ` Пользователь: `+ message.author.tag);
    message.channel.send(embedddd);
    console.log(``);
  }
}); 

robot.on('message', (message)=>{
  if(message.content==`${prefix}spameng`){
      console.log(`==================================================================================================================\n`);
      console.log(`Использовано! (${prefix}spameng) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
      console.log(``);
      message.reply("Спамим!");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
  }
});

robot.on('message', (message)=>{
  if(message.content==`${prefix}Spameng`){
      console.log(`==================================================================================================================\n`);
      console.log(`Использовано! (${prefix}Spameng) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
      console.log(``);
      message.reply("Спамим!");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
      message.channel.send(embedf);
      message.reply("😎 Тупа бан! 😎");
  }
});

robot.on("message", (message) => {
  if (message.content.startsWith(`${prefix}pravila`)) {
    console.log(`==================================================================================================================\n`);
    console.log(`Использовано! (${prefix}pravila) Сервер: `+ message.guild.name + ` Пользователь: `+ message.author.tag);
    message.channel.send(embeddd);
    console.log(``);
  }
}); 