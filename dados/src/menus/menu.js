export default async function menu(prefix, botName = "MeuBot", userName = "Usuário", {
    header = `╭┈⊰ ♾️ 『 *${botName}* 』\n┊Olá, #user#!\n╰─┈┈┈┈┈◜♾️◞┈┈┈┈┈─╯`,
    menuTopBorder = "╭┈",
    bottomBorder = "╰─┈┈┈┈┈◜♾️◞┈┈┈┈┈─╯",
    menuTitleIcon = "🖤",
    menuItemIcon = "💚",
    separatorIcon = "♾️",
    middleBorder = "┊"
} = {}) {
    const formattedHeader = header.replace(/#user#/g, userName);
    return `${formattedHeader}

${menuTopBorder}${separatorIcon} *MENU PRINCIPAL*
${middleBorder}
${middleBorder}${menuItemIcon}${prefix}menudown
${middleBorder}${menuItemIcon}${prefix}menuadm
${middleBorder}${menuItemIcon}${prefix}menudono
${middleBorder}${menuItemIcon}${prefix}ferramentas
${middleBorder}${menuItemIcon}${prefix}menufig
${bottomBorder}
`;
}
