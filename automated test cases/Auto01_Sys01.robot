*** Settings ***
Documentation     Test suite for automating registration and login process.
Library           SeleniumLibrary

*** Variables ***
${URL}            https://sharewrap-69b7da4e01ff.herokuapp.com/
${BROWSER}        headlesschrome
${USERNAME}       Test17
${EMAIL}          test_17@gmail.com
${PASSWORD}       Test17
${INVALID_PASSWORD}       Test18

*** Test Cases ***
Register And Login User
    Open Browser To Homepage
    Press Sign Up
    Fill Registration Form And Submit
    Sleep    5s    # Waits for 5 seconds after registration
    Fill Login Form with Invalid Password And Submit
    Sleep    5s
    Fill Login Form And Submit

*** Keywords ***
Open Browser To Homepage
    Open Browser    ${URL}    ${BROWSER}
    Maximize Browser Window

Press Sign Up
    Click Element    //button[text()='Sign Up']

Fill Registration Form And Submit
    Input Text    id=username    ${USERNAME}
    Input Text    id=email       ${EMAIL}
    Input Text    id=password    ${PASSWORD}
    Input Text    id=confirmPassword    ${PASSWORD}
    Click Button    //button[text()='Register']

Fill Login Form with Invalid Password And Submit
    Wait Until Element Is Visible    id=email    10s
    Input Text    id=email       ${EMAIL}
    Input Text    id=password    ${INVALID_PASSWORD}
    Click Button    //button[text()='Login']

Fill Login Form And Submit
    Wait Until Element Is Visible    id=email    10s
    Input Text    id=email       ${EMAIL}
    Input Text    id=password    ${PASSWORD}
    Click Button    //button[text()='Login'] 

Click Button
    [Arguments]    ${xpath}
    Wait Until Element Is Visible    ${xpath}
    Click Element    ${xpath}

Close Browser
    Close All Browsers
