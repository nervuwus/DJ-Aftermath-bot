module.exports.run = (Conn, message, args) => {
    const m = message.channel.send("Pinging !").then(m => {
        console.log(message => console.log(`le message c'est envoyé correctement dans : ${message.channel.name}`));
        let ping = m.createdTimestamp - message.createdTimestamp;
        m.edit(`*pingpongping* Pong ! ton ping est de: **${ping}**ms`).then(me => {
            console.log(`message édité en ${me}`);
        }).catch(console.error);
    }).catch(console.error);
}

module.exports.help = {
    name: 'ping',
    alias: null,
    categorie: "misc",
    description: 'Renvoie le temps de réponse du bot !',
    usage: "$ping",
    permission: null
};