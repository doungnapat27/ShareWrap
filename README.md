## Practical Software Engineering: What is ShareWrap?

  ### Description
- ShareWrap is a website for bill management, empowering diners to share meals and memories, not billing disputes. Simplifying the dining experience, one bill at a time.


## How to run this project?(in local)
  ### Frontend Part
  - Open the terminal
  - Cd to /frontend folder
  - Type and enter command `npm i`
  - Type and enter command `npm start`
  ### Backend part
  - If you have IntelliJ, please open it in the IntelliJ
  - Create your database in MySql, please name it `sharewrap`
  - Go to the Server tab in MySql workbench -> Users and Privillages, then add the account as specified in file `application.properties`
  - Don't forget to select the schema as `sharewrap` and set the privillages.
  - Run file `SharewrapBackendApplication.java`
---

<details>
<summary><h2>Software QA: Project 2 (ShareWrap)</h2></summary>

> ### ❗️NOTES❗️
> ### This is QA Section, Ming will put the content below in the separated repo (After finishing all tasks in Practical SE)
> You can click [here](https://studentmahidolac-my.sharepoint.com/:w:/g/personal/chaiyong_rag_mahidol_ac_th/EdwEp36CaWVFkTFe6Md2LuUBcb3R8Pn6hO6NyNJ59IQdgw?rtime=v6KTkIPf20g) to see the QA project#2 description

### This is repository which 
This practice is under the Faculty of ICT, Mahidol University, in ITCS473: Software Quality Assuarance and Testing.

## :dancers:Tester Team:
| #   | Name        | LastName         | Student ID | GitHub                              |
| --- | ----------- | ---------------- | ---------- | ----------------------------------- |
| 1   | Rujiphart   | Charatvaraphan   | 6388012    | https://github.com/MingRuji6388012  |
| 2   | Doungnapat  | Thiansukont      | 6388068    | https://github.com/doungnapat27     |
| 3   | Sarayut     | Theeraumpronpunt | 6388111    | https://github.com/ORPGCLUP         |
| 4   | Watsapol    | Samittivate      | 6388155    | https://github.com/MarkMPW          |
| 5   | Thitirat    | Sukijprasert     | 6388156    | https://github.com/EFFTHIIZZ        |
| 6   | Bunradar    | Chartchaiyadech  | 6388185    | https://github.com/BunradarCH       |


<details>
<summary><h2>📱 Unit testing 📱</h2></summary>
<details>
<summary><h3>Test case #1: <code> UserService - Test valid email and password for Log In </code> </h3></summary>
   
### Name of the Test: test_login
### The goal of the test case: validate user input for a valid email and password, ensuring that the validation function works correctly.
### Tool using for testing: JUnit, Mockito
### The characteristics developed for this test case:
   - **Interface-based:**
   - **Functionality-based:**
**Interface-based**
1. Identify testable functions
   -  'login' method in the 'UserService' class
2. Identify parameters, return types, return values, and exceptional behavior
   - Parameters:
     - 'LoginDto' containing email and password.
   - Return type: 
     - Boolean
   - Return value:
     - true
     - false
   - Exceptional behavior:
     - Throws `AppException` with message "Unknown user" and HTTP status NOT_FOUND if the user is not found.
     - Throws `AppException` with message "Invalid password" and HTTP status BAD_REQUEST if the password is invalid.
3. Model the input domain
   - Develop Characteristics
     - C1 = Email
     - C2 = Password
   - Partition characteristics
     
     | Characteristic | b1 | b2 |
     | -------------- | --- | --- |
     | C1 = Email | true | false |
     | C2 = Password | true | false |
     
   - Identify (possible) values
     
     | Characteristic | b1 | b2 |
     | -------------- | --- | --- |
     | C1 = Email | "test@example.com" | "" |
     | C2 = Password  | "password" | "wrongPassword" |
     
4. Combine partitions to define test requirements
   - Assumption: ACoC
   - Test Requirements: number of test (upper bound) = 4
       - (true, true)
       - (true, false)
       - (false, true)
       - (false, false)
  
5. Derive test values

     | Test | Email | Password | Expected Results|
     | ---------------- | ---------- | ---------- | --------------- |
     | T1 (true, true) | "test@example.com" | "password" | true |
     | T2 (true, false) | "test_@example.com" | "wrongPassword" | false |
     | T3 (false, true) | "" | "password" | false |
     | T4 (false, false) | "" | "wrongPassword" | false |
   
**Functionality-based**
1. Identify testable functions
   -  'login' method in the 'UserService' class
2. Identify parameters, return types, return values, and exceptional behavior
   - Parameters:
     - 'LoginDto' containing email and password.
   - Return type: 
     - 'UserDto' for a successful login
     - 'null' for an indication of failure
   - Return value:
     - A user object if the login is successful
     - 'null' or an indication of failure if the login is unsuccessful
   - Exceptional behavior:
     - Throws `AppException` with message "Unknown user" and HTTP status NOT_FOUND if the user is not found.
     - Throws `AppException` with message "Invalid password" and HTTP status BAD_REQUEST if the password is invalid.
3. Model the input domain
   - Develop Characteristics
     - C1 = Email
     - C2 = Password
   - Partition characteristics
     
     | Characteristic | b1 | b2 |
     | -------------- | --- | --- |
     | C1 = Email | Valid | Invalid |
     | C2 = Password  | Valid | Invalid |
     
   - Identify (possible) values
     
     | Characteristic | b1 | b2 |
     | -------------- | --- | --- |
     | C1 = Email | "test@example.com" | "" |
     | C2 = Password  | "password" | "wrongPassword" |
     
4. Combine partitions to define test requirements
   - Assumption: ACoc
   - Test Requirements: number of test (upper bound) = c
       - (Valid Email, Valid Password), (Valid Email, Invalid Password), (Invalid Email, Valid Password), (Invalid Email, Invalid Password).
  
5. Derive test values

     | Test | Email | Password | Expected Results|
     | ---------------- | ---------- | ---------- | --------------- |
     | T1 (Valid Email, Valid Password) | "test@example.com" | "password" | "logging in..." |
     | T2 (Valid Email, Invalid Password) | "test_@example.com" | "wrongPassword" | HttpStatus.BAD_REQUEST, "Invalid password" |
     | T3 (Invalid Email, Valid Password) | "" | "password" | HttpStatus.NOT_FOUND |
     | T4 (Invalid Email, Invalid Password) | "" | "wrongPassword" | HttpStatus.BAD_REQUEST |

</details> 

<details>
<summary><h3>Test case #2: <code> UserService - Test generateUniqueUserId</code> </h3></summary>
   
### Name of the Test: test_generateUniqueUserId
### The goal of the test case: Validate the generateUniqueUserId method in the UserService class produces unique user IDs.
### Tool using for testing: JUnit, Mockito
### The characteristics developed for this test case:
   - **Interface-based:**
   - **Functionality-based:**
**Interface-based**
1. Identify testable functions
   - 'generateUniqueUserId' method in the 'UserService' class
2. Identify parameters, return types, return values, and exceptional behavior
   - Parameters: String username
   - Return type: 
     - Boolean
   - Return value:
     - true
     - false
   - Exceptional behavior: -
3. Model the input domain
   - Develop Characteristics
     - C1 = Length of username
   - Partition characteristics
     
     | Characteristic   | b1         | b2         | b3         |
     | ---------------- | ---------- | ---------- | ---------- |
     | C1 = Length of username | false | true | false|
     
   - Identify (possible) values
     
     | Characteristic   | b1         | b2         | b3         |
     | ---------------- | ---------- | ---------- | ---------- |
     | C1 = Length of username | username+(0<length<6) |username+(length=6) | username+(length>6) |
     
4. Combine partitions to define test requirements
   - Assumption:ACoC
   - Test Requirements: number of test (upper bound) = 3
      - (false), (true), (false)
  
5. Derive test values

     | Test             | Length of username | expected results |
     | ---------------- | ---------- | ---------- |
     |  T1 (false)  | "john_doe".length()+3 | false |
     |  T2 (true)  | "john_doe".length()+6 | true |
     |  T3 (false)  | "john_doe".length()+8 | false |
   
**Functionality-based**
1. Identify testable functions
   - 'generateUniqueUserId' method in the 'UserService' class
2. Identify parameters, return types, return values, and exceptional behavior
   - Parameters: String username
   - Return type: String
   - Return value: String representing unique user ID 
   - Exceptional behavior: -
3. Model the input domain
   - Develop Characteristics
     - C1 = Usernames
   - Partition characteristics
     
     | Characteristic | b1         | b2         |
     | ---------- | ---------- | ---------- |
     | C1 = Usernames  |  different username |  same username |
     
   - Identify (possible) values
     
     | Characteristic   | b1         | b2         |
     | ---------------- | ---------- | ---------- |
     |   C1 = Usernames   | ("john_doe", "jane_smith") | ("john_doe", "john_doe") |
     
4. Combine partitions to define test requirements
   - Assumption: ACoC
   - Test Requirements: number of test(upper bound) = 2
      - (different username), (same username)
  
5. Derive test values

     | Test             | Usernames | expected results|
     | ---------------- | ---------- | ---------- |
     |  T1 (different username)   | ("john_doe", "jane_smith") |Unique user ID generated|
     |  T2 (same username)   | ("john_doe", "john_doe") |Unique user ID generated|

</details> 

<details>
<summary><h3>Test case #3: <code> UserService - Test getUser </code> </h3></summary>
   
### Name of the Test: test_getUser
### The goal of the test case: Confirm and Validate retrieving and mapping a user when the user with the provided userId exists.
### Tool using for testing: JUnit, Mockito
### The characteristics developed for this test case:
   - **Interface-based:**
   - **Functionality-based:**
**Interface-based**
1. Identify testable functions
   - 'getUser' method in the 'UserService' class
2. Identify parameters, return types, return values, and exceptional behavior
   - Parameters: String userId
   - Return type: 
     - Boolean
   - Return value:
     - true
     - false
   - Exceptional behavior: AppException - Thrown if the user with the given userId is not found.
3. Model the input domain
   - Develop Characteristics
     - C1 = Existence of user
   - Partition characteristics
     
     | Characteristic   | b1         | b2         |
     | ---------------- | ---------- | ---------- |
     | C1 = Existence of user | true |	false |
     
   - Identify (possible) values
     
     | Characteristic   | b1         | b2         |
     | ---------------- | ---------- | ---------- |
     |  C1 = Existence of user | "validUserId" | "invalidUserId" |
     
4. Combine partitions to define test requirements
   - Assumption:ACoC
   - Test Requirements: number of test (upper bound) = 2
      - (true), (false)
  
5. Derive test values

     | Test             | Length of username | expected results |
     | ---------------- | ---------- | ---------- |
     |  T1 (true)  | "validUserId" | true |
     |  T2 (false)  | "invalidUserId" | Throws an AppException, and return false |
   
**Functionality-based**
1. Identify testable functions:
  - 'getUser' method in the 'UserService' class
2. Identify parameters, return types, return values, and exceptional behavior
   - Parameters: String userId
   - Return type: UserDto
   - Return value: UserDto containing user information.
   - Exceptional behavior: Throws AppException with the message "User not found" and HTTP status HttpStatus.NOT_FOUND if the user is not found.
3. Model the input domain
   - Develop Characteristics
     - C1 = Existence of user
   - Partition characteristics
     
     | Characteristic   | b1         | b2         |
     | ---------------- | ---------- | ---------- |
     | C1 = Existence of user | User exists |	User does not exist |
     
   - Identify (possible) values
     
     | Characteristic   | b1         | b2         |
     | ---------------- | ---------- | ---------- |
     |  C1 = Existence of user | "validUserId" | "invalidUserId" |
     
4. Combine partitions to define test requirements
   - Assumption:ACoC
   - Test Requirements: number of test (upper bound) = 2
      - (User exists), (User does not exist)
  
5. Derive test values

     | Test             | Length of username | expected results |
     | ---------------- | ---------- | ---------- |
     |  T1 (User exists)  | "validUserId" | UserDto with validUserId |
     |  T2 (User does not exist)  | "invalidUserId" | AppException with "User not found" |

</details> 

---

<details>
  <summary><h2> 👩🏻‍💻 System test (Manual test) 👨🏻‍💻 </h2></summary>

  ### Description
  - ### Three of manual tests with traceability matrix is in folder 📁 ```manual test case``` ➡️ [URL TO FOLDER manual test case in GITHUB](www.google.com)
  - **You must create at least 3 test cases for system testing.**
  - **Test case template and resources**
    - [DOC](https://www.softwaretestinghelp.com/wp-content/qa/uploads/2012/12/Test-case-example-doc.doc)
    - [Excel](https://www.softwaretestinghelp.com/wp-content/qa/uploads/2012/12/Test-case-template-xls.xls)
    - [Test case example](https://www.softwaretestinghelp.com/wp-content/qa/uploads/2018/05/Test-Case-Format-with-Example.docx)
    - [180+ Web Application Testing Example Test Cases](https://www.softwaretestinghelp.com/sample-test-cases-testing-web-desktop-applications/)
    - [traceability matrix](https://www.guru99.com/traceability-matrix.html)

  
</details>

---

<details>
  <summary><h2> 🤖 Automated UI Testing 🤖 </h2></summary>
  
  ### Description
  - ### Three of automated UI tests with code using Selenium Web Driver is in folder 📁 ```automated test case``` ➡️ [URL TO FOLDER automated test case in GITHUB](www.google.com)
  - create at least **3 automated UI test cases.** Based on the 3 manual system test cases that you created, convert them into automated UI test cases using **Selenium Web Driver or Robot framework.**
  - **[Automated UI Testing](https://studentmahidolac-my.sharepoint.com/:w:/g/personal/chaiyong_rag_mahidol_ac_th/EYxyoC1ZGkZPiKMl-9HXypsB9Xirs5iE6Bl3cCcb7plW1w?e=XdeDpo)**

  
</details>

---

<details>
  <summary><h2> 💚 BONUS: CI Integration 💚 </h1></summary>
</details>

</details>

