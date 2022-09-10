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
    },
    others: {
        hello: new URL('https://linkedin.com/in/dawichi'),
    },
}

// Index all links in a single object
export const linksIndex: LinkGroup = Object.values(links).reduce((acc, group) => ({ ...acc, ...group }), {})
