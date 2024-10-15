export type NavigationBlockSections = {
    block?: string,
    name?: string,
    route?:string
}

export type NavigationBlockType = {
    head:[
        {
            name?: string,
            sections?: NavigationBlockSections[],
        }
    ]
}