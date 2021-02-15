const Discord = require('discord.js')
const Math = require('mathjs')
const bot = new Discord.Client()

var prefix = "a/";
var prefix2 = "oui/";
var prefix3 = "nbr/";

var prefixperso = "|";

bot.on('ready', ready => {
    console.log('Le VPN est start')
})

bot.on('message', message => {
    //copie
    if(message.channel.id === '802270458920960070'){
        const channel = bot.channels.cache.find(ch => ch.id === '810569620309409792');
        
        let embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username)
        .setDescription(message.content)
        .setThumbnail(message.author.avatarURL())
        
        channel.send(embed);
    }
    if(message.channel.id === '802209873889984572'){
        const channel = bot.channels.cache.find(ch => ch.id === '810569588190085140');

        let embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username)
        .setDescription(message.content)
        .setThumbnail(message.author.avatarURL())
        
        channel.send(embed)
    }
    //envoi
    if(message.channel.id === '810569588190085140'){
        const channel = bot.channels.cache.find(ch => ch.id === '802209873889984572');

        if(message.author.id === '809162440091762699'){
            let embed = new Discord.MessageEmbed()
            .setAuthor('Nord VPN')
            .setThumbnail(bot.user.displayAvatarURL())
            .setImage(msg)
            .setColor('#00D166')
            channel.send(embed)
        }else{
            let embed = new Discord.MessageEmbed()
            .setAuthor('Nord VPN')
            .setThumbnail(bot.user.displayAvatarURL())
            .setImage(msg)
            .setColor('#FFA500')
            channel.send(embed)
        }
    }
})

bot.on('message', message => {
    if(message.content.startsWith(prefixperso) && message.author.id === '688299988908113992'){
        let msg = message.content.slice(1);
        message.delete()

        if(message.content.endsWith('.jpg' || '.png' || '.gif')){
            let embed = new Discord.MessageEmbed()
            .setAuthor('Administrator')
            .setColor('#00E5FF')
            .setThumbnail('https://i.pinimg.com/originals/3f/1e/9c/3f1e9c7bbb0a0279ad11c98c08c2f648.jpg')
            .setImage(msg)
            message.channel.send(embed)
        } else {
            let embed = new Discord.MessageEmbed()
            .setAuthor('Administrator')
            .setColor('#00E5FF')
            .setThumbnail('https://i.pinimg.com/originals/3f/1e/9c/3f1e9c7bbb0a0279ad11c98c08c2f648.jpg')
            .setDescription(msg)
            message.channel.send(embed)
        }
    }
})

bot.on('message', message => {
    if(message.content.startsWith(prefix2)){
        let tab = ['Oui','Non','Genre','Pas sûr','Je crois pas nan',"T'es sûre?","Mais oui c'est clair"]
        let index = Math.floor(Math.random() * (tab.length))
        message.channel.send(tab[index])
    }

    if(message.content.startsWith(prefix3)){
        let tab = ['1','2','3','4','5',"6","7",'8','9','10','11','12',"13","14",'15','16','17','18','19',"20"]
        let index = Math.floor(Math.random() * (tab.length))
        message.channel.send(tab[index])
    }
})

