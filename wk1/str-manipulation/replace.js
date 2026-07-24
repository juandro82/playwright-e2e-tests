"use strict";
let filename = "invoice_123.pdf"
let query_template = `SELECT * FROM {{table_name}}`
let dt = "2022-01-01";

// GEt only the filename
let onlyFilename = filename.replace(".pdf", ""); // Output: invoice_123
console.log(onlyFilename);

// Rename the file extension from pdf to .txt
let newFilename = filename.replace(".pdf", ".txt");
console.log(newFilename);

// Replace table name with accounts
let actualQ = query_template.replace("{{table_name}}", "Account")   
console.log(actualQ)

// Convert the givend ate format to YYYYMMDD format
let modifiedDt = dt.replace(/-/g, "") // La g significa q encuentra todos los dash y los reemplaza
console.log(modifiedDt);