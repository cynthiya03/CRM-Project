import * as XLSX from 'xlsx';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

export class ExcelHelper {
  static readExcel(relativeFilePath, sheetName) {
    const candidates = [
      path.resolve(process.cwd(), relativeFilePath),
      path.resolve(process.cwd(), 'test-data', relativeFilePath),
      path.resolve(process.cwd(), 'src', relativeFilePath),
      path.resolve(process.cwd(), 'tests', relativeFilePath),
    ];

    const filePath = candidates.find((candidate) => existsSync(candidate));

    if (!filePath) {
      throw new Error(
        `Excel file not found. Tried:\n- ${candidates.join('\n- ')}`
      );
    }

    console.log(`Reading Excel file: ${filePath}`);

    const workbook = XLSX.read(readFileSync(filePath), {
      type: 'buffer',
    });

    console.log(`Available sheets: ${workbook.SheetNames.join(', ')}`);

    const selectedSheet = sheetName || workbook.SheetNames[0];
    const sheet = workbook.Sheets[selectedSheet];

    if (!sheet) {
      throw new Error(
        `Sheet "${selectedSheet}" not found in ${filePath}. Available sheets: ${workbook.SheetNames.join(', ')}`
      );
    }

    const rows = XLSX.utils.sheet_to_json(sheet, { defval: '' });
    console.log(`Rows loaded from ${selectedSheet}: ${rows.length}`);

    return rows;
  }
}
