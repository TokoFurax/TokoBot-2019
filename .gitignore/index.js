const Discord = require('discord.js');

var myBot = new Discord.Client();
var prefix = "_";

myBot.on("ready", () => {
    console.log(`[LOGS] Connecté sur ${myBot.guilds.size} serveurs`);
})
myBot.login(process.env.TOKEN);
//Clear
myBot.on('message', message => {
    if(message.content.startsWith( prefix + "clear")) {
        if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");
    
        let args = message.content.split(" ").slice(1);
    
        if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messages à supprimer !")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} messages ont été supprimés !`);
            console.log("_Clear_ " + "utilisé par " + message.author.username);
    })
}
});
//Aide
myBot.on('message', message => {
    if (message.content === prefix + 'aide'){
       const embed = new Discord.RichEmbed();
       embed.setTitle("**Les catégories d'Aides**")
       .setAuthor(myBot.user.username, myBot.user.avatarURL)
       .setColor(3447003)
       .setDescription('Plusieurs commandes plus ou moins cools et utiles:')
       .setThumbnail('https://images-ext-2.discordapp.net/external/Jhx1PMJn8pFxgtl4xq_BdoYDXohpTa0F1DiUvrylaLM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/554208450884665346/80ab9a8bc27d25070d94f6b8ba9295de.png?width=473&height=473')
       .setTimestamp()
       .setFooter('Par TokoFurax')

       embed.addField('🍺 "_gifs"','permet de choisir un gif')
       .addField('📡 "_bot"','permet de voir des liens pour rajouter le bot')
       .addField('📃 "_programs"',"permet d'obtenir des liens plus ou moins en rapport avec la programmation")
       .addField('🔒 "_admin"',"permet d'obtenir la liste des commandes de modération")
       .addField('📎 "_myAvatar"',"permet d'obtenir l'image de son compte Discord")
       .addField('📎 "_avatar"',"permet d'obtenir l'image du compte Discord de quelqu'un: _avatar @+nom de la personne")
       .addField('📎 "_infos"',"permet d'obtenir les infos du compte Discord de quelqu'un: _infos @+nom de la personne")

       message.channel.send({embed: embed});
       console.log("_Aide Menu_ " + "utilisé par " + message.author.username);
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
       .setFooter('Par TokoFurax')

       embed.addField('🍺 "_gifs"','permet de choisir un gif')
       .addField('📡 "_bot"','permet de voir des liens pour rajouter le bot')
       .addField('📃 "_programs"',"permet d'obtenir des liens plus ou moins en rapport avec la programmation")
       .addField('🔒 "_admin"',"permet d'obtenir la liste des commandes de modération")
       .addField('📎 "_myAvatar"',"permet d'obtenir l'image de son compte Discord")
       .addField('📎 "_infos"',"permet d'obtenir les infos du compte Discord de quelqu'un: _infos @+nom de la personne")

       message.channel.send({embed: embed});
       console.log("_Aide Menu_ " + "utilisé par " + message.author.username);
    }
});

//Rajout du Bot
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
       .setFooter('Par TokoFurax')

       message.channel.send({embed: embed});
       console.log('**_RAJOUT DU BOT_** ' + "utilisé par " + message.author.username);
    }
});

//Gifs
myBot.on('message', message => {
    if (message.content === prefix + 'gifs'){
       const embed = new Discord.RichEmbed();
       embed.setTitle("**La catégorie gifs**")
       .setAuthor(myBot.user.username, myBot.user.avatarURL)
       .setColor(3447003)
       .setDescription('les gifs:')
       .setThumbnail('https://images-ext-2.discordapp.net/external/Jhx1PMJn8pFxgtl4xq_BdoYDXohpTa0F1DiUvrylaLM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/554208450884665346/80ab9a8bc27d25070d94f6b8ba9295de.png?width=473&height=473')
       .setTimestamp()
       .setFooter('Par TokoFurax')

       embed.addField('🍸 "_cat1"','permet de choisir un gif chat')
       .addField('📖 "_cat2"','permet de choisir un gif chat qui lit')
       .addField('🎻 "_cat3"','permet de choisir le gif du chat botté')
       .addField('🍯 "_dog1"','permet de choisir un gif chien')
       .addField('⛲ "_fairy"','permet de choisir un gif chat')
       .addField('😱 "_stoplesbetises"','permet de choisir un gif')
       .addField('😂 "_mdr"','permet de choisir un gif mort de rire')
       .addField('🍯 "_cat4"','permet de choisir un gif chat')
       .addField('⛲ "_fruit"','permet de choisir un gif de pomme')
       .addField('😱 "_homer simpson"','permet de choisir un gif de Homer')
       .addField('😂 "_Gym"','permet de choisir un gif de personne qui fait du sport')

       message.channel.send({embed: embed});
       console.log("_Gifs_ " + "utilisé par " + message.author.username);
    }
});

