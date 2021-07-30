// Deuxième solution
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var xhr = new XMLHttpRequest(); 
xhr.open("GET", 'https://swq.jp/_special/rest/Sw/Coupon?_csrf_token=JAH84YCjSnw2C_5cCMfx3HzJzGMWOHe9FSRJediA8PkMq7ec9LC6Ph3E0DrJrRllafJTrCnaOz89ag6ytAzQjp3nNe4JSxikbKGDnbpA8w0OFW0auiF8Ro7Ga0wWzPlAJyfbcJPWjIM&_ctx[b]=master&_ctx[c]=JPY&_ctx[l]=fr-FR&_ctx[t]=Europe/Paris;+0200&results_per_page=20', false); 
xhr.send(null); 
    
if (xhr.readyState == 4){
    var resultString = "Liste des codes valides :";
    var donnee = JSON.parse(xhr.responseText);
    if (donnee.data[0].Status === "expirred"){  //Vérifie que le status du dernier coupon en date est égale à "expired"
      console.log("Aucun coupon n'est valide pour le moment!")
      resultString = "Aucun coupon n'est valide pour le moment! :sob: ";
      return resultString;
    }
    else{ // si dernier coupon n'est pas "expired" alors on vérifie le status de tout les coupons et on affiche ceux qui on un status different de "expired"
      var x
      for (let i in donnee.data) {
        if(donnee.data[i].Status !== "expirred"){
          resultString = resultString + " \n - " + donnee.data[i].Label;
          x += donnee.data[i];
          //console.log(resultString)
        }
        else{ // si tous les coupons sont "expired" alors on affiche le message suivant
          console.log("Aucun coupon n'est valide pour le moment!")
          return resultString = "Aucun coupon n'est valide pour le moment! :sob: ";
        }
      }
    }
}

// Gestion du bot sur discord
const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('message', function (message){
    if (message.content == '!code'){
        //message.reply(resultString)
        message.channel.send(resultString)
    }
})

bot.login('ODcwMjcwOTg4MzcyMjgzNDMy.YQKVBA.mduV1SFzDzx_i0d86VveC9UOdDY')
//bot.login(process.env.BOT_TOKEN);

