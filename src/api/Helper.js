import { Platform } from "react-native"

export const methodTypes = {
    'GET': 'GET',
    'POST': 'POST',
    'PUT': 'PUT',
    'DELETE': 'DELETE',
    'PATCH': 'PATCH'
}
export const getHeaders = (contentType = 1, accessToken = null) => {
    return headers = {
        'Accept': 'application/json',
        'Content-Type': getAcceptType(contentType),
        'Authorization':'Bearer '+accessToken
        // 'X-Authorization':  accessToken === null ? undefined : accessToken 
    }

}

export const getAcceptType = (contetntType = 1) => {
    return contetntType === 1 ? 'application/json' : 'application/x-www-form-urlencoded'
}