//Gifs Commandes
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

//Programs
myBot.on('message', message => {
    if (message.content === prefix + 'programs'){
       const embed = new Discord.RichEmbed();
       embed.setTitle("**La catégorie programs**")
       .setAuthor(myBot.user.username, myBot.user.avatarURL)
       .setColor(3447003)
       .setDescription('les liens:')
       .setThumbnail('https://images-ext-2.discordapp.net/external/Jhx1PMJn8pFxgtl4xq_BdoYDXohpTa0F1DiUvrylaLM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/554208450884665346/80ab9a8bc27d25070d94f6b8ba9295de.png?width=473&height=473')
       .setTimestamp()
       .setFooter('Par TokoFurax')

       embed.addField('💿 "_rpg maker xp"',"permet d'obtenir un lien pour RPG Maker XP gratuit, cracké, FR")
       .addField('📀 "_unity"',"permet d'obtenir un lien pour télécharger Unity")
       .addField('📝 "_visual studio"',"permet d'obtenir un lien pour Visual Studio Code")
       .addField('🎨 "_python"',"permet d'obtenir un lien pour Python")
       .addField('😂 "_bot pc"',"permet d'obtenir un lien pour un tutoriel de création de bot sur pc")
       .addField('😎 "_bot android"',"permet d'obtenir un lien pour un tutoriel de création de bot sur android")
       .addField('📂 "_KOD2TOU"',"permet d'obtenir le lien du site de KOD2TOU")

       message.channel.send({embed: embed});
       console.log("_Programs_ " + "utilisé par " + message.author.username);
    }
});

