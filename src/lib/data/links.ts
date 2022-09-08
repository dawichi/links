import type { Link, LinkDefinition } from '../types/Link'

export const linksDefinition: { [key: string]: LinkDefinition } = {
    web: {
        tag: 'personal',
        url: new URL('https://dawichi.dev'),
    },
    linkedin: {
        tag: 'personal',
        url: new URL('https://linkedin.com/in/dawichi'),
    },
}

export const links: Link[] = []

for (const key in linksDefinition) {
  links.push({
    alias: key,
    ...linksDefinition[key]
  })
}
