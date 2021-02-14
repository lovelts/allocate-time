/*
 * @Author: lts
 * @Date: 2021-02-12 14:07:28
 * @LastEditTime: 2021-02-14 15:45:30
 * @FilePath: \allocate-time\index.js
 */
const  getStartAndEnd = require('./lib/getStartAndEnd') 
const  timeDisposal = require('./lib/timeDisposal')

module.exports  = { ...getStartAndEnd, ...timeDisposal }
