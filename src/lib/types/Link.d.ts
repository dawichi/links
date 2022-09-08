export type LinkDefinition = {
    tag: string | null
    url: URL
}

export interface Link extends LinkDefinition {
    alias: string
}