import * as XLSX from 'xlsx';
import { readFileSync } from 'node:fs';

export class ExcelHelper {
  static readExcel(filePath, sheetName) {
    const workbook = XLSX.read(readFileSync(filePath), {
      type: 'buffer',
    });

    const selectedSheet = sheetName || workbook.SheetNames[0];
    const sheet = workbook.Sheets[selectedSheet];

    if (!sheet) {
      throw new Error(`Sheet "${selectedSheet}" not found in ${filePath}`);
    }

    return XLSX.utils.sheet_to_json(sheet, { defval: '' });
  }
}