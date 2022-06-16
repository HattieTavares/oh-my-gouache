# oh-my-gouache

This is an api cataloging popular gouache brands with all of their details in one convenient location. 

**Link to project:** https://oh-my-gouache.herokuapp.com/

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js, Express, MongoDB (in progress)

I started with a basic wireframe in HTML, CSS, and JavaScript just to get all the moving parts on the page. Then I set up my server with node and express and started adding the data directly into the file to get it started. I am currently in the process of moving all data to MongoDB and will be writing the api documentation so that others can access and use it as well.

## Optimizations

All of my API data was originally in my server file. After I got it all working I started transferring it to a database for storage instead. I had originally hard coded in the brands as well but once I learned how to get my drop down menus to populate from my api data, I changed that. So now when I add a new brand it will automatically add itself to the drop down rather than the extra step of coding it in to that as well.

## Lessons Learned:

I learned that I should get everything set up before I add a ton of data. A lot of details needed to be adjusted later and it was a lot of editing. I learned how to populate drop down menus from API data. I learned how to use MongoDB Compass to upload a json file of my data to my database.

## Future Plans:
- Add the ability to compare similar colors across brands
- Better filtering to find colors by opacity, added white, pigment content, lightfastness, etc
- Link to color swatches on original brand website
- Color harmony wheel