## Install project

Run commands in CMD

```
git clone https://github.com/ruslan-user/learning.git
cd learning
```

## Task 1 (Add Login Page)
+ Watch video about forms https://www.youtube.com/watch?v=Y_dsckWhclE
+ Create Login page like in the design https://ru.pinterest.com/pin/444660163198898369/ and put it into the index.html.
+ Commit all the changes to git repo:
```
 git add .
 git commit -m 'Add Login Page'
 git push origin master
 ```
</br>

*Additional info about page structure - https://marksheet.io/html-structure.html* </br>
*Additional info about HTML forms - https://marksheet.io/html-forms.html*

## Task 2 (Perform login)
+ Move Login Page to `login.html` file.
+ Create `login.js` file and add all javascript logic in it.
+ Create `username` and `password` variables and store input values in them using `change` event.
+ Log these values into the console after clicking (`click` event) the `Login` button. Clear input values after click.
+ Commit all the changes to a new branch:
```
 git branch 'feature/login' // create new branch and call it 'feature/login'
 git checkout 'feature/login' // switch to the new branch
 git add . // add new files and changes
 git commit -m 'Perform login' // commit all the changes
 git push origin feature/login // and push them to a new branch
 ```
 </br>
 
 *Additional info about javascript events - https://learn.javascript.ru/introduction-browser-events* </br>
 *Additional info about how to handle events - https://puzzleweb.ru/javascript/element_addeventlistener.php*
 
 ## Task 3 (Table)
 + Read first five sections - https://habrahabr.ru/post/273471/#selector_efficiency
 + Create any table with 15 rows from the design: https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/Table_Fixed_Header.jpg
 + Put all the code into main.html
 
 Requirements for the table: </br>
 + Table should display 10 rows max, other rows should be scrolled
 + Table head row should be fixed when scrolling
 + 13 row should not be displayed
 + Each name in Trainer column should be a link with href="#". Colors of visited and not visited links should be different. Text should be decorated on link hover
 + Commit all the changes to a new branch
 ```
 git checkout -b 'feature/table' // create new branch and switch on it
 git add . // add new files and changes
 git commit -m 'Add main Table' // commit all the changes
 git push origin feature/table // and push them to a new branch
 ```
 </br>
 
 *Additional info about HTML tables - https://marksheet.io/html-tables.html* </br>
 *Additional info about pseudo classes and selectors - https://frontender.info/helpful-css-pseudo-selectors*

## Task 4 (Redirect on login)
+ Switch to the `master` branch and do `git pull`.
+ Create new `feature/redirect-login` branch.
+ Watch videos about javascript [functions](https://www.youtube.com/watch?v=M3ACkFObsQw) and [objects](https://www.youtube.com/watch?v=J1aIrZFnGig)
+ In `login.js` create a function that `sets` admin user object to the `LocalStorage` and call it. To do that you will have to convert an object to a string using [JSON.stringify()](https://www.youtube.com/watch?v=bw10M9RuR30) and then put it into the [LocalStorage](https://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage)
```javascript
var adminUser = {
  username: 'admin'
  password: 'admin'
}
```
+ If user enters into `Login` form admin's username and password and clicks on the `Login` button, navigate to `pages/table.html`. To do navigation on other page use this function:
```javascript
var navigate = function (htmlFile) {
 window.location.href = 'file:///{{YOUR_PATH_TO_PROJECT_FOLDER}}/learning/' + htmlFile
}
// navigate('pages/table.html')
```
+ Commit all the changes.
</br>

*Additional info about Local Storage - https://tproger.ru/articles/localstorage/* </br>
*Additional info about functions - https://learn.javascript.ru/function-basics*
