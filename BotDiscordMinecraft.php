<?php

include __DIR__.'/vendor/autoload.php';

use Discord\Discord;
use Discord\Voice\VoiceClient;
use Discord\Parts\Channel\Channel;
use Discord\Parts\User\Game;
use Discord\Parts\Embed;
use Discord\Factory\Factory;

$token='YOUR BOT TOKEN HERE';

$bot_id='Discord bot id here';

 

$discord = new Discord([
'token' => $token,
]);

 

$discord->on('ready', function ($discord) {

$game = $discord->factory(Game::class, ['name' => 'faire le tuto !',]);
$discord->updatePresence($game);

$discord->on('message', function ($message, $discord) {
echo "message received from: ".$message->author->username.$message->author->id.' msg id:'.$message->id.' msg:'.$message->content . ' channel id:' . $message->channel_id, PHP_EOL;

 

$tab_bonjour = array("Bonjour", "Hello", "Salut");

$randombonjour=rand(0,count($tab_bonjour)-1);

if($message->author->id != $bot_id && strstr($message->content, 'onjour')) // message pas du bot + contient le mot "bonjour"
{

$reponse=$tab_bonjour[$randombonjour]; // on crée la réponse

$message->channel->sendMessage($reponse); //on l'envoie dans le même channel

}

});
});


$discord->run();