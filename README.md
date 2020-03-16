# jebTimeTracker
TimeTracker JS Frontend

## Prerequisites
Run Ali Riza Saral's TimeTracker API Backend via ```docker run -d -p 8080:8080 alirizasaral/timetracker:1```

## Setup steps/manual how to deploy and start the frontend
1. Install Docker for your Linux distribution (mine: Ubuntu 19.10)
2. Clone this repository via ```git clone https://github.com/JBR87/jebTimeTracker```
3. Build Docker image via ```docker build -t jebtimetracker /dir/to/jebTimeTracker```
4. Run Docker image via ```docker run -p 80:80 jebtimetracker```

## Notes
In order to use both Ali Riza Saral's TimeTracker API Backend as well as the jebTimeTracker frontend on the same machine (localhost), you will need to install the Chromium plugin Moesif CORS. This will disable the CORS policy for localhost. This is because jebTimeTracker frontend is served on a different port on localhost (Port 80) than Ali Riza Saral's backend (Port 8080).


### Open to do's
- [ ] Catch for fetch API (error handling)
- [ ] Date Transformation (error handling)
- [ ] (Maybe) some CSS for table
- [x] Connecting Git and Github in Visual Studio Code


