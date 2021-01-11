<h1>Important Information</h1>

<p><b>Extensions required for use:<br>

Tampermonkey or Greasemonkey (to enable script) https://www.tampermonkey.net/ (Navigation / Search Beta)<i>See below.</i><br>

Stylebot (to enable CSS edits) https://stylebot.dev/ (theme.css) <i>See below.</i>
</b>

<h2>Update Notes:</h2><br>
<b>01/11/2021</b> TNT ain't getting my coins for Premium, so I didn't know a new menu existed. It sits grossly, off-centered in the menu. You can hide it in your <b>Stylebot</b> CSS code by adding the following anywhere into the code:
<br> .nav-premium__2020 {display: none;}
<br>The Premium portal link can easily be changed in your <b>Tampermonkey</b> navigation script from <i>http://nc.neopets.com/membership/</i> to: <i>http://www.neopets.com/premium/</i>. Thanks Amy for helping fix this one!
<p>
<b>01/11/2021</b> There have been a number of requests for specific themes. I love the overwhelming support, but specific theme requests will become daunting at a certain point. That said, I will be creating new themes as inspiration strikes. <i>Rumor has it, Dr. Sloth really wants to use a dark theme...</i> Check back for updates!
<p>
 <h2>Read Me</h2>
<b>Navigation Notes:</b>
Original 2007 navigation links referenced. 
Inventory added to Shops for quick reference.
Bookmarks section added for convenience.
<p>
The script to inject the navigation works separately from the CSS changes. The <b>Navigation Script</b> can be used <i>without</i> changing the CSS/Theme of your pages, however it has been designed to work 
optimally with the CSS/Theme changes active.
<p>
The CSS changes have been created in such a way that the template has been completely customizable. If you have knowledge of coding and CSS from petpages and userlookups, this will be 
very easy to change. The CSS Themes also update a lot of small aesthetic changes that TNT missed when updating (padding, text colors, font-faces, etc.)
<p>
These files apply currently to what TNT has released from their mobile-friendly layout update. Any future changes from TNT to the site may require revisions to both this script and 
the style page.
<p>
Both of these updates act as aesthetic changes and are only meant to change the user experience of playing Neopets. These changes are not meant to alter the aspect of online gaming 
in any way apart from UX.
<p>
Search function has been added to the footer. Unfortunately, it will search Google, but you can select the site you'd like it to search. I intended to recreate the search function
of Neopets itself, but I was unable to, I suspect because of the way the results page is created (this is why I assume it's not working on the Beta as well).
<p>
The themes for this layout was designed to be aesthetically pleasing, Neopets related and simple.
 <i>The themes for this may alter the body backgrounds of custom layouts (petpages, userlookups, guilds, etc.). The design fix is to update your layout by adding <b>!important</b> to the end of your background code in your layout html.</i>

<b>Special thanks:</b>
<br>to Maya (sunbathr) for the inspiration
<br>to Robbie (rawbeee) for the base css to play with
<br>to the two friends who tested this code to ensure there were no missing parts
<br>the non-Neopets friend who helped guide me through coding my first script.

Many thanks to all of the friends who helped me through creating this, both with feedback on the design itself as well as the accessability updates.

If you have UX suggestions, I am happy to fix and update. Please send them to neopets-betafix@outlook.com and be as descriptive as you can! (Screenshots help too.)

<b>Final Note:</b>
It's been interesting to see the things that the devs at TNT have coded, purposely left out, and missed. There are so many tiny aesthetic changes that were required (font-face updates, padding updates, etc.). I started to list them all, but the CSS needs a complete overhaul. I don't intend to be disrespectful, but I had to add a lot of code to fix the fine details. If TNT reads this and would like to contact me, I would be <b>SO HAPPY</b> to help them fine tune the little things. We love this site and my codes have been created to help us continue to love it.

<b><i>These codes are specifically designed to change the aesthetics/UX of Neopets.com and in no way are intented to alter any specific advantages of gameplay. That said, please use at your own risk. Do not discuss script usage on Neopets. The current thoughts about aesthetic altering scripts with TNT are unknown.</i></b>

<h2>Installing the Theme</h2>
<p>
- Download Stylebot Extension (https://stylebot.dev/)
<br>- Stylebot > Options > New style
<br>- Enter url: <i>www.neopets.com</i>
 <br>- Copy & paste CSS into the body - <b>do not add style tags!</b>
 
 <h2>Installing the Navigation</h2>
 <p>
 - Download Tampermonkey Extension (https://www.tampermonkey.net/)
<br>- Tampermonkey > Dashboard > + (Add new script)
<br>- Copy & paste code into the body > save as new script
<br>- Alter HTML of links if you have included the bookmark option.
