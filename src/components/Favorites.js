import React from "react";
import FavoritesCard from "./elements/FavoritesCard";
import RecipeCard from "./elements/RecipeCard";
import FavoriteFoodCard from "./elements/FavoriteFoodCard";
import FavoriteSongCard from "./elements/FavoriteSongCard";

/** food images */
import GrilledCheese from "../images/demo-gallery/favorites/grilled-cheese.png";
import Borscht from "../images/demo-gallery/favorites/borscht.png";
import ApplePie from "../images/demo-gallery/favorites/apple-pie.png";
import ChickenKiev from "../images/demo-gallery/favorites/chicken-kiev.png";
import ClamChowder from "../images/demo-gallery/favorites/clam-chowder.png";
import CheeseCake from "../images/demo-gallery/favorites/new-york-cheesecake.png";

/** song images */
import Imagine from "../images/demo-gallery/favorites/imagine.png";
import Landslide from "../images/demo-gallery/favorites/landslide.png";
import Nocturne from "../images/demo-gallery/favorites/nocturne.png";
import BohemianRhapsody from "../images/demo-gallery/favorites/bohemian-rhapsody.png";

/** places images */
import SarahLawrenceCollege from "../images/demo-gallery/favorites/sarah-lawrence.png";
import HomeReadingNook from "../images/demo-gallery/favorites/home-reading-nook.png";
import LincolnPark from "../images/demo-gallery/favorites/lincoln-park.png";
import CentralPark from "../images/demo-gallery/favorites/central-park.png";

/** books images */
import FirstYouCry from "../images/demo-gallery/favorites/first-you-cry.png";
import Beloved from "../images/demo-gallery/favorites/beloved.png";
import TheGreatGatsby from "../images/demo-gallery/favorites/the-great-gatsby.png";
import LastWish from "../images/demo-gallery/favorites/last-wish.png";
import AmIGettingPaidForThis from "../images/demo-gallery/favorites/am-i-getting-paid-for-this.png";

/** movie images */
import Casablanca from "../images/demo-gallery/favorites/casablanca.png";
import RomanHoliday from "../images/demo-gallery/favorites/roman-holiday.png";
import TheGraduate from "../images/demo-gallery/favorites/the-graduate.png";

/** family recipe images and videos */
import ClassicBorscht from "../images/demo-gallery/favorites/classic-borscht.png";
import HomemadeApplePie from "../images/demo-gallery/favorites/homemade-apple-pie.png";
import Chapter1Video from "../images/chapter1.mp4";

