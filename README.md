# CICD_repo

Kirjaudu sisään tunnuksilla root / sekret tai username 1 / salasana.

# Last push?

Do a pull request and ask GitHub user mluukkai to review your code. Once the review is done, merge your code to the main branch. Note that the reviewer needs to be a collaborator in the repository. Ping us in Discord to get the review, and to include the collaboration invite link to the message.

Please note what was written above, include the link to the collaboration invite in the ping, not the link to the pull request.

# 11.1 Question:

11.1 Warming up
Think about a hypothetical situation where we have an application being worked on by a team of about 6 people. The application is in active development and will be released soon.
Let us assume that the application is coded with some other language than JavaScript/TypeScript, e.g. in Python, Java, or Ruby. You can freely pick the language. This might even be a language you do not know much yourself.
Write a short text, say 200-300 words, where you answer or discuss some of the points below. You can check the length with https://wordcounter.net/. Save your answer to the file named exercise1.md in the root of the repository that you shall create in exercise 11.2.
The points to discuss:
Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by Google.
What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask Google!
Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?

# 11.1 Answer:

My chosen language for this assignment is Java. 

CI is an abbreviation from the word’s continuous integration. In layman’s terms this means that each programmer merges their changes to the main codebase daily so possible problems, errors or conflicts can be detect as soon as possible and can be fixed. The detection is done by automated test that are integrated to the main build and which are run on every build. Also, other programmers are supposed to review each other’s code from time to time. This should mean that the project has always deployable code in its main branch. 

CI can bee seen as a base for Continuous Delivery and Continuous Deployment. Neither of these two can be implemented without CI. Options for setting up CI are github, gitlab, buildmaster and circle CI to mention few.

Linting (nöyhtääminen?) is a part of CI and it is used to make sure that all created code is clean and maintainable. Most IDEs have built in tools for linting, for example Eclipse that can be installed with marketplace (if not readily available). On top of most IDEs having this feature there are purpose built programs for it like: sonarlint, spotless, spotbugs, checkstyle, google java format, errorprone etc. As you can see there are multiple options to add to a project.

Testing is used as part of CI to make sure that the code that is being committed to the main branch is working properly. Testing can refer to unit tests that test that the classes and functions work as expected. Testing can also refer to “visual testing” where the program checks that actions on a page (or in a program) still work on result in expected actions or views. Java has multiple testing frameworks that can be implements to mock real world examples. For testing functions the best known is Junit and for testing forms etc. one popular is robot framework.

Projects are often build in Java with the in built features of the IDE. For example Eclipse is often used with maven and its build are refereed usually as JVM builds. IntelliJ has its own configuration for builds and then there are also external options to create builds like Gradle.

As for the last question in this exercise, I don’t know what setup we are talking about yet. I suppose its going to be the 11.2 task. Nonetheless being a gambler Id say its better to set it up on cloud environment because from what I read on this chapter it seems bit more user friendly and is meant to be used with light weight projects, which I am 100% sure all of my projects are. 
