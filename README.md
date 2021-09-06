# Parent Hero

Parent hero is a puzzle/detective game where the goal is to locate a lost item. In order to locate said item the hero - you - must solve certain riddles to gain access to rooms and objects that are in some ways blocked. The game is inspired by the classic text based role playing games of the early computers, as well as the adventure game Shadowgate and the detective game Déjà vu for the Nintendo Entertainment System.
The site with the game was build as a part of a diploma in fullstack software developlment in a course provided by code institute.

Link to deployed site: https://oljung.github.io/portfolio-project-two/

## 1. User Experience

### 1.1 Project introduction

The site is designed to give the user information about what the game is, as well as a guide on how to play, before actually starting the game. Parent Hero will try to recreate the classic feel of controlling your hero using text based commands, giving the user a sense of control and that anything is possible. The game looks and feel like a game from the 80's without all the shortcomings in UX that so often were the case back then. Guiding the hero through the challanges should be equally challanging and rewarding.

### 1.2 Design guidelines

Not everything that happened in the past was necessarily better, and the lack of information about how to use a system and how to play a game is a thing of the past that should best be left there. While some nostalgics may find the game, it is reasonable to assume that most user will have little to no experience playing a game like this. Therefore the first thing that greets the user will be a welcoming screen, shortly explaining what this is. The srartscreen will direct the user to an about page, giving more information about what the game is and how it came to be, as well as a "how to play" section. The "how to play" will use images and a step by step guide to help players get a basic understanding of how the game works.

### 1.3 Project goals

- Provide a challenging yet funny game that introduces new and younger players to old school text based games.

- Provide a trip down memory lane for older players who has previous experience playing similar games

- Create a functioning game that is both retro and unique, that excites players enough to want a "chapter 2"

### 1.4 Target audience

The main audience of the site are likely to be users who enjoy playing games, but have limited experience with this type of game. A portion of them will not be used to games at all. Another main part of the audience will be experienced and older players looking for a retro game to make them feel nostalgic and remember all the good times they had, without all the headaches that came along with them. I can therefore devide the taget audince into two main categories:

- User who have little experience with this type of game or little experience of games in general: <br>
**Needs:** Information about what type of game they are looking at, and why it looks the way it does. They will also want an in deapth explanation on how to play the game.<br>
**Goal:** Provide easily accessible information about the game and games like it in general as well as a guide on how to play. <br>
**How:** Create a landing page that provides some welcoming information and directs the user to an about and how to play section.

- User who used to play similar games before and are looking for retro games:<br>
**Needs:** To feel familiar and to recognize the layout and design as well as a reminder on how things work, to avoid the trail and error of the old days (that just spoils the fun).<br>
**Goal:** Design the game to look retro and close to the inspirational games, and provide encouragement for these users to find the "how to play" as well.<br>
**How:** Using pixelated images and old school fonts when presenting information. Using arrows and other pointers to the about/how to play to guide even these users to the information.

### 1.5 User stories

- As an ownder, I want to make sure new users are able to find sufficent information to play the game
- As an ownder, I want to make the user have the retro feel from the moment they enter the site
- As an ownder, I want to make sure the game is playable and that the clues left in the game are not to difficult to find
- As a user, I want to learn more about the inspiration for the game
- As a user, I want to learn how to play the game
- As a user, I want a retro game that is close enough to the classics to feel right, but still gives me a new experience
- As a user, I want to be able to save my progress
- As a user, I want to get the feeling of accomplishment, it must be clear if I won or not

### 1.6 Design

- Color scheme
    - The main colors used are slategray #708090 and darkslategray #2F4F4F as they are easy to look at for a long time, provides good contrast and give color without being to "loud". That suits well for a page users may be looking at for a long time. When used for background slategray was slightly to dark, so a lighter version #B5BEC5 was used.Slategray and darkslategray are used as highlight colors on the start screen. Slategray and darkslategray was also used to inspire the coloring of textboxes where the text is teh lighter version of slategray #B5BEC5 and the background is a darker version of darkslategray #1A2D2D. This change was made to improve contrast between the colors

- Typography
    - For the game screen text, as well as any heading and button text, the Press Start 2P font was used to give a retro game feel to the site. As reading to dense text with that font can feel uncomfortable, Quicksand font was used for p elements of the start page. All text on the game screen is 2P font for the retro styling of the game.

