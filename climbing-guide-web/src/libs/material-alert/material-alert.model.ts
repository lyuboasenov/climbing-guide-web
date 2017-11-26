export class AlertModel {
    title?: string;
    message: string;
    actions: AlertButtonModel[];
}

export class AlertButtonModel {
    text: string;
    result: any;
}