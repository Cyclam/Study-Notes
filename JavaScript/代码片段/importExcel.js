import XLSX from 'xlsx'

export function importExcel(event, element, callback) {
  if (!event.target.files) return
  var f = event.target.files[0]
  var reader = new FileReader()
  var excelJson
  reader.onload = function (e) {
    var data = e.target.result
    var wb = XLSX.read(data, { type: 'binary' })
    excelJson = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
    var excelXLSX = wb.Sheets[wb.SheetNames[0]]
    if (element) document.getElementById(element).reset()
    callback(excelJson, excelXLSX)
  }
  reader.readAsBinaryString(f)
}