- Images
    - For the start screen images are mainly used to enhance imformation, as with the inspiration partm or with the how to play section. These images are also made modal to give the user the ability to enlarge the image for better viewing.
    - On the game screen images are used to add feeling and life to the game, making the player feel more engaged and help players immerse into the story.

## 2. Features

In this section the existing features are listed and explained. There is also a subsection for features to be implemented in the future, but fall outside of the scope for this project.

### 2.1 Existing features

- Start screen
    - When designing the start screen, it was important for the user to find the guide tabs. Using a tabbar at the top, where users normally look for that kind of navigation was therefore the obvious solution. Above the start button on the front page there is also a message encouraging new users to check those tabs out before playing.
    - About tab: Will display information about how the game came to be, what inspired it and links to further reading about them. Here the choice to use small images and then make them modal enlargeable was made to make the feel tighter and require less scrolling, especially on mobile devices
    - How-to-play tab: This tab was very important, as many users will have limited experience playing this type of game, or haven't done so in a long time. The numbered image showing the controls of the game was therefore made, making it easy to explain what everything on the screen does. A step by step guide to the game was also made, giving the player an idea of how to navigate the game's challanges.
- Game screen
    - The first important design choice for the game screen was to fit everything on the screen height to make sure the user doesn't need to scroll on the game screen. Therefore the size unit of vh was used a lit when designing the game screen.
    - The color scheme on the game screen was to be consistent with the start screen, with a black background to give it the feeling of the edges of an older screen.
    - When placing the game controls the inputs was to be displayed in the center, drawing the user's attention to what can be done, to further push on the interactivity part of the site. In the taxt part most space was given to the narrator text, as that will most often be the main focus for the information given to the player.

- Game story
    - The game has a story where the player has to solve an issue, that of the screaming child. To do so the player must navigate some hurdles in order to provide the girl with the toy she is crying for.
    - The story will end if the player makes certain ill informed choices, resulting in a game over screen.
    - The game will be won if the player is able to provide the missing toy, resulting in a game won screen.

### 2.2 Features left to implement

- Save feature <br>
Using browser storage the player will be able to pick up where he/she left the game. The will be checked on loading the DOM and set certain variables, room information and inventory to what the player had on exiting the game.

- 'Ground hog day' approach <br>
In true ground hog day fashion the character in the game will remember what went wrong the last time, and display information accordingly. This means the game will remember where the player went wrong and change information accordingly

- Story expansion <br>
The story can be viewed as an introduction scene. Given the time limit of this project a longer story was not possible to implement. In the future this story can be expanded, providing the user with a long and challanging journey for perhaps hours of retro gaming fun.

## 3. Technologies Used

