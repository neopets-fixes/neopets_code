// ==UserScript==
// @name         Neopets: Nav Bar / Search Beta (Bookmarks)
// @version      2.0
// @description  Adds Custom Nav and Google Search to Page
// @author       neopets-fixes
// @match        http://www.neopets.com/*
// @require      http://code.jquery.com/jquery-latest.js
// @run-at       document-start
// @grant        GM.addStyle
// @grant        GM_addStyle

// ==/UserScript==

(function() {

if (typeof GM_addStyle == "undefined") GM_addStyle = GM.addStyle; //Access the GM_addStyle function from any script injector
var id = ("custom_nav_main" + Math.floor(Math.random() * 100000));

    //Style for the custom div element, or anything else for that matter!
    GM_addStyle(`
#custom_nav_main {
	position:fixed;
	top:0px;
	z-index: 999 !important;
	white-space: nowrap;
	background: black;
	border: none;
	padding-top: 2px;
	width: 165px;
	height: 70px;
	border-radius: 0px 0px 15px 15px;
}

#custom_nav_main img {
	margin-top: 10px;
	background: none;
}

#custom_nav_main li.main_drop {
	display: inline;
}

#custom_nav_main li.main_drop:hover ul.dropdown {
	display: block;
}

#custom_nav_main li ul li {
	margin: 0px 0px;
	padding: 0px;
}

#custom_nav_main ul.dropdown, #custom_nav_sub ul.dropdown {
	width: 165px;
	border: none;
	z-index: 2;
	top: 54px;
	display: none;
	clear: left;
	background: black;
	padding: 15px 0px 0px 0px;
	list-style: none;
	margin: 0px 0px 0px 0px;
	text-align: center;
	border-radius: 0px 0px 15px 15px;
}

#custom_nav_main ul.dropdown a, #custom_nav_sub ul.dropdown a {
	padding-top: 10px;
	padding-bottom: 10px;
	font-family: "MuseoSansRounded700", 'Arial', sans-serif;
	font-size: 10pt;
	color: white;
	text-decoration: none;
	text-align: center;
	display: block;
}

#custom_nav_main ul.dropdown a:hover, #custom_nav_sub ul.dropdown a:hover {
font-weight: bold;
	color: #e6b81a;
}

#custom_nav_sub {
	white-space: nowrap;
	margin-left: 0px;
	background-position: center top;
	border: 0px black solid;
	margin: 0px auto;
	padding: 0px;
	width: 165px;
}

#custom_nav_sub img {
	float: left;
	height: 38px;
}

#custom_nav_sub li.sub_drop {
	display: block;
}

#custom_nav_sub li.sub_drop:hover ul.dropdown2 {
	display: block;
	margin-left: 150px;
	margin-top: -36px;
	text-align: center;
}

#custom_nav_sub li ul li {
	margin: 0px 0px;
	padding: 0px;
}

#custom_nav_sub ul.dropdown2 {
	z-index: 2;
	margin-top: -33px;
	display: none;
	clear: left;
	background: black;
	padding: 0px 0px 0px 0px;
	list-style: none;
	text-align: center;
	margin-left: 150px;
	border-radius: 0px 15px 15px 15px;
}

#custom_nav_sub ul.dropdown2 a {
	padding-top: 10px;
	padding-bottom: 10px;
	width: 170px;
	display: block;
	text-decoration: none;
	color: white;
	text-align: center;
}

#custom_nav_sub ul.dropdown2 a:hover {
	font-weight: bold;
	color: #e6b81a;
}

#searchbar {
border: 1px solid #cfcfcf;
  background-image: url("https://i.imgur.com/1BtMc3Z.png");
  border-radius: 15px;
padding: 20px;

width:250px;
overflow: none;
    text-align:left;
}
    `);

    document.addEventListener("DOMContentLoaded", function () {

        //Add a div element to the page
        var html_add = `<div id="custom_nav_main">

<li class="main_drop">

<center><a href="http://www.neopets.com"><img src="http://i.imgur.com/AZ7TGNw.png"></a></center>

<ul class="dropdown" style="position: absolute;"><ul id="custom_nav_sub" style="position: relative;"><li class="sub_drop">
<a href="/myaccount.phtml">My Account</a>
<ul class="dropdown2" style="position: absolute;">
	<li><a href="/myaccount.phtml" style="border-radius: 0px 15px 0px 0px;">Control Panel</a></li>
	<li><a href="/preferences.phtml">Preferences</a></li>
  	<li><a href="/userinfo.phtml">Edit Profile</a></li>
   	<li><a href="/neomessages.phtml">Neomail</a></li>
   	<li><a href="/neofriends.phtml">Neofriends</a></li>
   	<li><a href="/addpet.phtml">Create a Neopet</a></li>
	<li><a href="/space/warehouse/prizecodes.phtml" style="border-radius: 0px 0px 15px 15px;">Redeem Code</a></li>
</ul></li>

<li class="sub_drop">
<a href="/customise/">Customise</a>
<ul class="dropdown2" style="position: absolute;"><li><a href="/customise/classic.phtml" style="border-radius: 0px 15px 0px 0px;">Customise Neopet</a></li>
	<li><a href="/closet.phtml">Closet</a></li>
	<li><a href="/neohome/">Neohomes</a></li>
	<li><a href="/addpet.phtml">Create a Neopet</a></li>
	<li><a href="/pound/" style="border-radius: 0px 0px 15px 15px;">Pound</a></li>
</ul></li>

<li class="sub_drop">
<a href="/games/">Games</a>
<ul class="dropdown2" style="position: absolute;"><li><a href="/games/" style="border-radius: 0px 15px 0px 0px;">Games Room</a></li>
	<li><a href="/games/category.phtml?sortby=pop">Popular</a></li>
	<li><a href="/games/hiscores.phtml">High Scores</a></li>
	<li><a href="/games/favourites.phtml" style="border-radius: 0px 0px 15px 15px;">Favourites</a></li>
</ul></li>

<li class="sub_drop">
<a href="/explore.phtml">Explore</a>
<ul class="dropdown2" style="position: absolute;"><li><a href="/explore.phtml" style="border-radius: 0px 15px 0px 0px;">Map of Neopia</a></li>
	<li><a href="/help/tutorial/index.phtml">Tutorial</a></li>
	<li><a href="/neopedia.phtml">Neopedia</a></li>
	<li><a href="/petcentral.phtml">Pet Central</a></li>
	<li><a href="/calendar.phtml" style="border-radius: 0px 0px 15px 15px;">Calendar</a></li>
</ul></li>

<li class="sub_drop">
<a href="/nf.phtml">News</a>
<ul class="dropdown2" style="position: absolute;"><li><a href="/nf.phtml" style="border-radius: 0px 15px 0px 0px;">New Features</a></li>
	<li><a href="/comingsoon.phtml">Coming Soon</a></li>
  	<li><a href="/ntimes/index.phtml">Neopian Times</a></li>
	<li><a href="/stuff.phtml" style="border-radius: 0px 0px 15px 15px;">Merch News</a></li>
</ul></li>


<li class="sub_drop">
<a href="/community/index.phtml">Community</a>
<ul class="dropdown2" style="position: absolute;"><li><a href="/community/index.phtml" style="border-radius: 0px 15px 0px 0px;">Hub</a></li>
	<li><a href="/neoboards/index.phtml">Neoboards</a></li>
	<li><a href="/contests.phtml">Spotlights</a></li>
	<li><a href="/guilds/index.phtml" style="border-radius: 0px 0px 15px 15px;">Guilds</a></li>
</ul></li>

<li class="sub_drop">
<a href="/objects.phtml">Shops</a>
<ul class="dropdown2" style="position: absolute;"><li><a href="/objects.phtml" style="border-radius: 0px 15px 0px 0px;">Neopia Central</a></li>
	<li><a href="/market.phtml?type=wizard">Shop Wizard</a></li>
	<li><a href="/market.phtml?type=your">Your Shop</a></li>
	<li><a href="/inventory.phtml">Inventory</a></li>
	<li><a href="/auctions.phtml">Auctions</a></li>
	<li><a href="/island/tradingpost.phtml">Trading Post</a></li>
	<li><a href="/bank.phtml">Bank</a></li>
        <li><a href="/shopping/index.phtml" style="border-radius: 0px 0px 15px 15px;">Merchandise</a></li>
    </ul></li>

<li class="sub_drop">
<a href="/mall/index.phtml">NC Mall</a>
	<ul class="dropdown2" style="position: absolute;"><li><a href="/mall/index.phtml" style="border-radius: 0px 15px 0px 0px;">Shop</a></li>
	<li><a href="http://nc.neopets.com/get-nickcash">Get NC</a></li>
	<li><a href="http://nc.neopets.com/transactionlog/" style="border-radius: 0px 0px 15px 15px;">Transaction Log</a></li>
</ul></li>

<li class="sub_drop">
<a href="/inventory.phtml">Bookmarks</a>
	<ul class="dropdown2" style="position: absolute;"><li><a href="" style="border-radius: 0px 15px 0px 0px;">Bookmark 1</a></li>
	<li><a href="">Bookmark 2</a></li>
	<li><a href="http://sunnyneo.com/dailies.php" style="border-radius: 0px 0px 15px 15px;" title="Add additional links above this one" target="_blank">Dailies</a></li>
</ul></li>

<li class="sub_drop">
<a href="http://nc.neopets.com/membership/" style="border-radius: 0px 0px 0px 15px; padding-bottom: 15px;">Premium</a>
<ul class="dropdown2" style="position: absolute; border-radius: 0px 15px 15px 0px; margin-left: 150px; margin-top: -40px;padding-bottom: 5px;">
	<li><a href="http://nc.neopets.com/membership/" style="border-radius: 0px 15px 15px 0px;">Become a Member</a></li>
  </ul></li>

</ul></ul></li></ul>

`;

$(".nav-logo__2020").append(html_add);

        });
})();

function addSearch() {
  var html_add = `<p> <p> <center><div id="searchbar"><form action="https://www.google.com/search" class="searchform" method="get" name="searchform" target="_blank" class="form">
<input name="sitesearch" type="hidden">
<input autocomplete="on" class="form-control search" name="q" placeholder="Search" required="required"  type="text">
<button class="button" type="submit">Search</button><br>
<input type="radio"  name="sitesearch" value="neopets.com" checked />Neopets
<input type="radio"  name="sitesearch" value="jellyneo.net"  /> JellyNeo<br />
</form>
</div></center>
`;
  $(".footer-copyright__2020").append(html_add);
 }
document.addEventListener('DOMContentLoaded', addSearch);