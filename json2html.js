// json2html.js

export default function json2html(data) {
    // Define the table headers based on all unique keys in the objects
    const headers = Array.from(
      data.reduce((set, obj) => {
        Object.keys(obj).forEach((key) => set.add(key));
        return set;
      }, new Set())
    );
  
    // Start building the HTML string for the table
    let html = '<table data-user="ppprai1712@gmail.com">\n<thead>\n<tr>';
  
    // Add headers to the table
    headers.forEach((header) => {
      html += `<th>${header}</th>`;
    });
    html += '</tr>\n</thead>\n<tbody>\n';
  
    // Add rows of data
    data.forEach((row) => {
      html += '<tr>';
      headers.forEach((header) => {
        html += `<td>${row[header] !== undefined ? row[header] : ''}</td>`;
      });
      html += '</tr>\n';
    });
  
    html += '</tbody>\n</table>';
    return html;
  }
  