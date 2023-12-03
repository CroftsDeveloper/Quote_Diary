# Quote Diary [MVP]

## Table of Contents

- [Project Overview](#project-overview)
- [Design, Layout & Structure](#design-layout--structure)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Testing](#detailed-testing)
- [Problems and Resolutions](#problems-and-resolutions)
- [Deployment](#deployment)
- [Credits](#credits)

## Project Overview

#### Background

As an avid reader and somebody who is trying to work on self improvement, I often find quotes inspirational and am writing them down in my phone's Note's app. I have tried to find an online service to do this but there always seems to be a barrier in the way, such as lengthy signup process, linking accounts or multiple notifications or emails. I wanted to create something that had a low barrier of entry and a met its basic purpose. I did find a few online services that offer a simular process but they all seem to be extremely outdated, which indicated to me that they were made many years ago and are likely not maintained. This gave me confidence that I could implement a more modern approach.

### Purpose

Quote Diary is my web application that has been created for users to record and reflecting on inspirational quotes, designed for literature enthusiasts, journal keepers, and anyone that would like to store their daily inspiration of words. It is intended to be a simple web-app to focus on ease of use and minimal distractions.

### Target Audience

- Literature enthusiasts
- Reflective journal keepers
- General public (those interested in storage of quotes and ease of access with search functionality)

### User Stories 

#### User Story 1: User Registration

    Expected:
    Literature enthusiasts should be able to easily register for an account with a username and password. The registration process should be straightforward and not require lengthy information. After registration, users should be instantly logged in to their Quote Diary.

    Testing:
    Asked family and friends from the target audience to assess the registration process's ease and effectiveness. 

    Result:
    All reported that the process was simple and worked, however, that would require a forgot password feature for professional deployment

    Fix:
    No modifications were needed at this stage but would need to implement feature into future development

#### User Story 2: Adding of quotes for Reflective Journal Keepers

    Expected:
    Once registered, users should have immediate access to create, read, update and delete quotes

    Testing:
    Asked family and friends who journal to test the program 

    Result:
    Testers reported full functionality of CRUD

    Fix:
    No modifications were needed for registration, and it met the expectations

#### User Story 3: User Registration for the General Public

    Expected:
    After registration and quote inputs, users should be able to return to the quotes and search for their favorite ones with minimal hurdles

    Testing:
    Asked the same testers as US2 to test the search functionality

    Result:
    Search functionality worked as expected

    Fix:
    No modifications were needed at this time but noted that could improve it by favoriting options in the next development stage

## Design, Layout & Structure

### Colour Scheme

- I have gone for a simple dark and clean background. I chose this primarily because I did not want anything to stand out too much and take away from the core concept of the project, which is reflection of the quote itself, rather than the appearance of the project. This background may be seen as too dark for the project. This would be something I would consider at another stage of development in the future and I would like to implement different modes, such as dark or light. This will help customise the project to users wishes. I did not have the time to consider this at this stage. 

### Fonts

- "Roboto" for its clarity and readability, enhancing the ease of reading quotes. I wanted to avoid any 'tacky' font that I had seen on other online services.
- "sans-serif" as a backup

## Technologies Used

- Flask: Python framework for backend development.
- HTML5, CSS3, JavaScript: Frontend development.
- PostgreSQL / SQLAlchemy: Database handling.
- Git, GitHub: Version control and repository hosting.
- Heroku: Application deployment.

## Features

- User Authentication: Secure and personalised user experience.
- Quote Management: CRUD functionality, as well as search function to pinpoint quotes in a hurry.
- Responsive Design: Compatibility across various devices.

### Future Features

- I would need to implement a forgot password process as the functionality is lacking without it. If a user forgets their password then at this stage of development there is little that can be done to get back into the account. This would need to be addressed as a priority before any commercial release. I was unable to consider this during this development stage due to time constraints. 

- I would like to implement a functionality where users can favorite quotes and then list by favorites to help them navigate a large database of quotes. I was unable to consider this during this development stage due to time constraints. 

- I would like to implement a functionality where users can export their quote list to email to allow them to take their quote data anywhere. I was also unable to consider this duruing this development stage due to time constraints. 

## Testing

### Front-End Validation

#### HTML Validation
- **Process**: Utilised the W3C Markup Validation Service for each HTML file. Identified and corrected minor issues such as unclosed tags and missing alt attributes. Fixed by enhancing the semantic structure and accessibility, ensuring readability and cross-browser compatibility. WC3 validation is still showing false positives due to the presence of Jinja2

#### base.html Validation
- **Process**: Validated using an online HTML validator.
- Screenshot: ![base.html Validation Screenshot](https://ibb.co/ScHhhRS)

#### dashboard.html Validation
- **Process**: Validated using an online HTML validator.
- Screenshot: ![dashboard.html Validation Screenshot](https://ibb.co/nmMxDmr)

#### edit_quote_form.html Validation
- **Process**: Validated using an online HTML validator.
- Screenshot: ![edit_quote_form.html Validation Screenshot](https://ibb.co/2d3qcKJ)

#### index.html Validation
- **Process**: Validated using an online HTML validator.
- Screenshot: ![index.html Validation Screenshot](https://ibb.co/QbNj1tq)

#### login.html Validation
- **Process**: Validated using an online HTML validator.
- Screenshot: ![login.html Validation Screenshot](https://ibb.co/58hx3nz)

#### signup.html Validation
- **Process**: Validated using an online HTML validator.
- Screenshot: ![signup.html Validation Screenshot](https://ibb.co/6ZMxwwy)

#### CSS Validation
- **Process**: Employed the W3C CSS Validation Service. No errors presented. ![CSS Validation Screenshot](https://ibb.co/V2GyLZL)

### Accessibility Testing

- **Process**: Conducted automated scans with Axe.
- Screenshot: ![Ax tool screenshot ](https://ibb.co/G09pwj0)

### Performance Testing

- **Process**: Google's Lighthouse was used to conduct tests, initially scoring around 60 for mobile.
- Screenshot: ![Lighthouse Screenshot - Desktop / Index ](https://ibb.co/ZJWDxRn)
- Screenshot: ![Lighthouse Screenshot - Desktop / Login](https://ibb.co/4Kz6Fx6)
- Screenshot: ![Lighthouse Screenshot - Desktop / Signup](https://ibb.co/WF1HF9z)
- Screenshot: ![Lighthouse Screenshot - Desktop / Dashboard](https://ibb.co/jz1ySXF)

### Responsiveness / Device Testing

To ensure this MVP delivers a seamless experience across different devices, I adopted a systematic approach to device testing:

- **Manual Testing on Physical Devices:**  
  Initially, I began with hands-on testing using devices I had access to. This included a desktop monitor, a tablet, and android & apple smartphone models. This hands-on approach gave me a feel for the user experience. I noticed that the Bootstrap styling provided a good user experience and was reliable. 

  #### **Button Functionality Test**:

- **What I Expected**: When a user clicks on any button, it should promptly trigger the intended action without glitches. 
- **What I Did**: I tested this on every button avaliable on the website and they all work as intended. I stress tested this by clicking them multiple times.
- **Outcome**: All buttons were responsive and performed their designated functions without issue. Gathering feedback from family was important. They tested the application on their devices and reported no issues with the button functionality.

### Browser Compatibility

Quote Diary was tested on major browsers including Google Chrome, Firefox, Safari, and Microsoft Edge to ensure a uniform experience. My partner tested it on her devices using Chrome and Safari. No issues presented.

## Problems and Resolutions

Throughout the development, several bugs were encountered and promptly addressed. There was one major issue that severely impacted the development of this process (5):

**Intermittent Login Failures**:
   - **Problem**: I occasionally faced issues logging in. The page would not load and would crash browser
   - **Fix**: Optimised session management in Flask.
   - **Outcome**: Enhanced the reliability of the login process. There seems to be no issues with login at this time.

2. **Delayed Quote Loading**:
   - **Problem**: Slow loading of quotes. The higher the quote list grew, the loading of quotes was slower when refreshed
   - **Fix**: Reworked database query optimisation
   - **Outcome**: Improved speed and responsiveness in quote retrieval. There seems to be no issues with higher quote lists at this time.

3. **Responsive Layout Discrepancies**:
   - **Problem**: Layout issues on mobile devices.
   - **Fix**: Adjusted Boostrap and added CSS media queries and flexible layouts.
   - **Outcome**: Achieved a fluid and consistent layout across mobile devices. Boostrap seems to be implemented well.

4. **Database Migration Challenges**:
   - **Problem**: Issues during database schema updates during developmental phase
   - **Fix**: Manually edited migration script to push through the databse migration
   - **Outcome**: Database scheema seems to be working as intended.

5. **Secret Key / Database issues**:
   - **Problem**: One of the main issues that I had was releated to the project that I had started before this, which was a very simular idea. The issue that I faced was that I accidently pushed my secret key to GitHub, which was a security issue. I spent over 5 hours trying to fix the issue by watching online tutorials on how to roll back, however, the rollback did not seem to work. My database did not match up with the rollback which resulted in my having to completely scrap the project. This was my biggest issue during development, which resulted in me losing around 30 hours in total. 
   - **Fix**: I was unable to fix. 
   - **Outcome**: I had to re-start the project under a different name and repository, which is the project that you are viewing today. This is why my commits seem a lot less than expected. My original project codebase had around 20 commits at the stage of deletion. I carried over a lot of my personal code to this project to avoid having to start completely from scratch. This is why I have had less time than needed for the testing of the project in every aspect and I had to focus on an MVP of Quote Diary. During the next stage of development I would focus on revamping everything from the color schemes, to the testing,etc. 

## Deployment

### Heroku 

The app was deployed to Heroku. You can view the deployed version using the following steps:

1. Navigate to the main page of the app at [https://quote-diary-d98222c5c65a.herokuapp.com/](https://quote-diary-d98222c5c65a.herokuapp.com/).

### Forking the GitHub Repository

If you wish to contribute to this project, you can fork the repository. This means you'll have a copy of the repository in your GitHub account which can be edited without affecting the original project. Here's how you can fork the repository:

1. Log in to GitHub and navigate to the repository [https://github.com/CroftsDeveloper/Quote_Diary.git](https://github.com/CroftsDeveloper/Quote_Diary.git).
2. In the top-right corner of the page, click the "Fork" button.

### Cloning the GitHub Repository

If you wish to work on this project locally, you can clone the repository. Here's how:

1. Navigate to the desired location on your computer where you want to host the cloned repository.
2. Open your terminal or command prompt.
3. Type `git clone https://github.com/CroftsDeveloper/Quote_Diary.git` and press "Enter".
4. The project will be cloned to your local machine.

Ensure that you navigate into the correct directory before you start editing or view the files!

### Favicon

- I have downloaded and implemented a free Favicon from [favicon.io](https://favicon.io/emoji-favicons/bookmark)