import type { Link } from '../types/Link'

export const links: { [key: string]: Link } = {
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
