export default async function menuadm(prefix, botName = "MeuBot", userName = "Usuário", {
    header = `╭┈⊰ ♾️ 『 *${botName}* 』\n┊Olá, #user#!\n╰─┈┈┈┈┈◜♾️◞┈┈┈┈┈─╯`,
    menuTopBorder = "╭┈",
    bottomBorder = "╰─┈┈┈┈┈◜♾️◞┈┈┈┈┈─╯",
    menuTitleIcon = "🖤",
    menuItemIcon = "💚",
    separatorIcon = "♾️",
    middleBorder = "┊",
    adminMenuTitle = "🖤 GESTÃO DE USUÁRIOS",
    managementMenuTitle = "💚 GESTÃO DO GRUPO",
    securityMenuTitle = "🖤 SEGURANÇA",
    partnershipsMenuTitle = "🖤 PARCERIAS",
    activationsMenuTitle = "💚 ATIVAÇÕES",
    settingsMenuTitle = "🖤 CONFIGURAÇÕES"
} = {}) {
    const formattedHeader = header.replace(/#user#/g, userName);
    return `${formattedHeader}

${menuTopBorder}${separatorIcon} *${adminMenuTitle}*
${middleBorder}
${middleBorder}${menuItemIcon}${prefix}ban
${middleBorder}${menuItemIcon}${prefix}ban2
${middleBorder}${menuItemIcon}${prefix}bam (ban fake)
${middleBorder}${menuItemIcon}${prefix}promover
${middleBorder}${menuItemIcon}${prefix}rebaixar
${middleBorder}${menuItemIcon}${prefix}mute
${middleBorder}${menuItemIcon}${prefix}desmute
${middleBorder}${menuItemIcon}${prefix}mute2
${middleBorder}${menuItemIcon}${prefix}desmute2
${middleBorder}${menuItemIcon}${prefix}adv
${middleBorder}${menuItemIcon}${prefix}rmadv
${middleBorder}${menuItemIcon}${prefix}listadv
${bottomBorder}

${menuTopBorder}${separatorIcon} *💚 CONTROLE DE ACESSO🖤*
${middleBorder}
${middleBorder}${menuItemIcon}${prefix}blockcmd
${middleBorder}${menuItemIcon}${prefix}unblockcmd
${bottomBorder}

${menuTopBorder}${separatorIcon} *${managementMenuTitle}*
${middleBorder}
${middleBorder}${menuItemIcon}${prefix}del
${middleBorder}${menuItemIcon}${prefix}limpar
${middleBorder}${menuItemIcon}${prefix}marcar
${middleBorder}${menuItemIcon}${prefix}hidetag
${middleBorder}${menuItemIcon}${prefix}sorteio
${middleBorder}${menuItemIcon}${prefix}nomegp
${middleBorder}${menuItemIcon}${prefix}descgrupo
${middleBorder}${menuItemIcon}${prefix}fotogrupo
${bottomBorder}

${menuTopBorder}${separatorIcon} *💚GRUPO & PERMISSÕES🖤*
${middleBorder}
${middleBorder}${menuItemIcon}${prefix}linkgp
${middleBorder}${menuItemIcon}${prefix}grupo A/F
${middleBorder}${menuItemIcon}${prefix}opengp HH:MM|off
${middleBorder}${menuItemIcon}${prefix}closegp HH:MM|off
${middleBorder}${menuItemIcon}${prefix}banghost
${middleBorder}${menuItemIcon}${prefix}limitmessage
${middleBorder}${menuItemIcon}${prefix}dellimitmessage
${middleBorder}
${middleBorder}${menuTitleIcon} *SOLICITAÇÕES* ${menuTitleIcon}
${middleBorder}${menuItemIcon}${prefix}solicitacoes
${middleBorder}${menuItemIcon}${prefix}aprovar
${middleBorder}${menuItemIcon}${prefix}aprovar all
${bottomBorder}

${menuTopBorder}${separatorIcon} *${partnershipsMenuTitle}*
${middleBorder}
${middleBorder}${menuItemIcon}${prefix}parcerias
${middleBorder}${menuItemIcon}${prefix}addparceria
${middleBorder}${menuItemIcon}${prefix}delparceria
${bottomBorder}

${menuTopBorder}${separatorIcon} *💚 SEGURANÇA & PROTEÇÃO🖤*
${middleBorder}
${middleBorder}${menuItemIcon}${prefix}antiflood
${middleBorder}${menuItemIcon}${prefix}antidoc
${middleBorder}${menuItemIcon}${prefix}antiloc
${middleBorder}${menuItemIcon}${prefix}antifig
${middleBorder}${menuItemIcon}${prefix}antibtn
${middleBorder}${menuItemIcon}${prefix}antilinkgp
${middleBorder}${menuItemIcon}${prefix}antilinkcanal
${middleBorder}${menuItemIcon}${prefix}antilinkhard
${middleBorder}${menuItemIcon}${prefix}antilinksoft
${middleBorder}${menuItemIcon}${prefix}antiporn
${middleBorder}${menuItemIcon}${prefix}antistatus
${middleBorder}${menuItemIcon}${prefix}antipalavra <on/off/add/del/list>
${bottomBorder}

${menuTopBorder}${separatorIcon} *${settingsMenuTitle}*
${middleBorder}
${middleBorder}${menuItemIcon}${prefix}legendasaiu
${middleBorder}${menuItemIcon}${prefix}legendabv
${middleBorder}${menuItemIcon}${prefix}fotobv
${middleBorder}${menuItemIcon}${prefix}rmfotobv
${middleBorder}${menuItemIcon}${prefix}fotosaiu
${middleBorder}${menuItemIcon}${prefix}rmfotosaiu
${middleBorder}${menuItemIcon}${prefix}setprefix
${bottomBorder}

${menuTopBorder}${separatorIcon} *💚 MODO & ATIVAÇÕES🖤*
${middleBorder}
${middleBorder}${menuItemIcon}${prefix}autodl
${middleBorder}${menuItemIcon}${prefix}modoparceria
${middleBorder}${menuItemIcon}${prefix}bemvindo
${middleBorder}${menuItemIcon}${prefix}saida
${middleBorder}${menuItemIcon}${prefix}autosticker
${middleBorder}${menuItemIcon}${prefix}soadm
${middleBorder}${menuItemIcon}${prefix}cmdlimit
${middleBorder}${menuItemIcon}${prefix}fotomenugrupo
${middleBorder}${menuItemIcon}${prefix}nomegp
${bottomBorder}
`;
}
