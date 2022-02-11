import { IErrorHTTP } from "./interfaces/http_error.interface";
import { HTTPCode, HTTPCodeMessage } from "./types/http_code.enum";

/**
 * HTTP Error Exception to throw
 *
 * @export
 * @class ErrorHTTP
 * @implements {IErrorHTTP}
 */
export class ErrorHTTP implements IErrorHTTP {

    /**
     * Code of error
     *
     * @type {number}
     * @memberof ErrorHTTP
     */
    public code: number;


    /**
     * Message of error
     *
     * @type {string}
     * @memberof ErrorHTTP
     */
    public message: string;

    /**
     * Creates an instance of ErrorHTTP.
     * @param {number} code
     * @param {string} message
     * @memberof ErrorHTTP
     */
    constructor(code: number, message: string) {
        if(!this.isErrorHTTPCodeValid(code)) throw new Error("Error HTTP Code invalid!");
        this.code = code;
        this.message = message;
    }

    /**
     * Check the code is valid or not
     *
     * @private
     * @param {number} code
     * @return {*}  {boolean}
     * @memberof ErrorHTTP
     */
    private isErrorHTTPCodeValid(code: number): boolean {
        if(code >= 400 && code < 500) return true;
        if(code >= 500 && code < 600) return true;
        return false;
    }
}

/**
 * 400 Bad Request HTTP Error Exception to throw
 *
 * @export
 * @class ErrorHTTPBadRequest
 * @extends {ErrorHTTP}
 */
export class ErrorHTTPBadRequest extends ErrorHTTP {

    /**
     * Creates an instance of ErrorHTTPBadRequest.
     * @param {string} [message=HTTPCodeMessage.BAD_REQUEST]
     * @memberof ErrorHTTPBadRequest
     */
    constructor(message: string = HTTPCodeMessage.BAD_REQUEST){
        super(HTTPCode.BAD_REQUEST, message);
    }
}

/**
 * 401 Unauthorized HTTP Error Exception to throw
 *
 * @export
 * @class ErrorHTTPUnauthorized
 * @extends {ErrorHTTP}
 */
export class ErrorHTTPUnauthorized extends ErrorHTTP {

    /**
     * Creates an instance of ErrorHTTPUnauthorized.
     * @param {string} [message=HTTPCodeMessage.UNAUTHORIZED]
     * @memberof ErrorHTTPUnauthorized
     */
    constructor(message: string = HTTPCodeMessage.UNAUTHORIZED){
        super(HTTPCode.UNAUTHORIZED, message);
    }
}


/**
 * 403 Forbidden HTTP Error Exception to throw
 *
 * @export
 * @class ErrorHTTPForbidden
 * @extends {ErrorHTTP}
 */
export class ErrorHTTPForbidden extends ErrorHTTP {

    /**
     * Creates an instance of ErrorHTTPForbidden.
     * @param {string} [message=HTTPCodeMessage.FORBIDDEN]
     * @memberof ErrorHTTPForbidden
     */
    constructor(message: string = HTTPCodeMessage.FORBIDDEN){
        super(HTTPCode.FORBIDDEN, message);
    }
}


/**
 * 404 Not Found HTTP Error Exception to throw
 *
 * @export
 * @class ErrorHTTPNotFound
 * @extends {ErrorHTTP}
 */
export class ErrorHTTPNotFound extends ErrorHTTP {

    /**
     * Creates an instance of ErrorHTTPNotFound.
     * @param {string} [message=HTTPCodeMessage.NOT_FOUND]
     * @memberof ErrorHTTPNotFound
     */
    constructor(message: string = HTTPCodeMessage.NOT_FOUND){
        super(HTTPCode.NOT_FOUND, message);
    }
}


/**
 * 500 Internal Server Error HTTP Error Exception to throw
 *
 * @export
 * @class ErrorHTTPServerError
 * @extends {ErrorHTTP}
 */
export class ErrorHTTPServerError extends ErrorHTTP {

    /**
     * Creates an instance of ErrorHTTPServerError.
     * @param {string} [message=HTTPCodeMessage.INTERNAL_SERVER_ERROR]
     * @memberof ErrorHTTPServerError
     */
    constructor(message: string = HTTPCodeMessage.INTERNAL_SERVER_ERROR){
        super(HTTPCode.INTERNAL_SERVER_ERROR, message);
    }
}


/**
 * 502 Bad gateway HTTP Error Exception to throw
 *
 * @export
 * @class ErrorHTTPBadGateway
 * @extends {ErrorHTTP}
 */
export class ErrorHTTPBadGateway extends ErrorHTTP {
    constructor(message: string = HTTPCodeMessage.BAD_GATEWAY){
        super(HTTPCode.BAD_GATEWAY, message);
    }
}