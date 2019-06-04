const Discord = require('discord.js');

var myBot = new Discord.Client();
var prefix = "/";

myBot.on("ready", () => {
    console.log(`[LOGS] Connecté sur ${myBot.guilds.size} serveurs`);
})
myBot.login(process.env.TOKEN);
myBot.on('message', message => {
    if(message.content.startsWith("/clear")) {
        if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send("Tu n'as pas la permission, car tu as un grade insuffisant sur ce serveur!");
    
        let args = message.content.split(" ").slice(1);
    
        if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messages à supprimer, imbécile !")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} messages ont été supprimés, seigneur !`);
    })
}
});
myBot.on('message', message => {
    if (message.content === prefix + 'help'){
       const embed = new Discord.RichEmbed();
       embed.setTitle("**Les catégories d'Aides**")
       .setAuthor(myBot.user.username, myBot.user.avatarURL)
       .setColor(3447003)
       .setDescription('Plusieurs commandes plus ou moins cools et utiles:')
       .setThumbnail('https://images-ext-2.discordapp.net/external/Jhx1PMJn8pFxgtl4xq_BdoYDXohpTa0F1DiUvrylaLM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/554208450884665346/80ab9a8bc27d25070d94f6b8ba9295de.png?width=473&height=473')
       .setTimestamp()
       .setFooter('Par Toko')

       embed.addField('🍺 "/gifs"','permet de choisir un gif')
       .addField('📡 "/infobot"','permet de voir des liens pour rajouter le bot')
       .addField('🔒 "/admin"',"permet d'obtenir la liste des commandes de modération")
       .addField('📎 "/avatar"',"permet d'obtenir l'image de son compte Discord")
       .addField('📎 "/infos"',"permet d'obtenir les infos du compte Discord de quelqu'un: /infos @+nom de la personne")

       message.channel.send({embed: embed});
    }
});
myBot.on('message', message => {
    if (message.content === prefix + 'bot'){
       const embed = new Discord.RichEmbed();
       embed.setColor(3456723)
       .setTitle('**TokoBot**')
       .setImage('https://media.discordapp.net/attachments/555377771577081857/555421068773556228/377757.jpg?width=887&height=499')
       .setTimestamp()
       .setThumbnail('https://images-ext-2.discordapp.net/external/Jhx1PMJn8pFxgtl4xq_BdoYDXohpTa0F1DiUvrylaLM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/554208450884665346/80ab9a8bc27d25070d94f6b8ba9295de.png?width=473&height=473')
       .addField('🍻 Venez rejoidre le serveur de mon créateur', 'https://discord.gg/WyCSTS2')
       .addField('🏰 Me faire visiter ton serveur', 'https://discordapp.com/oauth2/authorize?client_id=559808523782062111&permissions=8&scope=bot')
       .setAuthor(myBot.user.username, myBot.user.avatarURL)
       .setDescription('*Je souhaiterai visiter des serveurs, aidez moi PLEASE:*')
       .setFooter('Par Toko')

       message.channel.send({embed: embed});
    }
});
myBot.on('message', message => {
    if (message.content === prefix + 'gifs'){
       const embed = new Discord.RichEmbed();
       embed.setTitle("**La catégorie gifs**")
       .setAuthor(myBot.user.username, myBot.user.avatarURL)
       .setColor(3447003)
       .setDescription('les gifs:')
       .setThumbnail('https://images-ext-2.discordapp.net/external/Jhx1PMJn8pFxgtl4xq_BdoYDXohpTa0F1DiUvrylaLM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/554208450884665346/80ab9a8bc27d25070d94f6b8ba9295de.png?width=473&height=473')
       .setTimestamp()
       .setFooter('Par Toko')

       embed.addField('🍸 "/cat1"','permet de choisir un gif chat')
       .addField('📖 "/cat2"','permet de choisir un gif chat qui lit')
       .addField('🎻 "/cat3"','permet de choisir le gif du chat botté')
       .addField('🍯 "/dog1"','permet de choisir un gif chien')
       .addField('⛲ "/fairy"','permet de choisir un gif chat')
       .addField('😱 "/stoplesbetises"','permet de choisir un gif')
       .addField('😂 "/mdr"','permet de choisir un gif mort de rire')
       .addField('🍯 "/cat4"','permet de choisir un gif chat')
       .addField('⛲ "/fruit"','permet de choisir un gif de pomme')
       .addField('😱 "/homer simpson"','permet de choisir un gif de Homer')
       .addField('😂 "/Gym"','permet de choisir un gif de personne qui fait du sport')
       .addField('😂 "/donnuts"','"homer ne trouve pas un donnut"')
       .addField('😱 "/ohhh"','"un mignon trouve du lapis"')

       message.channel.send({embed: embed});
    }
});
myBot.on('message', data => {
    if (data.content === prefix + 'cat1'){
    data.channel.send('https://i.giphy.com/media/F0eb5L2xJJJNC/giphy.webp');
    console.log("_Cat1_");
}
});
myBot.on('message', data => {
    if (data.content === prefix + 'cat2'){
    data.channel.send('http://mississippi.m.i.pic.centerblog.net/d80ef475.gif');
    console.log("_Cat2_");
}
});
myBot.on('message', data => {
    if (data.content === prefix + 'dog1'){
    data.channel.send('https://media3.giphy.com/media/9Cn2niGNwj2lq/source.gif');
    console.log("_Dog1_");
}
});
myBot.on('message', data => {
    if (data.content === prefix + 'cat3'){
    data.channel.send('http://maguy69.m.a.pic.centerblog.net/1d004ad6.gif');
    console.log("_Cat3_");
}
});
myBot.on('message', data => {
    if (data.content === prefix + 'fairy'){
    data.channel.send('https://media1.tenor.com/images/6a8bfa6551752b27e031bd334a045623/tenor.gif');
    console.log("_Fairy_");
}
});
myBot.on('message', data => {
    if (data.content === prefix + 'stoplesbetises'){
    data.channel.send('http://moyeuvre.m.o.pic.centerblog.net/f1332077.gif');
    console.log("_Stop Les Bétises_");
}
});
myBot.on('message', data => {
    if (data.content === prefix + 'mdr'){
    data.channel.send('http://img.over-blog-kiwi.com/1/18/87/52/20170314/ob_50a1a3_mdr.gif');
    console.log("_MDR_");
}
});
myBot.on('message', data => {
    if (data.content === prefix + 'cat4'){
    data.channel.send('https://blog.devidia.net/wp-content/uploads/2017/11/safe_image.gif');
    console.log("_Cat4_");
}
});
myBot.on('message', data => {
    if (data.content === prefix + 'fruit'){
    data.channel.send('https://www.yoamoloszapatos.com/wp-content/uploads/2018/05/tenor-6-6.gif');
    console.log("_Fruit_");
}
});
myBot.on('message', data => {
    if (data.content === prefix + 'homer simpson'){
    data.channel.send('https://media.giphy.com/media/CDpAmfo9dbOyA/giphy.gif');
    data.channel.send('Oh Pinez, il est ou mon donut ?');
    console.log("_Homer_");
}
});
myBot.on('message', data => {
    if (data.content === prefix + 'Gym'){
    data.channel.send('https://i.pinimg.com/originals/d6/7b/af/d67baffb519cab66bf603e565d9298f1.gif');
    console.log("_Gym_");
}
});
myBot.on('message', data => {
    if (data.content === prefix + 'donnuts'){
    data.channel.send('https://media3.giphy.com/media/kEKcOWl8RMLde/giphy.gif');
    console.log("_Donnut_");
}
});
myBot.on('message', data => {
    if (data.content === prefix + 'toko'){
    data.channel.send('https://www.picgifs.com/games-gifs/games-gifs/minecraft/picgifs-minecraft-1105739.gif');
    console.log("_toko_");
}
});
myBot.on('message', data => {
    if (data.content === prefix + 'ohhh'){
    data.channel.send('http://karinedreamsgraphic.k.a.pic.centerblog.net/Minions-Gif-pic1.gif');
    console.log("_ohhhhh_");
}
});
myBot.on('message', data => {
    if (data.content === prefix + 'gif ban'){
    data.channel.send('https://i.imgur.com/O3DHIA5.gif');
    data.channel.send("houla le BAN est proche!!!")
    console.log("_ban proche_");
}
});
myBot.on('message', message => {
    if (message.content === prefix + 'admin'){
       if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");
       const embed = new Discord.RichEmbed();
       embed.setTitle("**La catégorie admin**")
       .setAuthor(myBot.user.username, myBot.user.avatarURL)
       .setColor(3447003)
       .setDescription('les commandes:')
       .setThumbnail('https://images-ext-2.discordapp.net/external/Jhx1PMJn8pFxgtl4xq_BdoYDXohpTa0F1DiUvrylaLM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/554208450884665346/80ab9a8bc27d25070d94f6b8ba9295de.png?width=473&height=473')
       .setTimestamp()
       .setFooter('Par TokoFurax')

       embed.addField('🔪 "/clear"',"permet de clean le chat. Utilisation: //_clear + nombre entre 0 et 100 mais besoins de perms")
       .addField('☢ "/gban"',"permet de ban un utilisateur")
       .addField('🚫 "/kick"',"permet de éjecter un utilisateur")

       message.channel.send({embed: embed});
       console.log("_ADMIN_ " + "utilisé par " + message.author.username);
    }
});
myBot.on('message', message => {
    if (!message.guild) return;
  
    if (message.content.startsWith('/gban')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.ban({
            reason: 'Non respect des règles du Serveur!',
          }).then(() => {
            message.reply(`BAN réussi: ${user.tag}`);
          }).catch(err => {
            message.reply('Je ne suis pas capable de ban cet utilisateur, débile met moi + de perms');
            console.error(err);
          });
        } else {
          message.reply("Cet utilisateur n'est pas dans le serveur, débile!");
        }
      } else {
        message.reply("Tu n'as pas le role suffisant pour BAN un utilisateur, débile!");
      }
    }
});
myBot.on('message', message => {
    if (!message.guild) return;
  
    if (message.content.startsWith('/kick')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.kick('Non respect des règles du serveur!').then(() => {
            message.reply(`KICK réussi: ${user.tag}`);
          }).catch(err => {
            message.reply('Je ne suis pas capable de kick cette personne!');
            console.error(err);
          });
        } else {
          message.reply("Cet utilisateur n'est pas dans le serveur!");
        }
      } else {
        message.reply("Tu n'as pas le role suffisant pour KICK un utilisateur!");
      }
    }
});
myBot.on('message', message => {
    if (message.content.startsWith('/avatar')) {
        var mentionned = message.mentions.users.first();
        var autheur;

        if(mentionned){
            var autheur = mentionned;
        } else {
            var autheur = message.author;
        }

        var newAvatar = autheur.avatarURL;

        if(newAvatar.includes('.gifs')){
            message.channel.send("", {
                embed:{
                    image:{
                        url: autheur.avatarURL.slice(0,autheur.avatarURL.lastIndexOf('?size='))
                    },
                    color:0xffffff
                }
            })
        } else {
            message.channel.send("", {
                embed:{
                    title: "Avatar de " + autheur.username,
                    image:{
                        url: autheur.avatarURL
                    },
                    color:0xffffff
                }
            })
        }
        console.log("[LOGS] AVATAR de " + autheur.username + " vient d'être récupérer par " + message.author.username)
    }
});
//interface
myBot.on('message', message => {
    if (message.content === prefix + 'interface'){
       const embed = new Discord.RichEmbed();
       embed.setTitle("**La 💣Toko💣 Interface**")
       .setAuthor('Toko Interface by TokoFurax')
       .setColor(3447003)
       .setDescription('les 22 meilleures commandes du bot:')

       embed.addField('🍺 "/gifs"','permet de choisir un gif')
       .addField('📡 "/bot"','permet de voir des liens pour rajouter le bot')
       .addField('🔒 "/admin"',"permet d'obtenir la liste des commandes de modération")
       .addField('📎 "/avatar"',"permet d'obtenir l'image d'un' compte Discord")
       .addField('🍸 "/cat1"','permet de choisir un gif chat')
       .addField('📖 "/cat2"','permet de choisir un gif chat qui lit')
       .addField('🎻 "/cat3"','permet de choisir le gif du chat botté')
       .addField('🍯 "/dog1"','permet de choisir un gif chien')
       .addField('⛲ "/fairy"','permet de choisir un gif chat')
       .addField('😱 "/stoplesbetises"','permet de choisir un gif')
       .addField('😂 "/mdr"','permet de choisir un gif mort de rire')
       .addField('🔪 "/clear"',"permet de clean le chat. Utilisation: //_clear + nombre entre 0 et 100 mais besoins de perms")
       .addField('☢ "/ban"',"permet de ban un utilisateur")
       .addField('🚫 "/kick"',"permet de éjecter un utilisateur")

       message.channel.send({embed: embed});
    }
});
myBot.on('message', message => {
    if (message.content === prefix + 'serveurs'){
        message.reply(`[LOGS] Connecté sur ${myBot.guilds.size} serveurs`);
    }
});
myBot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", '👋bienvenue').send(` ${member.user.username}, 🎸**bienvenue**🎸 sur le serveur, n'hesite pas à 🍻**ramener des potes**🍻 et à *discuter avec le staff*`)
});
myBot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", '👋aurevoir').send(`😢C'est triste mais ${member.user.username} vien de quitter le serveur`)
});
myBot.on('message', message => {
    if (message.content.startsWith('/infos')) {
        var mentionned = message.mentions.users.first();
        var autheur;

        if(mentionned){
            var autheur = mentionned;
        } else {
            var autheur = message.author;
        }
        const embed = new Discord.RichEmbed();
        embed.setTitle(`Le résumé de ${autheur.username}`)
                .setAuthor('TokoBot', myBot.avatarURL)
                .setColor(3447003)
                .setDescription('les infos')
                .setThumbnail(autheur.avatarURL)
                .setTimestamp()
                .setFooter('Par TokoKaira')
         
                embed.addField('ID: ', autheur.id)
                .addField('Jeu: ', autheur.presence.game)
                .addField('Création du compte: ', autheur.createdAt)
                .addField('Dernier message envoyé: ', autheur.lastMessage)
                .addField('ID du dernier message envoyé: ', autheur.lastMessageID)
                .addField('Etat de connection: ', autheur.presence.status)
        
                message.channel.send({embed: embed});
                console.log(`Les infos de ${autheur.username} ont été consulté ` + "par " + message.author.username);
        }
});
