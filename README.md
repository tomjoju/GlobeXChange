# GlobeXChange
Website built from ReactJS and Firebase for NUS Orbital 

<p style="color: red; font-weight: bold">>>>>>  gd2md-html alert:  ERRORs: 0; WARNINGs: 1; ALERTS: 0.</p>
<ul style="color: red; font-weight: bold"><li>See top comment block for details on ERRORs and WARNINGs. <li>In the converted Markdown or HTML, search for inline alerts that start with >>>>>  gd2md-html alert:  for specific instances that need correction.</ul>

<p style="color: red; font-weight: bold">Links to alert messages:</p>
<p style="color: red; font-weight: bold">>>>>> PLEASE check and correct alert issues and delete this message and the inline alerts.<hr></p>



# Milestone 3


# Team Name: Twenty-Six

Proposed Level of Achievement: **Project Gemini**

Tech Stack: **ReactJS, CSS, HTML, Firebase, Postman, Git**

Website Name: **GlobeXchange** - Your number one website for quick access to SEP-related matters.

**Website Link: https://orbital-f3793.web.app/**

Target Audience: **All prospective and past NUS SEP Students **

**<span style="text-decoration:underline;">Motivations</span>**

The exchange programme is a once in a lifetime opportunity for many students. It often leads to various concerns such as the hassle of preparing all necessary documents needed for getting a student visa and other formalities. Students often worry also about how they can best spend their time when they are overseas and being able to connect with students who have gone to the universities that they wish to attend. Students do not have any centralised platform to access all this information and they often have to toggle between multiple websites and apps. 

As such, it would be extremely beneficial to have one platform for students to access data on all the **formalities they need to complete** before leaving for their exchange, for that same platform to provide them with **travel advice** on as places to visit through reviews of former exchange students and to **connect with past exchange students** who have visited the university they wish to attend. Upon visiting a place, students will themselves be able to leave reviews for that given place.

**<span style="text-decoration:underline;">Aims</span>**



*   To create a platform where NUS students can help each other with all exchange-related queries. 
*   To create a platform directly connecting past exchange students to prospective exchange students.
*   To provide a single centralised platform for prospective exchange students to view all necessary information on travel requirements, reviews by former exchangers who will provide travel advice for the country they visit for their exchange programme and to connect with past exchange students who have gone to a particular university. 

**<span style="text-decoration:underline;">Scope of Project</span>**



1. **_Travel Requirements - _**Users should be able to locate the country that they will go on exchange and find all relevant information that they need. (This information will be taken from the NUS SEP Website)
2. **_Reviews - _** Users can view reviews to see possible places that they can go to visit. Additionally, they should be able post their own reviews to share their experiences.
3. **_Networking with users of a specific university _**- Users must be able to easily access user details of other users who have gone to a particular university. They can then contact them via email to gain answers to any further queries they may have or simply view their reviews.

**<span style="text-decoration:underline;">Features</span>**



1. **Backend**
*   All the countries with the relevant information have been added to the database
    *   countryImage: an image of the  country to be displayed on the home page as well as the country page
    *   countryLink: a link that leads to the information on travel documents, taken from the NUS SEP website
    *   countryName: the name of the country
    *   countryUpdateDate: the date that the information about the country was updated last
*   Some dummy users were added to the database, with the following information:
    *   Bio: User’s bio to be shown on his profile section and page
    *   createdAt: a date-time stamp  of when the user was created
    *   Email:  the email that the user used to sign up
    *   Handle: the handle of the user
    *   imageUrl: the profile picture of the user
    *   userId: a unique code of the user, provided by Firebase
    *   Telegram handle
    *   Instagram handle
    *   LinkedIn Profile
*   Some dummy reviews were added to the database,  with the following information:
    *   Body: the review itself
    *   City
    *   Country: this is to map the review to the country itself
    *   Place: the exact attraction/eatery that the user reviewed
    *   userHandle: to map to the review to the user who uploaded it
    *   userImage: the image of the user that is to be displayed beside the review
