// json2html.js
export default function json2html(data) {
    const columns = ["Name", "Age", "Gender"];
    let html = `<table data-user="srinivaschowdary12216@gmail.com">`;
    
    // Table header
    html += "<thead><tr>";
    columns.forEach(col => html += `<th>${col}</th>`);
    html += "</tr></thead>";
    
    // Table body
    html += "<tbody>";
    data.forEach(row => {
        html += "<tr>";
        columns.forEach(col => html += `<td>${row[col] || ""}</td>`);
        html += "</tr>";
    });
    html += "</tbody></table>";
    
    return html;
}
