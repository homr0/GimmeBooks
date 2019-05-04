# Gimme Books

[Gimme Books](https://gimme-books.herokuapp.com/) is a book finding app for people who love books.

## willCode4ca$h Team Members

- **App Architect/Overseer**: [Rebecca Hom](https://github.com/homr0)
- **Bibliophile-in-Chief**: [Nolen Diggs](https://github.com/DiggsNG)
- **Most Profound Designer**: [Daniel Jacquez](https://github.com/jacquezdaniel)
- **Client View Producer**: [Rhea Quiambao](https://github.com/delquiam)
- **Server-Side Engineer**: [Meenal Subramanian](https://github.com/meenalal)

## Instructions

- [Demo Account](#demo-account)
- [Gimme Books Account](#gimme-books-account)
  - [Create an Account](#create-an-account)
  - [Logging In/Logging Out](#logging-in-logging-out)
- [Getting Books](#getting-books)
  - [Searching For Books](#searching-for-books)
  - [Keep Track of Your Favorites](#keeping-track-of-your-favorites)

### Demo Account

If you would like to test Gimme Books without creating an account, you can use the demo account here:

**Email:** jsmith@email.com  
**Password:** password

If you choose to create a Gimme Books account, do not use *password* or any other easy-to-guess passwords.

### Gimme Books Account

To make the best use of our app, it is recommended to create a user account.

#### Create an Account

![Creating an account](/public/images/gmb-account-create.PNG)

1. Go to the [Home page](https://gimme-books.herokuapp.com/).
2. Put in your **name**, **email**, and **password**.
3. Click **Sign Up**
4. The page should be refreshed and you will be logged in.

#### Logging In/Logging Out

1. Log in by pressing on the **Login** button. ![Log in to account](/public/images/gmb-account-login.PNG)
2. Log out by pressing on the **Logout** button. ![Log out of account](/public/images/gmb-account-logout.PNG)

### Getting Books

Gimme Books lets you retrieve books and keep track of them.

#### Searching For Books

![Searching for books](/public/images/gmb-books-search.PNG)

1. Go to [Search](https://gimme-books.herokuapp.com/#search_bar)
2. Type in a book **author** or **title**.
3. Hit **Enter** to get results.

#### Keep Track of Your Favorites

![Favorite book list](/public/images/gmb-books-favorite.PNG)

1. Once you get your [search results](#searching-for-books), you can open a book result and click on **Favorite**.
2. Go to your user page and you will see your favorite books list.

## Technology Used

### Front-End

- CSS Framework: [Materialize.css](https://materializecss.com/)

### Back-End

- [Node.js](https://nodejs.org/en/)*
- [Express](https://expressjs.com/)*
- [MySQL](https://www.mysql.com/)*
- [Sequelize](http://docs.sequelizejs.com/)
- [Handlebars](https://handlebarsjs.com/) (for template)
- [Express Sessions](https://github.com/expressjs/session) (for saving login sessions)
- [Passport.js](http://www.passportjs.org/) (for user authentication)
- [Bcrypt](https://www.npmjs.com/package/bcrypt) (for hashing passwords)

### APIs

- [Google Books](https://developers.google.com/books/)
- [NYT Books](https://developer.nytimes.com/docs/books-product/1/overview)
