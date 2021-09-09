// Gestion du bot sur discord
const Discord = require('discord.js')
const bot = new Discord.Client()
// const channel = bot.channels.cache.find(channel => channel.name === 'sw')
var count = 0
let tab1 = [];
let tab2 = [];
let tab3 = [];
var now = new Date();
var mois    = ('0'+(now.getMonth()+1)).slice(-2);
var jour    = ('0'+now.getDate()   ).slice(-2);
var heure   = ('0'+now.getHours()  ).slice(-2);
var minute  = ('0'+now.getMinutes()).slice(-2);
var annee  = ('0'+now.getFullYear()).slice(-2)


function newCodes(tab1, tab2){
  a = 0;
  for (var i = 0, len = tab1.length; i < len; i++){
      for (let a = 0; a < tab2.length; a++) {
        if (tab1[i] !== tab2[a]){
          if(tab1.toString().indexOf(tab2[a]) === -1){
              tab3 = tab2[a];
              console.log(tab3); 
          }
        }
      }
  }
}

 //newCodes(tab1, tab2);

var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var xhr = new XMLHttpRequest(); 
xhr.open("GET", 'https://swq.jp/_special/rest/Sw/Coupon?_csrf_token=JAH84YCjSnw2C_5cCMfx3HzJzGMWOHe9FSRJediA8PkMq7ec9LC6Ph3E0DrJrRllafJTrCnaOz89ag6ytAzQjp3nNe4JSxikbKGDnbpA8w0OFW0auiF8Ro7Ga0wWzPlAJyfbcJPWjIM&_ctx[b]=master&_ctx[c]=JPY&_ctx[l]=fr-FR&_ctx[t]=Europe/Paris;+0200&results_per_page=20', false); 
xhr.send(null); 
var donnee = JSON.parse(xhr.responseText);


for(let i in donnee.data){
  if(donnee.data[i].Status !== "expired"){
    tab1[i] = donnee.data[i].Label
  }
  else{
    tab1 = ["Aucun code disponible"]
  }
}

bot.on("ready", () => {
setInterval(function() {

    var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    var xhr = new XMLHttpRequest(); 
    xhr.open("GET", 'https://swq.jp/_special/rest/Sw/Coupon?_csrf_token=JAH84YCjSnw2C_5cCMfx3HzJzGMWOHe9FSRJediA8PkMq7ec9LC6Ph3E0DrJrRllafJTrCnaOz89ag6ytAzQjp3nNe4JSxikbKGDnbpA8w0OFW0auiF8Ro7Ga0wWzPlAJyfbcJPWjIM&_ctx[b]=master&_ctx[c]=JPY&_ctx[l]=fr-FR&_ctx[t]=Europe/Paris;+0200&results_per_page=20', false); 
    //xhr.responseType = 'json';
    xhr.send(null); 
    var donnee = JSON.parse(xhr.responseText);

    for(let i in donnee.data){
      if(donnee.data[i].Status !== "expired"){
        tab2[i] = donnee.data[i].Label
      }
      else{
        tab2 = ["Aucun code disponible!"];
      }
    }

    function arraysAreIdentical(tab1, tab2){
      if (tab1.length !== tab2.length) return false;
      for (var i = 0, len = tab1.length; i < len; i++){
          if (tab1[i] !== tab2[i]){
              //console.log(donnee.data[i].Label);
              return false;
          }
      }
      return true; 
    }
  
console.log('active')
    if (xhr.readyState == 4){

        // if(lastCheck != donnee.data[0].Label || count == '0'){ 
          if(arraysAreIdentical(tab1, tab2) == false){
                        
            console.table(tab1)
            console.table(tab2)
            tab1 = tab2;
            //message.reply('Le bot a bien démarré !')
            
            count ++

            var embed = new Discord.MessageEmbed()
            
            

            
                var resultString = ":tickets: **LISTE DES COUPONS** :tickets: \n";
                var donnee = JSON.parse(xhr.responseText);
                if (donnee.data[0].Status === "expired"){  //Vérifie que le status du dernier coupon en date est égale à "expired"
                console.log("Aucun coupon n'est disponible pour le moment!")
                resultString = "Aucun coupon n'est disponible pour le moment! :sob: ";
                
                }
                else{ // si dernier coupon n'est pas "expired" alors on vérifie le status de tout les coupons et on affiche ceux qui on un status different de "expired"
                    
                  e = 0;
                  for (var i = 0, len = tab1.length; i < len; i++){
                      for (let e = 0; e < tab2.length; e++) {
                        if (tab1[i] !== tab2[e]){
                          if(tab1.toString().indexOf(tab2[e]) === -1){
                              tab3 = tab2[e];
                              console.log(tab3); 
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
                                    embed.addFields({ name: '\u200B', value: '[' + donnee.data[i].Label + '](http://withhive.me/313/' + donnee.data[i].Label + ') \t :white_check_mark: \t' + recompenses})
        
                                        
                                }
                                // else if (resultString === ":tickets: **LISTE DES COUPONS** :tickets: \n"){ // si tous les coupons sont "expired" alors on affiche le message suivant
                                // console.log("Aucun coupon n'est disponible pour le moment!")
                                // resultString = "Aucun coupon n'est disponible pour le moment! :sob: ";
                                // embed = resultString;
                                // }
                            }
                          }
                        }
                      }
                  }
                  
                //embed.addFields({ name: '\u200B', value: '[Lien du site](https://swq.jp/)', inline: true })  // exemple de fields invisible 
                embed.addFields({ name: '\u200B', value: 'Mis à jour le ' +jour+"/"+mois+"/"+annee + "  à  " + heure + "h" + minute , inline: true })  // exemple de fields invisible 
                }
                console.log(resultString)
                
                console.log("Bot is ready");
                //message.channel.send(embed);
                const channel = bot.channels.cache.find(channel => channel.name === 'sw')
                channel.send(embed);
                
                embed = "";

                

        }

    }
    
}, 200 * 10); // 60 * 1000 milsec

});











// bot.on("ready", () => {
//   console.log("Bot is ready");
//   bot.on('message', function (message){
      
//       if(message.author.id !== "315497486527496192" && message.author.id !== "870270988372283432"){ 
//           console.log("Vous n'avez pas les droits pour démarrer le Bot !");
//       }
//       else{
//       // if(message.content == '!start')
//       // {
        
//       } 
//       // }
 
//   })
// });


//Token Bot Discord
bot.login('ODcwMjcwOTg4MzcyMjgzNDMy.YQKVBA.mduV1SFzDzx_i0d86VveC9UOdDY');
//bot.login(process.env.BOT_TOKEN);