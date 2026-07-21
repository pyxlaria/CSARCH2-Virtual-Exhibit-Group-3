# Final Iteration 
Website link: https://pyxlaria.github.io/CSARCH2-Virtual-Exhibit-Group-3/

## Project Title: Evolution of Windows OS
## Members:
- Lim, Ethan Yuric
- Gonzales, Ulrich
- Tiangson, Ezekiel
- Tan, Mynt
- Diego, Miguel

# Lessons Learned
The group massively understood the importance of rereading the specs BY A LOT, as one simple misread or misinterpretation can literally send an entire "in the process of building" project downwards by a lot of refactoring and backwards by 2 more weeks of which were crammed into 3 days. Furthermore, clearer communication channels and time periods for ONLY NEEDED meetings have been understood by the group to be crucial in terms of how productive a group can be. As always complacency is heavily punished for a project like this when it comes to time, effort, and mental resource, to which the group in their own respective mistakes over the course of this project have learned repeatedly over and over again. A couple of eureka moments popped here and there such as trying out different layout alternatives in terms of the UI, or how some certain decorative/functional elements were added/changed to improve upon the project's overall theme and whatnot. As always this project would've never been successfully completed without maintaining a sense of adequate accountability towards ourselves and to each other about who contributed what and how much.


# Challenges
Implementing Howler.js in our code proved to be a bit of a challenge. While this method was easier than using the base tools that react provided, it still took a bit of time to learn and understand how to make use of this new system. 

Optimization still proves to be a challenge as there are moments on lower-end devices, wherein the website may lag or sometimes be unresponsive. 

# Creative Development
Building off of our previous iteration, we decided to add the windows startup sound for every major version of Windows OS that we'd like to showcase. We wanted to implement this because the Windows OS startup sound has been such an iconic mainstay in the development and evolution of Windows as a whole. Some sound bytes are even used in modern pop culture today such as the Windows 95 startup sound and the Windows 3.0/3.1 startup sound.

In the quiz section of our exhibit, we also understand that some users may have hearing difficulties, or simply may not have the correct setup or environment to be able to listen to sound being played. In order to counteract this, we decided to implement a backup text-only question for question no.2. This took direct inspiration from the language-learning app duolingo where audio-based questions had the option to be swapped out for text-only questions if the user isn't able to listen to audio at the moment.

We also decided it would be better if we refactored majority of the UI into a different set of layouts, one that includes the timeline being on the sideline (right side) while a window on its left detailing what generally the OS look liked with all the necessary details and whatnot about its history and development and then beneath that is where the window for the prompt of the quiz on windows os is located, all of this to make sure it fits nicely in an overall minimalist aesthetic to make it "easy on the eyes" for the average viewer or in this case user.

----------
# Mid-milestone Iteration document

## Project Title: Evolution of Windows OS
## Members:
- Lim, Ethan Yuric
- Gonzales, Ulrich
- Tiangson, Ezekiel
- Tan, Mynt
- Diego, Miguel

# Lessons Learned

Vital communication is key when fixing one another's mistakes. Without it, we found it difficult to work independently because programming clashes in logic and syntax are likely to happen.

We also learned that the old adage, "figure out the logic and syntax will follow," does not always hold true in this case. One must understand both logic and syntax at the same time. Some group members experienced challenges when integrating their ideas into a different language paradigm.

Another lesson we learned as a group is that past submissions and their consequences are useful baselines for what we should improve next. We also had several "a-ha" moments when trying to find shortcuts for basic display areas in our program.

# Challenges

Creating the timeline mechanic was difficult. Setting up this feature required researching mechanics we were not familiar with at first. This process took days of research and testing to determine what worked and what did not.

Implementing alternating summary boxes also took time. Exploring ways to format and dynamically relocate each box to its most readable position was more difficult than we initially expected.

Keeping screen readers in mind was another challenge, although less than anticipated because accessibility commands are well documented on many websites, especially MDN: https://developer.mozilla.org.

Our main issue now is optimization, since there are still moments when the website buffers or slows down. We may consider other ways to display detailed content, but for now we are focused on ensuring the program and website work as intended in our proposal.

# Creative Development

We wanted the timeline to be easy to read and mobile-friendly. While the design is currently simple and may need more tweaks in the future, we added user-friendly features such as:

- Node expansion on hover
- Overlay elements that can be closed with the Escape key
- Alternating summary boxes for better readability and quick context
- Mobile behavior where summaries relocate to the center of the timeline

# Things To Be Done In The Final Submission

