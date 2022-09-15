const en = require('../src/utils/locales/en.json');
const vi = require('../src/utils/locales/vi.json');

const XLSX = require('xlsx');

const keys = Object.keys(vi);

const newbook = XLSX.utils.book_new();

const aoa = [['key', 'vi', 'en']];

keys.map((e, index) => {
  aoa.push([
    e,
    vi[e],
    en[e] ? en[e] : { t: 'n', f: `GOOGLETRANSLATE(B${index + 2};"vi";"en")` },
  ]);
});

const ws = XLSX.utils.aoa_to_sheet(aoa);

XLSX.utils.book_append_sheet(newbook, ws, 'Translation');

XLSX.writeFile(newbook, '../src/utils/locales/locale.xlsx', {});
