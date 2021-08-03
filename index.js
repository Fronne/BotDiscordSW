// Gestion du bot sur discord
const Discord = require('discord.js')
const bot = new Discord.Client()
const embed = new Discord.MessageEmbed()

// Deuxième solution
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var xhr = new XMLHttpRequest(); 
xhr.open("GET", 'https://swq.jp/_special/rest/Sw/Coupon?_csrf_token=JAH84YCjSnw2C_5cCMfx3HzJzGMWOHe9FSRJediA8PkMq7ec9LC6Ph3E0DrJrRllafJTrCnaOz89ag6ytAzQjp3nNe4JSxikbKGDnbpA8w0OFW0auiF8Ro7Ga0wWzPlAJyfbcJPWjIM&_ctx[b]=master&_ctx[c]=JPY&_ctx[l]=fr-FR&_ctx[t]=Europe/Paris;+0200&results_per_page=20', false); 
xhr.send(null); 

  
  
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
          
          embed.setTitle(":tickets: **LISTE DES COUPONS** :tickets:")
          embed.addFields({ name: 'Récompenses : En Cours De Développement !', value: '[' + donnee.data[i].Label + '](http://withhive.me/313/' + donnee.data[i].Label + ') \t :white_check_mark:'})
          resultString = resultString + " \n \t\t - *" + donnee.data[i].Label + "* \t :white_check_mark:";
          console.log(donnee.data[i].Resources[0].Sw_Resource.Label)
          // for (let a in donnee.data.Resources){
            // if(donnee.data[i].Resources[i].Sw_Resource.Label === "Mana"){
            //   resultString = resultString + "\t " + donnee.data[i].Resources[i].Sw_Resource.Quantity + ":Energy_SW:";
            // }
          // }
          
          
        }
        else if (resultString === ":tickets: **LISTE DES COUPONS** :tickets: \n"){ // si tous les coupons sont "expired" alors on affiche le message suivant
          console.log("Aucun coupon n'est disponible pour le moment!")
          resultString = "Aucun coupon n'est disponible pour le moment! :sob: ";
          console.log('test')
        }
      }
    }
    console.log(resultString)
    //return resultString;
}



bot.on("ready", () => {
  console.log("Bot is ready");
  bot.on('message', function (message){
      // if (message.content == '!code'){
      //     //message.reply(resultString) // repond avec le @ de  l'utilisateur qui envoi la commande
      //     message.channel.send(resultString)
      // }
      if(donnee.data[0].Last_Check.unixms > Date.now()){
        const sendMessage = () => { 
          //message.channel.send(resultString); 
          message.channel.send(embed);
        }; 
        setTimeout(sendMessage, 10000); // run the sendMessage() function every 24 hours 
      }

//       app=express();
      // cron.schedule("59 * * * * *",function(){
      //   console.log("Running task every minute");
      //   message.channel.send("Bot - Test")
      // });
  })
});










// // il s'ait d'un Text, pour la version finale il faut tout mettre dedans
// //const cron = require('node_modules/cron/lib/cron.js');
//  var cron = require('node-cron');

// cron.schedule('20 * * * * *', () => {
//   console.log('running a task every minute');

//   var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//   var xhr = new XMLHttpRequest(); 
//   xhr.open("GET", 'https://swq.jp/_special/rest/Sw/Coupon?_csrf_token=JAH84YCjSnw2C_5cCMfx3HzJzGMWOHe9FSRJediA8PkMq7ec9LC6Ph3E0DrJrRllafJTrCnaOz89ag6ytAzQjp3nNe4JSxikbKGDnbpA8w0OFW0auiF8Ro7Ga0wWzPlAJyfbcJPWjIM&_ctx[b]=master&_ctx[c]=JPY&_ctx[l]=fr-FR&_ctx[t]=Europe/Paris;+0200&results_per_page=20', false); 
//   xhr.send(null); 
      
//   if (xhr.readyState == 4){
//       var resultString = "Liste des coupons:";
//       var donnee = JSON.parse(xhr.responseText);
//       if (donnee.data[0].Status === "expired"){  //Vérifie que le status du dernier coupon en date est égale à "expired"
//         console.log("Aucun coupon n'est valide pour le moment!")
//         resultString = "Aucun coupon n'est valide pour le moment! :sob: ";
        
//         //return resultString;
//       }
//       else{ // si dernier coupon n'est pas "expired" alors on vérifie le status de tout les coupons et on affiche ceux qui on un status different de "expired"
//         var x
//         for (let i in donnee.data) {
//           if(donnee.data[i].Status !== "expired"){
//             resultString = resultString + " \n - " + donnee.data[i].Label + " :white_check_mark:";
//             x += donnee.data[i];
//             console.log(resultString)
//           }
//           else if (resultString === "Liste des coupons:"){ // si tous les coupons sont "expired" alors on affiche le message suivant
//             console.log("Aucun coupon n'est valide pour le moment!")
//             resultString = "Aucun coupon n'est valide pour le moment! :sob: ";
//             console.log('test')
//           }
//         }
//       }
//       //return resultString;
//   }

//   console.log(resultString)
//   bot.on("message", function(message) {
//     //message sending goes here
//     message.channel.send(resultString);
//   });
// }); 

//Token Bot Discord
bot.login('ODcwMjcwOTg4MzcyMjgzNDMy.YQKVBA.mduV1SFzDzx_i0d86VveC9UOdDY')
//bot.login(process.env.BOT_TOKEN);