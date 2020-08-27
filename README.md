# GlobeXChange
Website built from ReactJS and Firebase for NUS Orbital 

## Team Name: Twenty-Six

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

1. **Travel Requirements -** Users should be able to locate the country that they will go on exchange and find all relevant information that they need. (This information will be taken from the NUS SEP Website)
2. **Reviews -** Users can view reviews to see possible places that they can go to visit. Additionally, they should be able post their own reviews to share their experiences.
3. **Networking with users of a specific university -** Users must be able to easily access user details of other users who have gone to a particular university. They can then contact them via email to gain answers to any further queries they may have or simply view their reviews. 

**<span style="text-decoration:underline;">Areas of Improvement</span>**

1. _Lagginess and long loading time_

We have noticed and received feedback that once in a while, our website takes a while to load. We do have a lot of information stored in our database and when each page is being loaded we are making multiple calls to our database to retrieve large amounts of information. The long loading time may be partly due to this. Also, due to a lack of time, we may not have used the best practices (for speed) when making our calls to Firebase. Our priority was to ensure the correct information is displayed on the webpage. That being said, this is definitely an area we can further explore and improve on.

2. _Inability to filter reviews_

The reviews in our Country Page cannot be filtered in any means and it, by default, shows the latest reviews first. Our mentor gave us an idea to filter it by the university attended by the user who posted it. This will allow users to very easily access reviews of places much closer to their universities. As of now, the user has to click on a university page and then click on any of the users who have attended a particular university to see their reviews. This takes much longer and may be very inconvenient. Due to a lack of time, we were unable to implement this feature. However, the ability to filter reviews will be a great way to improve our application. 

**<span style="text-decoration:underline;">Conclusion</span>**

These are all the features that we have implemented for GlobeXChange. As you can see, to access the core features of our website, our user does not need to create an account. However, one has to log in to post a review. This website works on the assumption that enough users will populate the database such that there will be ample reviews for each country and at least one user that a prospective exchange student can reach out to for any particular university. We hope our website will help prospective exchange students have a fruitful semester on exchange and gives a platform for past exchange students to provide direct guidance and assistance to those going on exchange.
