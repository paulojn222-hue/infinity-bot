export default async function menubn(prefix, botName = "MeuBot", userName = "Usuário", isLiteMode = false, {
    header = `╭┈⊰ ♾️ 『 *${botName}* 』\n┊Olá, #user#!\n╰─┈┈┈┈┈◜❁◞┈┈┈┈┈─╯`,
    menuTopBorder = "╭┈",
    bottomBorder = "╰─┈┈┈┈┈◜❁◞┈┈┈┈┈─╯",
    menuTitleIcon = "🖤ꕸ▸",
    menuItemIcon = "💚",
    separatorIcon = "❁",
    middleBorder = "┊",
    phrasesMenuTitle = "💬 FRASES & TEXTOS 📜",
} = {}) {
    const formattedHeader = header.replace(/#user#/g, userName);
    let menuContent = `${formattedHeader}

${menuTopBorder}${separatorIcon} *${phrasesMenuTitle}*
${middleBorder}
${middleBorder}${menuItemIcon}${prefix}conselho
${middleBorder}${menuItemIcon}${prefix}conselhobiblico
${middleBorder}${menuItemIcon}${prefix}cantada
${middleBorder}${menuItemIcon}${prefix}piada
${middleBorder}${menuItemIcon}${prefix}charada
${middleBorder}${menuItemIcon}${prefix}motivacional
${middleBorder}${menuItemIcon}${prefix}elogio
${middleBorder}${menuItemIcon}${prefix}reflexao
${middleBorder}${menuItemIcon}${prefix}fato
${bottomBorder}
`;
    return menuContent;
}
