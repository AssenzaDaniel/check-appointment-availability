const LOG_LEVELS = {
    ERROR: {
        label: 'ERROR',
        console: 'error'
    },
    INFO: {
        label: 'INFO',
        console: 'log'
    }
};

const getDate = () => new Date().toLocaleString();

const logTemplate = (logLevel, message) => {
    const logText = typeof message === 'string' || message instanceof String
        ? message
        : JSON.stringify(message);

    return `[${logLevel}][${getDate()}] ${logText}`;
};

const logToConsole = (log, message) => {
    console[log.console](logTemplate(log.label, message));
};

export const logger = {
    info: message => logToConsole(LOG_LEVELS.INFO, message),
    error: message => logToConsole(LOG_LEVELS.ERROR, message)
};
