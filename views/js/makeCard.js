const make_Card_Attribs = {
  // className: brutal - make_Card_Attribs,
  title: "",
  Location: null,
  date: Date(),
  pants: {
    color: [
      "white",
      "beige",
      "red",
      "blue",
      "black",
      "white",
      "yellow",
      "green",
      "purple",
      "grey"
    ],
    type: [
      "denim",
      "khaki",
      "sweatpants",
      `basketball shorts`,
      "athletic short"
    ]
  },
  shirt: {
    color: [
      "white",
      "beige",
      "red",
      "blue",
      "black",
      "white",
      "yellow",
      "green",
      "purple",
      "grey"
    ],
    type: [
      "shortsleeve",
      "long sleeve",
      "sweater",
      "hoodie",
      "button down",
      "3 button polo",
      "printed t-shirt",
      "solid t-shirt",
      "vertical stripes",
      "horizontal stripes",
      "rugby",
      {
        basketball: {
          Chicago: "Bulls",
          "Golden State": "Warriors",
          "Los Angelos": "Lakers",
          Charlotte: "Hornets",
          Maimi: "Heat",
          "L.A.": "Clippers",
          Other: "Other"
        },
        NFL: {
          "New York": "Jets",
          "N.Y.": "Giants",
          "New England": "Patriots",
          Other: ""
        },
        MLB: {
          "New York": "Mets",
          "N.Y.": "Yankees",
          Florida: "Marlins",
          "Los Angelos": "Dodgers",
          Philidelphia: "Phillies"
        },
        NHL: {
          "New Jersey": "Devils",
          Carolina: "Hurricanes",
          Philidelphia: "Flyers",
          Other: "Other"
        }
      }
    ]
  },
  brand: {
    0: [
      "Nike",
      "Addidas",
      "Ralph Lauren",
      "Hilfiger",
      "Gap",
      "Nautica",
      "Other"
    ]
  },
  shoe_Brand: {
    sneakers: [
      "Nike",
      "Addidas",
      "Converse",
      "Jordan",
      "Reebok",
      "New Balance",
      "Brooks",
      "Vans",
      "Other"
    ],
    shoes: ["Cole Hahn, Merril, Keen, Sperry, Other"]
  }
};

export { make_Card_Attribs };
