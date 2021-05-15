function navigationButtons() {
    var temp = ["Home"];
    var temp_1 = ["Clubs"];
    for (var x = 0; x < 20; x++) {
        temp_1.push("Club_" + (x+1));
    }
    temp.push(temp_1);
    temp.push(["Menu", "About us", "Profile", "Scores", "Your clubs", "Exit"])
    for (x in temp) {
        var span = document.createElement("span");
        document.getElementById("navigation").appendChild(span);
        if (typeof temp[x] == "object") {
            var span_1 = document.createElement("span");
            span_1.appendChild( document.createTextNode(temp[x][0]) );
            span.appendChild(span_1);
            var clubHolder = document.createElement("div");
            x = temp[x];
            function tempFunction() {
                if (this.section == "club") {
                    descriptions = clubDescriptions(this.clubIdNumber);
                } else if (this.section == "menu") {
                    descriptions = menuDescriptions(this.clubIdNumber);
                }
                var temp_1 = [], temp_2 = [];
                for (x in descriptions) {
                    if (x == "name") {
                        continue;
                    }
                    temp_1.push(x);
                    temp_2.push(descriptions[x]);
                }
                renderMainText(descriptions["name"], temp_1, temp_2);
            }
            for (y in x) {
                if (y != 0) {
                    var club = document.createElement("div");
                    club.appendChild( document.createTextNode(x[y]) );
                    club.clubIdNumber = y - 1;
                    clubHolder.appendChild(club);
                    club.value = y;
                    if (x[0] == "Clubs") {
                        club.section = "club";
                    } else {
                        club.section = "menu";
                    }
                    club.addEventListener("click", tempFunction);
                }
            }
            span.appendChild(clubHolder);
        } else {
            var span_1 = document.createElement("span");
            span_1.appendChild( document.createTextNode(temp[x]) );
            span.appendChild(span_1);
        }
    }
}
function renderMainText(title, temp_1, temp_2) {
    var h1 = document.createElement("h1");
    h1.appendChild( document.createTextNode( title ) );
    document.getElementById("mainPage").innerHTML = null;
    document.getElementById("mainPage").appendChild(h1);
    for (var x in temp_1) {
        var h2 = document.createElement("h2");
        h2.appendChild( document.createTextNode( temp_1[x] ) );

        var hr_1 = document.createElement("hr");

        var div = document.createElement("div");
        for (var y in temp_2[x]) {
            var p = document.createElement("p");
            p.appendChild( document.createTextNode(temp_2[x][y]) );
            div.appendChild(p);
        }

        document.getElementById("mainPage").appendChild(h2);
        document.getElementById("mainPage").appendChild(hr_1);
        document.getElementById("mainPage").appendChild(div);
        if (x != temp_1.length - 1) {
            var hr_2 = document.createElement("hr");
            document.getElementById("mainPage").appendChild(hr_2);
        }
    }
}
function clubDescriptions(value) {
    var clubDecription = {
        "name": ["Club_" + value],
        "description": ["Some text"],
        "members": ["There will be a file with members"],
        "socials": ["Socials will be provided"]
    }
    return clubDecription;
}
function menuDescriptions(value) {
    var clubDecription = {
        "name": ["Menu_Page_" + value],
        "description": ["Some text"],
        "members": ["There will be a file with members"],
        "socials": ["Socials will be provided"]
    }
    return clubDecription;
}

