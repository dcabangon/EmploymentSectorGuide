# EmploymentSector Site

### PROJECT OVERVIEW

Due to the collapse of the economy brought upon by the pandemic, initial data gathered shows lack of workforce in various sectors. Thus, rebuilding and strengthening employment is paramount, and is now needed more than ever. 

The Employment Sector project aims to provide in-depth information about the employment count of Singapore. It can cater to the government as well as the job hunters. It would be beneficial for the government as its main goal is to organize the updated data to aid manpower allocation. Moreover, the job hunters could take advantage of this, as the application has its potential to be a job portal in the future. 

Given that data organization is its backbone, it would provide the user a systematized flow of information. Hence, giving them an opportunity to make better decisions for future endeavors.


### UI/UX





### FEATURES



### TECHNOLOGIES USED

* HTML
   * To build my web page

* CSS
   * To customize my html elements

* Javascript
   * I used javascript to control all the functionalities of my application, it is like the brain of my application
   * This is the main language I used to implement all the third part libraries I used
   * Some of the advance method of the script were used like forEach, array.map, etc
   * You may find the scripts [here](scripts)

* Visual Studio Code
   * IDE that I used for this project because it's easy to code here and easy to manage your files and data

### TEST CASES
<table>
   <tr>
      <th colspan=2>Home Page
   <tr>
   <tr>
      <th>
         <img width="441" height="1">
         <small>Action</small>
      </td>
      <th>
         <img width="441" height="1">
         <small>Expected Result</small>
      </td>
   <tr>
   <tr>
      <td>Click "Let's find a place to relax" button</td>
      <td>Redirects to "Maps" tab</td>
   <tr>
   <tr>
      <td>Click "Home" link</td>
      <td>Goes to "Home" page</td>
   <tr>
   <tr>
      <td>Click "Maps" link</td>
      <td>Goes to "Maps" page</td>
   <tr>
   <tr>
      <td>Click "About Me" link</td>
      <td>Goes to "About Me" page</td>
   <tr>
   <tr>
      <th colspan=2>Maps Page
   <tr>
   <tr>
      <th>
         <img width="441" height="1">
         <small>Action</small>
      </td>
      <th>
         <img width="441" height="1">
         <small>Expected Result</small>
      </td>
   <tr>
   <tr>
      <td>Click Zoom in/out buttons</td>
      <td>Map zooms in/out</td>
   <tr>
   <tr>
      <td>
         <img src="images/your-position.png">
         <p>Click this icon</p>
      </td>
      <td>Navigates to your current position</td>
   <tr>
   <tr>
      <td>
         <img src="images/overlays.png">
         <p>Hover to this icon</p>
      </td>
      <td>Shows taxi and weather checkboxes</td>
   <tr>
   <tr>
      <td>Click "Taxi Available" checkbox</td>
      <td>Shows all taxis available in Singapore</td>
   <tr>
   <tr>
      <td>Click "Check Weather" checkbox</td>
      <td>Shows all weather condition icons in Singapore</td>
   <tr>
   <tr>
      <td>Click a place under "Suggested Places"</td>
      <td>
         <ul>
            <li>Description modal pops up</li>
            <li>Navigates to the selected place</li>
         </ul>
      </td>
   <tr>
   <tr>
      <td>Click "MALLS" button</td>
      <td>Shows all malls in Singapore</td>
   <tr>
   <tr>
      <td>Search mall (after "MALLS" button is clicked)</td>
      <td>Shows all malls via search input</td>
   <tr>
   <tr>
      <td>Click "PARKS" button</td>
      <td>Shows all parks in Singapore</td>
   <tr>
   <tr>
      <td>Search park (after "PARKS" button is clicked)</td>
      <td>Shows all malls via search input</td>
   <tr>
   <tr>
      <th colspan=2>About Me Page
   <tr>
   <tr>
      <th>
         <img width="441" height="1">
         <small>Action</small>
      </td>
      <th>
         <img width="441" height="1">
         <small>Expected Result</small>
      </td>
   <tr>
   <tr>
      <td>Go to "About Me" page</td>
      <td>
         <ul>
            <li>Should see MY STORY content</li>
            <li>Should see Stress statistics chart with content</li>
            <li>Should see Journet to relaxation content</li>
            <li>Should see Quick guide content with image</li>
            <li>Should see footer quote</li>
         </ul>
      </td>
   <tr>
   <tr>
      <th colspan=2>Mobile size page
   <tr>
   <tr>
      <th>
         <img width="441" height="1">
         <small>Action</small>
      </td>
      <th>
         <img width="441" height="1">
         <small>Expected Result</small>
      </td>
   <tr>
   <tr>
      <td>
         <img src="images/home-page-mbl.png">
         <ol>
            <li>Adjust your screen to mobile size</li>
            <li>Go to home page</li>
         </ol>
      </td>
      <td>Should be able to adjust to mobile screen size</td>
   <tr>
   <tr>
      <td>
         <img src="images/maps-page-mbl.png">
         <ol>
            <li>Adjust your screen to mobile size</li>
            <li>Go to maps page</li>
         </ol>
      </td>
      <td>Should be able to adjust to mobile screen size</td>
   <tr>
   <tr>
      <td>
         <img src="images/about-me-page-mbl.png">
         <ol>
            <li>Adjust your screen to mobile size</li>
            <li>Go to about me page</li>
         </ol>
      </td>
      <td>Should be able to adjust to mobile screen size</td>
   <tr>
</table>

### PLATFORM USED

* Github for CI/CD
* Access live [Web Application](https://bladshed.github.io/Assignment-Project-1/) via Github
* To deploy my project to your local machine
   1. Go to [Assignment-Project-1](https://github.com/bladshed/Assignment-Project-1)
   2. Download my project repository
     > `gh repo clone bladshed/Assignment-Project-1`
* Dependencies used
   * Bootstrap (for my CSS)
      * I used bootstrap in my entire UI web application because it's super easy to manipulate html elements and they also provide basic element designs where I was able to save a lot time in designing like my buttons, navbar, etc.

   * Leaflet
      * I used leaflet for my maps (Maps tab), the reason why I chose Leaflet is because it is beginner friendly and the guides from their web page is not that complicated to understand. Also, this is the library that we used in all of our map lessons.

   * Apexcharts
      * I used only one chart just to show that I am able to use a third party chart library. You may find the chart in About me tab.

   * Google fonts and Font awesome
      * These two libraries were used for my fonts and icons. They have cool fonts and icons.

### CREDITS
* For my mall images 
   * [sg.hotels.com](https://sg.hotels.com/go/singapore/best-singapore-shopping-malls)
* For my park images 
   * [timeout.com](https://www.timeout.com/singapore/things-to-do/the-prettiest-parks-in-singapore)
* For my code snippets, tutorial, questions and saviour of all developers
   * [Google](https://www.google.com/)