Given that the project in its entirety is still in its middle phase, a couple of noteworthy things to be done in and for the final submission include but are not limited to; theme finalization (from background color scheme, image layouts, and more), debugging of the needed functionalities (It’s still in its middle phase so there still might be some bugs or errors to be encountered along the way), polishing the front end all in all (this include text formatting, button animation, and more). An important missing piece for the project is the specific Windows ui images for visual aid, which will be added in the final output as well as the lengthening some definitions.

# AI Tool(s) Used

- Gemini
- ChatGPT

## How AI Tool(s) Were Used

- Idea polishing
- Idea compartmentalization
- Formatting
- Syntax library generation
- Assistance in syntax fixing
- Assistance in code debugging
- Assistance in in-line documentation

Extent of Use: Moderate - used for inspiration, knowledge checks, debugging, and syntax searching.

-------
# Proposal Iteration Document
# Group Title: Windows of The World: Evolution of The Windows Operating System

*Note: Topic Theme, Tech Stack Plan, and Design Snapshot have all been revised from previous iteration*

Group Member Roster: <br>
Ethan Yuric Lim <br>
Mynt Tan <br>
Ulrich Maeko Gonzales <br>
Miguel Diego <br>
Ezekiel Tiangson


## Group’s Topic Theme:
The group’s exhibit theme centers around the rich and specific history of how the Windows OS changed with the ever shifting consumer and industry demands over the past 40+ years, specifically starting when windows was merely an MS-DOS skin or in technical terms a GUI that’s on top of an already existing operating system. This theme for the exhibit will also cover the highs and lows of windows, most notable for the “golden age” time circa. 1995 - 2000s was when the Windows OS introduced the 32-bit architecture to the masses as well as being one at the forefront of the plug and play hardware era, in as well as the notable times when the Windows OS hit their noticeable lows circa. 2012 - 2017 when they decided to adapt smartphone OS standards to PC OS standards. Last but not the least this theme will also cover what improvements they are currently making to it or where is the Windows OS heading from here on out.

When it comes to Windows nothing says innovation than a crisis fueled change of which will be also tackled on this exhibit specifically those that involved “Code Red, Blaster, and Slammer” circa. 2001 - 2003, and as well as the windows vista “driver nightmare” 2007, to which the windows OS responded with a lot of improvements based on grounded reality such as the implementation of DEP (Data Execution Prevention): A hardware/software barrier that explicitly marks sectors of memory as "non-executable." If a hacker tries to inject code into a data-only memory slot, the CPU locks up and shuts down the app instantly instead of running the virus, and of course the Windows Driver Framework (WDF), forcing major architectural isolation, to keep the architectural side more compartmentalized and layered against possible crashes in the hardware.

The exhibit will emphasize on the visual and underlying concepts that powers Windows and its evolution from MS-DOS to the modern kernel that is currently utilized by computers and cloud infrastructures. The possible key areas that the group may apply are the MS-DOS shell, WIN32 API, hybrid kernel which uses the Hardware Abstraction Layer and the NTFS file system, and lastly, the modern kernel architecture. The chronological timeline will showcase the visual differences as well as the underlying concepts involved in the foundation of the different versions of the Windows OS.


## Tech Stack Plan:
Resources to be used: <br>
Node.js <br>
Astro 6 / Markdown Extended (.mdx) <br>
React.js <br>
Tailwind CSS <br>
Howler.js (for playback of audio elements) <br>

Interactive Element: <br>
The interactive element would be a chronological timeline alongside an integrated trivia system that allows users to test their knowledge and earn a score. 

The timeline features a series of nodes that maps each iteration of the Windows OS from a simple graphical overlay to a modern cloud-integrated operating system. Smaller regular nodes will be present that highlight key features, breakthroughs, or failures of a specific version of windows while larger major nodes will be used as anchors on the timeline, showcasing a new Windows OS iteration and any revolutionary advancements that were developed alongside it (i.e. The start menu for Windows 95). 

Throughout the timeline, interactive checkpoint nodes will be present and clickable. These nodes will quiz the users on what they have currently learned from previous information nodes. Such quizzes may include identifying the Windows OS version by it’s iconic startup sound, or identifying for what reason a major advancement has been designed. 

At the end of the timeline, The user will be shown a tally of their score and a title will be given to them based on their earned score (i.e. Windows expert for 100% score, Windows newcomer for a score <30%)

## Design Mockup Snapshot:
<img width="1920" height="1080" alt="csarch2 snapshot design new" src="https://github.com/user-attachments/assets/bf0dddcf-c76d-4f4f-a051-80aa64fe6f33" />
