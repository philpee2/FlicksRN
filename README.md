# Project 1 - FlicksRN

FlicksRN is a movies app using the [The Movie Database API](http://docs.themoviedb.apiary.io/#).

Time spent: 15 hours spent in total

## User Stories

The following **required** functionality is completed:

- [x] User can view a list of movies currently playing in theaters. Poster images load asynchronously.
- [x] User can view movie details by tapping on a cell.
- [x] User can use hardware back button on Android to navigate.
- [x] User can change the orientation of the phone to switch from landscape and portrait customized views.
- [x] User sees loading state while waiting for the API.
- [x] User sees an error message when there is a network error.
- [x] User can pull to refresh the movie list.
- [x] Add a tab bar (view pager on Android) for **Now Playing** and **Top Rated** movies.

The following **optional** features are implemented:

- [ ] Customize the highlight and selection effect of the cell.
- [x] Add a search bar.
- [x] Customize the navigation bar.
- [ ] User sees a play icon overlay on backdrop image if movie trailer is available.
- [ ] User can tap on a button to play the movie trailer.
- [ ] Tapping on a movie poster image shows the movie poster as full screen and zoomable.
- [ ] All images fade in.
- [ ] Search bar animates with scroll.
- [ ] For the large poster, load the low-res image first, switch to high-res when complete.

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='http://g.recordit.co/YksEB2He7W.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with RecordIt

## Notes

Describe any challenges encountered while building the app.

I couldn't figure out how to get the separate tabs to maintain their own navigation history using
the custom TabBar component from the video walkthroughs, so instead I just used TabBarIOS

## License

    Copyright 2016 Phil Nachum

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
