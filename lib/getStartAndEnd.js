/*
 * @Author: lts
 * @Date: 2021-02-12 15:38:57
 * @LastEditTime: 2021-02-14 10:20:39
 * @FilePath: \allocate-time\src\getStartAndEnd.js
 */
const moment = require('moment')
const FORMAT_DATA = require('./constants')

const getFirstAndEndDayOfWeek = (formatData = FORMAT_DATA) => {
    let date = new Date()
    let endDate = new Date()
    let day = (date.getDay() === 0 ? 7 : date.getDay())
    endDate.setDate(date.getDate() - day + 7)
    date.setDate(date.getDate() - day + 1)
    date.setHours(0, 0, 0, 0)
    return { startTime: moment(date.getTime()).format(formatData), endTime: moment(endDate.getTime()).format(formatData) }
}
const getFirstAndEndDayOfMonth = (formatData = FORMAT_DATA) => {
    let date = new Date()
    date.setDate(1)
    let endDate = new Date()
    endDate.setMonth(endDate.getMonth() + 1)
    endDate.setDate(0)
    date.setHours(0, 0, 0, 0)
    return { startTime: moment(date.getTime()).format(formatData), endTime: moment(endDate.getTime()).format(formatData) }
}
const getFirstAndEndDayOfYear = (formatData = FORMAT_DATA) => {
    let date = new Date()
    let endDate = new Date()
    date.setDate(1);
    date.setMonth(0);
    date.setHours(0, 0, 0, 0)
    endDate.setMonth(11)
    endDate.setDate(31)
    return { startTime: moment(date.getTime()).format(formatData), endTime: moment(endDate.getTime()).format(formatData) }
}
module.exports = {
    getFirstAndEndDayOfWeek,
    getFirstAndEndDayOfMonth,
    getFirstAndEndDayOfYear
}