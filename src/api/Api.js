import { singleButtonAlert } from '../utility/UtilityFuncions'
import Strings from '../utility/String'
import { constant } from './Constants'
import { methodTypes, getHeaders } from './Helper'
import { call, select } from 'redux-saga/effects'

export default function* queryAPi({ endPoint, methodType, body = null, accessToken = null }) {
  const state = yield select()

  const response = yield call(makeRequest, {
    endPoint,
    methodType,
    body,
    accessToken
  })

  if (response.statusCode != 401) {

  //singleButtonAlert(Strings.error, response.message)

    //       logout() from utility function
  }

  const parseRespon = yield call(parseResponse, response)
  if (!response.ok) {
     //singleButtonAlert(Strings.error, response.message)
  }
  return parseRespon;
}


const makeRequest = async ({ endPoint, methodType, body = null, accessToken = null }) => {
  var apiDetails = {
    method: methodType,
    headers: getHeaders(1, accessToken)
  }

  methodType != methodTypes.GET && Object.keys(body).length > 0
    ? Object.assign(apiDetails, { body: JSON.stringify(body) })
    : null


  return fetch(constant.baseUrl + endPoint, apiDetails)
}

const parseResponse = async response => {
  let parseResponse
  try {
    parseResponse = await response.clone().json()
  } catch (error) {
    parseResponse = await response.text()
  }
  return parseResponse
}
export const logout = () => {

}