//Programs Commandes
myBot.on('message', message => {
    if (message.content === prefix + 'rpg maker xp'){
       const embed = new Discord.RichEmbed();
       embed.setColor(3456723)
       .setTitle('**RPG Maker XP Crack**')
       .setImage('http://d289qh4hsbjjw7.cloudfront.net/rpgmaker-20130522223546811/files/wallpaper-rpg-maker-xp-type-a.jpg')
       .setTimestamp()
       .setThumbnail('https://images-ext-2.discordapp.net/external/Jhx1PMJn8pFxgtl4xq_BdoYDXohpTa0F1DiUvrylaLM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/554208450884665346/80ab9a8bc27d25070d94f6b8ba9295de.png?width=473&height=473')
       .addField('RPG Maker XP lien 1', 'http://www.final-rpg.com/rpg_maker_xp-telecharger-installation.html')
       .addField('RPG Maker XP lien 2', 'http://www.mediafire.com/file/fzl5rz6asgj1ppk/rpg_maker_xp.rar')
       .setAuthor(myBot.user.username, myBot.user.avatarURL)
       .setDescription('les liens pour télécharger RPG Maker xp en crack fr (il faut télécharger les deux)')
       .setFooter('Par TokoFurax')

       message.channel.send({embed: embed});
       console.log("_RPG Maker XP_ " + "utilisé par " + message.author.username);
    }
});
myBot.on('message', message => {
    if (message.content === prefix + 'unity'){
       const embed = new Discord.RichEmbed();
       embed.setColor(3456723)
       .setTitle('**Unity**')
       .setImage('https://udemy-images.udemy.com/course/750x422/1210008_6859.jpg')
       .setTimestamp()
       .setThumbnail('https://images-ext-2.discordapp.net/external/Jhx1PMJn8pFxgtl4xq_BdoYDXohpTa0F1DiUvrylaLM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/554208450884665346/80ab9a8bc27d25070d94f6b8ba9295de.png?width=473&height=473')
       .addField('Unity', 'https://store.unity.com/download?ref=personal')
       .setAuthor(myBot.user.username, myBot.user.avatarURL)
       .setDescription('le lien pour télécharger Unity')
       .setFooter('Par TokoFurax')

       message.channel.send({embed: embed});
       console.log("_Unity_ " + "utilisé par " + message.author.username);
    }
});
myBot.on('message', message => {
    if (message.content === prefix + 'KOD2TOU'){
       const embed = new Discord.RichEmbed();
       embed.setColor(3456723)
       .setTitle('**KOD2TOU**')
       .setImage('https://image.jimcdn.com/app/cms/image/transf/dimension=287x10000:format=jpg/path/s2dfa13bdc82322ff/image/iaf03515eaaf7bcd1/version/1552065221/image.jpg')
       .setTimestamp()
       .setThumbnail('https://images-ext-2.discordapp.net/external/Jhx1PMJn8pFxgtl4xq_BdoYDXohpTa0F1DiUvrylaLM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/554208450884665346/80ab9a8bc27d25070d94f6b8ba9295de.png?width=473&height=473')
       .addField('Le site', 'http://kod2tou.cf')
       .setAuthor(myBot.user.username, myBot.user.avatarURL)
       .setDescription('le lien pour visiter notre site internet (la majoritée des liens y sont téléchargeablent)')
       .setFooter('Par TokoFurax')

       message.channel.send({embed: embed});
       console.log("_KOD2TOU_ " + "utilisé par " + message.author.username);
    }
});
myBot.on('message', message => {
    if (message.content === prefix + 'bot pc'){
       const embed = new Discord.RichEmbed();
       embed.setColor(3486023)
       .setTitle('**Créer un bot sur PC**')
       .setDescription("lien d'une vidéo sur comment créer un bot sur PC")
       .addField('Lien de la vidéo', 'https://www.youtube.com/watch?v=FMijzVzh4MQ&t=1s')
       .setImage('https://i.pinimg.com/564x/a1/6e/a7/a16ea7fa2bf36211e03461d9194ebefa.jpg')
       .setTimestamp()

       message.channel.send({embed: embed});
       console.log("_Bot PC_ " + "utilisé par " + message.author.username);
    }
});
myBot.on('message', message => {
    if (message.content === prefix + 'bot android'){
       const embed = new Discord.RichEmbed();
       embed.setColor(3486023)
       .setTitle('**Créer un bot sous Android**')
       .setDescription("lien d'une vidéo sur comment créer un bot sous android")
       .addField('Lien de la vidéo', 'https://www.youtube.com/watch?v=XkIBT1ONfOc')
       .setImage('https://i.pinimg.com/564x/1e/75/6f/1e756fe2b578ce50b21fe0324eeb92d1.jpg')
       .setTimestamp()

       message.channel.send({embed: embed});
       console.log("_Bot Android_ " + "utilisé par " + message.author.username);
    }
});
myBot.on('message', message => {
    if (message.content === prefix + 'python'){
       const embed = new Discord.RichEmbed();
       embed.setColor(3456723)
       .setTitle('**Python**')
       .setImage('https://static.oc-static.com/prod/courses/illustrations/illu_apprenez-a-programmer-en-python.png')
       .setTimestamp()
       .setThumbnail('https://images-ext-2.discordapp.net/external/Jhx1PMJn8pFxgtl4xq_BdoYDXohpTa0F1DiUvrylaLM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/554208450884665346/80ab9a8bc27d25070d94f6b8ba9295de.png?width=473&height=473')
       .addField('Télécharger Python', 'https://www.python.org/downloads/')
       .setAuthor(myBot.user.username, myBot.user.avatarURL)
       .setDescription('le lien pour télécharger Python')
       .setFooter('Par TokoFurax')

       message.channel.send({embed: embed});
       console.log("_Python_ " + "utilisé par " + message.author.username);
    }
});
myBot.on('message', message => {
    if (message.content === prefix + 'visual studio'){
       const embed = new Discord.RichEmbed();
       embed.setColor(3456723)
       .setTitle('**Visual Sudio Code**')
       .setImage('https://miro.medium.com/max/910/0*vyFBOV8lCa-22XvM.png')
       .setTimestamp()
       .setThumbnail('https://images-ext-2.discordapp.net/external/Jhx1PMJn8pFxgtl4xq_BdoYDXohpTa0F1DiUvrylaLM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/554208450884665346/80ab9a8bc27d25070d94f6b8ba9295de.png?width=473&height=473')
       .addField('Télécharger Visual Studio Code', 'https://code.visualstudio.com/')
       .setAuthor(myBot.user.username, myBot.user.avatarURL)
       .setDescription('le lien pour télécharger Visual Studio Code')
       .setFooter('Par TokoFurax')

       message.channel.send({embed: embed});
       console.log("_Visual Studio Code_ " + "utilisé par " + message.author.username);
    }
});

