import _ from 'lodash'
import { AxiosResponse, AxiosError } from 'axios'

type ErrorResponse = {
  $ok: boolean,
  $response: AxiosResponse,
  $code: number,
  $data: object,
  $message: string,
  [key: string]: any
}

export const errorResponse = (e: AxiosError, errorKeys: string[] = []) => {

  let message = ''
  const messages: string[] = []
  const data = e?.response?.data

  if (data) {
    if (data.detail) {
      message = _.isArray(data.detail)
        ? data.detail[0]
        : data.detail
    }
    if (errorKeys.length) {
      const dataKeys = Object.keys(data)
      errorKeys.forEach((key) => {
        if (dataKeys.includes(key)) {
          if (_.isArray(data[key])) {
            messages.push(...data[key])
          } else {
            messages.push(data[key])
          }
        }
      })
    }
    if (messages.length && !message) {
      message = messages[0]
    }
  }
  return { message, messages }
}

type OkResponse = {
  $ok: boolean,
  $response: AxiosResponse,
  $code: number,
  $data: object,
  $message: string,
  [key: string]: any
}

export const okResponse = (
    r: AxiosResponse,
    fieldOrFiledsToRetrieve: string | Array<string>,
    setAllData: boolean = true,
    getDataOnHeader: boolean = false
) => {

  const response: OkResponse = {
    $ok: true,
    $response: r,
    $code: r.status,
    $data: r.data || null,
    $message: typeof r.data === 'string'
      ? r.data
      : r.data.detail || '' 
  }

  const data = getDataOnHeader
    ? r.headers
    : r.data

  if (typeof fieldOrFiledsToRetrieve === 'string') {
    if (setAllData) {
      response[fieldOrFiledsToRetrieve] = data
    } else {
      response[fieldOrFiledsToRetrieve] = data[fieldOrFiledsToRetrieve]
    }
  } else if (_.isArray(fieldOrFiledsToRetrieve)) {
    fieldOrFiledsToRetrieve.forEach((field) => {
      response[field] = data[field] || null
    })
  }
  return response
}
