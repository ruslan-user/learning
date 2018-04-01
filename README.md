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
