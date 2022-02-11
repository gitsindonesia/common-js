import { HTTPCode, HTTPCodeMessage } from "./types/http_code.enum"
import { ErrorHTTP, ErrorHTTPBadGateway, ErrorHTTPBadRequest, ErrorHTTPForbidden, ErrorHTTPNotFound, ErrorHTTPServerError, ErrorHTTPUnauthorized } from "./http_errors"


describe('throw ErrorHTTP', () => {
    test('with given code and message', () => {
        const givenCode = HTTPCode.BAD_REQUEST;
        const givenMessage = HTTPCodeMessage.BAD_REQUEST;
        try {
            throw new ErrorHTTP(givenCode, givenMessage);
        } catch (error: any) {
            expect(typeof error.code).toBe("number");   
            expect(error.code).toBe(givenCode);   
            expect(typeof error.message).toBe("string");   
            expect(error.message).toBe(givenMessage);   
        }
    });

    test('with code not in error range', () => {
        const givenCode = 200;
        const givenMessage = "Ok";
        try {
            throw new ErrorHTTP(givenCode, givenMessage);
        } catch (error: any) {
            expect(error.message).toBe("Error HTTP Code invalid!");   
        }
    });
});


describe('throw ErrorHTTPBadRequest', () => {
    const message = "Ada variable yang kurang";
    test('with default parameter', () => {
        try {
            throw new ErrorHTTPBadRequest();
        } catch (error: any) {
            expect(typeof error.code).toBe("number");   
            expect(error.code).toBe(HTTPCode.BAD_REQUEST);   
            expect(typeof error.message).toBe("string");   
            expect(error.message).toBe(HTTPCodeMessage.BAD_REQUEST);   
        }
    });

    test('with given parameter', () => {
        
        try {
            throw new ErrorHTTPBadRequest(message);
        } catch (error: any) {
            expect(typeof error.code).toBe("number");   
            expect(error.code).toBe(HTTPCode.BAD_REQUEST);   
            expect(typeof error.message).toBe("string");   
            expect(error.message).toBe(message);   
        }
    });
});

describe('throw ErrorHTTPUnauthorized', () => {
    const message = "Belum login";
    test('with default parameter', () => {
        try {
            throw new ErrorHTTPUnauthorized();
        } catch (error: any) {
            expect(typeof error.code).toBe("number");   
            expect(error.code).toBe(HTTPCode.UNAUTHORIZED);   
            expect(typeof error.message).toBe("string");   
            expect(error.message).toBe(HTTPCodeMessage.UNAUTHORIZED);   
        }
    });

    test('with given parameter', () => {
        try {
            throw new ErrorHTTPUnauthorized(message);
        } catch (error: any) {
            expect(typeof error.code).toBe("number");   
            expect(error.code).toBe(HTTPCode.UNAUTHORIZED);   
            expect(typeof error.message).toBe("string");   
            expect(error.message).toBe(message);   
        }
    });
});

describe('throw ErrorHTTPForbidden', () => {
    const message = "Ga dapet akses";
    test('with default parameter', () => {
        try {
            throw new ErrorHTTPForbidden();
        } catch (error: any) {
            expect(typeof error.code).toBe("number");   
            expect(error.code).toBe(HTTPCode.FORBIDDEN);   
            expect(typeof error.message).toBe("string");   
            expect(error.message).toBe(HTTPCodeMessage.FORBIDDEN);   
        }
    });

    test('with given parameter', () => {
        try {
            throw new ErrorHTTPForbidden(message);
        } catch (error: any) {
            expect(typeof error.code).toBe("number");   
            expect(error.code).toBe(HTTPCode.FORBIDDEN);   
            expect(typeof error.message).toBe("string");   
            expect(error.message).toBe(message);   
        }
    });
});

describe('throw ErrorHTTPNotFound', () => {
    const message = "Data ga ada 😭";
    test('with default parameter', () => {
        try {
            throw new ErrorHTTPNotFound();
        } catch (error: any) {
            expect(typeof error.code).toBe("number");   
            expect(error.code).toBe(HTTPCode.NOT_FOUND);   
            expect(typeof error.message).toBe("string");   
            expect(error.message).toBe(HTTPCodeMessage.NOT_FOUND);   
        }
    });

    test('with given parameter', () => {
        try {
            throw new ErrorHTTPNotFound(message);
        } catch (error: any) {
            expect(typeof error.code).toBe("number");   
            expect(error.code).toBe(HTTPCode.NOT_FOUND);   
            expect(typeof error.message).toBe("string");   
            expect(error.message).toBe(message);   
        }
    });
});

describe('throw ErrorHTTPServerError', () => {
    const message = "Server lagi bermasalah, coba lagi ya.";
    test('with default parameter', () => {
        try {
            throw new ErrorHTTPServerError();
        } catch (error: any) {
            expect(typeof error.code).toBe("number");   
            expect(error.code).toBe(HTTPCode.INTERNAL_SERVER_ERROR);   
            expect(typeof error.message).toBe("string");   
            expect(error.message).toBe(HTTPCodeMessage.INTERNAL_SERVER_ERROR);   
        }
    });

    test('with given parameter', () => {
        try {
            throw new ErrorHTTPServerError(message);
        } catch (error: any) {
            expect(typeof error.code).toBe("number");   
            expect(error.code).toBe(HTTPCode.INTERNAL_SERVER_ERROR);   
            expect(typeof error.message).toBe("string");   
            expect(error.message).toBe(message);   
        }
    });
});

describe('throw ErrorHTTPBadGateway', () => {
    const message = "Gateway lagi error 😭";
    test('with default parameter', () => {
        try {
            throw new ErrorHTTPBadGateway();
        } catch (error: any) {
            expect(typeof error.code).toBe("number");   
            expect(error.code).toBe(HTTPCode.BAD_GATEWAY);   
            expect(typeof error.message).toBe("string");   
            expect(error.message).toBe(HTTPCodeMessage.BAD_GATEWAY);   
        }
    });

    test('with given parameter', () => {
        try {
            throw new ErrorHTTPBadGateway(message);
        } catch (error: any) {
            expect(typeof error.code).toBe("number");   
            expect(error.code).toBe(HTTPCode.BAD_GATEWAY);   
            expect(typeof error.message).toBe("string");   
            expect(error.message).toBe(message);   
        }
    });
});