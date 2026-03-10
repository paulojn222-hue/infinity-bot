export default async function menudown(prefix, botName = "MeuBot", userName = "Usuário", {
    header = `╭┈⊰ ♾️ 『 *${botName}* 』\n┊Olá, #user#!\n╰─┈┈┈┈┈◜❁◞┈┈┈┈┈─╯`,
    menuTopBorder = "╭┈",
    bottomBorder = "╰─┈┈┈┈┈◜❁◞┈┈┈┈┈─╯",
    menuTitleIcon = "🖤ꕸ▸",
    menuItemIcon = "💚",
    separatorIcon = "❁",
    middleBorder = "┊",
    audioMenuTitle = "🎵 MÚSICA & ÁUDIO",
    videoMenuTitle = "🎥 VÍDEOS",
    mediaMenuTitle = "📱 MÍDIAS SOCIAIS",
} = {}) {
    const formattedHeader = header.replace(/#user#/g, userName);
    return `${formattedHeader}

${menuTopBorder}${separatorIcon} *${audioMenuTitle}*
${middleBorder}
${middleBorder}${menuItemIcon}${prefix}letra
${middleBorder}${menuItemIcon}${prefix}play
${middleBorder}${menuItemIcon}${prefix}play2

${middleBorder}${menuItemIcon}${prefix}spotify
${bottomBorder}

${menuTopBorder}${separatorIcon} *${videoMenuTitle}*
${middleBorder}
${middleBorder}${menuItemIcon}${prefix}playvid
${bottomBorder}

${menuTopBorder}${separatorIcon} *${mediaMenuTitle}*
${middleBorder}
${middleBorder}${menuItemIcon}${prefix}pinterest
${bottomBorder}
`;
}
