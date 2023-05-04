import { CustomAPIError } from '../errors/customAPIError.js'

const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ message: err.message })
    }
    res.status(500).json({ message: err })
}

export default errorHandler