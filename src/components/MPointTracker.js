import React, { useState, useEffect } from "react";
import "./MPointTrackerStyle.css";
import Banner from "./Banner/Banner";
import Button from "./Button/Button";
import { fetchSheetData, formatTeamData } from "../utils/googleSheets";

function MPointTracker() {
  const [teamData, setTeamData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch data from Google Sheets
  const fetchDataFromSheets = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Your actual Google Sheet ID
      const sheetId = '1W-g3V7oEbtVvL64K8tyxpCtm2ppuqzpEsu148EXCwHs';
      
      // Fetch real data from Google Sheets
      const rawData = await fetchSheetData(sheetId, 'Sheet1!A:B');
      const formattedData = formatTeamData(rawData);
      
      setTeamData(formattedData);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to load team data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Check for data changes every 30 seconds (less frequent)
  useEffect(() => {
    const interval = setInterval(fetchDataFromSheets, 30 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Initial data fetch
  useEffect(() => {
    fetchDataFromSheets();
  }, []);

  // Sort teams by points (descending) - only if we have data
  const sortedTeams = teamData.length > 0 ? [...teamData].sort((a, b) => b.points - a.points) : [];
  const maxPoints = teamData.length > 0 ? Math.max(...teamData.map(team => team.points)) : 0;

  return (
    <div className="mpoint-tracker">
      <Banner
        children={"Track your team's M-Points progress!"}
        buttons={
          <Button
            onClick={fetchDataFromSheets}
            buttonColor="white"
            textColor="#00B1F5"
            disabled={isLoading}
          >
            {isLoading ? "updating..." : "refresh"}
          </Button>
        }
      />
      
      <div className="tracker-container">
        <div className="tracker-header">
          <h1 className="tracker-title">m-points leaderboard</h1>
          <p className="last-updated">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </p>
        </div>

        <div className="bar-chart-container">
          {isLoading ? (
            <div className="no-data-message">
              <p>Loading team data...</p>
            </div>
          ) : error ? (
            <div className="no-data-message">
              <p>{error}</p>
              <button onClick={fetchDataFromSheets} className="retry-button">
                Try Again
              </button>
            </div>
          ) : sortedTeams.length > 0 ? (
            sortedTeams.map((team, index) => {
              const percentage = maxPoints > 0 ? (team.points / maxPoints) * 100 : 0;
              const isTopThree = index < 3;
              
              return (
                <div key={team.name} className={`bar-chart-row ${isTopThree ? 'top-three' : ''}`}>
                  <div className="bar-label">
                    <span className="team-rank">#{index + 1}</span>
                    <span className="team-name">Team {team.name}</span>
                  </div>
                  <div className="bar-container">
                    <div 
                      className="bar-fill"
                      style={{ width: `${percentage}%` }}
                    >
                      <span className="bar-value">{team.points.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="no-data-message">
              <p>No team data found. Please check your Google Sheet.</p>
            </div>
          )}
        </div>

        <div className="tracker-footer">
          <p className="refresh-info">
            Data updates automatically when values change
          </p>
        </div>
      </div>
    </div>
  );
}

export default MPointTracker;