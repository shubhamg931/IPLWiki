import * as Papa from "papaparse";
import { LOAD_DATA, SHOW_STATS } from './types'

export const showStats = (all) => {
  console.log("showStats called");
  console.log(all);
  let hashTeam = all.stats.data.teamArr;
  let team = [], values = [];
  let year = all.year.value;
  let season = all.stats.data.season;
  let item = all.list.item,k;
  switch (item) {
    case "Runs":
      console.log("RUNS!!!!");
      k = 0;
      season[year-2008].Runs.map((val) => {
        if(val > 0){
          team.push(hashTeam[k]);
          values.push(val);
        }
        ++k;
      })
      break;
    case "Wickets":
      console.log("WICKETS!!");
      k = 0;
      season[year-2008].Wickets.map((val) => {
        if(val > 0){
          team.push(hashTeam[k]);
          values.push(val);
        }
        ++k;
      })
      break;
    case "Batting Leaders":
      console.log("BATTING LEADERS!!");
      break;
    case "Fours":
      console.log("FOURS!!");
      k = 0;
      season[year-2008].Fours.map((val) => {
        if(val > 0){
          team.push(hashTeam[k]);
          values.push(val);
        }
        ++k;
      })
      break;
    case "Sixes":
      console.log("SIXES!!");
      k = 0;
      season[year-2008].Sixes.map((val) => {
        if(val > 0){
          team.push(hashTeam[k]);
          values.push(val);
        }
        ++k;
      })
      break;
    case "Bowling leaders":
      console.log("BOWLING LEADERS!!");
      break;
    case "Maidens":
      console.log("MAIDENS!!");
      break;
    case "Economy":
      console.log("ECONOMY!!");
      break;
    case "Extras":
      k = 0;
      season[year-2008].Extras.map((val) => {
        if(val > 0){
          team.push(hashTeam[k]);
          values.push(val);
        }
        ++k;
      })
      console.log("EXTRAS!!");
      break;
    default:
      console.log("NO MATCHING ITEM!");
  }
  let data = {team, values};
  return ({type: SHOW_STATS, payload: data});
}


let PlayerData, BallByBallData, MatchData, PlayerMatchData, SeasonData, TeamData;
export const loadData = () => {
  return async (dispatch) => {

    await fetch("Player.csv")
      .then(response => response.text())
      .then(text => {
        PlayerData = text;
        // console.log(text)
      })
    await fetch("Ball_by_Ball.csv")
      .then(response => response.text())
      .then(text => {
        BallByBallData = text;
        // console.log(text)
      })
    await fetch("Player_Match.csv")
      .then(response => response.text())
      .then(text => {
        PlayerMatchData = text;
        // console.log(text)
      })
    await fetch("Match.csv")
      .then(response => response.text())
      .then(text => {
        MatchData = text;
        // console.log(text)
      })
    await fetch("Season.csv")
      .then(response => response.text())
      .then(text => {
        SeasonData = text;
        // console.log(text)
      })
    await fetch("Team.csv")
      .then(response => response.text())
      .then(text => {
        TeamData = text;
        // console.log(text)
      })

    let PlayerArray = [], BallByBallArray = [], MatchArray = [],
      PlayerMatchArray = [], SeasonArray = [], TeamArray = [];

    console.log("PLAYEDATATYPE: " + typeof (PlayerData));

    Papa.parse(PlayerData, {
      complete: function(results) {
        // console.log("Finished:", results.data);
        PlayerArray = results.data;
        console.log("entries.length: " + results.data.length);
      }
    });
    Papa.parse(BallByBallData, {
      complete: function(results) {
        // console.log("Finished:", results.data);
        BallByBallArray = results.data;
        console.log("entries.length: " + results.data.length);
      }
    });
    Papa.parse(MatchData, {
      complete: function(results) {
        // console.log("Finished:", results.data);
        MatchArray = results.data;
        console.log("entries.length: " + results.data.length);
      }
    });
    Papa.parse(PlayerMatchData, {
      complete: function(results) {
        // console.log("Finished:", results.data);
        PlayerMatchArray = results.data;
        console.log("entries.length: " + results.data.length);
      }
    });
    Papa.parse(SeasonData, {
      complete: function(results) {
        // console.log("Finished:", results.data);
        SeasonArray = results.data;
        console.log("entries.length: " + results.data.length);
      }
    });
    Papa.parse(TeamData, {
      complete: function(results) {
        // console.log("Finished:", results.data);
        TeamArray = results.data;
        console.log("entries.length: " + results.data.length);
      }
    });

    let teamArr = [],seasonArr = [],playerArr = [];
    TeamArray.map((team) => {
      teamArr[team[0]] = team[1];
    })
    SeasonArray.map((season) => {
      seasonArr[season[0]] = season[1];
    })
    PlayerArray.map((player) => {
      playerArr[player[0]] = player[1];
    })
    let season = [], number;
    for(let i=0;i<10;++i){
      season.push({
        Runs: new Array(14).fill(0),
        Wickets: new Array(14).fill(0),
        Fours: new Array(14).fill(0),
        Sixes: new Array(14).fill(0),
        Extras: new Array(14).fill(0)
      });
    }
    let k = 0;
    BallByBallArray.map((val) => {
      k++;
      switch (val[0].substr(0,2)) {
        case "33":
          number = 0;
          // console.log("season 2008");
          break;
        case "39":
          number = 1;
          // console.log("season 2009");
          break;
        case "41":
          number = 2;
          // console.log("season 2010");
          break;
        case "50":
          number = 3;
          // console.log("season 2011");
          break;
        case "54":
          number = 4;
          // console.log("season 2012");
          break;
        case "59":
          number = 5;
          // console.log("season 2013");
          break;
        case "73" || "72":
          number = 6;
          // console.log("season 2014");
          break;
        case "82":
          number = 7;
          // console.log("season 2015");
          break;
        case "98":
          number = 8;
          // console.log("season 2016");
          break;
        default:
          number = -1;
        // console.log("No match!");
      }


      if(number >= 0) {

        let val4 = parseInt(val[4]), val5 = parseInt(val[5]), val10 = parseInt(val[10]), val12 = parseInt(val[12]), val13 = parseInt(val[13]);

        let runScored = 0;
        if(!isNaN(val12)){
          if(!isNaN(val10))
            runScored = val10 + val12;
          else
            runScored = val12;
          season[number].Extras[val5] += val12;
          season[9].Extras[val5] += val12;
        }else{
          if(!isNaN(val10))
            runScored = val10;
        }
        season[number].Runs[val4] += runScored;
        season[9].Runs[val4] += runScored;
        if (!isNaN(val13)) {
          season[number].Wickets[val5]++;
          season[9].Wickets[val5]++;
        }
        if (val10 === 4) {
          season[number].Fours[val4]++;
          season[9].Fours[val4]++;
        }
        if (val10 === 6) {
          season[number].Sixes[val4]++;
          season[9].Sixes[val4]++;
        }
      }
    });
    dispatch({type: LOAD_DATA, payload: {PlayerArray, BallByBallArray, MatchArray, PlayerMatchArray, SeasonArray, TeamArray, season, teamArr, seasonArr, playerArr}});
  }

}
