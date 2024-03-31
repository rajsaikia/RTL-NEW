import { TabContentType } from "./commonInterface";

export const interfaceComponents: TabContentType[] = [

];

export const getPageSize = (data: any[]) => {
    return [
        {
            text: '5',
            value: 5,
        },
        {
            text: '10',
            value: 10,
        },
        {
            text: '25',
            value: 25,
        },
        {
            text: 'All',
            value: data.length,
        },
    ];
}

export const ONLY_ALPHABETS_REGEX: RegExp = /^[a-zA-Z0-9]*$/gm
export const SPACE_REGEX: RegExp = /^(?!\s).*\S$/gm
// export const EMIRATED_ID_REGEX: RegExp = /^784[0-9]{12}$/gm
export const EMAIL_ID_REGEX: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gm
export const MOBILE_NUMBER_REGEX: RegExp = /^([+0]{1,2}?\d{1,3}[- ]?)?\d{7,12}$/gm
export const ONLY_NUMBERS: RegExp = /^[0-9]\d*(\.\d+)?$/
export const EMIRATES_ID_REGEX: RegExp = /^[0-9]{15}$/gm

export interface ISystemConfiguration {
    keys: string
    value: string
}