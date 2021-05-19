function navigationButtons(navigationItems) {
    for (x in navigationItems) {
        var span = document.createElement("span");
        document.getElementById("navigation").appendChild(span);
        if (x == 0) {
            span.addEventListener("click", function() {
                renderMainText(
                    "ATV Pulciņš",
                    [
                        "Description",
                        "What can you do?",
                        "FAQ",
                        "SOC"
                    ],
                    [
                        ["short description"],
                        ["Enjoy your time"],
                        ["question 1", "question answer"],
                        ["Discord: https://discord.gg/QcyK6HxR"]
                    ]
                );
            });
        }
        if (typeof navigationItems[x] == "object") {
            var span_1 = document.createElement("span");
            span_1.appendChild( document.createTextNode(navigationItems[x][0]) );
            span.appendChild(span_1);
            var clubHolder = document.createElement("div");
            x = navigationItems[x];
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
            span_1.appendChild( document.createTextNode(navigationItems[x]) );
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
