export type EventsSections = {
    name?:string,
    img?:string,
    content?:string,
    tags?:tagsArray[],
    slug?:string,
}

export type tagsArray = {
    name?: string,
    id?:string
}

export type EventsBlockType = {
    name?: string,
    sections?: EventsSections[],
}