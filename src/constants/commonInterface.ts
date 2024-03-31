// import { Dispatch, SetStateAction } from "react";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { IMenuDetail } from './menu.dto';

export interface IColumns {
  Header: string;
  accessor: string;
  sort?: boolean;
  Cell?: any;
  className?: string;
  type?: IType | string;
}

export interface IType {
  cellstyle?: string;
  cellclass?: string;
}

export interface TabContentType {
  id: number;
  title: string;
  icon?: string;
  component: any;
  interfaceType?: any;
}

export interface LoginPageTabType {
  id: number;
  title: string;
  icon?: string;
  component: any;
  disabled?: boolean;
}

export interface IInputDropdownValues {
  value: any;
  label: ReactNode;
  dropdownLabel?: ReactNode;
  key?: string;
  disabled?: boolean;
  isDisabled?: boolean;
  primarySource?: boolean;
}

export interface IDropdownList {
  id: number;
  name: string;
  description: string;
  status: string;
  lastUpdatedBy: {
    userId: number;
    userName: string;
    emailId: string;
    contactNumber: string;
  };
  lastUpdatedDate: string;
}

export interface IAttachments {
  id?: string | null;
  type?: string | null;
  fileSize?: string | null;
  source?: string | null;
  filePath?: string | null;
  fileType?: string | null;
  fileName?: string | null;
  requestId?: string | null;
  companyId?: string | null;
  lastUpdatedDate?: string | null;
  attachmentTypeId: string | null;
  attachment: IAttachment;
}

export interface IAttachment {
  url: string;
  content: string;
}

export interface IAttachmentMaster {
  id: string;
  fileName: string;
  fileType: string;
  serviceId: string;
  serviceName: string;
  version: string;
  // lastUpdatedBy: IUserDetails;
  lastUpdatedDate: string;
  fileContent: IAttachment;
  requestId: string;
}

export interface IAttachment {
  id: number;
  content: string;
}

export interface IServices {
  serviceId: string;
  serviceName: string;
}

export interface IInterface {
  description: string;
  id: number;
  // lastUpdatedBy: IUserDetails;
  lastUpdatedDate: string;
  name: string;
  type: TInterfaceType;
}

export interface SweetAlertModel {
  isConfirmed: boolean;
  isDenied: boolean;
  isDismissed: boolean;
  value: boolean;
}

export interface ILogLevel {
  id: number;
  logLevel: string;
}

export interface IActiveSource {
  id: string;
  sourceId: string;
  name: string;
  url: string;
  status: string;
  primarySource: string;
}

export type TInterfaceType = 'ESB' | 'UI' | 'BPM';

export interface SyntheticBaseEvent<E = object, C = any, T = any> {
  nativeEvent: E;
  currentTarget: C;
  target: T;
  bubbles: boolean;
  cancelable: boolean;
  defaultPrevented: boolean;
  eventPhase: number;
  isTrusted: boolean;
  preventDefault(): void;
  isDefaultPrevented(): boolean;
  stopPropagation(): void;
  isPropagationStopped(): boolean;
  persist(): void;
  timeStamp: number;
  type: string;
}

export interface IAttachmentData {
  id: string;
  fileSize: string;
  fileType: string;
  fileName: string;
  requestId: string;
  attachmentTypeId: null;
  uploadedDate: string;
  uploadedBy: {
    userId: string;
  };
  FilePath: string;
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export type TLoginTypes = 'EMIRATEID' | 'EMAIL' | 'MOBILE' | null;

export interface IResponse {
  errors: Array<IErrors>;
  output: any;
}

export interface IErrors {
  code: IStatusCode;
  detail: string;
  status: IStatuses;
}
export interface IUserDetail {
  userId?: string;
  firstName?: string;
  lastName?: string;
  userName?: string;
  emailId?: string;
  contactNumber?: string;
  lastUpdatedBy?: string;
  lastUpdatedDate?: string;
}
export interface IUiConfigurations {
  UI_LABELS: any;
  BUSINESS_MESSAGES: any;
  DROPDOWNS: any;
  EXTENDED_SETTING: any;
}

export interface CommonResponce<IOutput> {
  errors: {
    code: string;
    detail: string;
    status: string;
  }[];
  output?: IOutput;
  pageInfo?: {
    currentPageNo: string;
    pageSize: string;
    totalRecords: string;
  };
}

//   export interface UiLabel {
//     id: string
//     labelId: string
//     lastUpdatedBy: lastUpdatedBy
//     lastUpdatedDate: string
//     description: string
//     interfaceId: string
//     uiLabelValue: UiLabelValue[]
//   }
//   export interface UiLabelValue {
//     id: string
//     uiLabelId: string
//     value: string
//     langId: string
//   }
//   export interface Operation {
//     id: string
//     interfaceId: string
//     operationName: string
//     description: string
//     lastUpdatedBy: lastUpdatedBy
//     lastUpdatedDate: string
//     enableLogs: boolean
//     isActive: boolean
//   }
export type IStatusCode = '0' | '1' | '-1';
export type IStatuses = 'Success' | 'Error';

//Common type for invoking useState would be
export type Dispatcher<T> = Dispatch<SetStateAction<T>>;

export type TUseFetch = {
  dataList: any[];
  totalRecords: number;
  isLoading: boolean;
};

export type TUserType = 'EXTERNAL' | 'INTERNAL' | 'AUDIT_FIRM';

export type TButtonType =
  | 'link'
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | null
  | undefined;

export interface IProfileInformation {
  fullName?: string;
  applicantId?: string;
  // linkedTrdeLicences?: ILinkedTrdeLicence[]
  emiratesId?: string;
  profilePicture?: string;
  firstName?: string;
  lastName?: string;
  emailId?: string;
  contactNumber?: any;
  designation?: string;
  menu?: IMenuDetail;
  linkedApplicants?: any[];
  applicantType?: string;
}

export interface IBreadcrumbItems {
  label: string;
  path: string;
  active?: boolean;
}

export type IFileContent = {
  fileContent: string;
};
export interface IButtonItem {
  label: string;
  className: string;
  type: string;
  variant?: TButtonType;
}

export type Activity = {
  taskName?: string;
  comments?: string;
  taskAction?: string;
  requestStatus?: string;
  processStatus?: string;
  taskCompletedDate?: string;
  actedBy?: string;
  queuedDate?: string;
};
export interface IBrentValues {
  iceBrentCrudeOil: number;
  differenceValue: number;
  date: string;
}
