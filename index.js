'use strict';
const { Client, Collection } = require("discord.js");
const { TOKEN } = require("./config.json");
const { readdirSync } = require("fs");

const Conn = new Client();

Conn.commands = new Collection();

const loadCommands = (dir = "./command/") => {
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for (const file of commands) {
            const getFileName = require(`${dir}/${dirs}/${file}`);
            Conn.commands.set(getFileName.help.name, getFileName);
            console.log("commande chargés: ", getFileName.help.name);
        };
    });
};

const loadEvent = (dir = "./event/") => {
    readdirSync(dir).forEach(dirs => {
        const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

        for (const event of events) {
            const evt = require(`${dir}/${dirs}/${event}`);
            const evtName = event.split(".")[0];
            Conn.on(evtName, evt.bind(null, Conn));
            console.log("Event chargé: ", evtName); 
        };
    });
};

loadCommands();
loadEvent()

Conn.login(TOKEN).then(login => console.log(`connecté en : ${login.length}ms`)).catch(console.error)