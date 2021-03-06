# Music search

This is a mini project executed according to a coding test.

👉 [Music search/AWS](https://d1fl43rrcxluvg.cloudfront.net/)

👉 [Music search/Netlify](https://hanuz06-music-search.netlify.com/)

Requirements:

1. Page should contain an input box for searching by string
2. Page should contain a button to submit the search
3. Page should make API call to
   https://6jgvj675p5.execute-api.us-west-2.amazonaws.com/production  
   a. GET request\
   b. Query parameter ‘q’ is the search string
4. API search results should be categorized by Song and Artist
5. API results should be displayed on page in two separate lists
6. User should be able to select favorite songs or artists
7. Favorites should be persisted in a​ local storage
8. On page refresh my favorites should be displayed
9. Search button should show loader/spinner while request is completed
10. Favorite songs or artists should be indicated by colored icon

## Downloading the project

Fork and clone this repo

## Running the project locally 

```sh
cd music-search
npm install
npm start
```

## Running the production version locally in Docker container

### Fire up the container:

```sh
docker-compose -f docker-compose-prod.yml up -d --build
```
### In browser go to this address:

```sh
http://localhost:81/
```

### To bring down the container:

```sh
docker-compose stop
```

## Screenshots

### App deployment schema to AWS

!["Screenshot of app deployment"](https://github.com/hanuz06/music-search/blob/master/public/images/react-ci-aws.png?raw=true)

### Display of found songs and artists. Selected favorites are noted with orange stars

!["Screenshot of selected favorite songs and/or artists"](https://github.com/hanuz06/music-search/blob/master/public/images/music-search-1.png?raw=true)

### Display of selected favorites after page refresh

!["Screenshot of selected favorites display after page refresh"](https://github.com/hanuz06/music-search/blob/master/public/images/music-search-2.png?raw=true)

### Search button showing loader/spinner while request is completed

!["Search button showing loader/spinner while request is completed"](https://github.com/hanuz06/music-search/blob/master/public/images/music-search-3.png?raw=true)

### Google Tag Manager

!["Google Tag Manager"](https://github.com/hanuz06/music-search/blob/master/public/images/ga-1.png?raw=true)

### Google Analytics

!["Google Analytics"](https://github.com/hanuz06/music-search/blob/master/public/images/music-search-ga.png?raw=true)

## Dependencies

- Node 12.x or above
- NPM 5.x or above
- react 16.9.0
- react-dom 16.9.0
- redux ^4.0.5
- react-redux ^7.2.0
- Axios
- Bulma
- Google Tag Manager
- Docker
