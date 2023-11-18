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
<summary><h3>Test case #1: <code> Valid username and password for Log In </code> </h3></summary>
   
### Name of the Test: Valid username and password for Log In
### The goal of the test case: Verify that a user can successfully log in with a valid username and password
### Tool using for testing: ISP (Input Space Partitioning) technique
### The characteristics developed for this test case:
   - **Interface-based:**
   - **Functionality-based:**
**Interface-based**
1. Identify testable functions
2. Identify parameters, return types, return values, and exceptional behavior
   - Parameters:
     - Email
     - Password
   - Return type: 
     - User for a successful login
     - Null for an indication of failure
   - Return value:
     - A user object if the login is successful.
     - Null or an indication of failure if the login is unsuccessful.???
   - Exceptional behavior: If the provided email or password is invalid, the method  throw an authentication exception. ???
3. Model the input domain
   - Develop Characteristics
     - C1 = Email
     - C2 = Password
   - Partition characteristics
     
     | Characteristic | b1 | b2 | b3 |
     | -------------- | --- | --- | ------ |
     | Email | Valid | Invalid | Empty |
     | Password | Valid | Invalid | Empty |
     
   - Identify (possible) values
     
     | Characteristic | b1 | b2 | b3 |
     | -------------- | --- | --- | ------ |
     | Email | "valid@example.com" | "NotUserEmail@example.com" | "" |
     | Password | "validPassword" | "NotUserPassword" | "" |
     
5. Combine partitions to define test requirements
   - Assumption: Each combination of email and password is a separate test requirement.
   - Test Requirements: number of test (upper bound) = 9
       - (Valid, Valid), (Invalid, Valid), (Valid, Invalid), (Invalid, Invalid), (Empty, Valid), (Valid, Empty), (Empty, Invalid), (Invalid, Empty), (Empty, Empty)
  
6. Derive test values

     | Test | Email | Password | Expected Results|
     | ---------------- | ---------- | ---------- | --------------- |
     | T1 (Valid, Valid) | "valid@example.com" | "validPassword" | UserDto (indicating successful login) |
     | T2 (Invalid, Valid) | "NotUserEmail@example.com" |	"validPassword" | Exception: Invalid credentials |
     | T3 (Valid, Invalid) | "valid@example.com" | "NotUserPassword" | Exception: Invalid credentials |
     | T4 (Invalid, Invalid) | "NotUserEmail@example.com" | "NotUserPassword" | Exception: Invalid credentials |
     | T5 (Empty, Valid) | "" | "validPassword" | Exception: Invalid credentials |
     | T6 (Valid, Empty) | "valid@example.com" |	"" | Exception: Invalid credentials |
     | T7 (Empty, Invalid) | "" | "NotUserPassword" | Exception: Invalid credentials |
     | T8 (Invalid, Empty) | "NotUserEmail@example.com" |	"" | Exception: Invalid credentials |
     | T9 (Empty, Empty) | "" |	"" | Exception: Invalid credentials |
   
**Functionality-based**
1. Identify testable functions
2. Identify parameters, return types, return values, and exceptional behavior
   - Parameters: cal, epoch
   - Return type: long
   - Return value: cal.getTimeInMillis();
   - Exceptional behavior: ??
3. Model the input domain
   - Develop Characteristics
     - C1 =
   - Partition characteristics
     
     | Characteristic   | b1         | b2         | b3... and so on(feel free to modify)|
     | ---------------- | ---------- | ---------- | ----------------------------------- |
     |                  |            |            |                                     |
     
   - Identify (possible) values
     
     | Characteristic   | b1         | b2         | b3... and so on(feel free to modify)|
     | ---------------- | ---------- | ---------- | ----------------------------------- |
     |                  |            |            |                                     |
     
5. Combine partitions to define test requirements
   - Assumption:
   - Test Requirements: number of test(upper bound) =
      - (,)
  
6. Derive test values

     | Test             |            |            | expected results|
     | ---------------- | ---------- | ---------- | --------------- |
     |  T1(,)           |            |            |                 |

</details> 

<details>
<summary><h3>Test case #2: <code> Just placeholder </code> </h3></summary>
   
### Name of the Test: 
### The goal of the test case:
### Tool using for testing:
### The characteristics developed for this test case:
   - **Interface-based:**
   - **Functionality-based:**
**Interface-based**
1. Identify testable functions
2. Identify parameters, return types, return values, and exceptional behavior
   - Parameters:
   - Return type:
   - Return value:
   - Exceptional behavior:
4. Model the input domain
   - Develop Characteristics
     - C1 =
   - Partition characteristics
     
     | Characteristic   | b1         | b2         | b3... and so on(feel free to modify)|
     | ---------------- | ---------- | ---------- | ----------------------------------- |
     |                  |            |            |                                     |
     
   - Identify (possible) values
     
     | Characteristic   | b1         | b2         | b3... and so on(feel free to modify)|
     | ---------------- | ---------- | ---------- | ----------------------------------- |
     |                  |            |            |                                     |
     
5. Combine partitions to define test requirements
   - Assumption:
   - Test Requirements: number of test (upper bound) =
      - (,)
  
6. Derive test values

     | Test             |            |            | expected results|
     | ---------------- | ---------- | ---------- | --------------- |
     |  T1(,)           |            |            |                 |
   
**Functionality-based**
1. Identify testable functions
3. Identify parameters, return types, return values, and exceptional behavior
   - Parameters: cal, epoch
   - Return type: long
   - Return value: cal.getTimeInMillis();
   - Exceptional behavior: ??
