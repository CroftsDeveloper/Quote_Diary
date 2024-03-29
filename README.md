# Quote Diary [MVP]

### Table of Contents

- [Project Overview](#project-overview)
- [UX](#ux)
  - [Strategy](#strategy)
    - [User Stories](#user-stories)
    - [Design Decisions](#design-decisions)
  - [Wireframes](#wireframes)
- [Features and Functionalities](#features-and-functionalities)
- [Database Model](#database-model)
- [Technologies Used](#technologies-used)
  - [Languages](#languages)
  - [Frameworks & Libraries](#frameworks--libraries)
  - [Tools & Services](#tools--services)
  - [Future Features](#future-features)
- [Testing](#testing)
  - [Key Features and Scenarios Tested](#key-features-and-scenarios-tested)
  - [Database Connectivity and Integrity Verification](#database-connectivity-and-integrity-verification)
  - [User Authentication](#user-authentication)
  - [Quote Management](#quote-management)
  - [Navigation and Responsiveness](#navigation-and-responsiveness)
  - [Security and Data Handling](#security-and-data-handling)
  - [Problems and Resolutions](#problems-and-resolutions)
  - [Performance Checks](#performance-checks)
    - [HTML Validation](#html-validation)
    - [CSS Validation](#css-validation)
    - [JavaScript Validation](#javascript-validation)
    - [Lighthouse Performance Checks](#lighthouse-performance-checks)
- [Deployment](#deployment)
  - [Quote Diary Project Structure](#quote-diary-project-structure)
  - [Development (Running Locally)](#development-running-locally)
  - [Live Deployment (Heroku)](#live-deployment-heroku)
- [Security Measures](#security-measures)
- [Credits](#credits)
- [Contributions](#contributions)

# Project Overview

Being an avid reader who is dedicated to self-improvement, quotes have always provided me with inspiration. I usually write them down in my phone's Notes app in case I need them later, however, I would prefer if there was a user-friendly web platform available for this. 

Existing services frequently result in a laborious registration process, require linking accounts, or likely spam users with emails and messages. My objective was to create a system that accomplishes its primary objective and offers a quick and seamless user interface with few obstacles to access.

Here are the deployed links :

**GitHub Repository:** [Link](https://github.com/CroftsDeveloper/Quote_Diary.git)

**Heroku Deployment:** [Link](https://quote-diary-d98222c5c65a.herokuapp.com/)

# UX

## Strategy

Here are the User Stories that I set out to meet and the outcome upon finalised MVP :

## User Stories

| User Stories | Fulfillment |
| ------------ | ----------- |
| **User Registration**: "As a user of the Quote Diary, I want to easily register for an account with a username and password, so that I can quickly access and use my Quote Diary." | My project provides a straightforward registration process where users can sign up with a username and password, ensuring easy access to Quote Diary. This will be improved in future development |
| **Quote Management**: "As a user who is interested in reflective journal keeping, I want to have immediate access to create, read, update, and delete quotes, so that I can efficiently manage my collection within my Quote Diary." | My project allows users to create, read, update, and delete quotes, providing full CRUD functionality for efficient management of quote collections. This will be improved in future development. |
| **Navigation and Search Capability**: "As a user of the Quote Diary, I want to be able to navigate back to my quotes easily and search for specific ones, so that I can efficiently find and reference quotes whenever needed." | My project ensures easy navigation for users to access their quotes and includes a search functionality for quick retrieval of specific quotes, enhancing user experience. |
| **Mobile-Friendly Viewing**: "As a user of the Quote Diary, I want the platform to be optimised for viewing on mobile devices, ensuring that the layout and functionality remain intact and user-friendly on smaller screens." | My project is designed to be responsive, providing an optimal viewing and interaction experience across various devices, including tablets, desktop computers, and mobile devices. This ensures that users can access and use the Quote Diary seamlessly on any device. |

## Design Decisions

In order to ensure optimal viewing and interaction across a variety of devices, including tablets, desktop computers, and mobile devices, the website was created with an easy-to-use but responsive structure. Here is some further information that highlights my design decisions :

## Wireframes

Below are the wireframes designed for my key pages, illustrating the planned layout and user flow :

| Page               | Wireframe Link       |
|--------------------|----------------------|
| Index (initial landing page)            | [Wireframe](https://www.dropbox.com/scl/fi/6497mrfnddrfuxstelnld/index.jpg?rlkey=4hbppzcyqb8b1m6al89rl9ut7&dl=0)            |
| Signup           | [Wireframe](https://www.dropbox.com/scl/fi/uu20y7gb0slr8j34cxqp2/signup.jpg?rlkey=wx206v394p7g2v9n974g3bk1y&dl=0)            |
| Login              | [Wireframe](https://www.dropbox.com/scl/fi/duopxham7vm044gvcuk9h/login.jpg?rlkey=hvt1ak46jucfz22gpyvqf63xc&dl=0)            |
| Dashboard  | [Wireframe](https://www.dropbox.com/scl/fi/xxzrke5mgkwz7glbqf9fn/dashboard.jpg?rlkey=dyznaw9drw8pxvbtwybdlrpya&dl=0)  
| Edit Quote           | [Wireframe](https://www.dropbox.com/scl/fi/60r4fwzdateqsihm7s3ag/edit_quote.jpg?rlkey=lbqmnkfjfsmtbm9aq0ujuaoe7&dl=0)            |       |

## Features and Functionalities

- **User Registration**: Users can easily register for an account on the Quote Diary platform, providing them with personalised access to create a diary of their favorite quotes.
  
- **Convenient Login**: Once registered, users can conveniently log in to the platform using their credentials, ensuring seamless access to their personalised quote collection.

- **Quote Management**: Users have the ability to add their favorite quotes to their list within the platform. This feature allows for easy access and reference to them for future inspiration, or reflection.
 
- **Efficient Search Functionality**: The platform includes a search feature that enables users to quickly find specific quotes by keyword, enhancing user experience and saving time.

- **Secure Logout**: Users can securely log out of the platform at any time, ensuring the privacy and security of their account information and personal data.

## Scope

- **Skeleton**: The layout design prioritised simplicity and intuitive navigation, with a responsive design ensuring accessibility across various devices. The platform was designed to be navigable for users with disabilities, adhering to WCAG guidelines for accessibility.
- **Structure**: I organised the website layout to reduce clutter and make it easier for users to find what they're looking for. I chose a simple dark and clean background. I chose this primarily because I did not want anything to stand out too much and take away from the core concept of the project, which is reflection of the quote itself, rather than the appearance of the project. I relied heavily on Boostrap for this. This background may be seen as too dark for the project. This would be something I would consider at another stage of development in the future and I would like to implement different modes, such as dark or light. This will help customise the project to users wishes. **I did not have the time to consider this at this stage of the MVP**

## Fonts

- **"Roboto"** for its clarity and readability, enhancing the ease of reading quotes. I wanted to avoid any 'tacky' hard to read font that I had seen on other online services.
- **"sans-serif"** as a backup font

## User Flow

| Page                   | Description                                                                                                                                   | Desktop | Mobile |
|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|---------|--------|
| Index (landing page)   | A user navigates to the landing page which includes various calls to action to help the user navigate through the platform. | [View](https://www.dropbox.com/scl/fi/uszkzw8qhx21wwzqhh9zi/Index.JPG?rlkey=ozw40656p6di46trganiq6fsr&dl=0) | [View](https://www.dropbox.com/scl/fi/qy0suww2jwk9p9a3idzwb/Index-Mobile.JPG?rlkey=xf6afbdn6gvdcv0tjguuwbj0z&dl=0) |
| Signup                 | If user is not registered, they can navigate to Signup page to complete the registration form.                               | [View's](https://www.dropbox.com/scl/fi/q2kt3cuvm5l8e6mjrbgkp/Signup.JPG?rlkey=e5byd0mlfyjl0fmwfbh8578ri&dl=0) & [Signup confirmation](https://www.dropbox.com/scl/fi/qws3pbcnt9yai3c8pnx5g/Signup-Account-Created.JPG?rlkey=ge0z16i88o01wc7atkgjr01t4&dl=0) | [View](https://www.dropbox.com/scl/fi/406zh8wyich9bme80beuo/Signup-Mobile.JPG?rlkey=bz0zotasvariyvsd4k2ty9706&dl=0) |
| Login                  | Once they are registered, users can log in to their accounts.                                                                                                  | [View](https://www.dropbox.com/scl/fi/704pmuiq7w54ztxfq7pcp/Login.JPG?rlkey=v1a5vh6eb3xgw3y7cn9uhhhtm&dl=0) | [View](https://www.dropbox.com/scl/fi/4r9d04yn0qyclnxmkdk37/Login-Mobile.JPG?rlkey=gma6hlemuu2dhduio029u7d2x&dl=0) |
| Dashboard              | Once logged in, users can create, read, edit, search, and delete their own personal collection of quotes, as intended. | [View](https://www.dropbox.com/scl/fi/7io8wnyoeh3cj0l95nh9a/Dashboard.JPG?rlkey=p3zkpn0fzymv0r3xytknyp5hy&dl=0) | [View](https://www.dropbox.com/scl/fi/pqxjydjyeobrzr1z2b52n/Dashboard-Mobile.JPG?rlkey=sow6o1gwq1tlbyhk19j9ixl66&dl=0) |

## Database Model

This section provides an overview of the database schema used in the Quote Diary project, detailing the models, their attributes, relationships, and specific functionalities provided by Flask extensions like `Flask-Login`.

### Entities and Relationships

#### `User` Model

The `User` model is for managing user information and authentication within the application.

- **Attributes**:
  - `id`: Integer, Primary Key. Uniquely identifies each user.
  - `username`: String(100), Unique, Not Nullable. Represents the user's chosen username.
  - `password`: String(200), Not Nullable. Stores the user's hashed password for security purposes.

- **Relationships**:
  - `quotes`: Establishes a one-to-many relationship with the `Quote` model. This link indicates that a single user can create and own multiple quotes. Defined by `db.relationship`, it facilitates easy access to a user's quotes through the `author` back reference.

Utilising `UserMixin` from `Flask-Login` enriches the `User` model with properties and methods necessary for authentication and session management, such as `is_authenticated` and `get_id`.

#### `Quote` Model

The `Quote` model stores the individual quotes added by users, linking them back to their authors.

- **Attributes**:
  - `id`: Integer, Primary Key. A unique identifier for each quote.
  - `content`: Text, Not Nullable. The actual text of the quote.
  - `author_name`: String(100), Optional. The name of the quote's author, if provided by the user.
  - `author_id`: Integer, Foreign Key to `User.id`, Not Nullable. Establishes ownership of the quote by linking it to a specific user.
  - `created_at`: DateTime, Default to current UTC datetime. Records when the quote was added.
  - `updated_at`: DateTime, Automatically updated on quote modification. Tracks when the quote was last updated.

- **Relationships**:
  - Belongs to the `User` model. Each quote is associated with a single user, identified through the `author_id` foreign key. The `author` back reference in the `User` model facilitates this connection.

### Design Rationale

The design of the database schema minimises redundancy by following normalisation principles, which ensure effective data management and integrity. Clear separation of quote storage from user management and the relationship definitions allow for robust functionality that is specific to the needs of the application.

### Schema Visualisation

```plaintext
User Model:
+-----------+-------------+-----------------------------------+
| Field     | Data Type   | Description                       |
+-----------+-------------+-----------------------------------+
| ID        | Integer     | Primary Key (PK)                  |
| Username  | String(100) | Unique username for the user      |
| Password  | String(200) | Hashed password for user security |
+-----------+-------------+-----------------------------------+

Quote Model:
+-------------+------------------+-------------------------------------------------+
| Field       | Data Type        | Description                                     |
+-------------+------------------+-------------------------------------------------+
| ID          | Integer          | Primary Key (PK)                                |
| Content     | Text             | Text content of the quote                       |
| Author Name | String(100)      | Optional author name of the quote               |
| Author ID   | Integer          | Foreign Key (FK) references User.ID             |
| Created At  | DateTime         | Timestamp when quote was created, default UTC   |
| Updated At  | DateTime         | Timestamp when quote was last updated           |
+-------------+------------------+-------------------------------------------------+

```
Relationships:
- Each `User` can have multiple `Quotes`. (One-to-Many relationship)
- `Author ID` in `Quote` model links to `ID` in `User` model, establishing ownership.

# Technologies Used

The combination of the following technologies provides a robust platform for QuoteDiary, from user interface design to database management and deployment :

### Languages

- **Python**: The primary language used, Python powers the back-end logic, including routing, request handling, and database operations.
- **HTML**: Structures the content of the web application, forming the foundation of the web pages.
- **CSS**: Provides styling to the web pages to improve aesthetics and user experience.
- **JavaScript**: Used minimally to enhance interactivity and user experience on the web front-end.

### Frameworks & libraries

- **Flask**: A micro web framework written in Python, used for serving the application, routing, and handling requests.
- **Flask Extensions**:
  - **Flask-SQLAlchemy**: ORM (Object-Relational Mapping) library for Flask to interact with the database.
  - **Flask-Migrate**: Handles SQLAlchemy database migrations for Flask applications.
  - **Flask-Login**: Manages user authentication and session management.
  - **Flask-WTF**: Integrates WTForms for form handling, including validation and rendering.
  - **Flask-Bcrypt**: Provides hashing utilities for securing passwords.
- **SQLAlchemy**: ORM library for database interactions, abstracting SQL expressions.
- **PostgreSQL**: The primary relational database used, especially in deployment to Heroku, for storing and managing application data.
- **SQLite**: Used as a fallback or during development for local database testing.
- **Gunicorn**: A Python WSGI HTTP Server for UNIX, serving as the interface between the web server and web applications.
- **Jinja2**: A modern and designer-friendly templating language for Python, utilised in generating HTML from templates.
- **Heroku**: A cloud platform as a service (PaaS) used to deploy, manage, and scale the web application.

### Tools & Services

- **Visual Studio Code**: I chose Visual Studio Code as my development environment (IDE) for writing and editing my Flask application's code. Its extensive support for Python and Flask made it an ideal choice for my development needs.

- **Git**: I used Git as the version control system to track changes in the source code throughout the development of this project. It enabled efficient code management, ensuring that every modification was documented and reversible.

- **GitHub**: My project's code repository is hosted on GitHub, which provided me with robust version control and collaboration features.

- **Heroku**: I deployed and ran my application on Heroku, a cloud platform that simplified the deployment process. Heroku's ease of use allowed my application to be accessible via the web without the need to manage servers, making it an excellent choice for hosting.

- **SQLite/PostgreSQL**: During local development, I used SQLite because of its simplicity and zero configuration requirement, making it perfect for development environments. For the production environment, especially on Heroku, I switched to PostgreSQL database provided by CodeInstitute to avoid being charged for the Heroku default database.

- **Flask**: The core of my application was built using Flask, a micro web framework written in Python. Flask provided me with the necessary tools and libraries to build a web application.

- **Flask Extensions**: To enhance my application, I employed various Flask extensions. For example : Flask-SQLAlchemy was used for database interactions, Flask-Migrate for handling database migrations, Flask-Login for managing user sessions, and Flask-WTF for form handling and validation. The full list of extensions can be found in the projects **requirements.txt**

### Future Features

- **Password Recovery**: To account for the times that a user forgets their password, a password recovery mechanism will be introduced to enable them to retrieve access to their accounts. My list of priorities for future development starts with this.

- **Amin Features / Panel**: An important next step is going to be to implement an admin panel. Administrators will soon be able to oversee user accounts. This panel will act as a central oversight point, guaranteeing the platform's quality and integrity and offering the means to promptly handle user requests and content problems.

- **Favorites System**: I had planned to include a feature that lets users favourite quotes. This would improve the user experience by making it easier for users to browse through a sisable collection of quotes by sorting them according to their favourites. This will be implemented in future development

- **Export Quotes to Email**: There were plans to introduce a tool that allows users to export the quote list to email, giving them the freedom to send their quote data outside of the platform. Time constraints prevented this feature from being considered during the present development stage, but it will still be a priority for updates in the future.

- **Quote of the Day**: A feature to provide users with a daily quote for inspiration is also on the development roadmap. This will offer users inspiration each day, allowing them to save the quote to their personal collection.

# Testing 

To facilitate the evaluation of this project, a test account has been set up. You can use the following credentials to log in and assess the functionality of the platform:

- **Username**: TestAccount2024
- **Password**: PleaseTestMe2024

Alternativetly, you can create your own account via the [Signup](https://quote-diary-d98222c5c65a.herokuapp.com/signup) page

## Key Features and Scenarios Tested

Testing was conducted throughout development to ensure all functionalities work as expected across various browsers and devices. The testing process covered key features of the Quote Diary application, focusing on user interactions and data integrity.

### Database Connectivity and Integrity Verification

A database query test was created and performed to ensure an accurate evaluation of the Quote Diary platform, particularly verifying the integrity and connection of the live database hosted on Heroku. This involved writing a `query_db.py` script that would interact directly with the PostgreSQL database used for the project in order to retrieve every username that was recorded there. 

This strategy was justified by the need to demonstrate how the programme could communicate with the database and reliably retrieve data, hence presenting the live environment's operating status.

The steps followed were as detailed below:

1. **Script Development**: Using the `psycopg2` library, a Python script called `query_db.py` was written to connect to the PostgreSQL database using the `DATABASE_URL` environment variable. This variable is configured to dynamically match the URL of the database. Here is a breakdown of the script :

    - **Imports and Setup**: The script begins by importing `psycopg2` for PostgreSQL database interaction and `os` for accessing environment variables.
    - **Establishing Database Connection**: Utilising `psycopg2.connect`, it establishes a connection to the database using `DATABASE_URL`.
    - **Creating a Cursor**: A cursor is created with `conn.cursor()` to perform database operations.
    - **Defining and Executing the Query**: The script defines a SQL query, `SELECT username FROM "user";`, and executes it to fetch usernames.
    - **Fetching and Printing Usernames**: It retrieves all the rows returned by the query and prints each username, confirming the script's capability to access and retrieve data. 

2. **Query Execution**: The execution of the query selected all usernames from the `user` table.

3. **Security Measures**: I made sure of the inclusion of `query_db.py` in the project's `.gitignore` file to safeguard against exposure of sensitive database connection details, preserving the database's security.

5. **Execution and Observations**: Executed locally, the script's performance can be seen [here](https://www.dropbox.com/scl/fi/tdqjtqimyh204cuwadtka/query_db-result.JPG?rlkey=0ymijbqpzgl3pk33l1rk3jpfz&dl=0), showcasing the return of multiple **test** usernames (note none of the usernames are real world users). This outcome evidences the database's setup and functionality in the live environment on Heroku.

### User Authentication
- **Login Form**: Tested with valid and invalid credentials. Successful login redirects to the dashboard, while invalid attempts display an appropriate error message.
- **Signup Form**: Tested the registration process with both valid and invalid data (e.g., existing username with incorrect password). Validation feedback was checked for accuracy.

### Quote Management
- **submitting Button**: Clicking the "Submit" button successful actions the quote submission. Tested submitting quotes with both valid and incomplete data. Validation messages appeared correctly, and successful submissions show that the new quote is visible.
- **Edit Quote Buttons**: For each quote listed under the user's dashboard, the "Edit" button was tested to ensure it navigates to the edit form with the quote's existing content pre-filled. Changes saved reflected immediately upon submission.
- **Delete Quote Buttons**: The "Delete" functionality for each quote was tested. Confirmation box show up as expected to prevent accidental deletions. Once confirmed, the quote was no longer displayed on the dashboard.

### Navigation and Responsiveness
- **Navigation Links**: Tested the responsiveness of navigation links ("Home", which is the QuoteDiary button in top left, "Dashboard", "Login", "Signup", "Logout") across devices. Each link correctly redirected to the expected page without issues.
- **Responsive Design**: The application was accessed on various devices and browsers (Chrome, Firefox, Safari on desktop, and mobile) to ensure the layout adjusts appropriately. Bootstrap's responsive features were effective across all tested scenarios.

### Security and Data Handling
- **Form Validation**: All forms (login, signup, add/edit quote) were tested for validation. This included testing for required fields, string length, and unique constraints (e.g., usernames).
- **Session Management**: User sessions were tested by logging in, navigating the site, and logging out. Session persistence worked as expected.

## Results

The Quote Diary application's basic capabilities are operating as anticipated, based on the manual testing. The quote management system is robust yet user-friendly, the forms accurately validate user input, and user identification is secure. Smooth navigation provides an enjoyable user experience on a variety of devices and screen sizes.

## Problems and Resolutions

Throughout the development, several bugs were encountered and promptly addressed. There was one major issue that severely impacted the development of this process (see 5):

**Intermittent Login Failures**:
   - **Problem**: I occasionally faced issues logging in. The page would not load and would crash browser
   - **Fix**: Optimised session management in Flask.
   - **Outcome**: Enhanced the reliability of the login process. There seems to be no issues with login at this time.

2. **Delayed Quote Loading**:
   - **Problem**: Slow loading of quotes. The higher the quote list grew, the loading of quotes was slower when refreshed
   - **Fix**: Reworked database query optimisation
   - **Outcome**: Improved speed and responsiveness in quote retrieval. There seems to be limited issues with higher quote lists at this time.

3. **Responsive Layout Discrepancies**:
   - **Problem**: Layout issues on mobile devices.
   - **Fix**: Adjusted Boostrap and added CSS media queries and flexible layouts.
   - **Outcome**: Achieved a fluid and consistent layout across mobile devices. Boostrap seems to be implemented well.

4. **Database Migration Challenges**:
   - **Problem**: Issues during database schema updates during developmental phase
   - **Fix**: Manually edited migration script to push through the databse migration
   - **Outcome**: Database scheema seems to be working as intended.

5. **Secret Key / Database issues**:
   - **Problem**: One of the main issues that I had was releated to the project that I had started before this, which was a very simular idea. The issue that I faced was that I accidently pushed my secret key to GitHub, which was a security issue. I spent over 5 hours trying to fix the issue by viewing online tutorials on how to roll back, however, the rollback did not seem to work. My database did not match up with the rollback which resulted in my having to completely scrap the project. This was my biggest issue during development, which resulted in me losing around 30 hours in total. 
   - **Fix**: I was unable to fix. 
   - **Outcome**: I had to re-start the project under a different name and repository, which is the project that you are viewing today. This is why my commits seem a lot less than expected. My original project codebase had around 20/30 commits at the stage of deletion. I carried over a lot of my personal code to this project to avoid having to start completely from scratch. This is why I had to focus on an MVP of Quote Diary rather than the version I first intended to complete. 

## Performance checks

Ensuring compliance with web standards and best practices, Quote Diary was validated with various tools to check HTML, CSS, and JavaScript. Here are the results:

### HTML validation

HTML validation was performed using the [W3C Markup Validation Service](https://validator.w3.org/). **All pages passed** :

- **Index**: [View Report](https://www.dropbox.com/scl/fi/c6xqnhe0l5lw3oo8rywsr/Index-Validation-Pass.pdf?rlkey=x1uq2iu7rbku1ezxliuv5dr8w&dl=0)
- **Signup**: [View Report](https://www.dropbox.com/scl/fi/7hwuxdduct50s9xuesmva/Signup-Validation-Pass.pdf?rlkey=hcw8ab6hao7fd6izzfrsyyf5f&dl=0)
- **Login**: [View Report](https://www.dropbox.com/scl/fi/6q6lqs1i7ctkoknc1h4pn/Login-Validation-Pass.pdf?rlkey=s3wd9o3lzpra2bpxzo2v1en1a&dl=0)
- **Dashboard**: [View Report](https://www.dropbox.com/scl/fi/y53908otqd40n327mwmdk/Dashboard-Validation-Pass.pdf?rlkey=7emdgivjkb2y53oib423rpc0h&dl=0)
- **Edit Quote**: [View Report](https://www.dropbox.com/scl/fi/w76hyb8p18k7dkxv5s28a/Edit-Quote-Pass.pdf?rlkey=bjholjyfexb3aaphk6j91mbjr&dl=0)

### CSS Validation

CSS validation was performed using the [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/). **The stylesheet passed**:

- **Styles**: [View Report](https://www.dropbox.com/scl/fi/duv2raszj20urmkotvseb/Css-Validator-Pass.pdf?rlkey=2ext5z7fp5n9h7y6jbdpprzd3&dl=0)

### JavaScript Validation

JavaScript validation was conducted using [JSHint](https://jshint.com/). **The main script passed validation after small adjustments**

- **Scripts**: [View Report](https://www.dropbox.com/scl/fi/druekfkbbpjddhpey0tjh/Javascript-Validation-Pass-as-variable-warning-false-positive.pdf?rlkey=7kj2qth6edxvsspfs541rduq9&dl=0)

## Lighthouse Performance Checks

Below are the Lighthouse performance checks for various pages of the application, including scores for Performance, Accessibility, Best Practices, and SEO.

#### Index Page

| Performance | Accessibility | Best Practices | SEO | Report |
|-------------|---------------|----------------|-----|--------|
| 99          | 100           | 96             | 100 | [View Report](https://www.dropbox.com/scl/fi/t9gn7g5kfixnnzdhiefvw/Index-page.JPG?rlkey=g0dcrg9j1dnfv7fbjwm0g9mru&dl=0) |

#### Signup Page

| Performance | Accessibility | Best Practices | SEO | Report |
|-------------|---------------|----------------|-----|--------|
| 99          | 94            | 96             | 100 | [View Report](https://www.dropbox.com/scl/fi/lnxmaot99leq9248z4y2j/Signup-page.JPG?rlkey=dvaohejibse4gukc5ixsrro2m&dl=0) |

#### Login Page

| Performance | Accessibility | Best Practices | SEO | Report |
|-------------|---------------|----------------|-----|--------|
| 98          | 95            | 96             | 100 | [View Report](https://www.dropbox.com/scl/fi/k5e0cypd3xom68dom3bbi/Login-page.JPG?rlkey=srxqchptlbps5qi5ny8w5eq4c&dl=0) |

#### Dashboard Page

| Performance | Accessibility | Best Practices | SEO | Report |
|-------------|---------------|----------------|-----|--------|
| 96          | 94            | 100            | 100 | [View Report](https://www.dropbox.com/scl/fi/v07mkmakc7i65crttnnhz/Dashboard.JPG?rlkey=b880uw4aetjn6y26u2udc8rw1&dl=0) |

#### Edit Quote

| Performance | Accessibility | Best Practices | SEO | Report |
|-------------|---------------|----------------|-----|--------|
| 99          | 100           | 100            | 100 | [View Report](https://www.dropbox.com/scl/fi/zbxlqxsgsbyfgby7zcqx5/Edit-Quote.JPG?rlkey=th8y0z6qc5ez13ashdl3pwm3j&dl=0) |


# Deployment

## Quote Diary Project Structure

Here is an explanation of the structure for the Quote Diary project : 

### Top-level Files

- **.gitignore**: Ignores files from git, like environment variables.
- **Procfile**: Config for Heroku to run the app.
- **README.md**: Provides a comprehensive overview of the project.
- **requirements.txt**: Python packages required for the project.

### Application Modules

- **app.py**: Main Flask app with routes and configurations.
- **extensions.py**: Initialises Flask extensions.
- **forms.py**: Flask-WTF forms for user input and validation.
- **models.py**: Project models for the database structure.

### Migrations Directory

Handles database schema changes with Alembic migrations.

- **alembic.ini**: Alembic configuration file.
- **env.py**: Sets up the migration environment for Alembic.
- **versions/**: Contains individual migration scripts.

### Static and Templates Directories

- **static/**: Contains static files like CSS, JavaScript, and images.
  - **favicon.ico**: Website favicon.
  - **script.js**: JavaScript for dynamic page behavior.
  - **style.css**: Custom CSS styles for the UI.

- **templates/**: Jinja2 templates for HTML content.
  - **base.html**: Base template for common structures.
  - **dashboard.html**: User dashboard for quote management.
  - **edit_quote_form.html**: Form for editing quotes.
  - **index.html**: Landing page of the website.
  - **login.html**, **signup.html**: Authentication pages.


## Prerequisites

- Python 3.8 or newer
- Flask
- SQLAlchemy
- Other Python packages as mentioned in `requirements.txt`

## Development (Running Locally)

Follow these steps to set up and run the project locally:

1. **Clone the Repository**: Clone the project repository to your local machine by running:
   ```bash
   git clone https://github.com/CroftsDeveloper/Quote_Diary.git
   ```

2. **Navigate to the Project Directory**:

```bash
cd Quote_Diary
   ```
3. **Install the necessary Python packages from the requirements.txt file** :

```bash
pip install -r requirements.txt
   ```

4. **Set up necessary environment variables**: Create a .env file (and add it to a .gitignore) in the project root with your keys:

**SECRET_KEY**: A secret key for your Flask application.

**DATABASE_URL**: The URL to your database; for local development, this will typically be a SQLite database path.

5. **Virtual Environment** : 

It's recommended to use a virtual environment to avoid conflicts with other Python projects:

```bash
python -m venv venv
# On Windows use `venv\Scripts\activate` # On macOS and Linux use 'source venv/bin/activate'
   ```

6. **Database Initialisation and Migrations**

Before running the application, initialise your database and perform any necessary migrations:

```bash
flask db init
flask db migrate -m "Initial migration."
flask db upgrade
   ```
7. **Start your application** : 

You can then start your Flask application using the Flask CLI :

```bash
flask run
   ```
**Your application will now be accessible at http://127.0.0.1:5000/.**

## Live Deployment (Heroku)

Deploying this Flask application to Heroku allows it to be accessible on the web. If you're setting up your own instance of the application on Heroku, follow these steps:

1. **Create a Heroku Account**: If you don't already have one, sign up for a Heroku account at [Heroku's website](https://www.heroku.com/).
2. **Install Heroku CLI**: Download and install the Heroku Command Line Interface (CLI) from [Heroku's Dev Center](https://devcenter.heroku.com/articles/heroku-cli). This tool allows you to manage your Heroku apps from the terminal.
3. **Log In to Heroku CLI**: Open your terminal and log in to Heroku using the following command, then follow the prompts:
   ```bash
   heroku login
   ```

4. **Create a New Heroku App:** Create a new app on Heroku. You can specify a unique name for your app or let Heroku generate one for you. If you choose to name it, replace <YOUR_APP_NAME> with your desired app name:
```bash
   heroku create <YOUR_APP_NAME>
   ```
5. **Push to Heroku**: Deploy the application to Heroku by pushing your code from the local repository's main branch to the Heroku remote:
```bash
   git push heroku main
   ```
6. **Configure Environment Variables**: Set up the necessary environment variables on Heroku. Do this via the Heroku dashboard for your app under "Settings" > "Reveal Config Vars". Essential variables to include are:
   - `SECRET_KEY`: Your secret key.
   - `DATABASE_URL`: The URL for your database.

7. **Database Migrations:** : To set up your database tables on Heroku, run your migrations using the Heroku CLI:

```
heroku run flask db upgrade -a <YOUR_APP_NAME>
   ```

This command applies the migration scripts you've created to your Heroku database, ensuring your database schema is correctly set up for your application.

8. **Access Your Application**: Once deployed, your application can be accessed through the URL provided by Heroku. You can also open it directly from the terminal:

   ```bash
   heroku open
   ```

**The deployed URL typically follows the format: `https://<YOUR_APP_NAME>.herokuapp.com/.**

# Security Measures

I built my Flask application with a number of security features in place to protect user information and interactions. A breakdown of various implementations is given below:

### Password Hashing with Flask-Bcrypt

I hash passwords using Flask-Bcrypt before storing them in the database. By taking this precaution, user passwords are kept safe and shielded from unauthorised access. I've included it in my code as follows:

```python
# app.py

from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)
hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
 ```


### Session Management with Flask-Login

I use Flask-Login to securely manage user sessions. It provides a number of functions without jeopardising user session security.

```python
# app.py

from flask_login import LoginManager, login_user, current_user, logout_user, login_required

login_manager = LoginManager(app)
login_manager.login_view = 'login'
 ```

### Environment Variables for Sensitive Information

I use environment variables to store sensitive information like the SECRET_KEY. This practice helps in keeping the application's configuration secure and prevents hard-coded sensitive information:

```python
# app.py

from dotenv import load_dotenv

load_dotenv()
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
 ```

### CSRF Protection with Flask-WTF
```python
# forms.py

from flask_wtf import FlaskForm
```

All of these security precautions are essential to keeping my Flask programme resistant to different security risks, protecting user information, and improving the overall security posture of my application. 

# Credits

- **Media Files**: I have downloaded and implemented a free Favicon from favicon.io

- **Readme.so**: [Readme.so](https://readme.so/) is simple online README.md editor that allowed me to customise my projects readme conveniently online and see the visual outcome immediately.

- **Bootstrap**: [Official Documents](https://getbootstrap.com/docs/5.3/getting-started/introduction/) were reviewed at multiple points throughout this project and were essential for me to be able to get to the finished MVP.

# Contributions

Quote Diary project is released under MIT License. If you would like to contribute to Quote Diary, please reach out to me at :

- **Name**: Samuel Crofts
- **Email**: samcrofts2020@gmail.com