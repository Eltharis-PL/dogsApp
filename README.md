
## 🚀 Alpha-Testing

# Dog Breed Explorer

## Description

Dog Breed Explorer is a mobile application built using React Native that allows users to explore various dog breeds. The app provides two main screens: the List screen and the Search screen.

### List Screen

The List screen displays a list of different dog breeds. Each breed is represented as a clickable item in the list. When the user taps on a breed, the app fetches a random image of that breed and displays it along with a "Back" button to return to the list.

#### How it works

- The app fetches the list of all dog breeds from the Dog API (https://dog.ceo/api/breeds/list/all) using the axios library.
- The fetched breed names are then displayed as clickable items in a FlatList component.
- When a breed is selected, the app fetches a random image of that breed from the Dog API using the breed name and axios.
- The image is displayed on the screen along with a "Back" button that allows the user to return to the list.

### Search Screen

The Search screen allows users to search for a specific dog breed by entering its name in a search bar. Upon entering a breed name and tapping the search button, the app fetches a random image of the corresponding breed and displays it on the screen.

#### How it works

- The user enters a dog breed name in the search bar.
- Upon tapping the search button, the app makes a request to the Dog API with the entered breed name using axios.
- If the breed is found, the app displays the random image of the breed.
- If the breed is not found or there is an error during the request, appropriate error messages are displayed.

## Installation

To run the app locally on your machine, follow these steps:

1. Clone this repository to your local machine.
2. Install all dependencies by running `npm install`.
3. Run the app on an Android or iOS simulator/emulator using `npx react-native run-android` or `npx react-native run-ios`.

Feel free to explore different dog breeds using this app and enjoy the adorable images of our four-legged friends!

## Note

This app was developed as part of a personal project and uses the Dog API (https://dog.ceo/dog-api/) to fetch breed information and images. The Dog API is a free API that provides dog-related data and images.

## License

This project is licensed under the MIT License. Feel free to use and modify the code for your own purposes.

## Acknowledgments

Special thanks to the developers of the Dog API for providing free access to their data and images, which made this app possible.

## Screenshots


