import type { LinkGroup } from '../types/Link'

// Links indexed by group name
export const links: { [key: string]: LinkGroup } = {
    personal: {
        linkedin: new URL('https://linkedin.com/in/dawichi'),
        github: new URL('https://github.com/dawichi'),
        twitter: new URL('https://twitter.com/dawichi_'),
    },
    utils: {
        convertio: new URL('https://convertio.co/'),
        microcopy: new URL('https://www.microcopy.me/'),
        spritegen: new URL('https://spritegen.website-performance.org/'),
        spritegif: new URL('https://onlinegiftools.com/convert-sprite-sheet-to-gif'),
        patternpad: new URL('https://patternpad.com/'),
    },
    colors: {
        coolors: new URL('https://coolors.co/'),
        colorhunt: new URL('https://colorhunt.co/'),
        colorpicker: new URL('https://imagecolorpicker.com/'),
        colorgradient: new URL('https://mycolor.space/gradient3'),
    },
    others: {},
}

// Index all links in a single object
export const linksIndex: LinkGroup = Object.values(links).reduce((acc, group) => ({ ...acc, ...group }), {})
