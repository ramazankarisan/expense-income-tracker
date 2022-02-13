
# Expense Tracker Project
[LIVE DEMO](https://track-expense-income.netlify.app/register)

-   In this project I will be practicing CRUD operations via this [API](https://expensetracker-be.herokuapp.com) and you can find its documentation [here](https://documenter.getpostman.com/view/11347698/TzRPiote).
-   In this project, basically anyone who can access their interface, can do the **CRUD** operations. I will be using _HTTP Methods_ for these operations via using endpoints from the above given API.
-   Users can reach out to their accounts and add/delete/edit theirs expense or income categories and track them.
-   As Authentication, used **Token**  from API and store it in to the *localStorage* .
>  it is obvious, that using Token through localStorage is unscure, but for this exercise and practicing the CRUD operations, it was unimportant.

## How to use?
+	When the page is loaded, you will be directed to the `/register` page, and you should create an account, and with that credentials, you should login.
+	You can see recordings with amounts and tags. You can add/edit/delete them.
+	In `/categories`you can create/edit/delete categories, so you can use them in `/records`.

If you do not want to create a new account, please try **`username:123456`** to login.

## Technologies

-   TypeScript
-   Redux
-   AntDesign UI
-   React-router-dom

> TypeScript and AntDesign both of them are new to me. I did not give any attention to the responsivitiy therefore.
