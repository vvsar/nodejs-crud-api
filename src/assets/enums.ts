export const enum HTTPMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const enum HTTPCodes {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL = 500,
}

export const enum ErrorMessages {
  INVALID_ID = 'Invalid user ID',
  INVALID_DATA = 'Invalid user data',
  ID_NOT_FOUND = 'User with such ID not found',
  NO_METHOD = 'Such method is not supported',
  NO_ENDPOINT = 'Such endpoint is not available',
  INTERNAL = 'Unexpected server error',
}
