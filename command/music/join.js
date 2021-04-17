module.exports.run = (Conn, message, args) => {
    const Channel = message.member.voice.channel;
    Channel.join().then(connection => {
        console.log("connection établie")
        message.channel.send(`Je me suis connecté au channel **${connection.channel.name}** avec succès`)
        Conn.user.setActivity(`Ne joue rien dans le salon ${connection.channel.name} - .help pour afficher l'aide`)
            .then(presence => console.log(`activité changé pour: ${presence.activities[0].name}`))
            .catch(console.error)
    })
}

module.exports.help = {
    name: 'join',
    alias: ["j"],
    categorie: "music",
    description: 'permet de connecter le bot au salon vocal',
    usage: "$join",
    permission: null
};