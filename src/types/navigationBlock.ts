export type NavigationBlockSections = {
    block?: string,
    name?: string,
    route?:string
}

export type NavigationBlockType = {
    name?: string,
    sections?: NavigationBlockSections[],
}