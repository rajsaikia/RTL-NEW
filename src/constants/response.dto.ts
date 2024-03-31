export interface IAxiosResponse<T> {
    data?: Data<T>
    status?: number
    statusText?: string
}

export interface Data<T> {
    output: T
    errors: Error[]
    pageInfo?: PageInfo
    fileContent : string
}

export interface Error {
    status: string
    code: string
    detail: string
}

export interface PageInfo {
    totalRecords: string
    currentPageNo: string
    pageSize: string
}
