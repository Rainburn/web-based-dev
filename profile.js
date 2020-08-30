function showMore() {

    var moreContacts, linkedin, instagram, steam;

    linkedin = "LinkedIn : <a href='https://www.linkedin.com/in/rafi-adyatma/' target='_blank'>Rafi Adyatma</a><br>";
    instagram = "Instagram : <a href='https://www.instagram.com/rafi.adyatma' target='_blank'>rafi.adyatma</a><br>";
    steam = "Steam : <a href='https://www.steamcommunity.com/id/skyxrna' target='_blank'>skyxrna</a>";

    moreContacts = linkedin + instagram + steam;

    document.getElementById("know-more").innerHTML = moreContacts;
    document.getElementById("showMode").innerHTML = "<button id='see-more-btn' onclick='showFewer()'>See Fewer</button>";
}

function showFewer() {
    document.getElementById("know-more").innerHTML = "";
    document.getElementById("showMode").innerHTML = "<button id='see-more-btn' onclick='showMore()'>See More</button>";   
}

