import * as XLSX from 'xlsx';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

export class ExcelHelper {
  static loadWorkbook(filePath) {
    const normalizedPath = String(filePath).replace(/\\/g, '/');
    const fileName = normalizedPath.split('/').pop();

    const candidates = [
      path.resolve(process.cwd(), normalizedPath),
      path.resolve(process.cwd(), 'Data', normalizedPath),
      path.resolve(process.cwd(), 'data', normalizedPath),
      path.resolve(process.cwd(), 'Data', fileName),
      path.resolve(process.cwd(), 'data', fileName),
      path.resolve(process.cwd(), fileName),
    ];

    const resolved = candidates.find((candidate) => existsSync(candidate));

    if (!resolved) {
      throw new Error(
        `Excel file not found. Tried:\n- ${candidates.join('\n- ')}`,
      );
    }

    return XLSX.read(readFileSync(resolved), {
      type: 'buffer',
    });
  }

  static readSheet(workbook, sheetName, options = {}) {
    const selectedSheet = sheetName || workbook.SheetNames[0];
    const sheet = workbook.Sheets[selectedSheet];

    if (!sheet) {
      throw new Error(
        `Sheet "${selectedSheet}" not found. Available sheets: ` +
        workbook.SheetNames.join(', '),
      );
    }

    return XLSX.utils.sheet_to_json(sheet, {
      defval: '',
      blankrows: false,
      raw: options.raw ?? false,
    });
  }

  static readExcel(filePath, sheetName, options = {}) {
    const workbook = this.loadWorkbook(filePath);
    return this.readSheet(workbook, sheetName, options);
  }

  static getSheetNames(filePath) {
    return this.loadWorkbook(filePath).SheetNames;
  }

  static readAllSheets(filePath, options = {}) {
    const workbook = this.loadWorkbook(filePath);

    return Object.fromEntries(
      workbook.SheetNames.map((sheetName) => [
        sheetName,
        this.readSheet(workbook, sheetName, options),
      ]),
    );
  }

  static getRow(filePath, sheetName, columnName, value, options = {}) {
    const rows = this.readExcel(filePath, sheetName, options);

    if (rows.length === 0) {
      throw new Error(`Sheet "${sheetName}" has no data rows.`);
    }

    if (!Object.hasOwn(rows[0], columnName)) {
      throw new Error(
        `Column "${columnName}" not found in sheet "${sheetName}".`,
      );
    }

    const matches = rows.filter(
      (row) => String(row[columnName]) === String(value),
    );

    if (matches.length !== 1) {
      throw new Error(
        `Expected one matching row in "${sheetName}" using ` +
        `"${columnName}", but found ${matches.length}.`,
      );
    }

    return matches[0];
  }
}
