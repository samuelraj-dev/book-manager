class CustomAPIError extends Error {
    constructor (message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}

const customAPIError = (message, statusCode) => {
    return new CustomAPIError(message, statusCode)
}

export {
    CustomAPIError,
    customAPIError,
}