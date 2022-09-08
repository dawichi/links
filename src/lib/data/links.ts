import type { Link } from '../types/Link'

export const links: { [key: string]: Link } = {
    personal: {
        web: new URL('https://dawichi.dev'),
        linkedin: new URL('https://linkedin.com/in/dawichi'),
    },
    other: {
        hello: new URL('https://linkedin.com/in/dawichi'),
    },
}
