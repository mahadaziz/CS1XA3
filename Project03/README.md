# CS1XA3 Project03 - azizm17

## Usage
Install conda environment with `conda activate djangoenv` and run server from `CS1XA3/Project03`

Run locally with `python manage.py runserver localhost:8000` 

Run on mac1xa3.ca with `python manage.py runserver localhost:10010`

Test Users:
- **Username**: I **Password**: pokemon4life
- **Username**: Me **Password**: pokemon4life
- **Username**: Myself **Password**: pokemon4life
- **Username**: RandomGuy **Password**: pokemon4life

## Objective 1
Description:
- This feature is displayed in **signup.djhtml** which is rendered by **signup_view** and **create_view**.
- This objective allows the user to create a new profile and once the form is completed it redirects the user to `social/messsages/`.

Exceptions:
- If the user creates a password that doesn't meet the requirements then they have to reenter another password that meets the requirements.

## Objective 2
Description:
- This feature is displayed in **social_base.djhtml**.
- This objective displays the user's name and other personal information on the left side of the screen for **messages.djhtml**, **people.djhtml** and **account.djhtml** which are rendered by **messages_view**, **people_view** and **account_view** respectively.

Exception:
- If the user is not logged in and goes to `/e/azizm17/social/messages` then they will be redirected to **login.djhtml**.

## Objective 3
Description:
- This feature is displayed in **account.djhtml** which is rendered by **account_view**, **password_change_view** and **user_change_view**.
- This objective allows the user to either change their profile information such as employment, birthday, location and add another interest or change their password by clicking on the corresponding submit button for which information they would like to change.
- POST requests are sent by the forms to update the UserInfo object accordingly.

Exception:
- If the user is not logged in and goes to `/e/azizm17/social/account`, `/e/azizm17/social/password` or `/e/azizm17/social/user` then they will be redirected to **login.djhtml**.
- If the user leaves any of the fields in the change user information form then the employment, location, or birthday won't display anything on the other pages and if the interest field is left blank then an empty interest will be added to the user's profile.

## Objective 4
Description:
- This feature is displayed in **people.djhtml** which is rendered by **people_view**.
- The page initially displays only displays one other user that is not a friend but if you would like to see more users that are not friends you can click on the **More** button to display an additional user.
- The **More** button is already linked to an AJAX POST through javascript which when clicked refreshes the page with an additional user being displayed through **more_ppl_view**.

Exception:
- If the user is not logged in and goes to `/e/azizm17/social/people` then they will be redirected to **login.djhtml**.

## Objective 5
Description:
- This feature is displayed in **people.djhtml** which is rendered by **people_view**.
- This feature displays friend requests that are sent to the user.
- All **Friend Request** buttons are linked to a JQuery event in **people.js**, which uses its id to send a POST request to **friend_request_view**.
- The function **friend_request_view** handles a POST request by inserting an entry into the **FriendRequest** model.

Exception:
- If the user is not logged in and goes to `/e/azizm17/social/people` then they will be redirected to **login.djhtml**.

## Objective 6
Description:
- This feature is displayed in **people.djhtml** which is rendered by **people_view**.
- This feature allows the user to accept or decline friend requests that they have received from other users by clicking the check mark or the X on the right side of the page under each friend request.
- When the button to accept or decline is pressed the **people.js** sends a POST request to **accept_decline_view** which based on the button pressed either adds or doesn't add the user to the list of friends that appear on the right side of the messages page.

Exception:
- If the user is not logged in and goes to `/e/azizm17/social/people` then they will be redirected to **login.djhtml**.
- If the user decides to accept or decline the friend request then the request does not get deleted from the list of requests on `/e/azizm17/social/people`.

## Objective 7
Description:
- This feature is displayed in **messages.djhtml** which is rendered by **messages_view**.
- This feature displays all of the user's friends on the left hand side of the messages page.

Exception:
- If the user is not logged in and goes to `/e/azizm17/social/messages` then they will be redirected to **login.djhtml**.

## Objective 8
Description:
- This feature is displayed in **messages.djhtml** which is rendered by **messages_view**.
- This feature allows the user to submit posts and then refreshes the page and displays the post that they submitted.
- This feature submits an AJAX POST to **messages.js** when the post is submitted and then **post_submit_view** handles this post by adding a new entry to the **Post** model.

Exception:
- If the user is not logged in and goes to `/e/azizm17/social/messsages` then they will be redirected to **login.djhtml**.

## Objective 9
Description:
- This feature is displayed in **messages.djhtml** which is rendered by **messages_view**.
- This feature allows the user to see more posts on their messages page by clicking the more button under the posts. The list of all posts gets reset back to one post whenever the user logs back out.
- The **More** button is already configured to send a post to **more_post_view** which then increases the amount of posts the user can see one by one every time the More button is clicked.

Exception:
- If the user is not logged in and goes to `/e/azizm17/social/messages` then they will be redirected to **login.djhtml**.

## Objective 10 (Incomplete)
Description:
- This feature is displayed in **messages.djhtml** which is rendered by **messages_view**.
- It allows the user to like posts that are displayed on the messages page. Each user can see the like count and can only like a post once.
- If the post has already been liked by the user. The like button no longer reacts and is no longer able to like the post again.

Exception:
- If the user is not logged in and goes to `/e/azizm17/social/messages` then they will be redirected to **login.djhtml**.

## Objective 11
Test Users:
- **Username**: I **Password**: pokemon4life
- **Username**: Me **Password**: pokemon4life
- **Username**: Myself **Password**: pokemon4life
- **Username**: RandomGuy **Password**: pokemon4life
