import { alertConstants } from "../constants";

export class AlertController {
    success(message) {
        return { type: `alert/${alertConstants.SUCCESS}`, message };
    }

    error(message) {
        return { type: `alert/${alertConstants.ERROR}`, message };
    }

    warning(message) {
        return { type: `alert/${alertConstants.WARNING}`, message };
    }

    clear() {
        return { type: `alert/${alertConstants.CLEAR}` };
    }
}
