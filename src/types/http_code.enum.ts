
/**
 * Default options of HTTP Code
 * BAD_REQUEST = 400,
 * UNAUTHORIZED = 401,
 * FORBIDDEN = 403,
 * NOT_FOUND = 404,
 * INTERNAL_SERVER_ERROR = 500,
 * BAD_GATEWAY = 502  
 *
 * @export
 * @enum {number}
 */
export enum HTTPCode {
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
    BAD_GATEWAY = 502  
}

/**
 * Default options of HTTP Code Message
 * BAD_REQUEST = "Permintaan ditolak karena ada parameter kurang.",
 * UNAUTHORIZED = "Belum terotorisasi.",
 * FORBIDDEN = "Akses ditolak.",
 * NOT_FOUND = "Data tidak ditemukan.",
 * INTERNAL_SERVER_ERROR = "Terjadi kesalahan pada server, mohon hubungi admin.",
 * BAD_GATEWAY = "Bad Gateway."  
 *
 * @export
 * @enum {string}
 */
export enum HTTPCodeMessage {
    BAD_REQUEST = "Permintaan ditolak karena ada parameter kurang.",
    UNAUTHORIZED = "Belum terotorisasi.",
    FORBIDDEN = "Akses ditolak.",
    NOT_FOUND = "Data tidak ditemukan.",
    INTERNAL_SERVER_ERROR = "Terjadi kesalahan pada server, mohon hubungi admin.",
    BAD_GATEWAY = "Bad Gateway."  
}