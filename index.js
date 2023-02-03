const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, chatInputApplicationCommandMention } = require(`discord.js`);

const prefix = '>';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildIntegrations] });

client.on("ready", () => {
    console.log("Bot is online!");

    client.user.setActivity(`Subscribe to MrJAwesome`, {type: "WATCHING" });

})

client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    //message array

    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];

    //COMMANDS

    //test command
    if (command === 'test') {
        message.channel.send("Bot is working!");
    }else if(command === 'cat_create'){
        if(argument.length!=1){
            message.channel.send("Incorrect amount of arguments. Arguments: cat_name.");
            return;
        }
        //Grab name
        var cat_name = argument[0];

        //Create Category
        message.guild.channels.create({
            name: 'new-general',
            type: 2
        })

        //Victory
        message.channel.send("Created category named: " + cat_name);
    }


})



client.login("Token");
