# 用于获取时间节点和时间段的数据信息

> 内置依赖moment.js

## Installing

```powershell
npm install allocate-time
```

## api

下面api中format不是必传参数默认值是 `'YYYY-MM-DD HH:mm'`

+ changeDayTimeArr(Array, format)   得到两个日期中间的所有日期（包括开始结束日期）
+ daysChangeMonthsArr(Array, format) 把一年的数据（365/366）转换为一个二维数组，对应月份和每月的天数
+ getFirstAndEndDayOfWeek(format)  得到当前周的第一天和最后一天
+ getFirstAndEndDayOfMonth(format) 得到当月的第一天和最后一天
+ getFirstAndEndDayOfYear(format) 得到当年的第一天和最后一天

## Example

```js
const  allocateTime = require('allocate-time')  // import allocateTime from 'allocate-time' 前端使用


// changeDayTimeArr
const myArr = allocateTime.changeDayTimeArr(['2021-01-31','2021-02-07'])
console.log(myArr) 
// [
//     '2021-01-31 00:00', '2021-02-01 00:00',
//     '2021-02-02 00:00', '2021-02-03 00:00',
//     '2021-02-04 00:00', '2021-02-05 00:00',
//     '2021-02-06 00:00', '2021-02-07 00:00',
// ]


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
console.log(weekTimeObj)  // { startTime: '2021-02-08 00:00', endTime: '2021-02-14 16:03' }

// getFirstAndEndDayOfMonth
const monthTimeObj = allocateTime.getFirstAndEndDayOfMonth()
console.log(monthTimeObj) // { startTime: '2021-02-01 00:00', endTime: '2021-02-28 16:03' }

// getFirstAndEndDayOfYear
const yearTimeObj = allocateTime.getFirstAndEndDayOfYear()
console.log(yearTimeObj) // { startTime: '2021-01-01 00:00', endTime: '2021-12-31 16:03' }





```

