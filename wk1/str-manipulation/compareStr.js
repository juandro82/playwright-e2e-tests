"use strict";

let filename = "invoice_123.pdf"

// Full match
if (filename === "invoice_123.pdf") {
    console.log("Filename matches exactly.");// Output: Filename matches exactly.
}

let filename2 = "Invoice_123.pdf"

// Case sensitivity check
if (filename2.toUpperCase() === "INVOICE_123.PDF") {
    console.log("Filename matches exactly.");// Output: Filename matches exactly.
}

let filename3 = " Invoice_123.pdf"

// Trim whitespace and check for match
if (filename3.trim().toUpperCase() === "INVOICE_123.PDF") {
    console.log("Filename matches exactly.");// Output: Filename matches exactly.
}

// Partial Comparison

if (filename3.startsWith("invoice_")) {
    console.log("Filename starts with invoice_");// Output: Filename starts with invoice_
}

if (filename3.endsWith(".pdf")) {
    console.log("Filename ends with .pdf");// Output: Filename ends with .pdf
}