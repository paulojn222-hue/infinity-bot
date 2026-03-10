export default async function menuFerramentas(prefix, botName = "MeuBot", userName = "Usuário", {
    header = `╭┈⊰ ♾️ 『 *${botName}* 』\n┊Olá, #user#!\n╰─┈┈┈┈┈◜♾️◞┈┈┈┈┈─╯`,
    menuTopBorder = "╭┈",
    bottomBorder = "╰─┈┈┈┈┈◜♾️◞┈┈┈┈┈─╯",
    menuTitleIcon = "🖤",
    menuItemIcon = "💚",
    separatorIcon = "♾️",
    middleBorder = "┊",
    languageMenuTitle = "📚 DICIONÁRIO & TRADUÇÃO",
} = {}) {
    const formattedHeader = header.replace(/#user#/g, userName);
    return `${formattedHeader}

${menuTopBorder}${separatorIcon} *💚CALCULADORA🖤*
${middleBorder}
${middleBorder}${menuItemIcon}${prefix}calc <expressão>
${middleBorder}${menuItemIcon}${prefix}calc converter <valor> <de> <para>
${bottomBorder}

${menuTopBorder}${separatorIcon} *${languageMenuTitle}*
${middleBorder}
${middleBorder}${menuItemIcon}${prefix}dicionario
${middleBorder}${menuItemIcon}${prefix}tradutor
${bottomBorder}

${middleBorder}${menuTitleIcon} *OUTROS* ${menuTitleIcon}
${middleBorder}${menuItemIcon}${prefix}estatisticas
${bottomBorder}
`;
}
