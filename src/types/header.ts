export type blockSections = {
    block?: string,
    name?: string,
    location?:string,
    route?:string
}

export type HeaderType = {
    head:[
        {
            name?: string,
            sections?: blockSections[],
        }
    ]
}