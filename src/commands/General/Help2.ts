import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help2',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help2 (command_name)`,
            dm: true,
            aliases: ['h2']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/Rin/rin.mp4','./assets/Rin/rin-1.mp4','./assets/Rin/rin-2.mp4','./assets/Rin/rin-3.mp4','./assets/Rin/rin-4.mp4','./assets/Rin/rin-5.mp4','./assets/Rin/rin-6.mp4'
        ]
        let well = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: well }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `-ππ΄π΄π±π π»πΈππ π§£
ββββββββββββββ
π§§ ${this.client.config.prefix}α΄Ι΄Ιͺα΄α΄
π§§ ${this.client.config.prefix}α΄Ι΄Ιͺα΄α΄Qα΄α΄α΄α΄
π§§ ${this.client.config.prefix}α΄Ι΄Ιͺα΄α΄α΄Κα΄Κ
π§§ ${this.client.config.prefix}Ι’α΄Ι΄κ±ΚΙͺΙ΄α΄Κα΄Κα΄α΄α΄α΄Κ
π§§ ${this.client.config.prefix}Κα΄κ±Κα΄Ι΄α΄α΄
π§§ ${this.client.config.prefix}Κα΄ΚΙͺ
π§§ ${this.client.config.prefix}α΄α΄Ι΄Ι’α΄
π§§ ${this.client.config.prefix}α΄α΄α΄α΄α΄α΄Ι΄
π§§ ${this.client.config.prefix}Κα΄α΄α΄α΄Κ
π§§ ${this.client.config.prefix}α΄ α΄α΄Κα΄Κ
π§§ ${this.client.config.prefix}α΄‘α΄Ιͺκ°α΄
π§§ ${this.client.config.prefix}α΄α΄α΄α΄α΄
π§§ ${this.client.config.prefix}α΄Κα΄Κα΄α΄α΄α΄Κ
π§§ ${this.client.config.prefix}α΄Κα΄κ±κ±α΄Κα΄Κ
π§§ ${this.client.config.prefix}Κα΄ΙͺΙ’α΄κ±Κα΄
π§§ ${this.client.config.prefix}Κα΄α΄α΄α΄α΄α΄Ι΄α΄
π§§ ${this.client.config.prefix}κ±α΄α΄α΄α΄
π§§ ${this.client.config.prefix}α΄‘α΄ΚΚα΄α΄α΄α΄Κ
ββββββββββββββ` }
        )
    }
}
