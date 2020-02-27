# Deployed Website and Sample Password:

**Use this mock account for proper data and views**

Deployed Site:
Email: example@test.com
Password: Example123

# SmartHealth Website Summary:

This website is a user dashboard that one could log in and out off. The data being shown on the dashboard would be live API posts from your smart watch. This means the user can log in and see all their health stats.

# Why did we develope this?

1 and 5 Aamericans own some type of smart watch - wearing one is getting more and more popular. As this trend grows that data can mean a wide varity of things. Someone could have a heart condition and need to track their irregular beat. They can then bring this data in and show their doctor in real time - this could potentially help the doctor understand what the patient is going through and what the condition could be. Having more data than one run at the doctors office could be more beneficial and capture specific moments the patient felt their heart beating irregularaly. 

Another person may have a large fitness goal (loosing 20 pounds or competeing as a professional athlete at the CrossFit Games) and they want to track their every move. The dashboard can allow them to look at all data at a glance and really understand their preformance - including what they are lacking in and what they are exceding in. 
    
Overall, whatever number, goal, or data you want to track - you can. In real time, as your watch supplies it.

# Components Included and Functioning Now:

    1. Step Count
    2. Current Heart Rate
    3. Sleep Hour Count
    4. Activity Tracker
    5. Body Battery

# Database Information:

We've reached out to some companies to use their API for an example but have not gotten responses yet. Once we do we plan on connecting the API. For now all entries are stored in a Mongo DB and used as sample data.

Main Table = Users (storing simple user information)
Sub Tables = Tables are made for each working component in react then connected to the main table by forgein keys. 

# Future Development:

Overall we would like this dashboard to go above and beyond the apps that are provided by the company of smart watches. Most smart watch apps only show some limited data and rely on other third party applications to pick up other tasks such as meal tracking and activity tracking. Mixing utility and data would allow the user to not only view what they are doing but be able to write to-do's, track food, create workouts, and many more in one place. Some future compotents we are looking to add are:

    1. Daily, weekly, and monthly to-do list (tracking goals and tasks)
    2. Meal Tracker - tracking what you ate down to the macros or just simply a title (up to the user)
    3. Meal Planning - make a schedule of the meals you plan on eating that week and make it a simple view
    4. Daily, weekly, and monthly views so you can look at the data over time to understand trends
    5. Mentrual Cycle Tracker for Women
    6. Open Development - allowing other developers to create their own modules and submit. 

# How to Use it:

    1. Log in using sample log in information provided at top
    2. Use the toggles on the left side to show the data your intrested in

    <Insert Gif of working website when complete>

# Team <incognito/> Members with roles:

    - Ashley Wegwerth
    - Haylee Thomas-Kuhlmann
    - Ka Vang
    - Mai Xiong