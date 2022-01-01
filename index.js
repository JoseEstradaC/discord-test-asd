// https://discord.com/oauth2/authorize?client_id=926701718740275210&scope=bot&permissions=8

import { Client, Intents } from 'discord.js'
import { MongoMemoryServer } from 'mongodb-memory-server'

const mongod = await MongoMemoryServer.create()

const uri = mongod.getUri()
console.log(uri)

const client = new Client({
  intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS],
})

client.login('OTI2NzAxNzE4NzQwMjc1MjEw.Yc_gOw.WuMraEmD_zgsBaSKHLbOZ4PwJi8')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

const prefix = '/'
client.on('messageCreate', interaction => {
  const mensaje = interaction.content
  if (!mensaje.startsWith(prefix)) return

  const comando = mensaje.slice(prefix.length, mensaje.length).split(' ')
  console.log(comando)
  if (comando[0] === 'asd') {
    client.destroy()
  }
})
