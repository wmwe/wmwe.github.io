// Google Sheets integration utility
// This file contains helper functions to fetch data from Google Sheets

/**
 * Fetches data from a public Google Sheet
 * @param {string} sheetId - The Google Sheet ID from the URL
 * @param {string} range - The range to fetch (e.g., 'Sheet1!A1:C10')
 * @returns {Promise<Array>} Array of team data
 */
export const fetchSheetData = async (sheetId, range = 'Sheet1!A:B') => {
  try {
    // For public sheets, you can use this URL format
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=YOUR_API_KEY`;
    
    // Alternative: Use CSV export for public sheets (no API key needed)
    const csvUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&range=${range}`;
    
    const response = await fetch(csvUrl);
    const csvText = await response.text();
    
    // Parse CSV data
    const lines = csvText.split('\n');
    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
    const data = [];
    
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim()) {
        const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''));
        const row = {};
        headers.forEach((header, index) => {
          row[header] = values[index] || '';
        });
        data.push(row);
      }
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    throw error;
  }
};

/**
 * Converts raw sheet data to team points format
 * @param {Array} sheetData - Raw data from Google Sheets
 * @returns {Array} Formatted team data
 */
export const formatTeamData = (sheetData) => {
  return sheetData.map(row => ({
    name: row.TeamNumber || row.Team || row.team || row.Name || row.name || '',
    points: parseInt(row['M-Points'] || row.MPoints || row.Points || row.points || row.Score || row.score || 0) || 0
  })).filter(team => 
    team.name && 
    team.name.trim() !== '' && 
    team.name !== 'TeamNumber' && // Filter out header row
    !isNaN(team.points) && 
    team.points >= 0 // Include teams with 0 points
  );
};

/**
 * Example usage:
 * 
 * const sheetId = '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms';
 * const teamData = await fetchSheetData(sheetId, 'Sheet1!A:B');
 * const formattedData = formatTeamData(teamData);
 */
