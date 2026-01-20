import express from 'express';
import chalk from 'chalk'; // Make sure to import chalk!
import { formatLongDate, formatShortDate, formatRelativeDate } from './utils/formatDate.js';

const app = express();
const PORT = 3000;

const rawDates = [
    "1990-09-25T10:00:00Z",
    "2007-05-27T14:30:00Z",
    "2021-04-21T08:15:00Z",
    "2002-06-03T19:45:00Z",
    "1983-01-20T03:00:00Z"
];

// 1. Keep your original JSON endpoint (Good for React later)
app.get('/api/dates', (req, res) => {
    const formattedData = rawDates.map(date => ({
        original: date,
        long: formatLongDate(date),
        short: formatShortDate(date),
        relative: formatRelativeDate(date)
    }));
    res.json(formattedData);
});

// 2. NEW: Styled Wireframe endpoint (Good for viewing in browser now)
app.get('/', (req, res) => {
    let htmlContent = `
        <body style="background-color: #121212; color: #e0e0e0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px;">
            <h1 style="color: #61dafb; border-bottom: 2px solid #333; padding-bottom: 10px;">Date Formatter Wireframe</h1>
            <div style="display: grid; gap: 20px; margin-top: 20px;">
    `;

    rawDates.forEach(date => {
        htmlContent += `
            <div style="background: #1e1e1e; border-left: 5px solid #61dafb; padding: 15px; border-radius: 4px; box-shadow: 0 4px 6px rgba(0,0,0,0.3);">
                <p style="margin: 0; font-size: 0.9rem; color: #888;">ISO: ${date}</p>
                <h3 style="margin: 10px 0; color: #61dafb;">${formatLongDate(date)}</h3>
                <span style="background: #333; padding: 4px 8px; border-radius: 4px; color: #4caf50; font-weight: bold;">
                    ${formatRelativeDate(date)}
                </span>
            </div>
        `;
    });

    htmlContent += `</div></body>`;
    res.send(htmlContent);
});

// 3. Updated Listener with Chalk colors
app.listen(PORT, () => {
    console.log(chalk.bgCyan.black.bold(' SERVER START '));
    console.log(chalk.cyan(`➜ Local:   `) + chalk.white(`http://localhost:${PORT}`));
    console.log(chalk.blue(`➜ API:     `) + chalk.white(`http://localhost:${PORT}/api/dates`));
    console.log(chalk.gray('--------------------------------------------'));
});