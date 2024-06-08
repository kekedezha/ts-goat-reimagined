# GOAT 'REIMAGINED' 👟

GOAT 'Reimagined' is a redesign of a search on the streetwear/luxury website for sneakers, apparel and accessories, GOAT! 

<img width="1440" alt="Screenshot 2024-06-08 at 3 39 22 PM" src="https://github.com/kekedezha/ts-goat-reimagined/assets/105559393/a69b3c05-efdc-4564-b9c9-b623b52de497">


## Motivation ✍🏽

[GOAT's](https://www.goat.com/) current website has a UI/UX that is a bit outdated and has an unpleasant user experience, in my opinion. I wanted to start out with something simple and redesign part of the website because doing the full website might take a little bit more time and thought. I decided on a search for the Air Jordan 4 Retro. This obviously will not have every single shoe available but is more or less a preview of how the search would look like for the specified silhouette. 

<img width="1440" alt="Screenshot 2024-06-08 at 3 40 40 PM" src="https://github.com/kekedezha/ts-goat-reimagined/assets/105559393/ddf17171-8360-4f57-a1cb-f6f1e756cbfa">


## Features ✨

- Add items to cart for 'purchase'
- Switch between the products and a cart view that updates as you select items to 'buy'
- Cart view has a 'place order' button that mimics a purchase 

## Main Technologies 💻

- React
- TypeScript
- Vite
- DaisyUI
- TailwindCSS

## Future Improvements/Integrations 🤔

- Make more routes to the different pages you can go to and recreate the home page which is very overwhelming to look at/scroll through. 
- Add in user authentication
- Set up a mock payment setup
- Continue integrating features bit by bit to 'replace' the current website

## 🚦 Running the Project

To run the project in your local environment, follow these steps:

1. Clone the repository to your local machine
2. Run `npm install` or the project directory to install the required dependencies.
3. Run `npm start` or to get the project started.
4. Open a new terminal and run `npx json-server -w data/products.json -p 3500` to get a mock web server to serve static json files in the data directory. You may have to install json-server (`npm i json-server`)
5. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.(Development mode)
