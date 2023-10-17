import _ from 'lodash'

export const errorResponse = (e, errorKeys: string[] = []) => {

  let message = ''
  const messages: string[] = []

  if (e.data) {
    if (e.data.detail) {
      message = _.isArray(e.data.detail)
        ? e.data.detail[0]
        : e.data.detail
    }
    if (errorKeys.length) {
      const dataKeys = Object.keys(e.data)
      errorKeys.forEach((key) => {
        if (dataKeys.includes(key)) {
          if (_.isArray(e.data[key])) {
            messages.push(...e.data[key])
          } else {
            messages.push(e.data[key])
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