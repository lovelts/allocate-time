/*
 * @Author: lts
 * @Date: 2021-02-12 16:05:48
 * @LastEditTime: 2021-02-14 16:08:20
 * @FilePath: \allocate-time\lib\timeDisposal.js
 */
/**
 * @description: 用于把一年的时间分割成12月，例如把365/366项,分给对应的每个月，得到一个月、日的二维数组。
 * @param {Array}  daysArr 一个含有365/366项的数组。
 * @return {Array} myArr 一个12项 的二维数组，每项的长度都是当月的天数。
 */

const moment = require('moment')
const FORMAT_DATA = require('./constants')

const daysChangeMonthsArr = (daysArr) => {
    let spiltNum = []
    let splitNum2 = []
    for (let i = 0; i < 12; i++) {
        let date = new Date()
        date.setMonth(i + 1)
        date.setDate(0)
        spiltNum.push(date.getDate())
    }

    spiltNum.reduce(function (accumulator, currentValue) {
        splitNum2.push(accumulator)
        return accumulator + currentValue;
    });
    let myArr = [[], [], [], [], [], [], [], [], [], [], [], []]
    for (let i = 0; i < myArr.length; i++) {
        for (let j = 0; j < daysArr.length; j++) {
            if (splitNum2.find(item => item === j)) {
                i++
            }
            myArr[i].push(daysArr[j])
        }
    }
    return myArr
}

/**
 * @description: 用于获取开始时间和结束时间中间的日期
 * @param {Array} arr 开始结束时间数组 ["2021-01-31", "2021-02-03"]
 * @return {Array} xArr 返回这个开始时间和结束时间中间的日期
 */
const changeDayTimeArr = (arr, formatData = FORMAT_DATA) => {
    let startDate = new Date(arr[0])
    let endDate = new Date(arr[1])
    let date = new Date(arr[0])
    date.setHours(0, 0, 0)
    let xArr = [moment(date.getTime()).format(formatData)]
    let days = (endDate.getTime() - startDate.getTime()) / 1000 / 3600 / 24
    for (let i = 0; i < parseInt(days); i++) {
        date.setDate(date.getDate() + 1)
        date.setHours(0, 0, 0)
        xArr.push(moment(date.getTime()).format(formatData))
    }
    return xArr
}

module.exports = {
    daysChangeMonthsArr,
    changeDayTimeArr
}
