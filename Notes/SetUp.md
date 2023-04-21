1. Create a new repo in github (Js-Winter-Cucumber-2023)
    Send collaborator request to Ahsan or I (based on Lab session)
        Ahsan's email:  ahsan@technosoftacademy.io
        Deepak's email: deepak@technosoftacademy.io
2. In terminal/GitBash: Clone the new repo in local

3. In Visual Studio: Open cloned repo folder
4. In Visual Studio terminal: Create new branch
5. In Visual Studio terminal: Checkout on the new-branch

6. In Visual Studio terminal: Create node project
    Command: npm init –y

7. In Visual Studio terminal: Install WebDriver-IO cli
    Command: npm install @wdio/cli

8. In Visual Studio terminal: Set up wdio config file
    Command: npx wdio config
    ? A project named "js-winter-cucumber-2023" was detected at "/Users/deepaksharma/Documents/git/Js-Winter-Cucumber-2023", correct? Yes
	? Where should your tests be launched? local - for e2e testing of web and mobile applications
	? Where is your automation backend located? On my local machine
	? Which framework do you want to use? Cucumber (https://cucumber.io/)
	? Do you want to use a compiler? No!
	? Do you want WebdriverIO to autogenerate some test files? No
	? Which reporter do you want to use? allure
	? Do you want to add a plugin to your test setup? wait-for
	? Do you want to add a service to your test setup? chromedriver
	? What is the base url? https://www.facebook.com
	? Do you want me to run `npm install` (Y/n) Y
9. In Visual Studio terminal: Install chai
    Command: npm install chai
10. In Visual Studio terminal: Install moment
    Command: npm install moment

11. Create .gitignore file
12. add node_modules/ in .gitignore-file
13. add allure-results/ in .gitignore-file
14. add allure-report/ in .gitignore-file
15. add reports/ in .gitignore-file
16. Save .gitignore file

17. Create Pages folder
18. Create Tests folder
19. Create StepDefinitions folder

20. Add "Cucumber (Gherkin) Full Support" extension in VS-code
21. Add "Cucumber" extension in VS-code