function FavoritesPage() {
  const favoriteFoods = [
    {
      id: 0,
      heading: "American Grilled Cheese Sandwich",
      imageUrl: GrilledCheese,
    },
    {
      id: 1,
      heading: "Borscht",
      imageUrl: Borscht,
    },
    {
      id: 2,
      heading: "Apple Pie",
      imageUrl: ApplePie,
    },
    {
      id: 3,
      heading: "Chicken Kiev",
      imageUrl: ChickenKiev,
    },
    {
      id: 4,
      heading: "Clam Chowder",
      imageUrl: ClamChowder,
    },
    {
      id: 5,
      heading: "New York Cheesecake",
      imageUrl: CheeseCake,
    },
  ];

  const favoriteSongs = [
    {
      id: 0,
      heading: "Imagine",
      subheading: "John Lennon",
      imageUrl: Imagine,
    },
    {
      id: 1,
      heading: "Landslide",
      subheading: "Fleetwood Mac",
      imageUrl: Landslide,
    },
    {
      id: 2,
      heading: "Nocturne in E-flat major",
      subheading: "Chopin",
      imageUrl: Nocturne,
    },
    {
      id: 3,
      heading: "Bohemian Rhapsody",
      subheading: "Queen",
      imageUrl: BohemianRhapsody,
    },
  ];

  const favoritesPlaces = [
    {
      id: 0,
      heading: "Sarah Lawrence College",
      imageUrl: SarahLawrenceCollege,
    },
    {
      id: 1,
      heading: "Betty's Home Reading Nook",
      imageUrl: HomeReadingNook,
    },
    {
      id: 2,
      heading: "Lincoln Park, New York",
      imageUrl: LincolnPark,
    },
    {
      id: 3,
      heading: "Central Park, New York",
      imageUrl: CentralPark,
    },
  ];

  const favoriteMovies = [
    {
      id: 0,
      heading: "Casablanca",
      imageUrl: Casablanca,
    },
    {
      id: 1,
      heading: "Roman Holiday",
      imageUrl: RomanHoliday,
    },
    {
      id: 2,
      heading: "The Graduate",
      imageUrl: TheGraduate,
    },
  ];

  const favoriteBooks = [
    {
      id: 0,
      heading: "First, You Cry",
      subheading: "Betty Rollin",
      imageUrl: FirstYouCry,
    },
    {
      id: 1,
      heading: "Beloved",
      subheading: "Toni Morrison",
      imageUrl: Beloved,
    },
    {
      id: 2,
      heading: "The Great Gatsby",
      subheading: "F. Scott Fitzgerald",
      imageUrl: TheGreatGatsby,
    },
    {
      id: 3,
      heading: "Last Wish",
      subheading: "Betty Rollin",
      imageUrl: LastWish,
    },
    {
      id: 4,
      heading: "Am I Getting Paid?",
      subheading: "Betty Rollin",
      imageUrl: AmIGettingPaidForThis,
    },
  ];

  const familyRecipes = [
    {
      id: 0,
      heading: "Classic Borscht",
      subheading:
        "Borscht is a traditional beet soup that is hearty and flavorful, often served with a dollop of sour cream.",
      imageUrl: ClassicBorscht,
      videoUrl: Chapter1Video,
      buttonText: "View Recipe",
    },
    {
      id: 1,
      heading: "Homemade Apple Pie",
      subheading:
        "Borscht is a traditional beet soup that is hearty and flavorful, often served with a dollop of sour cream.",
      imageUrl: HomemadeApplePie,
      buttonText: "Coming Soon!",
    },
  ];

  const favoriteQuotesItems = [
    {
      id: 0,
      heading:
        '"The only way to make sense out of change is to plunge into it, move with it, and join the dance."',
      subheading: "Alan Watts",
    },
    {
      id: 1,
      heading: '"Life shrinks or expands in proportion to one\'s courage."',
      subheading: "Anais Nin",
    },
    {
      id: 3,
      heading:
        '"What lies behind us and what lies before us are tiny matters compared to what lies within us."',
      subheading: "Ralph Waldo Emerson",
    },
    {
      id: 4,
      heading:
        '"To affect the quality of the day, that is the highest of arts."',
      subheading: "Henry David Thoreau",
    },
  ];

  return (
    <div className="overall-favorites-container">
      <div className="category-container">
        <div className="category-header">Foods</div>
        <div className="food-container">
          {favoriteFoods.map((item, index) => {
            return (
              <FavoriteFoodCard
                imageUrl={item.imageUrl}
                heading={item.heading}
              />
            );
          })}
        </div>
      </div>
      <div className="category-container">
        <div className="category-header">Songs</div>
        <div className="item-container">
          {favoriteSongs.map((item, index) => {
            return (
              <FavoriteSongCard
                imageUrl={item.imageUrl}
                heading={item.heading}
                subheading={item.subheading}
              />
            );
          })}
        </div>
      </div>
      <div className="category-container">
        <div className="category-header">Places</div>
        <div className="item-container">
          {favoritesPlaces.map((item, index) => {
            return (
              <FavoritesCard
                imageUrl={item.imageUrl}
                heading={item.heading}
                subheading={item.subheading}
              />
            );
          })}
        </div>
      </div>
      <div className="category-container">
        <div className="category-header">Books</div>
        <div className="item-container">
          {favoriteBooks.map((item, index) => {
            return (
              <FavoritesCard
                imageUrl={item.imageUrl}
                heading={item.heading}
                subheading={item.subheading}
              />
            );
          })}
        </div>
      </div>
      <div className="category-container">
        <div className="category-header">Movies</div>
        <div className="item-container">
          {favoriteMovies.map((item, index) => {
            return (
              <FavoritesCard
                imageUrl={item.imageUrl}
                heading={item.heading}
                subheading={item.subheading}
              />
            );
          })}
        </div>
      </div>
      <div className="category-container">
        <div className="category-header">
          <div>Family Recipes</div>
        </div>
        <div className="item-container">
          {familyRecipes.map((item, index) => {
            return (
              <RecipeCard
                imageUrl={item.imageUrl}
                videoUrl={item.videoUrl}
                buttonText={item.buttonText}
                heading={item.heading}
                subheading={item.subheading}
              />
            );
          })}
        </div>
      </div>
      <div className="category-container">
        <div className="category-header">
          <div>Favorite Quotes</div>
        </div>
        <div className="item-container">
          {favoriteQuotesItems.map((item, index) => {
            return (
              <FavoritesCard
                imageUrl={item.imageUrl}
                heading={item.heading}
                subheading={item.subheading}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FavoritesPage;
