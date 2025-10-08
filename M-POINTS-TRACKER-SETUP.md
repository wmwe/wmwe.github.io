# M-Points Tracker Setup Guide

## Overview
The M-Points Tracker is a public leaderboard page that displays team scores in a clean, modern bar chart format. It automatically updates from a Google Sheet and refreshes every 5 minutes.

## Features
- ✅ Real-time data from Google Sheets
- ✅ Auto-refresh every 5 minutes
- ✅ Manual refresh button
- ✅ Responsive design for mobile and desktop
- ✅ Clean, modern UI matching your website theme
- ✅ Top 3 teams highlighted with special styling

## Setup Instructions

### 1. Create Your Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "M-Points Tracker" (or any name you prefer)
4. Set up your columns:
   - Column A: Team names
   - Column B: Points/Score
5. Make sure your sheet is **publicly viewable**:
   - Click "Share" button
   - Change permissions to "Anyone with the link can view"
   - Copy the sharing link

### 2. Configure the Tracker
1. Open `src/components/MPointTracker.js`
2. Find this line:
   ```javascript
   const sheetId = 'YOUR_GOOGLE_SHEET_ID_HERE';
   ```
3. Replace `YOUR_GOOGLE_SHEET_ID_HERE` with your actual Google Sheet ID
   - The Sheet ID is the long string in your Google Sheet URL
   - Example: `https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit`
   - The ID would be: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

### 3. Test the Integration
1. Start your development server: `npm start`
2. Navigate to `/m-points` in your browser
3. You should see your team data displayed in the leaderboard
4. Try adding/updating data in your Google Sheet
5. Click the "refresh" button to see the changes

## Google Sheet Format
Your Google Sheet should have this structure:

| Team Name | Points |
|-----------|--------|
| Team Alpha | 1250 |
| Team Beta | 980 |
| Team Gamma | 1150 |

**Important Notes:**
- The first row should contain headers (Team Name, Points, etc.)
- Team names go in column A
- Points/scores go in column B
- The system will automatically detect different header names (Team, team, Name, name, Points, points, Score, score)

## Customization Options

### Change Refresh Interval
To change how often the data refreshes automatically:
1. Open `src/components/MPointTracker.js`
2. Find this line:
   ```javascript
   const interval = setInterval(fetchDataFromSheets, 5 * 60 * 1000);
   ```
3. Change `5 * 60 * 1000` to your desired interval in milliseconds
   - 1 minute: `1 * 60 * 1000`
   - 10 minutes: `10 * 60 * 1000`
   - 30 minutes: `30 * 60 * 1000`

### Styling Customization
The tracker uses your existing website theme colors:
- Primary: `#1b3a5d` (dark blue)
- Accent: `#6dcff6` (light blue)
- Fonts: League Spartan (headers) and Montserrat (body text)

To customize colors, edit `src/components/MPointTrackerStyle.css`

## Troubleshooting

### Data Not Loading
1. Check that your Google Sheet is publicly accessible
2. Verify the Sheet ID is correct
3. Check the browser console for error messages
4. Ensure your sheet has data in columns A and B

### Styling Issues
1. Make sure `MPointTrackerStyle.css` is properly imported
2. Check that the CSS file exists in the correct location
3. Verify there are no conflicting styles

### Performance
- The tracker fetches data every 5 minutes automatically
- Manual refresh is available via the button
- Data is cached between refreshes for better performance

## Security Notes
- The Google Sheet must be publicly readable (no authentication required)
- No API keys are needed for public sheets
- The integration uses Google's CSV export feature for simplicity

## Support
If you encounter any issues:
1. Check the browser console for error messages
2. Verify your Google Sheet is properly configured
3. Test with the sample data first to ensure the component works
4. Make sure your sheet has the correct column structure

The tracker is now ready to use! Your teams can see their progress in real-time, and the leaderboard will automatically update as you add new points to your Google Sheet.