### 3.1 Languages Used
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [Javascript](https://en.wikipedia.org/wiki/JavaScript)

### 3.2 Frameworks, Libraries and Programs Used

1. [Balsamiq](https://balsamiq.com/)
    - Balsamiq was used to create a wireframe during the design process.

1. [GitPod](https://gitpod.io)
    - GitPod was the IDE used to develop the site.

1. [GitHub](https://github.com/)
    - GitHub was used to store the project code and to deploy the site using GitHub pages.

1. [Google fonts](https://fonts.google.com/)
    - Google fonts was used to compare fonts and find suitable fonts that go well together.

1. [Font Awesome](https://fontawesome.com/)
    - Font awesome was used for symbols to add flavor to the site, and used for social media links.

1. [HTML validator](https://validator.w3.org/#validate_by_input)
    - Provided by W3C and used to validate the html on every page.

1. [CSS validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
    - Provided by W3C and used to validate the sites css.

1. [Javascript validator](https://jshint.com/)
    - A community driven validator to spot errors in Javascript code.

1. [Responsive design checker](https://www.responsivedesignchecker.com/)
    - Used to confirm responsiveness on different devices.

1. [tinypng](https://tinypng.com/)
    - Used to change image file size for shorter loading times without quiality loss.

1. [pinetool.com](https://pinetools.com/pixelate-effect-image)
    - Used to make images look pixalated.

1. [contrast tester](https://webaim.org/resources/contrastchecker/)
    - The Webaim contrast tester is used to check if contrast was good enough to display text on the selected background.
## 4. Testing

### 4.1 Validator testing

The HTML was tested using this [validator](https://validator.w3.org/) with no errors or warnings for any of the .html files
- [index](assets/images/readme-images/index-validation.png)
- [game](assets/images/readme-images/game-html-validation.png)

The CSS was tested using this [validator](https://jigsaw.w3.org/) returned with no errors and no warnings.

- [CSS validation result](assets/images/readme-images/css-validation.png)

The javascript files were tested using [JSHint](https://jshint.com/) and the game.js returned 37 warnings all related to the keywords "let" "const" and the template string syntax. The script.js file returned six warning all related to the "let" keyword. The unused variable in script.js is used in index.html as onclick function in button element.
- [script.js testing](assets/images/readme-images/script-js-validation.png)
- [game.js testing](assets/images/readme-images/game-js-validation.png)

### 4.2 Responsiveness and functionality

#### 4.2.1 Responsiveness
The site was tested using a responsiveness tester (see technologies used) and worked well for all screen sizes above screen width of 320, where some scrolling was needed. This is an issue for iPhone models blow iPhone 6.

#### 4.2.2 Browser compability
The site runs euqally satisfactory on Chrome, Firefox, IE, Edge and Safari.

#### 4.2.3 Contrast testing
Where text is written the contrast are:
Black on #B5BEC5 has a ratio of 11.13:1 and passed all tests<br>
Black on #2F4F4F has a ratio of 2.35:1 but is only used for social media icons and non active tabs. Howering will change color to #B5BEC5 to improve readability. This color contrast does not cause any major problems and was left in place<br>
Black on #708090 has a ratio of 5.17:1 and failed on of the test, but is only used with large text where it passes the test<br>
#B5BEC5 on #1A2D2D has a ratio of 7.64:1 and passes all tests<br>

### 4.3 Unfixed bugs
There are currently no known unfixed bugs in the project

### 4.4 Testing user Stories
- As an ownder, I want to make sure new users are able to find sufficent information to play the game
    - The about and how to play tabs help users with information about what the game is, and how to actually play the game.
- As an ownder, I want to make the user have the retro feel from the moment they enter the site
    - The color choice and font choice give a retro feel. The pixalated images on the game screen enhance that feeling.
- As an ownder, I want to make sure the game is playable and that the clues left in the game are not to difficult to find
    - From the players that have currently played the game, the diffuculty is enough to get more experienced players to think for a bit, but not too difficult for new players.
- As a user, I want to learn more about the inspiration for the game
    - The about tab provides information about inspiration and links to further reading and exploring.
- As a user, I want to learn how to play the game
    - The how to play tab has an image detailing the game screen and a step by step guide on how to play. From user testing this has proven sufficient.
- As a user, I want a retro game that is close enough to the classics to feel right, but still gives me a new experience
    - Users testing the game who remembers the games used as inspiration has declared a feeling of nostalgia.
- As a user, I want to be able to save my progress
    - This feature is currently not implemented, may be outside of project scope.
- As a user, I want to get the feeling of accomplishment, it must be clear if I won or not
    - The game has both game won and game over screens displayed at appropriate times to inform the user of how they performed.

## 5. Deployment

### 5.1 GutHup Pages

The site was deployed to GitHub pages. The steps to deploy are as follows:
1. Login to [GitHub](https://github.com/) and go to the GitHub repository.
1. In the GitHub repository, navigate to the Settings tab and select the "Pages" options to the left.
1. From the source section drop-down menu, select the Master Branch
1. Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - https://oljung.github.io/portfolio-project-two/

### 5.2 Make a clone
To clone the repository to make a local copy of it, follow these steps:
1. Login to [GitHub](https://github.com/) and locate the [repository](https://github.com/oljung/portfolio-project-two)
1. Under the repository name, click "Clone or download"
1. To clone the repository using HTTPS copy the link under "clone with HTTPS"
1. Open Git Bash
1. Change directory to where you want the clone to be saved
1. Use the command "git clone" and then paste the url you copied from step 3
```
$ git clone https://github.com/oljung/portfolio-project-two
```
7. Your clone will now be saved, and any commits will be saved to your new repository

## Credits

### Code


### Content


### Media

Images used on this site are from these open source galleries: [pixabay](https://pixabay.com/), [unsplash](https://unsplash.com/) and [istock](https://www.istockphoto.com/en).
