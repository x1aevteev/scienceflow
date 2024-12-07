export type NewsSections = {
    author?: string,
    description?: string,
    img?:string,
    name?:string,
    tags?:tagsArray[],
    slug?:string,
    content?:string,
}

export type tagsArray = {
    name?: string,
    id?:string
}

export type NewsBlockType = {
    name?: string,
    sections?: NewsSections[],
}