*   All the features (signing up, logging in, posting reviews, viewing country information were  implemented on the backend and tested using Postman. A user has to sign up before he has permission to post reviews about a place. Upon signing up, the user information gets uploaded to the database. When he is logged in, a review that a user posts gets uploaded to the database as well. 
*   The database was filled with all the universities that NUS participates in SEP with, and each university was assigned to a particular country. A feature was also implemented in the backend to view all the universities in a certain country, to later be displayed in the UI on each country’s page
2. **Front-end**
*   The “Sign Up” and “Log In” pages were both tested and implemented. 
*   Sanity checks are done to ensure the following:
    *   If the email ID provided while signing up is in the format of an email ID
    *   If the password provided matches with the password inputted in the ‘Confirm Password’ field
    *   If the handle provided by the user has been taken already
    *   If the correct credentials are provided while logging in
*   A ‘**Home Page**’ was also implemented. The home page displays all the countries that NUS offers overseas SEP to. A student simply has to click the country he wishes to view. Upon clicking that country, he will be redirected to the country’s page. A user does not have to be logged in to visit this page.
*   A ‘**Country Page**’, as aforementioned, was also implemented. The country page contains relevant information about the formalities that a student has to complete prior to his departure to that country. Once again, a user does not have to be logged in to do this.

    It has a ‘**Post Review**’ button that opens a dialog box where a user can key in reviews for a given place in that particular country. He simply has to key in the City, the name of the place, the review itself and the rating out of 5 which he can choose from stars. It also contains all the reviews that have been uploaded into the database. Sanity checks are in place to ensure that the reviews keyed in are valid, that all the necessary information has been provided and no field is left blank. Only a user that has an account and is logged in can do this. 


    On the right side of the country page will be a **section with the user’s profile information **(including his display picture, bio, user handle, the university he visited, date the account was created, insta handle, tele handle and LinkedIn profile). By pressing an edit profile button, the user can add/remove/edit any of the above details.


    Below that, there is a **section which displays all the universities **that NUS offers exchange to in that particular country. Upon clicking a particular university, the user will be directed to that university’s page

*   There is a ‘**University Page’** where the profiles of all the users who have attended that particular university are shown. Upon clicking a particular user, one will be directed to the user’s page, details of which are provided above. One does not have to be logged in to access these features.
*   Next, there is a ‘**User Page**’ where all the information about the user (Country he visited, university he went to, all the reviews posted by the user and all the information) are visible. A user who isn’t logged in is still able to view the profiles of other users. 
    *   This will allow prospective travellers to access previous users’ profiles, and contact them to ask them for more information about the university they attended.
*   When a user is not logged in, the navigation bar shows 3 buttons, a home button, a login button and a sign up button. Upon logging in, the navigation bar instead displays a home button and a button to go to the user’s own page. 

Screenshots of these features are all shown in the **annex** with **user stories**. 

**<span style="text-decoration:underline;">Timeline</span>**

<span style="text-decoration:underline;">Milestone 1</span>

By milestone 1, our group had finalised the structure and workflow of our website. We also came up with a HTML skeleton of our website, tested the logging in and signing up functionality on the backend, and started populating the database with dummy users and reviews.

<span style="text-decoration:underline;">Milestone 2</span>

By milestone 2, we had filled up information about all the countries NUS offers exchange to (including their pre-departure slides, a picture and the country name) into our database. We had also implemented and tested the posting review functions in the backend, and ensured they are linked to a given country. We also implemented a sign up and login page, the home page, and the country page which simply displays the information of the country and shows the reviews of places within a specific country.

<span style="text-decoration:underline;">Milestone 3</span>

By milestone 3, we added a user’s profile section on the right side of a country page, implemented the user page and the posting a review functionality. Following this, we also filled up the database with all the universities that NUS offers exchange to, linked them to a particular country and implemented this into the frontend such that each country displays their respective universities. We also implemented the university page for each university (showing users that have visited that university).  Lastly, we updated the styling of the pages to make them look more aesthetic. 

**<span style="text-decoration:underline;">Areas of Improvement</span>**



1. _Lagginess and long loading time_

We have noticed and received feedback that once in a while, our website takes a while to load. We do have a lot of information stored in our database and when each page is being loaded we are making multiple calls to our database to retrieve large amounts of information. The long loading time may be partly due to this. Also, due to a lack of time, we may not have used the best practices (for speed) when making our calls to Firebase. Our priority was to ensure the correct information is displayed on the webpage. That being said, this is definitely an area we can further explore and improve on.



2. _Inability to filter reviews_

The reviews in our Country Page cannot be filtered in any means and it, by default, shows the latest reviews first. Our mentor gave us an idea to filter it by the university attended by the user who posted it. This will allow users to very easily access reviews of places much closer to their universities. As of now, the user has to click on a university page and then click on any of the users who have attended a particular university to see their reviews. This takes much longer and may be very inconvenient. Due to a lack of time, we were unable to implement this feature. However, the ability to filter reviews will be a great way to improve our application. 

**<span style="text-decoration:underline;">Conclusion</span>**

These are all the features that we have implemented for GlobeXChange. As you can see, to access the core features of our website, our user does not need to create an account. However, one has to log in to post a review. This website works on the assumption that enough users will populate the database such that there will be ample reviews for each country and at least one user that a prospective exchange student can reach out to for any particular university. We hope our website will help prospective exchange students have a fruitful semester on exchange and gives a platform for past exchange students to provide direct guidance and assistance to those going on exchange.
