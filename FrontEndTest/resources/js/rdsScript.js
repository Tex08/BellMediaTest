/*
	Alexandre Pelletier

	File created: January 17, 2018
	Last Modified: January 20, 2018
	
*/


	//Get the full roster from JSON object
	var roster = winnipeg["roster"];
	//The attributes that will be displayed
	var playerAttributes = ["uniform_number", "first_name", "last_name", "position",
							"height", "weight", "birth_date", "phase_status"];

	displayTeamInfo();
	populateTable(roster);



	/* Functions */

	function populateTable(teamRoster) {
		//For each player, add a row to a table
		for (var i = 0; i < teamRoster.length; i++) {
			var player = teamRoster[i];
			var tbRow = document.createElement('tr');
			var position = player["position"];

			//Pick the correct table, depending on the player's position
			if(position === "Défenseur") {
				var tb = document.getElementById("tbD");
			}
			else if(position === "Gardien") {
				var tb = document.getElementById("tbG");
			}
			else {
				var tb = document.getElementById("tbFwd");
			}

			tb.appendChild(tbRow);

			//Add each player's attribute as a table data element
			for (var j = 0; j < playerAttributes.length; j++) {
				var tbData = document.createElement('td');
				//Special case where two attributes need to be put together (first & last names)
				if(j===1) {
					tbData.textContent = player[playerAttributes[j]] + " " + player[playerAttributes[j+1]];
					tbRow.appendChild(tbData);
					j = 2;
				}
				else {
					tbData.textContent = player[playerAttributes[j]];
					tbRow.appendChild(tbData);
				}
			}

			//Get and add age attribute to table
			var tbAge = document.createElement('td');
			tbAge.textContent = getAge(player);
			tbRow.appendChild(tbAge);
		}
	}

	function displayTeamInfo() {
		//Get and display team name
		var teamName = document.getElementById("teamName");	
		teamName.textContent += winnipeg["first_name"] + " " + winnipeg["last_name"];

		//Get and display team image
		var teamImg = document.createElement('img');
		teamImg.setAttribute("style", "padding-left: 30px; padding-right: 30px;");
		var imgSrc = winnipeg["team_extra_info"]["url"]["2"]["url"];
		teamImg.src = imgSrc;
		teamName.appendChild(teamImg);

		//Display additional team info
		document.getElementById("conf").textContent = winnipeg["conference_name"];
		document.getElementById("div").textContent = winnipeg["division_name"];	
	}

	//Function to calculate age based on birthdate
	function getAge(player) {
		var oneDay = 1000*60*60*24;
		var bDay = new Date(player["birth_date"]);
		var today = new Date();
		var diff = Math.abs(today - bDay);
		var age = Math.floor((diff/oneDay)/365);
		return age;
	}

	function collapse(tbName) {
		var tb = document.getElementById(tbName);

		if (tb.style.visibility === "collapse") {
			tb.style.visibility = "visible";
		} else {
			tb.style.visibility = "collapse";
		} 
	}


/*** 
	Sorting function taken from W3Schools 
	Link: https://www.w3schools.com/howto/howto_js_sort_table.asp
***/

	function sortTable(n, tbName) {
	  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
	  table = document.getElementById(tbName);
	  switching = true;
	  // Set the sorting direction to ascending:
	  dir = "asc"; 
	  /* Make a loop that will continue until
	  no switching has been done: */
	  while (switching) {
	    // Start by saying: no switching is done:
	    switching = false;
	    rows = table.getElementsByTagName("TR");
	    /* Loop through all table rows (except the
	    first, which contains table headers): */
	    for (i = 1; i < (rows.length - 1); i++) {
	      // Start by saying there should be no switching:
	      shouldSwitch = false;
	      /* Get the two elements you want to compare,
	      one from current row and one from the next: */
	      x = rows[i].getElementsByTagName("TD")[n];
	      y = rows[i + 1].getElementsByTagName("TD")[n];
	      /* Check if the two rows should switch place,
	      based on the direction, asc or desc: */
	      if (dir == "asc") {
	        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
	          // If so, mark as a switch and break the loop:
	          shouldSwitch= true;
	          break;
	        }
	      } else if (dir == "desc") {
	        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
	          // If so, mark as a switch and break the loop:
	          shouldSwitch= true;
	          break;
	        }
	      }
	    }
	    if (shouldSwitch) {
	      /* If a switch has been marked, make the switch
	      and mark that a switch has been done: */
	      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
	      switching = true;
	      // Each time a switch is done, increase this count by 1:
	      switchcount ++; 
	    } else {
	      /* If no switching has been done AND the direction is "asc",
	      set the direction to "desc" and run the while loop again. */
	      if (switchcount == 0 && dir == "asc") {
	        dir = "desc";
	        switching = true;
	      }
	    }
	  }
	}
