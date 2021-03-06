import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help4',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help4 (command_name)`,
            dm: true,
            aliases: ['h4']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/Rin/rin.mp4','./assets/Rin/rin-1.mp4','./assets/Rin/rin-2.mp4','./assets/Rin/rin-3.mp4','./assets/Rin/rin-4.mp4','./assets/Rin/rin-5.mp4','./assets/Rin/rin-6.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `-πΌπ΄π³πΈπ° π»πΈππ π§£
ββββββββββββββ
π§§ ${this.client.config.prefix}ΙͺΙ’
π§§ ${this.client.config.prefix}α΄Κα΄Κ
π§§ ${this.client.config.prefix}κ±α΄α΄α΄Ιͺκ°Κ
π§§ ${this.client.config.prefix}α΄α΄α΄α΄
π§§ ${this.client.config.prefix}Κα΄α΄α΄α΄Ιͺα΄
π§§ ${this.client.config.prefix}Κα΄κ±α΄α΄Κα΄Κ
π§§ ${this.client.config.prefix}Κα΄α΄ Ιͺα΄α΄α΄
π§§ ${this.client.config.prefix}Ι’α΄α΄Ι’Κα΄
π§§ ${this.client.config.prefix}ΚΚΚΙͺα΄κ±
π§§ ${this.client.config.prefix}α΄ΙͺΙ΄α΄α΄Κα΄κ±α΄
ββββββββββββββ` }
        )
    }
}
