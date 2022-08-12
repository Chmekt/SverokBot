// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const queue = new Map();
// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
var fs = require('fs');
var results = JSON.parse(fs.readFileSync('./bokat.json', 'utf8'));
// When the client is ready, run this code (only once)
var starttid = [];
var sluttid = [];
var startdatum = [];
var slutdatum = [];

for (var i in results) {
		starttid.push(results[i]['Starttid']);
		sluttid.push(results[i]['Sluttid']);
    slutdatum.push(results[i]['Slutdatum']);
    startdatum.push(results[i]['Startdatum']);

}
client.once('ready', () => {
	console.log('Ready!');

});


client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

  	if (commandName === 'bokningar'){
      if (interaction.options.getSubcommand() === "kalender"){

const message = interaction.options._hoistedOptions[0]['value'];
if (message == "")return;
if (message != ""){
	if (startdatum.includes(message)){
		await interaction.reply({ content: 'Lokalen är bokad under dagen', ephemeral: true });
	}
	else{
		await interaction.reply({ content: 'Lokalen är inte bokad under denna dag som det ser ut just nu, vill du boka den kontakta då kansli@stockholm.sverok.se', ephemeral: true });
	}
}
        }
      }

});

client.login(token);
