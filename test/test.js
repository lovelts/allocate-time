/*
 * @Author: lts
 * @Date: 2021-02-12 17:47:03
 * @LastEditTime: 2021-02-14 10:32:44
 * @FilePath: \allocate-time\test\test.js
 */
const  allocateTime = require('../index') 

// changeDayTimeArr
const myArr = allocateTime.changeDayTimeArr(['2021-01-31','2021-03-12'])
console.log(myArr) 

// daysChangeMonthsArr  

//模拟一年的数据
let oldArr = []
for (let i = 0; i < 365; i++) {
    oldArr.push(i)
}
const newArr = allocateTime.daysChangeMonthsArr(oldArr)
console.log(newArr)

// getFirstAndEndDayOfWeek
const weekTimeObj = allocateTime.getFirstAndEndDayOfWeek()
console.log(weekTimeObj)

// getFirstAndEndDayOfMonth
const monthTimeObj = allocateTime.getFirstAndEndDayOfMonth()
console.log(monthTimeObj)

// getFirstAndEndDayOfYear
const yearTimeObj = allocateTime.getFirstAndEndDayOfYear()
console.log(yearTimeObj)


