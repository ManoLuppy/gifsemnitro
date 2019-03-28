const Discord = require("discord.js")
const self = new Discord.Client()

//substitua o link da imagem apng

self.on("ready", () => {
  console.log("Sua imagem foi modificada"); 
  self.user.setAvatar("SEU-APNG").then(o_O => {})
})

self.login("SEU-TOKEN")