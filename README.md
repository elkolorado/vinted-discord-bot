Vinted Discord Bot
This is a Discord bot that fetches the latest item added to a specific category on Vinted and sends the information to your Discord server. You can configure it to monitor different categories by specifying their IDs.

Prerequisites
Before running the bot, you'll need to install Node.js and download the bot repository.

Install Node.js: Download and install Node.js from https://nodejs.org/en.

Download the Bot: Clone or download this bot repository from https://github.com/chatlxrdd/vinted-discord-bot. You can download it as a ZIP file.

Installation
After downloading the repository, navigate to the folder where the bot is located using the Command Prompt (CMD).

Run the following command to install the required dependencies, including Puppeteer:

bash
Copy code
npm i puppeteer
Usage
To use the bot, follow these steps:

Start the bot by running the following command in the bot's folder:

bash
Copy code
node main.js
The bot will start running and monitor the categories specified in the main.js file. You can configure the categories by editing the catalogIds field in the script, as explained in the comments.

The bot will fetch the latest item added to each category and send the information to your Discord server.

Contributing
If you find this bot helpful, consider giving it a star on the GitHub repository at https://github.com/chatlxrdd/vinted-discord-bot.

Future Development
The future development of this bot may include:

Adding functionality to send data to a database.
Expanding the ability to create and monitor categories.
Feel free to contribute to the project or suggest new features.