bot.on('message', message => {
    if(message.content.startsWith(prefix)){
        let msg = message.content.slice(2);
        message.delete()
        
        if(message.author.id === '688299988908113992'){
            // C'est Jason
            if(message.content.endsWith('.jpg' || '.png' || '.gif')){
                let embed = new Discord.MessageEmbed()
                .setAuthor('Nord VPN')
                .setThumbnail(bot.user.displayAvatarURL())
                .setImage(msg)
                .setColor('#00D166')
                message.channel.send(embed)
            } else {
                let embed = new Discord.MessageEmbed()
                .setAuthor('Nord VPN')
                .setThumbnail(bot.user.displayAvatarURL())
                .setDescription(msg)
                .setColor('#00D166')
                message.channel.send(embed)
            }
            
        }

        if(message.author.id === '801799128401051679'){
            // C'est Zia
            if(message.content.endsWith('.jpg' || '.png' || '.gif')){
                let embed = new Discord.MessageEmbed()
                .setAuthor('Nord VPN')
                .setThumbnail(bot.user.displayAvatarURL())
                .setImage(msg)
                .setColor('#FD6C9E')
                message.channel.send(embed)
            } else {
                let embed = new Discord.MessageEmbed()
                .setAuthor('Nord VPN')
                .setThumbnail(bot.user.displayAvatarURL())
                .setDescription(msg)
                .setColor('#FD6C9E')
                message.channel.send(embed)
            }
        }

        if(message.author.id === '759426118968541204'){
            // C'est Mathilde
            if(message.content.endsWith('.jpg' || '.png' || '.gif')){
                let embed = new Discord.MessageEmbed()
                .setAuthor('Nord VPN')
                .setThumbnail(bot.user.displayAvatarURL())
                .setImage(msg)
                .setColor('#FFA500')
                message.channel.send(embed)
            } else {
                let embed = new Discord.MessageEmbed()
                .setAuthor('Nord VPN')
                .setThumbnail(bot.user.displayAvatarURL())
                .setDescription(msg)
                .setColor('#FFA500')
                message.channel.send(embed)
            }
        }

        if(message.author.id === '416964836015079434'){
            if(message.content.endsWith('.jpg' || '.png' || '.gif')){
                let embed = new Discord.MessageEmbed()
                .setAuthor('Nord VPN')
                .setThumbnail(bot.user.displayAvatarURL())
                .setImage(msg)
                .setColor('#007FFF')
                message.channel.send(embed)
            } else {
                let embed = new Discord.MessageEmbed()
                .setAuthor('Nord VPN')
                .setThumbnail(bot.user.displayAvatarURL())
                .setDescription(msg)
                .setColor('#007FFF')
                message.channel.send(embed)
            }
        }

        if(message.author.id === '357176896598966274'){
            if(message.content.endsWith('.jpg' || '.png' || '.gif')){
                let embed = new Discord.MessageEmbed()
                .setAuthor('Nord VPN')
                .setThumbnail(bot.user.displayAvatarURL())
                .setImage(msg)
                .setColor('#E70101')
                message.channel.send(embed)
            } else {
                let embed = new Discord.MessageEmbed()
                .setAuthor('Nord VPN')
                .setThumbnail(bot.user.displayAvatarURL())
                .setDescription(msg)
                .setColor('#E70101')
                message.channel.send(embed)
            }
        }

        if(message.author.id === '577052506052624395'){
            //C'est Thomas
            if(message.content.endsWith('.jpg' || '.png' || '.gif')){
                let embed = new Discord.MessageEmbed()
                .setAuthor('Nord VPN')
                .setThumbnail(bot.user.displayAvatarURL())
                .setImage(msg)
                .setColor('#000066')
                message.channel.send(embed)
            } else {
                let embed = new Discord.MessageEmbed()
                .setAuthor('Nord VPN')
                .setThumbnail(bot.user.displayAvatarURL())
                .setDescription(msg)
                .setColor('#000066')
                message.channel.send(embed)
            }
        }

        if(message.author.id === '688369660588326984'){
            // c'est Anna
            if(message.content.endsWith('.jpg' || '.png' || '.gif')){
                let embed = new Discord.MessageEmbed()
                .setAuthor('Nord VPN')
                .setThumbnail(bot.user.displayAvatarURL())
                .setImage(msg)
                .setColor('#9400D3')
                message.channel.send(embed)
            } else {
                let embed = new Discord.MessageEmbed()
                .setAuthor('Nord VPN')
                .setThumbnail(bot.user.displayAvatarURL())
                .setDescription(msg)
                .setColor('#9400D3')
                message.channel.send(embed)
            }
        }

        if(message.author.id === '802212501072642121'){
            // c'est Eliott
            if(message.content.endsWith('.jpg' || '.png' || '.gif')){
                let embed = new Discord.MessageEmbed()
                .setAuthor('Nord VPN')
                .setThumbnail(bot.user.displayAvatarURL())
                .setImage(msg)
                .setColor('#97D300')
                message.channel.send(embed)
            } else {
                let embed = new Discord.MessageEmbed()
                .setAuthor('Nord VPN')
                .setThumbnail(bot.user.displayAvatarURL())
                .setDescription(msg)
                .setColor('#97D300')
                message.channel.send(embed)
            }
        }

        if(message.author.id === '471586519333863424'){
            // c'est Romain
            if(message.content.endsWith('.jpg' || '.png' || '.gif')){
                let embed = new Discord.MessageEmbed()
                .setAuthor('Nord VPN')
                .setThumbnail(bot.user.displayAvatarURL())
                .setImage(msg)
                .setColor('#318CE7')
                message.channel.send(embed)
            } else {
                let embed = new Discord.MessageEmbed()
                .setAuthor('Nord VPN')
                .setThumbnail(bot.user.displayAvatarURL())
                .setDescription(msg)
                .setColor('#318CE7')
                message.channel.send(embed)
            }
        }

        if (message.author.id === '802212501072642121' || '688369660588326984' || '577052506052624395' || '357176896598966274' || '416964836015079434' || '759426118968541204' || '801799128401051679' || '688299988908113992'){
            
        } else {
            if(message.content.endsWith('.jpg' || '.png' || '.gif')){
                let embed = new Discord.MessageEmbed()
                .setAuthor('Nord VPN')
                .setThumbnail(bot.user.displayAvatarURL())
                .setImage(msg)
                .setFooter('Utilisateur Inconnu')
                message.channel.send(embed)
            } else {
                let embed = new Discord.MessageEmbed()
                .setAuthor('Nord VPN')
                .setThumbnail(bot.user.displayAvatarURL())
                .setDescription(msg)
                .setFooter('Utilisateur Inconnu')
                message.channel.send(embed)
            }
        }
    }
})

bot.login("process.env.TOKEN");

//https://discord.com/oauth2/authorize?client_id=802223183796633600&scope=bot&permissions=36826176
