const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { clientId, guildId, token } = require('./config.json');

const commands = [
  new SlashCommandBuilder()
  .setName('bokningar')
  	.setDescription('Get info about a user or a server!')
  	.addSubcommand(subcommand =>
  		subcommand
  			.setName('kalender')
  			.setDescription('Info about a user')
        .addStringOption(option =>
        		option.setName('1aug-7aug')
        			.setDescription('kalender')
        			.setRequired(false)
        			.addChoices(
                {name:'2022-08-01',value:'2022-08-01'},
                {name:'2022-08-02',value:'2022-08-02'},
                {name:'2022-08-03',value:'2022-08-03'},
                {name:'2022-08-04',value:'2022-08-04'},
                {name:'2022-08-05',value:'2022-08-05'},
                {name:'2022-08-06',value:'2022-08-06'},
                {name:'2022-08-07',value:'2022-08-07'},
        			))
              .addStringOption(option =>
              		option.setName('8aug-14aug')
              			.setDescription('kalender')
              			.setRequired(false)
              			.addChoices(
                      {name:'2022-08-08',value:'2022-08-08'},
                      {name:'2022-08-09',value:'2022-08-09'},
                      {name:'2022-08-10',value:'2022-08-10'},
                      {name:'2022-08-11',value:'2022-08-11'},
                      {name:'2022-08-12',value:'2022-08-12'},
                      {name:'2022-08-13',value:'2022-08-13'},
                      {name:'2022-08-14',value:'2022-08-14'},
              			))

                    .addStringOption(option =>
                        option.setName('16aug-21aug')
                          .setDescription('kalender')
                          .setRequired(false)
                          .addChoices(
                            { name: '2022-08-15', value: '2022-08-15' },
{ name: '2022-08-16', value: '2022-08-16' },
{ name: '2022-08-17', value: '2022-08-17' },
{ name: '2022-08-18', value: '2022-08-18' },
{ name: '2022-08-19', value: '2022-08-19' },
{ name: '2022-08-20', value: '2022-08-20' },
{ name: '2022-08-21', value: '2022-08-21' },
))
          .addStringOption(option =>
  option.setName('22aug-28aug')
  .setDescription('kalender')
  .setRequired(false)
      .addChoices(
      { name: '2022-08-22', value: '2022-08-22' },
      { name: '2022-08-23', value: '2022-08-23' },
      { name: '2022-08-24', value: '2022-08-24' },
      { name: '2022-08-25', value: '2022-08-25' },
      { name: '2022-08-26', value: '2022-08-26' },
      { name: '2022-08-27', value: '2022-08-27' },
      { name: '2022-08-28', value: '2022-08-28' },

      ))

      .addStringOption(option =>
          option.setName('29aug-5sept')
            .setDescription('kalender')
            .setRequired(false)
            .addChoices(
              { name: '2022-08-29', value: '2022-08-29' },
              { name: '2022-08-30', value: '2022-08-30' },
              { name: '2022-08-31', value: '2022-08-31' },
              { name: '2022-09-01', value: '2022-09-01' },
              { name: '2022-09-02', value: '2022-09-02' },
              { name: '2022-09-03', value: '2022-09-03' },
              { name: '2022-09-04', value: '2022-09-04' },
              { name: '2022-09-05', value: '2022-09-05' },

))

.addStringOption(option =>
    option.setName('6sept-12sept')
      .setDescription('kalender')
      .setRequired(false)
      .addChoices(
        { name: '2022-09-06', value: '2022-09-06' },
        { name: '2022-09-07', value: '2022-09-07' },
        { name: '2022-09-08', value: '2022-09-08' },
        { name: '2022-09-09', value: '2022-09-09' },
        { name: '2022-09-10', value: '2022-09-10' },
        { name: '2022-09-11', value: '2022-09-11' },
        { name: '2022-09-12', value: '2022-09-12' },

))

.addStringOption(option =>
    option.setName('13sept-19sept')
      .setDescription('kalender')
      .setRequired(false)
      .addChoices(
        { name: '2022-09-13', value: '2022-09-13' },
        { name: '2022-09-14', value: '2022-09-14' },
        { name: '2022-09-15', value: '2022-09-15' },
        { name: '2022-09-16', value: '2022-09-16' },
        { name: '2022-09-17', value: '2022-09-17' },
        { name: '2022-09-18', value: '2022-09-18' },
        { name: '2022-09-19', value: '2022-09-19' },

))

.addStringOption(option =>
    option.setName('20sept-26sept')
      .setDescription('kalender')
      .setRequired(false)
      .addChoices(
        { name: '2022-09-20', value: '2022-09-20' },
        { name: '2022-09-21', value: '2022-09-21' },
        { name: '2022-09-22', value: '2022-09-22' },
        { name: '2022-09-23', value: '2022-09-23' },
        { name: '2022-09-24', value: '2022-09-24' },
        { name: '2022-09-25', value: '2022-09-25' },
        { name: '2022-09-26', value: '2022-09-26' },

))

.addStringOption(option =>
    option.setName('27sept-3okt')
      .setDescription('kalender')
      .setRequired(false)
      .addChoices(
        { name: '2022-09-27', value: '2022-09-27' },
        { name: '2022-09-28', value: '2022-09-28' },
        { name: '2022-09-29', value: '2022-09-29' },
        { name: '2022-09-30', value: '2022-09-30' },
        { name: '2022-10-01', value: '2022-10-01' },
        { name: '2022-10-02', value: '2022-10-02' },
        { name: '2022-10-03', value: '2022-10-03' },

))

.addStringOption(option =>
    option.setName('4okt-10okt')
      .setDescription('kalender')
      .setRequired(false)
      .addChoices(
        { name: '2022-10-04', value: '2022-10-04' },
        { name: '2022-10-05', value: '2022-10-05' },
        { name: '2022-10-06', value: '2022-10-06' },
        { name: '2022-10-07', value: '2022-10-07' },
        { name: '2022-10-08', value: '2022-10-08' },
        { name: '2022-10-09', value: '2022-10-09' },
        { name: '2022-10-10', value: '2022-10-10' },

))


.addStringOption(option =>
    option.setName('11okt-17okt')
      .setDescription('kalender')
      .setRequired(false)
      .addChoices(
        { name: '2022-10-11', value: '2022-10-11' },
        { name: '2022-10-12', value: '2022-10-12' },
        { name: '2022-10-13', value: '2022-10-13' },
        { name: '2022-10-14', value: '2022-10-14' },
        { name: '2022-10-15', value: '2022-10-15' },
        { name: '2022-10-16', value: '2022-10-16' },
        { name: '2022-10-17', value: '2022-10-17' },
))

.addStringOption(option =>
    option.setName('18okt-24okt')
      .setDescription('kalender')
      .setRequired(false)
      .addChoices(
        { name: '2022-10-18', value: '2022-10-18' },
        { name: '2022-10-19', value: '2022-10-19' },
        { name: '2022-10-20', value: '2022-10-20' },
        { name: '2022-10-21', value: '2022-10-21' },
        { name: '2022-10-22', value: '2022-10-22' },
        { name: '2022-10-23', value: '2022-10-23' },
        { name: '2022-10-24', value: '2022-10-24' },
))

.addStringOption(option =>
    option.setName('25okt-31okt')
      .setDescription('kalender')
      .setRequired(false)
      .addChoices(
        { name: '2022-10-25', value: '2022-10-25' },
        { name: '2022-10-26', value: '2022-10-26' },
        { name: '2022-10-27', value: '2022-10-27' },
        { name: '2022-10-28', value: '2022-10-28' },
        { name: '2022-10-29', value: '2022-10-29' },
        { name: '2022-10-30', value: '2022-10-30' },
        { name: '2022-10-31', value: '2022-10-31' },
))

.addStringOption(option =>
    option.setName('1nov-7nov')
      .setDescription('kalender')
      .setRequired(false)
      .addChoices(
        { name: '2022-11-01', value: '2022-11-01' },
        { name: '2022-11-02', value: '2022-11-02' },
        { name: '2022-11-03', value: '2022-11-03' },
        { name: '2022-11-04', value: '2022-11-04' },
        { name: '2022-11-05', value: '2022-11-05' },
        { name: '2022-11-06', value: '2022-11-06' },
        { name: '2022-11-07', value: '2022-11-07' },
))

.addStringOption(option =>
    option.setName('8nov-14nov')
      .setDescription('kalender')
      .setRequired(false)
      .addChoices(
        { name: '2022-11-08', value: '2022-11-08' },
        { name: '2022-11-09', value: '2022-11-09' },
        { name: '2022-11-10', value: '2022-11-10' },
        { name: '2022-11-11', value: '2022-11-11' },
        { name: '2022-11-12', value: '2022-11-12' },
        { name: '2022-11-13', value: '2022-11-13' },
        { name: '2022-11-14', value: '2022-11-14' },
))

.addStringOption(option =>
    option.setName('15nov-21nov')
      .setDescription('kalender')
      .setRequired(false)
      .addChoices(
        { name: '2022-11-15', value: '2022-11-15' },
        { name: '2022-11-16', value: '2022-11-16' },
        { name: '2022-11-17', value: '2022-11-17' },
        { name: '2022-11-18', value: '2022-11-18' },
        { name: '2022-11-19', value: '2022-11-19' },
        { name: '2022-11-20', value: '2022-11-20' },
        { name: '2022-11-21', value: '2022-11-21' },
))

.addStringOption(option =>
    option.setName('29nov-5dec')
      .setDescription('kalender')
      .setRequired(false)
      .addChoices(
        { name: '2022-11-29', value: '2022-11-29' },
        { name: '2022-11-30', value: '2022-11-30' },
        { name: '2022-12-01', value: '2022-12-01' },
        { name: '2022-12-02', value: '2022-12-02' },
        { name: '2022-12-03', value: '2022-12-03' },
        { name: '2022-12-04', value: '2022-12-04' },
        { name: '2022-12-05', value: '2022-12-05' },
))

.addStringOption(option =>
    option.setName('6dec-12dec')
      .setDescription('kalender')
      .setRequired(false)
      .addChoices(
        { name: '2022-12-06', value: '2022-12-06' },
        { name: '2022-12-07', value: '2022-12-07' },
        { name: '2022-12-08', value: '2022-12-08' },
        { name: '2022-12-09', value: '2022-12-09' },
        { name: '2022-12-10', value: '2022-12-10' },
        { name: '2022-12-11', value: '2022-12-11' },
        { name: '2022-12-12', value: '2022-12-12' },
))
.addStringOption(option =>
    option.setName('13dec-19dec')
      .setDescription('kalender')
      .setRequired(false)
      .addChoices(
        { name: '2022-12-13', value: '2022-12-13' },
        { name: '2022-12-14', value: '2022-12-14' },
        { name: '2022-12-15', value: '2022-12-15' },
        { name: '2022-12-16', value: '2022-12-16' },
        { name: '2022-12-17', value: '2022-12-17' },
        { name: '2022-12-18', value: '2022-12-18' },
        { name: '2022-12-19', value: '2022-12-19' },
))
.addStringOption(option =>
    option.setName('20dec-26dec')
      .setDescription('kalender')
      .setRequired(false)
      .addChoices(
        { name: '2022-12-20', value: '2022-12-20' },
        { name: '2022-12-21', value: '2022-12-21' },
        { name: '2022-12-22', value: '2022-12-22' },
        { name: '2022-12-23', value: '2022-12-23' },
        { name: '2022-12-24', value: '2022-12-24' },
        { name: '2022-12-25', value: '2022-12-25' },
        { name: '2022-12-26', value: '2022-12-26' },

))
.addStringOption(option =>
    option.setName('27dec-31dec')
      .setDescription('kalender')
      .setRequired(false)
      .addChoices(
        { name: '2022-12-27', value: '2022-12-27' },
        { name: '2022-12-28', value: '2022-12-28' },
        { name: '2022-12-29', value: '2022-12-29' },
        { name: '2022-12-30', value: '2022-12-30' },
        { name: '2022-12-31', value: '2022-12-31' },

))



            ),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(BOT_TOKEN);

rest.put(Routes.applicationGuildCommands(APPLICATION_ID, GUILD_ID), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
