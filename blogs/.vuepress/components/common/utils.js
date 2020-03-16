export function table2markdown(table) {
  const trPattern = /(<tr>[\s\S]*?<\/tr>)/g,
    // 获取td或th的正则
    tdPattern = /(<t[dh]>[\s\S]*?<\/t[dh]>)/g,
    // 获取td或th中内容的正则
    conPattern = /<t[dh]>([\s\S]*?)<\/t[dh]>/
  // 获取所有tr
  let trs = [],
    mdTable = '',
    tableLine = '| ',
    match
  while(match = trPattern.exec(table)) {
    trs.push(match[1])
  }

  trs.forEach((tr, i) => {
    let tds = []
    while(match = tdPattern.exec(tr)) {
      tds.push(match[1])
    }

    mdTable += '| '
    let con = ''
    if(i==0) {
      tds.forEach((td) => {
        con = conPattern.exec(td)[1]
        mdTable += con + ' | '
        tableLine += '---- | '
      })
      mdTable += '\n' + tableLine + '\n'
    } else{
      tds.forEach((td) => {
        con = conPattern.exec(td)[1]
        mdTable += con + ' | '
      })
      mdTable += '\n'
    }
  })

  return mdTable
}

import Excel from 'exceljs/dist/exceljs'
import FileSaver from 'filesaver.js-npm'
export function mdTable2Excel(mdTable, workbookName='workbook', sheetName='sheet') {
  mdTable = stripLF(mdTable.trim())
  const lines = mdTable.split('\n')
  if(lines.length === 0) {
    return
  }
  // 去掉第二行，因为是markdown表格的分割线，是没用的
  lines.splice(1, 1)

  let workbook = new Excel.Workbook()
  workbook.creator = 'xtwan'
  workbook.lastModifiedBy = 'xtwan'
  workbook.created = new Date()
  workbook.modified = new Date()
  workbook.lastPrinted = new Date()
  // Set workbook dates to 1904 date system
  workbook.properties.date1904 = true

  let sheet = workbook.addWorksheet(sheetName)
  const headers = lines.splice(0, 1)[0].trim().split('|')
  let column = []
  headers.forEach((header, index) => {
    header != '' && column.push({
      header: header.trim(),
      key: index,
      width: 20
    })
  })
  // 加入表头
  sheet.columns = column

  lines.forEach((line) => {
    // 去掉首尾的|，否则split会有空字符
    line = line.substring(1)
    line = line.substring(0, line.length-2)

    const items = line.trim().split('|')
    sheet.addRow(items)
  })

  const fileName = workbookName + '.xlsx'
  return workbook.xlsx.writeBuffer().then((buffer)=>{
    FileSaver.saveAs(new Blob([buffer]), fileName)
    return Promise.resolve(true)
  })
}

function stripLF(str) {
  if(str.startsWith('\n')) {
    str = str.substring(1)
  }
  if(str.endsWith('\n')) {
    str = str.substring(0, line.length-2)
  }
  return str
}
