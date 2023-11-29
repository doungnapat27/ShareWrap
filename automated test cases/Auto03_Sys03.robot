*** Settings ***
Library    SeleniumLibrary


*** Variables ***
${URL}         https://sharewrap-69b7da4e01ff.herokuapp.com/
${EMAIL}       test_17@gmail.com
${PASSWORD}    Test17

*** Test Cases ***
Open Website And Login
    Open Browser    ${URL}    browser=chrome
    Maximize Browser Window
    Input Text    id=email       ${EMAIL}
    Input Text    id=password    ${PASSWORD}
    Click Element    //button[text()='Login']

Press Avatar and Logout
    Sleep    5s
    Click Avatar
    Sleep    5s
    Click Logout
    Sleep    3s

Open Website And Login
    Input Text    id=email       ${EMAIL}
    Input Text    id=password    ${PASSWORD}
    Click Element    //button[text()='Login']

*** Keywords ***
Click Avatar
    Click Element    css=.MuiAvatar-root

Click Logout
    Click Element    xpath=//li[contains(., 'Logout')]