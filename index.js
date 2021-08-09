// Gestion du bot sur discord
const Discord = require('discord.js')
const bot = new Discord.Client()
var count = 0


var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var xhr = new XMLHttpRequest(); 
xhr.open("GET", 'https://swq.jp/_special/rest/Sw/Coupon?_csrf_token=JAH84YCjSnw2C_5cCMfx3HzJzGMWOHe9FSRJediA8PkMq7ec9LC6Ph3E0DrJrRllafJTrCnaOz89ag6ytAzQjp3nNe4JSxikbKGDnbpA8w0OFW0auiF8Ro7Ga0wWzPlAJyfbcJPWjIM&_ctx[b]=master&_ctx[c]=JPY&_ctx[l]=fr-FR&_ctx[t]=Europe/Paris;+0200&results_per_page=10', false); 
//xhr.responseType = 'json';
xhr.send(null); 
var donnee = JSON.parse(xhr.responseText);

var lastCheck

bot.on("ready", () => {
  console.log("Bot is ready");
  bot.on('message', function (message){
      // if (message.content == '!code'){
      //     //message.reply(resultString) // repond avec le @ de  l'utilisateur qui envoi la commande
      //     message.channel.send(resultString)
      // }
      
      if(message.author.id !== "315497486527496192" && message.author.id !== "870270988372283432"){ 
          console.log("Vous n'avez pas les droits pour démarrer le Bot !");
      }
      // if(message.content == '!start')
      // {
      // if(donnee.data[0].Last_Check.unix > (Math.round(Date.now()/1000)-3600)){ // modifier pour faire > date.now - 1 heure ou plus
      else if(lastCheck != donnee.data[0].Label || count === '0'){ 
        //message.reply('Le bot a bien démarré !')
        const sendMessage = () => { 
          count ++


          var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
          var xhr = new XMLHttpRequest(); 
          xhr.open("GET", 'https://swq.jp/_special/rest/Sw/Coupon?_csrf_token=JAH84YCjSnw2C_5cCMfx3HzJzGMWOHe9FSRJediA8PkMq7ec9LC6Ph3E0DrJrRllafJTrCnaOz89ag6ytAzQjp3nNe4JSxikbKGDnbpA8w0OFW0auiF8Ro7Ga0wWzPlAJyfbcJPWjIM&_ctx[b]=master&_ctx[c]=JPY&_ctx[l]=fr-FR&_ctx[t]=Europe/Paris;+0200&results_per_page=20', false); 
          //xhr.responseType = 'json';
          xhr.send(null); 
          var donnee = JSON.parse(xhr.responseText);
          lastCheck = donnee.data[0].Label

          var embed = new Discord.MessageEmbed()
            
          if (xhr.readyState == 4){
  
            
              var resultString = ":tickets: **LISTE DES COUPONS** :tickets: \n";
              var donnee = JSON.parse(xhr.responseText);
              if (donnee.data[0].Status === "expired"){  //Vérifie que le status du dernier coupon en date est égale à "expired"
                console.log("Aucun coupon n'est disponible pour le moment!")
                resultString = "Aucun coupon n'est disponible pour le moment! :sob: ";
                
                //return resultString;
              }
              else{ // si dernier coupon n'est pas "expired" alors on vérifie le status de tout les coupons et on affiche ceux qui on un status different de "expired"
                for (let i in donnee.data) {
                  if(donnee.data[i].Status !== "expired"){
                    var recompenses = "";
                    
                    resultString = resultString + " \n \t\t - *" + donnee.data[i].Label + "* \t :white_check_mark:";
  
                    for (var a = 0; a < donnee.data[i].Resources.length; a++) {
                      //console.log(donnee.data[i].Resources[a].Sw_Resource.Label);
                      var emoji = donnee.data[i].Resources[a].Sw_Resource.Label;
                      // condition pour vélin Light & Dark
                      if(emoji === 'Light & Dark Scroll')
                      {
                        emoji = '<:LightDarkScroll:873178783702724658>'
                      }
                      // condition pour l'Energie
                      if(emoji === 'Energy')
                      {
                        emoji = '<:energy:873178782251503637>';
                        //console.log(emoji);
                      }
                      // condition pour le Mana
                      if(emoji === 'Mana')
                      {
                        emoji = '<:Mana:873178782557683733>'
                      }
                      // condition pour vélin mystique
                      if(emoji === 'Mystical Scroll')
                      {
                        emoji = '<:MysticalScroll:873178783451078726>'
                      }
                      // condition pour les pierres d'invocations
                      if(emoji === 'Summoning Stone')
                      {
                        emoji = '<:SummoningStone:873178783631442000>'
                      }
                      // condition pour les vélin d'eau
                      if(emoji === 'Water Scroll')
                      {
                        emoji = '<:WaterScroll:873178783639830558>'
                      }
                      // condition pour les vélin de feu
                      if(emoji === 'Fire Scroll')
                      {
                        emoji = '<:FireScroll:873178783497191424>'
                      }
                      // condition pour vélin de vent
                      if(emoji === 'Air Scroll')
                      {
                        emoji = '<:WindScroll:873178783434309663>'
                      }
                      // condition pour les cristaux
                      if(emoji === 'Crystal')
                      {
                        emoji = '<:Crystal:873178782243106826>'
                      }
                      if(donnee.data[i].Resources[a].Quantity === '50000'){
                        var recompenses =  recompenses  + '\t' + emoji + ' x ' + '50.000' + '\t';
                      }
                      else if(donnee.data[i].Resources[a].Quantity === '100000'){
                        var recompenses =  recompenses  + '\t' + emoji + ' x ' + '100.000' + '\t';
                      }
                      else if(donnee.data[i].Resources[a].Quantity === '200000'){
                        var recompenses =  recompenses  + '\t' + emoji + ' x ' + '200.000' + '\t';
                      }
                      else if(donnee.data[i].Resources[a].Quantity === '300000'){
                        var recompenses =  recompenses  + '\t' + emoji + ' x ' + '300.000' + '\t';
                      }
                      else{
                        var recompenses =  recompenses  + '\t' + emoji + ' x ' + donnee.data[i].Resources[a].Quantity + '\t';
                      }
                    }
                    embed.setTitle(":tickets: **LISTE DES COUPONS** :tickets:")
                    //embed.setURL('https://swq.jp/l/fr-FR/') // lien pour le titre du embed
                    //embed.addFields({ name: '\u200B', value: '\u200B' })  // exemple de fields invisible 
                    embed.addFields({ name: '\u200B', value: '[' + donnee.data[i].Label + '](http://withhive.me/313/' + donnee.data[i].Label + ') \t :white_check_mark: \t' + recompenses})
                    //embed.addFields({ name: '-->' ,value: '[Lien vers le site](https://swq.jp/l/fr-FR/)'})    
                              
                  }
                  else if (resultString === ":tickets: **LISTE DES COUPONS** :tickets: \n"){ // si tous les coupons sont "expired" alors on affiche le message suivant
                    console.log("Aucun coupon n'est disponible pour le moment!")
                    resultString = "Aucun coupon n'est disponible pour le moment! :sob: ";
                    embed = resultString;
                  }
                }
                //embed.addFields({ name: '\u200B', value: '--> [Lien du site](https://swq.jp/)' })  // exemple de fields invisible 
              }
              console.log(resultString)
              //return resultString;
          }
            message.channel.send(embed);
            //message.channel.send(resultString);
            embed = "";
          }; 
        setTimeout(sendMessage, 5000); // run the sendMessage() function every 1 hour
      }
      // }
      // if(message.content == '!stop'){
      //   message.reply('Le bot s\'est bien arrété !')
      //   clearTimeout(sendMessage);
      // } 
  })
});


//Token Bot Discord
bot.login('ODcwMjcwOTg4MzcyMjgzNDMy.YQKVBA.mduV1SFzDzx_i0d86VveC9UOdDY');
//bot.login(process.env.BOT_TOKEN);