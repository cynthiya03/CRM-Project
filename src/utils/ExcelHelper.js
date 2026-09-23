import * as XLSX from 'xlsx';
import { readFileSync } from 'node:fs';
import path from 'node:path';

export class ExcelHelper {
  static loadWorkbook(filePath) {
    // Relative paths are resolved from the terminal's working directory.
    const fullPath = path.resolve(filePath);

    return XLSX.read(readFileSync(fullPath), {
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
      // false returns formatted text, useful for UI input.
      // Pass { raw: true } when you need numeric values.
      raw: options.raw ?? false,
    });
  }

  // Read all rows from one sheet.
  // Defaults to the first sheet when sheetName is omitted.
  static readExcel(filePath, sheetName, options = {}) {
    const workbook = this.loadWorkbook(filePath);
    return this.readSheet(workbook, sheetName, options);
  }

  // List worksheet names.
  static getSheetNames(filePath) {
    return this.loadWorkbook(filePath).SheetNames;
  }

  // Read every worksheet into an object keyed by sheet name.
  static readAllSheets(filePath, options = {}) {
    const workbook = this.loadWorkbook(filePath);

    return Object.fromEntries(
      workbook.SheetNames.map((sheetName) => [
        sheetName,
        this.readSheet(workbook, sheetName, options),
      ]),
    );
  }

  // Find exactly one row using any column and value.
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