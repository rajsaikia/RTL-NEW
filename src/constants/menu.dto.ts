/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IMenu {
    id?: string
    name?: string
    nameAr?: string
    isSection?: string
    parentId?: string
    routeUrl?: any
    svg?: any
    icon?: string
    order?: string
    menuId?: string
    permissions?: any
    features?: IModuleFeature[]
    subModules?: IMenu[]
}

export interface IModuleFeature {
    id: string
    name: string
    description?: string
    moduleId?: any
    isEnabled?: boolean
    type?: string
    permissionId?: string
}

export interface IMenuDetail {
    id: string
    name: string
    managedBy: string
    lastModifiedDate?: string
    roleId?: string,
    modules: IMenu[]
}