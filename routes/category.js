import { Router } from "express";
import cards from "../data/cards.json" assert { type: "json" };
import topCard from "../data/topCard.json" assert { type: "json" };
import featured from "../data/featured.json" assert { type: "json" };
import channels from "../data/liveChannels.json" assert { type: "json" };

export const categoryRouter = Router();

categoryRouter.get("/:category", (req, res) => {
  const { category } = req.params;

  if (category === "home") {
    const response = {
      topSec: topCard[category],
      featured,
      sections: [
        {
          label: "Latest Movies",
          data: cards,
        },
        {
          label: "Live Channels",
          data: channels,
        },
        {
          label: "Top Web Series",
          data: cards,
        },
      ],
    };

    res.send(response);
  } else if (
    category === "news" ||
    category === "kids" ||
    category === "shows" ||
    category === "music" ||
    category === "movies"
  ) {
    const response = {
      topSec: topCard[category],
      featured,
      sections: [
        {
          label: "Recommended Shows",
          data: cards,
        },
        {
          label: "Latest Movies",
          data: cards.reverse(),
        },
        {
          label: "Top Web Series",
          data: cards,
        },
      ],
    };

    res.send(response);
  } else {
    res.status(404).send({ message: "Category Not Found" });
  }
});
