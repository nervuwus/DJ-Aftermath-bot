const { PREFIX } = require("../../config.json");

module.exports = async (Conn, message) => {

    if (!message.author.bot && message.channel.type != "dm") {
        if (message.content.startsWith(PREFIX)) {
            const args = message.content.slice(PREFIX.length).split(/ +/);
            const commandName = args.shift().toLowerCase();

            const command = Conn.commands.get(commandName) || Conn.commands.find(cmd => cmd.help.alias && cmd.help.alias.includes(commandName));
            if (command) command.run(Conn, message, args);
            else message.channel.send("désolé cette commande n'existe pas regarde la commande `$help` pour connaitre toute les commandes");
        }
    }

}