*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}         https://sharewrap-69b7da4e01ff.herokuapp.com/
${EMAIL}       test_17@gmail.com
${PASSWORD}    Test17

*** Test Cases ***
# Perform Web Actions On ShareWrap
    Open Website And Login
    Create New Bill
    Add Bill Items
    Add PromptPay Details
    Finalize Bill Creation

*** Keywords ***
Open Website And Login
    Open Browser    ${URL}    browser=chrome
    Maximize Browser Window
    Input Text    id=email       ${EMAIL}
    Input Text    id=password    ${PASSWORD}
    Click Element    //button[text()='Login']

Create New Bill
    Sleep    5s
    Wait Until Element Is Visible    //button[h4[text()='Create bill']]    10s
    Click Element    //button[h4[text()='Create bill']]
    Sleep    3s
    Wait Until Element Is Visible    //input[@name='title']     10s
    Input Text    //input[@name='title']    Aroiiiiiiiiiiii

Add Bill Items
    sleep    2s
    Input Text    (//input[@name='itemName'])[1]    Tom yum kung
    Input Text    (//input[@name='cost'])[1]    90
    Sleep    1s
    Wait Until Element Is Visible    //button[h5[text()='List of your shared stuff']]    10s
    Click Element    //button[h5[text()='List of your shared stuff']]
    Sleep    1s
    Input Text    (//input[@name='itemName'])[2]    Soup
    Input Text    (//input[@name='cost'])[2]    10
    Sleep    3s


Add PromptPay Details
    Click Element    //button[text()='PromptPay']
    Sleep    3s
    Click Element    //a[h5[text()='Add PromptPay details']]
    Sleep    3s
    Input Text    //input[@placeholder='Ex) Srisamorn Sanuksud'][@id='mui-2']    Rujiphart Charatvaraphan
    Sleep    3s
    Input Text    //input[@placeholder='Ex) 0123456789'][@id='mui-3']    0954289449
    Sleep    3s
    Click Element    //button[p[text()='Create PromptPay']]

Finalize Bill Creation
    Sleep    6s
    Click Element    //button[text()='Next']
    # Sleep    2s
    # Input Text    id=free-solo-dialog-demo    Test02-04957
    Sleep    4s
    Click Element    //input[@aria-label='Checkbox Friend']
    Sleep    2s
    Click Element    //button[text()='Next']
    Sleep    5s
    Click Element    //input[@aria-label='Switch Equal Splitting']
    Sleep    3s
    Click Element    //button[text()='Next']
    Sleep    3s
    Click Element    //button[text()='Create Bill']

Input And Submit Bill Item
    [Arguments]    ${item_name}    ${cost}
    Click Element    //button[h4[text()='Create bill']]
    Input Text    //input[@name='itemName']    ${item_name}
    Input Text    //input[@name='cost']    ${cost}
    Click Element    //button[text()='PromptPay']
