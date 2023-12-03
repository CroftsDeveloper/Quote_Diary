# Quote Diary

## Table of Contents

- [Project Overview](#project-overview)
- [Design, Layout & Structure](#design-layout--structure)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Detailed Testing](#detailed-testing)
- [Problems and Resolutions](#problems-and-resolutions)
- [Deployment](#deployment)
- [Credits](#credits)

## Project Overview

### Purpose

Quote Diary is my web application that has been created for users to record and reflecting on inspirational quotes, designed for literature enthusiasts, journal keepers, and anyone that would like to store their daily inspiration of words. It is intended to be a simple web-app to focus on ease of use and minimal distractions.

### Target Audience

- Literature enthusiasts
- Reflective journal keepers
- General public (those interested in quotes)

## Design, Layout & Structure

### Colour Scheme

- I have gone for a simple dark and clean background. I chose this primarily because I did not want anything to stand out too much and take away from the core concept of the project, which is reflection of the quote itself, rather than the appearance of the project. 

### Fonts

- "Roboto" for its clarity and readability, enhancing the ease of reading quotes and notes.
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

## Detailed Testing

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



### Performance Testing

- **Process**: Google's Lighthouse was used to conduct tests, initially scoring around 60 for mobile.
- Screenshot: ![Lighthouse Screenshot - Desktop / Index ](https://ibb.co/6ZMxwwy)
- Screenshot: ![Lighthouse Screenshot - Desktop / Login](https://ibb.co/6ZMxwwy)
- Screenshot: ![Lighthouse Screenshot - Desktop / Signup](https://ibb.co/6ZMxwwy)
- Screenshot: ![Lighthouse Screenshot - Desktop / Dashboard](https://ibb.co/6ZMxwwy)

