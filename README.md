# Project 4: Festival Disparity
### *Visualizing Book More Women with D3.js*

### **About**
Major Music festivals have a gender inequality problem. Of all the acts booked, the majority of the artists and band members are male. The following is a representation of the data compiled by [Book More Women](https://www.bookmorewomen.com), comparing all-male acts with acts featuring at least one female or non-binary member.

### **The Project**
The purpose of this project was to learn the D3.js library, and I chose to do that with the data gathered by Book More Women, a site dedicated to awareness of gender inequality in major music festivals.

### **Goals**
- Learn the basics of D3.js
- Understand how to access and work with a dataset in D3
- Create an interactive visualization of the Book More Women data

### **Methodology**
D3 is a challenging and in-depth library that offers huge potential in creating data visualizations, but also creative visualizations as diverse as the engineer's imagination. I learned the basics by diving in to the Observable community and dissecting notebooks created by other data vis engineers. The tutorials by [Mike Bostock](https://observablehq.com/@d3/learn-d3?collection=@d3/learn-d3) and [Shirley Wu](https://observablehq.com/@sxywu/introduction-to-svg-and-d3-js) were especially helpful in breaking down D3 - and it's relationship to SVG - to a simple level, and then building off of that foundation. A lot of trial and error working within the Observable framework helped me work through my code step by step and see my changes live. The project was a challenging but very fun, and I'm excited to go even further into the world of D3 in the future.

### **Project Links**
* [Main Project - Hosted](https://chrisdavidspicer.github.io/p4-GraphMoreWomen/)
* [Main Project - Observable](https://observablehq.com/@chrisdavidspicer/the-music-festival-gender-problem)
* [Workspace 1](https://observablehq.com/d/9c8d4f9cecfd3f2e)
* [Workspace 2](https://observablehq.com/d/ba13a554ed8f30ab)

### **MVP Goals**
* Create a dataset based off the Book More Women data.
* Access the data using D3 methods.
* Initialize an SVG viewbox and enable D3 element selection.
* Map the data to points that appear in the SVG window.
* Initialize toggles that allow the user to interact with the data.
* Data reactively responds to user interaction.
* Add labels to correctly identify visualized elements
### **Stretch Goals**
* Change visual of datapoints - styled to be more visually pleasing and/or better represent the data.
* Animate the data with movement and transitions when a user interacts with the data.
* Attach labels to data to be able to animate as well.
* Build a hover function to further interaction with each datapoint.
* Explore further ways to utilize D3 functions to enrich the data.
* Build a scale, mapping the surfaces to hold the datapoints.
* Animate the scale movements according to the dataset mapped to its surface.
* Build out a site to host the data.
### **User Stories**
* As a user, I want to be able to -
    - Access the information on a one-page site.
    - Learn about the idea behind the project.
    - Understand what the data is and what it represents.
    - See the site populated by existing data.
    - Adjust the existing data and view those changes responsively.
    - See the information displayed in a variety of visualizations
         including charts, graphs, and unique data models.
    - Interact with the data in a way to understand it more clearly.
    - Click on data for more information, and/or to adjust/move/interact with it.

### **Daily Sprints**
* **Monday**
    - Readme work
        - User Stories
        - MVP
        - Stretch
        - Sprints
    - Set up Git Repo
    - Make simple bar chart comparing 1 male value, 1 female value, 1 year
    - Make chart for one fest with 3 years
    - Make a toggle between festivals
        - Add inputs for each festival
        - Add inputs for each year
    - Get data in correct format
        - Simple data (1 fest, 1 year)
        - One fest data (1 fest, 3 years)
        - All data (All fests, 3 years)
        - Emoji Data

* **Tuesday**
    - Readme work    
        - Wireframes
            - Decide on how many charts
                - 1 fest (Change over 3 years)
                - Choose fests ( 1 year)
                - All fests (1 year)
                - All fests (3 years)
                - Line charts
                - Scale
        - Description
    - Explore Line Charts to show change over time for each fest
        - Make one line chart for one fest that shows change year over year
        - make a chart that graphs every line as a different color
    - Make emojis the data points

* **Wednesday**
    - Get styling to work correctly
        - Axis in correct layout, labeling done correctly, padding, margin, ticks, effects
    - Animation
        - hover
        - chart growth Animation
        - transitions between toggled fests, years
    - Hit MVP

* **Thursday**
    - Make the scale
        - Scale holds stages
        - Plot surfaces to be stage surfaces
        - have emojis sit on stage surfaces
        - create transition of scale moving to correct position
        - label scales with percentages
        - animate emojis coming and going on fest / year toggle

* **Friday**
    - Explore own site hosting
        - React, Next.js, HTML?
    - Build out simple site to host data vis
        - Build out components
        - Make CSS styles
        - Plug in data

* **Saturday**
    - More work on Scale
    - More work on Scale styling and Animation
    - Cleaning up personal site

* **Sunday**
    - Make own site clean and easily navigable
    - Finalize animation and styling of scale

* **Monday**
    - Final project presentation prep
    - Project clean and organized, final commits

### **Wireframe**
![Wireframe - D3 Plot](/img/Wireframe-Plot.png)
![Miro Board - Sprint 1](/img/Miro-Sprint1.png)
![Miro Board - Sprint 2](/img/Miro-Sprint2.png)