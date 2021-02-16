const Discord = require('discord.js')
const bot = new Discord.Client()

var prefix = "a/";
var prefix2 = "oui/"

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
        }
        if(message.author.id === '809891861996240956'){
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

bot.login(`${process.env.TOKEN}`);

//https://discord.com/oauth2/authorize?client_id=802223183796633600&scope=bot&permissions=36826176
