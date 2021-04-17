module.exports = (Conn) => {
    console.log("connecté sur le serveur en tant que: ", Conn.user.tag);
    Conn.user.setStatus("dnd");
    
    Conn.user.setActivity("Ne joue dans aucun salon vocal - .help pour afficher l'aide")
    .then(presence => console.log(`Joue à: ${presence.activities[0].name}`))
    .catch(console.error);
}