/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IAttachmentMaster {
    id?: string | null
    type?: string | null
    fileSize?: string | null
    system?: string | null
    source?: string | null
    filePath?: string | null
    fileType?: string | null
    fileName?: string | null
    requestId?: string | null
    companyId?: string | null
    lastUpdatedDate?: string | null
    attachmentTypeId: string | null
    cloneId?: string | null
    attachment: IAttachment
    lastUpdatedBy?: any
}

export interface IAttachment {
    url: string | null
    content: string | null
}

// export const prepareAttachmentsMaster = (): IAttachmentMaster[] => {
//     const attachmentsObj: IAttachmentMaster[] = [];
//     const attachmentsResponse: IAttachmentMaster = {} as IAttachmentMaster
//     attachmentsResponse['id'] = null
//     attachmentsResponse['type'] = null
//     attachmentsResponse['fileSize'] = null
//     attachmentsResponse['system'] = null
//     attachmentsResponse['filePath'] = null
//     attachmentsResponse['fileName'] = null
//     attachmentsResponse['requestId'] = uuidv4();
//     attachmentsResponse['attachment'] = {} as IAttachment
//     attachmentsObj.push(attachmentsResponse)
//     return attachmentsObj
// }

export const prepareAttachmentsMaster = (attachments?: IAttachmentMaster[] | null, attachmentReqId?: string, isNew?: boolean): IAttachmentMaster[] => {
    const attachmentsObj: IAttachmentMaster[] = [];
    if (attachments && attachments.length > 0) {
        attachments.forEach((attachment: IAttachmentMaster) => {
            attachmentsObj.push(addAttachment(attachment, attachmentReqId, isNew))
        })
    } else {
        attachmentsObj.push(addAttachment(null, attachmentReqId))
    }
    return attachmentsObj
}
const addAttachment = (attachment?: IAttachmentMaster | null, attachmentReqId?: string, isNew?: boolean) => {
    const attachmentsResponse: IAttachmentMaster = {} as IAttachmentMaster
    attachmentsResponse['id'] = isNew ? null : (attachment?.id || null)
    attachmentsResponse['type'] = attachment?.type || null
    attachmentsResponse['fileSize'] = attachment?.fileSize || null
    attachmentsResponse['source'] = attachment?.source || null
    attachmentsResponse['filePath'] = attachment?.filePath || null
    attachmentsResponse['fileName'] = attachment?.fileName || null
    attachmentsResponse['attachmentTypeId'] = attachment?.attachmentTypeId || null
    attachmentsResponse['requestId'] = isNew ? attachmentReqId : (attachment?.requestId || attachmentReqId);
    attachmentsResponse['cloneId'] = isNew ? attachment?.id : null;
    attachmentsResponse['attachment'] = prepareAttachment(attachment?.attachment)
    return attachmentsResponse;
}
const prepareAttachment = (attachments?: IAttachment) => {
    const attachmentsObj: IAttachment = {} as IAttachment;
    if (attachments) {
        attachmentsObj['url'] = attachments.url || ''
        attachmentsObj['content'] = attachments.content || ''
    } else {
        attachmentsObj['url'] = ''
        attachmentsObj['content'] = ''
    }
    return attachmentsObj;
}