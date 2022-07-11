import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Container} from "react-bootstrap";
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { faChargingStation } from '@fortawesome/free-solid-svg-icons';




export default class Leaderboard extends React.Component {
  leaderBoard = [] as any;
  season = "32";
  selectedUser = "";

  leaderBoardUpdate(){
    fetch(`https://us.api.blizzard.com/data/wow/pvp-season/${this.season}/pvp-leaderboard/3v3?namespace=dynamic-us&locale=en_US&access_token=USHEAP6FBBr3rc7lHsAExJRZEL3v55bcVu`)
    .then(response => response.json())
    .then(data => {
      this.leaderBoard = data.entries;
      this.createTableWithData();
      
    }
    )
  }
  componentDidMount() {
    this.leaderBoardUpdate();
  } 
  createTableWithData() {
    var table = document.getElementsByTagName("tbody")[0];
    console.log(this.leaderBoard);
    table.innerHTML = "";
    for (var i = 0; i < 3000; i++) {
      // make entire table bold

      var row = table.insertRow(i);
      var rank = row.insertCell(0);
      var name = row.insertCell(1);
      var rating = row.insertCell(2);
      var wins = row.insertCell(3);
      var losses = row.insertCell(4);

      rank.innerHTML = this.leaderBoard[i].rank;
      name.innerHTML = this.leaderBoard[i].character.name;
      name.style.fontWeight = "bold";
      rank.style.fontWeight = "bold";
      rating.style.fontWeight = "bold";
      rating.innerHTML = this.leaderBoard[i].rating;
      wins.innerHTML = this.leaderBoard[i].season_match_statistics.won;
      losses.innerHTML = this.leaderBoard[i].season_match_statistics.lost;
      // make wins green and losses red
      wins.style.color = "green";
      losses.style.color = "red";

      
      if (this.leaderBoard[i].faction.type === "HORDE") {
        row.classList.add("table-danger");

      }
      else {
        row.classList.add("table-primary");
      }


    }
  }

  highlightRow() {
    var table = document.getElementsByTagName("tbody")[0];
    for (var i = 0; i < table.rows.length; i++) {
      if (table.rows[i].cells[1].innerHTML === this.selectedUser) {
        var rowRect = table.rows[i].getBoundingClientRect();
        var bodyRect = document.body.getBoundingClientRect();
        var offset = rowRect.top - bodyRect.top;
        window.scrollTo(0, offset);
      }
    }
  }


  enterKey(e: any) {
    if (e.key === 'Enter') {
      this.selectedUser = e.target.value.toLowerCase();
      this.highlightRow();
    }
  }

  
  render() {
    return (
      <div className="jumbotron m-auto d-flex justify-content-center">
        <Container>
        <Button onClick={this.leaderBoardUpdate} variant="primary">Refresh</Button>
        <br></br>
        <select className="form-select" onChange={(e) => {this.season = e.target.value; this.leaderBoardUpdate();}}>
        <option value="32">SL Season 3</option>
        <option value="31">SL Season 2</option>
        <option value="30">SL Season 1</option>
        <option value="29">BFA Season 4</option>
        <option value="28">BFA Season 3</option>
        <option value="27">BFA Season 2</option>
        </select>
        <br></br>
        <datalist id="data-list-characters">
        {this.leaderBoard.map((entry: any) => {
          return <option value={entry.character.name}></option>
        }
        )}
        </datalist>
        <input className="form-control" type="text" placeholder="Search" onKeyPress={this.enterKey.bind(this)} list="data-list-characters"/>

        <br></br>
        <table className="table bg-light table-striped">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Rating</th>
              <th>Wins</th>
              <th>Losses</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
        </Container>
      </div>
    );
  }
}


