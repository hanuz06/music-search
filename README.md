# Music search

This is a mini project executed according a code test.
It was deployed to AWS and netlify:

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

# Downloading the project

Fork and clone this repo

# Running the project localy

```sh
cd music-search
npm install
npm start
```

## Screenshots

### App deployment schema to AWS

!["Screenshot of selected favorites"](https://github.com/hanuz06/music-search/blob/master/public/images/react-ci-aws.png?raw=true)

### Found songs and artists. Selected favorites are noted with changed star color to orange

!["Screenshot of selected favorites"](https://github.com/hanuz06/music-search/blob/master/public/images/music-search-1.png?raw=true)

### Display of selected favorites after page refresh

!["Screenshot of selected favorites display after page refresh"](https://github.com/hanuz06/music-search/blob/master/public/images/music-search-2.png?raw=true)

### Search button showing loader/spinner while request is completed

!["Search button showing loader/spinner while request is completed"](https://github.com/hanuz06/music-search/blob/master/public/images/music-search-3.png?raw=true)


## Dependencies

- Node 12.x or above
- NPM 5.x or above
- Axios
- Bulma