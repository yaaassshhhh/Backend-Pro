//streamLineCode for error handling

class ApiError extends Error {
    constructor(
        message  = 'Internal Server Error : #An unknown error occured',
        errors = [],
        statusCode,
        stack = ''
    ){
        super(message);
        this.errors = errors;
        this.statusCode = statusCode;
        // this.stack = stack;
        this.data = NULL;
        this.success = false;

        if(stack){
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}