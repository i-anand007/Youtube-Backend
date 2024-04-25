class ApiError extends Error {
    constructor(
        statusCode,
        massage= "Something F***ed up",
        errors = [],
        statck = ""
    ){
        super(massage)
        this.statusCode = statusCode;
        this.data = null;
        this.massage = massage;
        this.success = false;
        this.errors = errors;

        if (statck) {
            this.stack = statck
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}


export default ApiError