5. Model the input domain
   - Develop Characteristics
     - C1 =
   - Partition characteristics
     
     | Characteristic   | b1         | b2         | b3... and so on(feel free to modify)|
     | ---------------- | ---------- | ---------- | ----------------------------------- |
     |                  |            |            |                                     |
     
   - Identify (possible) values
     
     | Characteristic   | b1         | b2         | b3... and so on(feel free to modify)|
     | ---------------- | ---------- | ---------- | ----------------------------------- |
     |                  |            |            |                                     |
     
6. Combine partitions to define test requirements
   - Assumption:
   - Test Requirements: number of test(upper bound) =
      - (,)
  
7. Derive test values

     | Test             |            |            | expected results|
     | ---------------- | ---------- | ---------- | --------------- |
     |  T1(,)           |            |            |                 |

</details> 

<details>
<summary><h3>Test case #3: <code> Just placeholder </code> </h3></summary>
   
### Name of the Test: 
### The goal of the test case:
### Tool using for testing:
### The characteristics developed for this test case:
   - **Interface-based:**
   - **Functionality-based:**
**Interface-based**
1. Identify testable functions
2. Identify parameters, return types, return values, and exceptional behavior
   - Parameters:
   - Return type:
   - Return value:
   - Exceptional behavior:
4. Model the input domain
   - Develop Characteristics
     - C1 =
   - Partition characteristics
     
     | Characteristic   | b1         | b2         | b3... and so on(feel free to modify)|
     | ---------------- | ---------- | ---------- | ----------------------------------- |
     |                  |            |            |                                     |
     
   - Identify (possible) values
     
     | Characteristic   | b1         | b2         | b3... and so on(feel free to modify)|
     | ---------------- | ---------- | ---------- | ----------------------------------- |
     |                  |            |            |                                     |
     
5. Combine partitions to define test requirements
   - Assumption:
   - Test Requirements: number of test (upper bound) =
      - (,)
  
6. Derive test values

     | Test             |            |            | expected results|
     | ---------------- | ---------- | ---------- | --------------- |
     |  T1(,)           |            |            |                 |
   
**Functionality-based**
1. Identify testable functions
3. Identify parameters, return types, return values, and exceptional behavior
   - Parameters: cal, epoch
   - Return type: long
   - Return value: cal.getTimeInMillis();
   - Exceptional behavior: ??
5. Model the input domain
   - Develop Characteristics
     - C1 =
   - Partition characteristics
     
     | Characteristic   | b1         | b2         | b3... and so on(feel free to modify)|
     | ---------------- | ---------- | ---------- | ----------------------------------- |
     |                  |            |            |                                     |
     
   - Identify (possible) values
     
     | Characteristic   | b1         | b2         | b3... and so on(feel free to modify)|
     | ---------------- | ---------- | ---------- | ----------------------------------- |
     |                  |            |            |                                     |
     
6. Combine partitions to define test requirements
   - Assumption:
   - Test Requirements: number of test(upper bound) =
      - (,)
  
7. Derive test values

     | Test             |            |            | expected results|
     | ---------------- | ---------- | ---------- | --------------- |
     |  T1(,)           |            |            |                 |

</details> 

<details>
<summary><h3>Test case #1: <code> Just placeholder </code> </h3></summary>
   
### Name of the Test: 
### The goal of the test case:
### Tool using for testing:
### The characteristics developed for this test case:
   - **Interface-based:**
   - **Functionality-based:**
**Interface-based**
1. Identify testable functions
2. Identify parameters, return types, return values, and exceptional behavior
   - Parameters:
   - Return type:
   - Return value:
   - Exceptional behavior:
4. Model the input domain
   - Develop Characteristics
     - C1 =
   - Partition characteristics
     
     | Characteristic   | b1         | b2         | b3... and so on(feel free to modify)|
     | ---------------- | ---------- | ---------- | ----------------------------------- |
     |                  |            |            |                                     |
     
   - Identify (possible) values
     
     | Characteristic   | b1         | b2         | b3... and so on(feel free to modify)|
     | ---------------- | ---------- | ---------- | ----------------------------------- |
     |                  |            |            |                                     |
     
5. Combine partitions to define test requirements
   - Assumption:
   - Test Requirements: number of test (upper bound) =
      - (,)
  
6. Derive test values

     | Test             |            |            | expected results|
     | ---------------- | ---------- | ---------- | --------------- |
     |  T1(,)           |            |            |                 |
   
**Functionality-based**
1. Identify testable functions
3. Identify parameters, return types, return values, and exceptional behavior
   - Parameters: cal, epoch
   - Return type: long
   - Return value: cal.getTimeInMillis();
   - Exceptional behavior: ??
5. Model the input domain
   - Develop Characteristics
     - C1 =
   - Partition characteristics
     
     | Characteristic   | b1         | b2         | b3... and so on(feel free to modify)|
     | ---------------- | ---------- | ---------- | ----------------------------------- |
     |                  |            |            |                                     |
     
   - Identify (possible) values
     
     | Characteristic   | b1         | b2         | b3... and so on(feel free to modify)|
     | ---------------- | ---------- | ---------- | ----------------------------------- |
     |                  |            |            |                                     |
     
6. Combine partitions to define test requirements
   - Assumption:
   - Test Requirements: number of test(upper bound) =
      - (,)
  
7. Derive test values

     | Test             |            |            | expected results|
     | ---------------- | ---------- | ---------- | --------------- |
     |  T1(,)           |            |            |                 |

</details> 

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

