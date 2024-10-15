import App from "./App.tsx";
import Irregular from "./pages/Irregular.tsx";
import Home from "./pages/Home.tsx";
import Plural from "./pages/Plural.tsx";
import Palindromes from "./pages/Palindromes.tsx";
import Numerals from "./pages/Numerals.tsx";
import WordSelection from "./pages/WordSelection.tsx";
import BulkTranslation from "./pages/BulkTranslation.tsx";
import FrequencyList from "./pages/FrequencyList.tsx";
import SpacedRepetition from "./pages/SpacedRepetition.tsx";
import Reviews from "./pages/Reviews.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "irregular",
        element: <Irregular />,
      },
      {
        path: "plural",
        element: <Plural />,
      },
      {
        path: "palindromes",
        element: <Palindromes />,
      },
      {
        path: "numerals",
        element: <Numerals />,
      },
      {
        path: "word-selection",
        element: <WordSelection />,
      },
      {
        path: "bulk-translation",
        element: <BulkTranslation />,
      },
      {
        path: "frequency-list",
        element: <FrequencyList />,
      },
      {
        path: "spaced-repetition",
        element: <SpacedRepetition />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
    ],
  },
];

export default routes;