//Admin
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

       embed.addField('🔪 "_clear"',"permet de clean le chat. Utilisation: //_clear + nombre entre 0 et 100 mais besoins de perms")
       .addField('🍸 "_TokoFurax"',"permet d'afficher l'image de profil de TokoFurax")
       .addField('🍸 "_INFINITI"',"permet d'afficher l'image de profil de INFINITY")
       .addField('🍸 "_Humanoïde.exe"',"permet d'afficher l'image de profil de humanoïde.exe")
       .addField('☢ "_ban"',"permet de ban un utilisateur")
       .addField('🚫 "_kick"',"permet de éjecter un utilisateur")
       .addField('🔒 "_exitserv"',"permet de éjecter le bot du serveur (par exemple en cas de RAID)")

       message.channel.send({embed: embed});
       console.log("_ADMIN_ " + "utilisé par " + message.author.username);
    }
});
myBot.on('message', message => {
    if (message.content === prefix + 'TokoFurax'){
       if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");
       const embed = new Discord.RichEmbed();
       embed.setColor(3446023)
       .setImage('https://cdn.discordapp.com/attachments/555377771577081857/555378797365428224/big-4538792063.jpg')

       message.channel.send({embed: embed});
       console.log("_TokoFurax_ " + "utilisé par " + message.author.username);
    }
});
myBot.on('message', message => {
    if (message.content === prefix + 'INFINITY'){
       if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");
       const embed = new Discord.RichEmbed();
       embed.setColor(3446023)
       .setImage('https://cdn.discordapp.com/attachments/555377771577081857/556737543027163146/d15bc3554e226e4c95f296ebb3592a97.png')

       message.channel.send({embed: embed});
       console.log("_INFINITY_ " + "utilisé par " + message.author.username);
    }
});
myBot.on('message', message => {
    if (message.content === prefix + 'Humanoïde.exe'){
       if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");
       const embed = new Discord.RichEmbed();
       embed.setColor(3446023)
       .setImage('https://cdn.discordapp.com/attachments/555377771577081857/556737546944512010/1427bbc5e7d521e27679f60d38499acc.png')

       message.channel.send({embed: embed});
       console.log("_humanoïde.exe_ " + "utilisé par " + message.author.username);
    }
});
myBot.on('message', message => {
    if (!message.guild) return;
  
    if (message.content.startsWith('_ban')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.ban({
            reason: 'Non respect des règles du Serveur!',
          }).then(() => {
            message.reply(`BAN réussi: ${user.tag}`);
          }).catch(err => {
            message.reply('Je ne suis pas capable de ban cet utilisateur');
            console.error(err);
          });
        } else {
          message.reply("Cet utilisateur n'est pas dans le serveur!");
        }
      } else {
        message.reply("Tu n'as pas le role suffisant pour BAN un utilisateur!");
      }
    }
});
myBot.on('message', message => {
    if (!message.guild) return;
  
    if (message.content.startsWith('_kick')) {
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

//avatar
myBot.on('message', message => {
    if (message.content === prefix + 'myAvatar'){
        const embed = new Discord.RichEmbed();
        embed.setColor(3446023)
        .setImage(message.author.avatarURL)
 
        message.channel.send({embed: embed});
        console.log("_myAvatar_ " + "utilisé par " + message.author.username);
     }
});
myBot.on('message', message => {
    if (message.content.startsWith('_avatar')) {
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

       embed.addField('🍺 "_gifs"','permet de choisir un gif')
       .addField('📡 "_bot"','permet de voir des liens pour rajouter le bot')
       .addField('📃 "_programs"',"permet d'obtenir des liens plus ou moins en rapport avec la programmation")
       .addField('🔒 "_admin"',"permet d'obtenir la liste des commandes de modération")
       .addField('📎 "_myAvatar"',"permet d'obtenir l'image de son compte Discord")
       .addField('🍸 "_cat1"','permet de choisir un gif chat')
       .addField('📖 "_cat2"','permet de choisir un gif chat qui lit')
       .addField('🎻 "_cat3"','permet de choisir le gif du chat botté')
       .addField('🍯 "_dog1"','permet de choisir un gif chien')
       .addField('⛲ "_fairy"','permet de choisir un gif chat')
       .addField('😱 "_stoplesbetises"','permet de choisir un gif')
       .addField('😂 "_mdr"','permet de choisir un gif mort de rire')
       .addField('💿 "_rpg maker xp"',"permet d'obtenir un lien pour RPG Maker XP gratuit, cracké, FR")
       .addField('📀 "_unity"',"permet d'obtenir un lien pour télécharger Unity")
       .addField('📝 "_visual studio"',"permet d'obtenir un lien pour Visual Studio Code")
       .addField('🎨 "_python"',"permet d'obtenir un lien pour Python")
       .addField('😂 "_bot pc"',"permet d'obtenir un lien pour un tutoriel de création de bot sur pc")
       .addField('😎 "_bot android"',"permet d'obtenir un lien pour un tutoriel de création de bot sur android")
       .addField('📂 "_KOD2TOU"',"permet d'obtenir le lien du site de KOD2TOU")
       .addField('🔪 "_clear"',"permet de clean le chat. Utilisation: //_clear + nombre entre 0 et 100 mais besoins de perms")
       .addField('☢ "_ban"',"permet de ban un utilisateur")
       .addField('🚫 "_kick"',"permet de éjecter un utilisateur")

       message.channel.send({embed: embed});
    }
});

//crash
myBot.on('message', message => {
    if (message.content === prefix + '__crash'){
       if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");
       const embed = new Discord.RichEmbed();
       embed.setTitle("**La 💣Toko💣 Interface**")
       .setAuthor('Toko Interface by TokoFurax')
       .setColor(3447003)
       .setDescription('les 22 meilleures commandes du bot:')

       embed.addField('🍺 "_gifs"','permet de choisir un gif')
       .addField('📡 "_bot"','permet de voir des liens pour rajouter le bot')
       .addField('📃 "_programs"',"permet d'obtenir des liens plus ou moins en rapport avec la programmation")
       .addField('🔒 "_admin"',"permet d'obtenir la liste des commandes de modération")
       .addField('📎 "_myAvatar"',"permet d'obtenir l'image de son compte Discord")
       .addField('📧 "//cat1"','permet de choisir un gif chat')
       .addField('📧 "//cat2"','permet de choisir un gif chat qui lit')
       .addField('📧 "//cat3"','permet de choisir le gif du chat botté')
       .addField('📧 "//dog1"','permet de choisir un gif chien')
       .addField('📧 "//fairy"','permet de choisir un gif chat')
       .addField('📧 "//stoplesbetises"','permet de choisir un gif')
       .addField('📧 "//mdr"','permet de choisir un gif mort de rire')
       .addField('📤 "_rpg maker xp"',"permet d'obtenir un lien pour RPG Maker XP gratuit, cracké, FR")
       .addField('📤 "_unity"',"permet d'obtenir un lien pour télécharger Unity")
       .addField('📤 "_visual studio"',"permet d'obtenir un lien pour Visual Studio Code")
       .addField('📤 "_python"',"permet d'obtenir un lien pour Python")
       .addField('📤 "_bot pc"',"permet d'obtenir un lien pour un tutoriel de création de bot sur pc")
       .addField('📤 "_bot android"',"permet d'obtenir un lien pour un tutoriel de création de bot sur android")
       .addField('📤 "_photoshop crack"',"permet d'obtenir un lien pour photoshop gratuit cracké")
       .addField('📤 "_KOD2TOU"',"permet d'obtenir le lien du site de KOD2TOU")
       .addField('🔪 "_clear"',"permet de clean le chat. Utilisation: //_clear + nombre entre 0 et 100 mais besoins de perms")
       .addField('☢ "_ban"',"permet de ban un utilisateur")
       .addField('🚫 "_kick"',"permet de éjecter un utilisateur")
       .addField('🍺 "_gifs"','permet de choisir un gif')
       .addField('📡 "_bot"','permet de voir des liens pour rajouter le bot')
       .addField('📃 "_programs"',"permet d'obtenir des liens plus ou moins en rapport avec la programmation")
       .addField('🔒 "_admin"',"permet d'obtenir la liste des commandes de modération")
       .addField('📎 "_myAvatar"',"permet d'obtenir l'image de son compte Discord")
       .addField('📧 "_cat1"','permet de choisir un gif chat')
       .addField('📧 "_cat2"','permet de choisir un gif chat qui lit')
       .addField('📧 "_cat3"','permet de choisir le gif du chat botté')
       .addField('📧 "_dog1"','permet de choisir un gif chien')
       .addField('📧 "_fairy"','permet de choisir un gif chat')

       message.channel.send({embed: embed});
    }
});

//serveurs
myBot.on('message', message => {
    if (message.content === prefix + 'serveurs'){
        message.reply(`[LOGS] Connecté sur ${myBot.guilds.size} serveurs`);
    }
});

//exit
myBot.on("message", message => {
    if (message.content === '_exit') {
      if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.channel.send("Vous n'avez pas la permission !");
      console.log(`Commande .exit par ${message.author.tag}`);
      msg.guild.leave().catch(e => {});
}});

//Bienvenue
myBot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", '👋bienvenue').send(` ${member.user.username}, 🎸**bienvenue**🎸 sur le serveur, n'hesite pas à 🍻**ramener des potes**🍻 et à *discuter avec le staff*`)
});

//Aurevoir
myBot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", '👋aurevoir').send(`😢C'est triste mais ${member.user.username} vien de quitter le serveur`)
});
//Personnes vérif
myBot.on('message', message => {
    if (message.content.startsWith('_infos')) {
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
