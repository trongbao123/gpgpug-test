import { HttpStatus } from '../http-status'

const errorMessages: Partial<Record<HttpStatus, string>> = {
    [HttpStatus.UNAUTHORIZED]: 'Please log in to use this feature',
    [HttpStatus.BAD_GATEWAY]: 'The system is busy or unavailable',
    [HttpStatus.SERVICE_UNAVAILABLE]: 'The system is busy or unavailable',
    [HttpStatus.FORBIDDEN]: 'You do not have permission to access this feature',
    [HttpStatus.INTERNAL_SERVER_ERROR]: 'System error',
}
const handleError = (response: any) => {
    const { status, statusText, data } = response || {}

    let error: any = null

    if (status in errorMessages) {
        error = new Error(errorMessages[status as HttpStatus])
        error.response = response
        return [data, error, statusText, status]
    }

    if (!status) {
        error = new Error('Connection failed')
        error.response = response
        return [data, error, statusText, status]
    }

    if (status >= HttpStatus.OK && status < HttpStatus.INTERNAL_SERVER_ERROR) return [data, error, statusText, status]

    error = new Error('444')
    error.response = response
    return [data, error, statusText, status]
}

export default handleError
