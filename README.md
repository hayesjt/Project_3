# Deployed Website and Sample Password:

**Use this mock account for proper data and views**

Deployed Site:
Email: example@test.com
Password: Example123

# SmartHealth Website Summary:

This website is a user dashboard that one could log in and out off. The data being shown on the dashboard would be live API posts from your smartwatch. This means the user can log in and see all their health stats.

# Why did we develop this?

One in five Americans own some type of smartwatch and wearing one is getting more and more popular. As this trend grows, that data can mean a wide variety of things. For instance, someone could have a heart condition and need to track their irregular heartbeat. They can then bring this data in and show their doctor in real time, which could potentially help the doctor understand what the patient is going through and find a possible diagnosis. Having more data than one run at the doctor’s office could be more beneficial and capture specific moments that the patient felt their heart beating irregularly. 

Another person may have a large fitness goal (losing 20 pounds or competing as a professional athlete at the CrossFit Games) and want to track their every move. The dashboard can allow them to look at all data at a glance and really understand their performance including what they are lacking in and what they are exceeding in. 
    
Overall, whatever number, goal, or data you want to track, you can. In real time, as your watch supplies it.

# Components Included and Functioning Now:

    1. Step Count
    2. Current Heart Rate
    3. Calories Burned
    4. Activity Tracker
    5. Body Battery

# Database Information:

We've reached out to some companies to use their API and have only gotten access to Google Fit's API.  We plan on connecting with more smart watch API's. For now, entries are stored in a Mongo DB and used as sample data, along with Google Fit's API database.

Main Table = Users (storing simple user information).
Sub Tables = Tables are made for each working component in react then connected to the main table by forge in keys. 

# Future Development:

Overall, we would like this dashboard to go above and beyond the apps that are provided by the company of smartwatches. Most smartwatch apps only show limited data and rely on other third-party applications to pick up other tasks such as meal tracking and activity tracking. Mixing utility and data would allow the user to not only view what they are doing but also be able to write to-do's, track food, create workouts, and many more in one place. Some future components we are looking to add are:

    1. Daily, weekly, and monthly to-do list (tracking goals and tasks)
    2. Meal Tracker - tracking what you ate down to the macros or just simply a title (up to the user)
    3. Meal Planning - make a schedule of the meals you plan on eating that week and make it a simple view
    4. Daily, weekly, and monthly views so you can look at the data over time to understand trends
    5. Menstrual Cycle Tracker for Women
    6. Open development - allowing other developers to create their own modules and submit

# How to Use it:

    1. Log in using sample log in information provided at top.
    2. Use the toggles on the left side to show the data you're interested in.

<img src='dashboard/smartHealthGif.gif' />

# Colors/Patterns Used

    Blue/Green = rgb(91,140,133)
    Dark Blue = rgb(67,78,82)
    Dark Yellow = rgb(176,161,96)
    Light Yellow = rgb(236,206,109)
    Red Error = rgb(234,60,85)
    Hex Pattern = https://www.toptal.com/designers/subtlepatterns/gplay/

# Team <incognito/> Members with roles:

    - Ashley Wegwerth
    - Haylee Thomas-Kuhlmann
    - Ka Vang
    - Mai Xiong

# Link

Check out our site here: ['SmartHealth'](https://smartheath.herokuapp.com/dashboard)!