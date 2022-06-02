//make sure server has accesst to express
const express = require("express")
//everywhere you see app just means express
const app = express()
//set up server to hear request and generate a response
const PORT = 8000

//api data
const holbeinArtist = {
    "color" : {
        "number" : "G501",
        "name" : "Alizarin Crimson",
        "rating" : "**",
        "pigments" : "PR83",
    },
    "color" : {
        "number" : "G570",
        "name" : "Aqua Blue",
        "rating" : "**",
        "pigments" : "Pb15, PW6",
    },
    "color" : {
        "number" : "G574",
        "name" : "Ash Blue",
        "rating" : "**",
        "pigments" : "PB29, PV23, PBk6, PW6",
    },
    "color" : {
        "number" : "G555",
        "name" : "Ash Green",
        "rating" : "**",
        "pigments" : "PG7, PY42, PBk6, PW6",
    },
    "color" : {
        "number" : "G580",
        "name" : "Blue Violet",
        "rating" : "",
        "pigments" : "BV1",
    },
    "color" : {
        "number" : "G644",
        "name" : "Brilliant Gold",
        "rating" : "****",
        "pigments" : "PW20",
    },
    "color" : {
        "number" : "G508",
        "name" : "Brilliant Orange",
        "rating" : "*",
        "pigments" : "PO13",
    },
    "color" : {
        "number" : "G510",
        "name" : "Brilliant Pink",
        "rating" : "**",
        "pigments" : "PR209, PW6",
    },
    "color" : {
        "number" : "G646",
        "name" : "Brilliant Silver",
        "rating" : "****",
        "pigments" : "PW20",
    },
    "color" : {
        "number" : "G603",
        "name" : "Burnt Sienna",
        "rating" : "****",
        "pigments" : "PBr7, PR101",
    },
    "color" : {
        "number" : "G604",
        "name" : "Burnt Umber",
        "rating" : "****",
        "pigments" : "PBr7",
    },
    "color" : {
        "number" : "G543",
        "name" : "Cadmium Green",
        "rating" : "***",
        "pigments" : "PY35, PG7",
    },
    "color" : {
        "number" : "G552",
        "name" : "Cadmium Green Deep",
        "rating" : "***",
        "pigments" : "PY35, PG7, PB15",
    },
    "color" : {
        "number" : "G544",
        "name" : "Cadmium Green Pale",
        "rating" : "***",
        "pigments" : "PY35, PG7",
    },
    "color" : {
        "number" : "G504",
        "name" : "Cadmium Red",
        "rating" : "***",
        "pigments" : "PR108, PO20",
    },
    "color" : {
        "number" : "G505",
        "name" : "Cadmium Red Deep",
        "rating" : "***",
        "pigments" : "PR108",
    },
    "color" : {
        "number" : "G506",
        "name" : "Cadmium Red Purple",
        "rating" : "***",
        "pigments" : "PR108",
    },
    "color" : {
        "number" : "G523",
        "name" : "Cadmium Yellow",
        "rating" : "***",
        "pigments" : "PY35",
    },
    "color" : {
        "number" : "G524",
        "name" : "Cadmium Yellow Lemon",
        "rating" : "***",
        "pigments" : "PY35",
    },
    "color" : {
        "number" : "G525",
        "name" : "Cadmium Yellow Orange",
        "rating" : "***",
        "pigments" : "PO20",
    },
    "color" : {
        "number" : "G502",
        "name" : "Carmine",
        "rating" : "**",
        "pigments" : "PR170",
    },
    "color" : {
        "number" : "G562",
        "name" : "Cerulean Blue",
        "rating" : "****",
        "pigments" : "PB35",
    },
    "color" : {
        "number" : "G605",
        "name" : "Chinese Orange",
        "rating" : "**",
        "pigments" : "PR9, PO36, PR101",
    },
    "color" : {
        "number" : "G563",
        "name" : "Cobalt Blue",
        "rating" : "****",
        "pigments" : "PB28",
    },
    "color" : {
        "number" : "G551",
        "name" : "Cobalt Green Pale",
        "rating" : "***",
        "pigments" : "PG18, PB28, PW6",
    },
    "color" : {
        "number" : "G569",
        "name" : "Cobalt Turquoise",
        "rating" : "****",
        "pigments" : "PG50",
    },
    "color" : {
        "number" : "G583",
        "name" : "Cobalt Violet",
        "rating" : "***",
        "pigments" : "PV47",
    },
    "color" : {
        "number" : "G547",
        "name" : "Cyprus Green",
        "rating" : "**",
        "pigments" : "PY3, PG7, PB15",
    },
    "color" : {
        "number" : "G548",
        "name" : "Dark Green",
        "rating" : "***",
        "pigments" : "PG36, PB27",
    },
    "color" : {
        "number" : "G545",
        "name" : "Emerald Green",
        "rating" : "**",
        "pigments" : "PY3, PG7",
    },
    "color" : {
        "number" : "G507",
        "name" : "Flame Red",
        "rating" : "**",
        "pigments" : "PR9",
    },
    "color" : {
        "number" : "G503",
        "name" : "Geranium",
        "rating" : "*",
        "pigments" : "PR170, BV11",
    },
    "color" : {
        "number" : "G620",
        "name" : "Grey No. 1",
        "rating" : "***",
        "pigments" : "PBr11, PBk6, Pw6",
    },
    "color" : {
        "number" : "G621",
        "name" : "Grey No. 2",
        "rating" : "***",
        "pigments" : "PR101, PY42, PBk6, PW6",
    },
    "color" : {
        "number" : "G622",
        "name" : "Grey No. 3",
        "rating" : "***",
        "pigments" : "PBr7, PBk6, PW6",
    },
    "color" : {
        "number" : "G560",
        "name" : "Ice Blue",
        "rating" : "**",
        "pigments" : "PY3, PG7, PB15",
    },
    "color" : {
        "number" : "G586",
        "name" : "Iris",
        "rating" : "*",
        "pigments" : "PV23, BV7, BV15, PB29",
    },
    "color" : {
        "number" : "G606",
        "name" : "Ivory Black",
        "rating" : "****",
        "pigments" : "PBk6",
    },
    "color" : {
        "number" : "G530",
        "name" : "Jaune Brillant No. 1",
        "rating" : "***",
        "pigments" : "PO20, PY35, Pww6",
    },
    "color" : {
        "number" : "G531",
        "name" : "Jaune Brillant No. 2",
        "rating" : "***",
        "pigments" : "PO20, PY42, PW6",
    },
    "color" : {
        "number" : "G607",
        "name" : "Jet Black",
        "rating" : "**",
        "pigments" : "PBk1",
    },
    "color" : {
        "number" : "G568",
        "name" : "Katsura Blue",
        "rating" : "**",
        "pigments" : "PB15",
    },
    "color" : {
        "number" : "G540",
        "name" : "Leaf Green",
        "rating" : "**",
        "pigments" : "PY1, PY3, PG7",
    },
    "color" : {
        "number" : "G526",
        "name" : "Lemon Yellow",
        "rating" : "**",
        "pigments" : "PY3",
    },
    "color" : {
        "number" : "G587",
        "name" : "Lilac",
        "rating" : "**",
        "pigments" : "PV23, PW6",
    },
    "color" : {
        "number" : "G582",
        "name" : "Magenta",
        "rating" : "",
        "pigments" : "BV15",
    },
    "color" : {
        "number" : "G532",
        "name" : "Marigold",
        "rating" : "**",
        "pigments" : "PY83",
    },
    "color" : {
        "number" : "G553",
        "name" : "Moss Green",
        "rating" : "**",
        "pigments" : "PY42, PG8",
    },
    "color" : {
        "number" : "G528",
        "name" : "Naples Yellow",
        "rating" : "***",
        "pigments" : "PY35, PY42, PW6",
    },
    "color" : {
        "number" : "G529",
        "name" : "Naples Yellow Italian",
        "rating" : "***",
        "pigments" : "PY35, PY42, PW6",
    },
    "color" : {
        "number" : "G572",
        "name" : "Navy Blue",
        "rating" : "***",
        "pigments" : "PB29, PG7",
    },
    "color" : {
        "number" : "G546",
        "name" : "Olive Green",
        "rating" : "**",
        "pigments" : "PY1, PG8",
    },
    "color" : {
        "number" : "G584",
        "name" : "Opera",
        "rating" : "",
        "pigments" : "BR1, BV1, BV11",
    },
    "color" : {
        "number" : "G567",
        "name" : "Peacock Blue",
        "rating" : "***",
        "pigments" : "PB15, PG7",
    },
    "color" : {
        "number" : "G642",
        "name" : "Pearl Copper",
        "rating" : "****",
        "pigments" : "PW20",
    },
    "color" : {
        "number" : "G641",
        "name" : "Pearl Gold",
        "rating" : "****",
        "pigments" : "PW20",
    },
    "color" : {
        "number" : "G640",
        "name" : "Pearl White",
        "rating" : "****",
        "pigments" : "PW20",
    },
    "color" : {
        "number" : "G542",
        "name" : "Permanent Green Deep",
        "rating" : "**",
        "pigments" : "PY3, PG7, PB15",
    },
    "color" : {
        "number" : "G541",
        "name" : "Permanent Green Light",
        "rating" : "**",
        "pigments" : "Py3, PG7",
    },
    "color" : {
        "number" : "G630",
        "name" : "Permanent White",
        "rating" : "****",
        "pigments" : "PW6",
    },
    "color" : {
        "number" : "G520",
        "name" : "Permanent Yellow",
        "rating" : "**",
        "pigments" : "PY1",
    },
    "color" : {
        "number" : "G522",
        "name" : "Permanent Yellow Orange",
        "rating" : "**",
        "pigments" : "PY6",
    },
    "color" : {
        "number" : "G556",
        "name" : "Phthalo Green",
        "rating" : "***",
        "pigments" : "PG7",
    },
    "color" : {
        "number" : "G589",
        "name" : "Pink",
        "rating" : "*",
        "pigments" : "BV10, PW6",
    },
    "color" : {
        "number" : "G658",
        "name" : "Primary Black",
        "rating" : "****",
        "pigments" : "PBk7",
    },
    "color" : {
        "number" : "G654",
        "name" : "Primary Cyan",
        "rating" : "***",
        "pigments" : "PB15",
    },
    "color" : {
        "number" : "G651",
        "name" : "Primary Magenta",
        "rating" : "***",
        "pigments" : "PR122",
    },
    "color" : {
        "number" : "G659",
        "name" : "Primary White",
        "rating" : "****",
        "pigments" : "PW6",
    },
    "color" : {
        "number" : "G652",
        "name" : "Primary Yellow",
        "rating" : "***",
        "pigments" : "PY3, PY74",
    },
    "color" : {
        "number" : "G566",
        "name" : "Prussian Blue",
        "rating" : "**",
        "pigments" : "PB27",
    },
    "color" : {
        "number" : "G571",
        "name" : "Pure Blue",
        "rating" : "**",
        "pigments" : "PB15",
    },
    "color" : {
        "number" : "G509",
        "name" : "Pure Red",
        "rating" : "**",
        "pigments" : "PR170",
    },
    "color" : {
        "number" : "G601",
        "name" : "Raw Sienna",
        "rating" : "****",
        "pigments" : "PY42",
    },
    "color" : {
        "number" : "G643",
        "name" : "Raw Umber",
        "rating" : "****",
        "pigments" : "PBr7",
    },
    "color" : {
        "number" : "G643",
        "name" : "Rich Gold",
        "rating" : "****",
        "pigments" : "PW20",
    },
    "color" : {
        "number" : "G585",
        "name" : "Rose",
        "rating" : "",
        "pigments" : "BR1, BV7, BV11",
    },
    "color" : {
        "number" : "G588",
        "name" : "Rose Violet",
        "rating" : "***",
        "pigments" : "PR122",
    },
    "color" : {
        "number" : "G600",
        "name" : "Sepia",
        "rating" : "****",
        "pigments" : "PBr6, PBk6",
    },
    "color" : {
        "number" : "G654",
        "name" : "Silver",
        "rating" : "****",
        "pigments" : "PW20",
    },
    "color" : {
        "number" : "G573",
        "name" : "Smalt Blue",
        "rating" : "**",
        "pigments" : "PB29, PV23, PW6",
    },
    "color" : {
        "number" : "G550",
        "name" : "Terrre Verte",
        "rating" : "****",
        "pigments" : "PG17, PG23",
    },
    "color" : {
        "number" : "G561",
        "name" : "Turquoise Blue",
        "rating" : "**",
        "pigments" : "PG50, PB15, PG7, PW6",
    },
    "color" : {
        "number" : "G554",
        "name" : "Turquoise Green",
        "rating" : "***",
        "pigments" : "PG7, PW6",
    },
    "color" : {
        "number" : "G565",
        "name" : "Ultramarine Deep",
        "rating" : "***",
        "pigments" : "PB29",
    },
    "color" : {
        "number" : "G564",
        "name" : "Ultramarine Light",
        "rating" : "***",
        "pigments" : "PB29",
    },
    "color" : {
        "number" : "G581",
        "name" : "Violet",
        "rating" : "",
        "pigments" : "BV15, PB29",
    },
    "color" : {
        "number" : "G549",
        "name" : "Viridian",
        "rating" : "***",
        "pigments" : "PG18",
    },
    "color" : {
        "number" : "G527",
        "name" : "Yellow Ochre",
        "rating" : "****",
        "pigments" : "PY42, PY43",
    },
    "color" : {
        "number" : "G631",
        "name" : "Zinc White",
        "rating" : "****",
        "pigments" : "PW5",
    },
}

const royalTalens = {
    "color" : {
        "number" : "100",
        "name" : "White",
        "rating" : "***",
        "pigments" : "PW6, PW5",
    },
    "color" : {
        "number" : "106",
        "name" : "Opaque White",
        "rating" : "***",
        "pigments" : "PW6, PW5",
    },
    "color" : {
        "number" : "255",
        "name" : "Naples Yellow",
        "rating" : "***",
        "pigments" : "PW6, PY139, PY184",
    },
    "color" : {
        "number" : "205",
        "name" : "Lemon Yellow",
        "rating" : "**",
        "pigments" : "PY3",
    },
    "color" : {
        "number" : "201",
        "name" : "Light Yellow",
        "rating" : "**",
        "pigments" : "PY74, PY3",
    },
    "color" : {
        "number" : "200",
        "name" : "Yellow",
        "rating" : "***",
        "pigments" : "PY74, PO67",
    },
    "color" : {
        "number" : "202",
        "name" : "Deep Yellow",
        "rating" : "***",
        "pigments" : "PY74, PO67",
    },
    "color" : {
        "number" : "236",
        "name" : "Light Orange",
        "rating" : "***",
        "pigments" : "PY74, PO67",
    },
    "color" : {
        "number" : "235",
        "name" : "Orange",
        "rating" : "",
        "pigments" : "PR4, PY74",
    },
    "color" : {
        "number" : "224",
        "name" : "Naples Yellow Red",
        "rating" : "***",
        "pigments" : "PW6, PY42, PO43",
    },
    "color" : {
        "number" : "311",
        "name" : "Vermillion",
        "rating" : "*",
        "pigments" : "PR4",
    },
    "color" : {
        "number" : "301",
        "name" : "Light Red",
        "rating" : "**",
        "pigments" : "PR112 ",
    },
    "color" : {
        "number" : "334",
        "name" : "Scarlet",
        "rating" : "**",
        "pigments" : "PR112, PV19",
    },
    "color" : {
        "number" : "302",
        "name" : "Deep Red",
        "rating" : "**",
        "pigments" : "PR112, PV19",
    },
    "color" : {
        "number" : "318",
        "name" : "Carmine",
        "rating" : "*",
        "pigments" : "PR112, PR23",
    },
    "color" : {
        "number" : "375",
        "name" : "Bordeaux",
        "rating" : "*",
        "pigments" : "PR23",
    },
    "color" : {
        "number" : "397",
        "name" : "Permanent Rose",
        "rating" : "***",
        "pigments" : "PV19, PR122",
    },
    "color" : {
        "number" : "357",
        "name" : "Rose",
        "rating" : "***",
        "pigments" : "PV19",
    },
    "color" : {
        "number" : "362",
        "name" : "Deep Rose",
        "rating" : "**",
        "pigments" : "PV19, PR23",
    },
    "color" : {
        "number" : "545",
        "name" : "Red Violet",
        "rating" : "***",
        "pigments" : "PV19, PB29",
    },
    "color" : {
        "number" : "556",
        "name" : "Lilac",
        "rating" : "***",
        "pigments" : "PV23, PV19, PW6",
    },
    "color" : {
        "number" : "536",
        "name" : "Violet",
        "rating" : "***",
        "pigments" : "PV23, PV19",
    },
    "color" : {
        "number" : "548",
        "name" : "Blue Violet",
        "rating" : "***",
        "pigments" : "PV23, PB15, PB29",
    },
    "color" : {
        "number" : "505",
        "name" : "Ultramarine Light",
        "rating" : "***",
        "pigments" : "PB29",
    },
    "color" : {
        "number" : "506",
        "name" : "Ultramarine Deep",
        "rating" : "***",
        "pigments" : "PB29",
    },
    "color" : {
        "number" : "512",
        "name" : "Cobalt Blue",
        "rating" : "***",
        "pigments" : "PB29, PB15",
    },
    "color" : {
        "number" : "524",
        "name" : "Orient Blue",
        "rating" : "**",
        "pigments" : "PB15",
    },
    "color" : {
        "number" : "535",
        "name" : "Cerulean Blue",
        "rating" : "***",
        "pigments" : "PB15",
    },
    "color" : {
        "number" : "566",
        "name" : "Prussian Blue",
        "rating" : "***",
        "pigments" : "PB15",
    },
    "color" : {
        "number" : "501",
        "name" : "Light Blue",
        "rating" : "***",
        "pigments" : "Pb15",
    },
    "color" : {
        "number" : "526",
        "name" : "Azure Blue",
        "rating" : "***",
        "pigments" : "PB15, PG7",
    },
    "color" : {
        "number" : "522",
        "name" : "Turquoise Blue",
        "rating" : "**",
        "pigments" : "PB15, PG7, PW5",
    },
    "color" : {
        "number" : "243",
        "name" : "Greenish Yellow",
        "rating" : "**",
        "pigments" : "PY3, PG7",
    },
    "color" : {
        "number" : "601",
        "name" : "Light Green",
        "rating" : "***",
        "pigments" : "PY74, PG7",
    },
    "color" : {
        "number" : "600",
        "name" : "Green",
        "rating" : "**",
        "pigments" : "PY74, PG7",
    },
    "color" : {
        "number" : "615",
        "name" : "Emerald Green",
        "rating" : "**",
        "pigments" : "PY3, PG7",
    },
    "color" : {
        "number" : "602",
        "name" : "Deep Green",
        "rating" : "**",
        "pigments" : "PY3, PG7",
    },
    "color" : {
        "number" : "616",
        "name" : "Viridian",
        "rating" : "***",
        "pigments" : "PG7",
    },
    "color" : {
        "number" : "661",
        "name" : "Turquoise Green",
        "rating" : "**",
        "pigments" : "PG7, PB15",
    },
    "color" : {
        "number" : "654",
        "name" : "Fir Green",
        "rating" : "***",
        "pigments" : "PY74, PG7, PBk7",
    },
    "color" : {
        "number" : "620",
        "name" : "Olive Green",
        "rating" : "***",
        "pigments" : "PG7, PBr7, PY74",
    },
    "color" : {
        "number" : "227",
        "name" : "Yellow Ochre",
        "rating" : "***",
        "pigments" : "PY42",
    },
    "color" : {
        "number" : "234",
        "name" : "Raw Sienna",
        "rating" : "***",
        "pigments" : "PY42",
    },
    "color" : {
        "number" : "408",
        "name" : "Raw Umber",
        "rating" : "***",
        "pigments" : "PBk6, PY42, PO67",
    },
    "color" : {
        "number" : "401",
        "name" : "Light Brown",
        "rating" : "***",
        "pigments" : "PY42",
    },
    "color" : {
        "number" : "402",
        "name" : "Deep Brown",
        "rating" : "***",
        "pigments" : "PBr7, PO67",
    },
    "color" : {
        "number" : "339",
        "name" : "Light Oxide Red",
        "rating" : "***",
        "pigments" : "PR101, PO67",
    },
    "color" : {
        "number" : "411",
        "name" : "Burnt Sienna",
        "rating" : "***",
        "pigments" : "PR101",
    },
    "color" : {
        "number" : "427",
        "name" : "Havana Brown",
        "rating" : "*",
        "pigments" : "PR83:1, PBk7, PBr7",
    },
    "color" : {
        "number" : "409",
        "name" : "Burnt Umber",
        "rating" : "***",
        "pigments" : "PBr7, PBk11",
    },
    "color" : {
        "number" : "416",
        "name" : "Sepia",
        "rating" : "***",
        "pigments" : "PBr7, PBk11",
    },
    "color" : {
        "number" : "717",
        "name" : "Cold Grey",
        "rating" : "***",
        "pigments" : "PBk6",
    },
    "color" : {
        "number" : "718",
        "name" : "Warm Grey",
        "rating" : "***",
        "pigments" : "PBk6, PBr7",
    },
    "color" : {
        "number" : "703",
        "name" : "Black Intenso",
        "rating" : "***",
        "pigments" : "PBk9",
    },
    "color" : {
        "number" : "737",
        "name" : "Neutral Black",
        "rating" : "***",
        "pigments" : "PBk9",
    },
    "color" : {
        "number" : "800",
        "name" : "Silver",
        "rating" : "***",
        "pigments" : "PW6, PW15, PW20",
    },
    "color" : {
        "number" : "802",
        "name" : "Light Gold",
        "rating" : "***",
        "pigments" : "PW6, PW15, PW20",
    },
    "color" : {
        "number" : "803",
        "name" : "Deep Gold",
        "rating" : "***",
        "pigments" : "PW6, PW15, PW20",
    },
    "color" : {
        "number" : "805",
        "name" : "Copper",
        "rating" : "***",
        "pigments" : "PW6, PW15, PW20",
    },
    "color" : {
        "number" : "811",
        "name" : "Bronze",
        "rating" : "***",
        "pigments" : "PW6, PW15, PW20",
    },
}

const mGraham = {
    "color" : {
        "number" : "107",
        "name" : "Hansa Yellow",
        "rating" : "LF II",
        "pigments" : "PY3",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "070",
        "name" : "Cadmium Yellow Light",
        "rating" : "LF I",
        "pigments" : "PY35",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "018",
        "name" : "Azo Yellow",
        "rating" : "LF I",
        "pigments" : "PY151",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "060",
        "name" : "Cadmium Yellow",
        "rating" : "LF I",
        "pigments" : "PY35",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "105",
        "name" : "Gamboge",
        "rating" : "LF I",
        "pigments" : "PY151, PO62",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "038",
        "name" : "Cadmium Orange",
        "rating" : "LF I",
        "pigments" : "PO20",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "050",
        "name" : "Cadmium Red LIght",
        "rating" : "LF I",
        "pigments" : "PR108",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "120",
        "name" : "Naphthol Red",
        "rating" : "LF II",
        "pigments" : "PR112",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "155",
        "name" : "Quinacridone Red",
        "rating" : "LF I",
        "pigments" : "PR209",
        "opacity" : "Transparent"
    },
    "color" : {
        "number" : "154",
        "name" : "Pyrrol Red",
        "rating" : "LF I",
        "pigments" : "PR254, PR209",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "040",
        "name" : "Cadmium Red",
        "rating" : "LF I",
        "pigments" : "PR108",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "156",
        "name" : "Quinacridone Rose",
        "rating" : "LF I",
        "pigments" : "PV19",
        "opacity" : "Semi-Transparent"
    },
    "color" : {
        "number" : "010",
        "name" : "Alizarin Crimson",
        "rating" : "LF III",
        "pigments" : "PR83",
        "opacity" : "Semi-Transparent"
    },
    "color" : {
        "number" : "158",
        "name" : "Quinacridone Violet",
        "rating" : "LF I",
        "pigments" : "PV19",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "100",
        "name" : "Dioxazine Purple",
        "rating" : "LF II",
        "pigments" : "PV23",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "190",
        "name" : "Ultramarine Blue",
        "rating" : "LF I",
        "pigments" : "PB29",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "090",
        "name" : "Cobalt Blue",
        "rating" : "LF I",
        "pigments" : "PB28",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "080",
        "name" : "Cerulean Blue",
        "rating" : "LF I",
        "pigments" : "PB36",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "140",
        "name" : "Phthalocyanine Blue",
        "rating" : "LF I",
        "pigments" : "PB15:3",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "153",
        "name" : "Prussian Blue",
        "rating" : "LF I",
        "pigments" : "PB27",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "150",
        "name" : "Phthalocyanine Green",
        "rating" : "LF I",
        "pigments" : "PB7",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "195",
        "name" : "Viridian",
        "rating" : "LF I",
        "pigments" : "PG18",
        "opacity" : "Transparent"
    },
    "color" : {
        "number" : "130",
        "name" : "Permanent Green Light",
        "rating" : "LF I",
        "pigments" : "PG7, PY151",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "108",
        "name" : "Hookers Green",
        "rating" : "LF I",
        "pigments" : "PG7, PY110",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "174",
        "name" : "Sap Green Permanent",
        "rating" : "LF I",
        "pigments" : "PG7, PY110",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "200",
        "name" : "Yellow Ochre",
        "rating" : "LF I",
        "pigments" : "PY43",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "160",
        "name" : "Raw Sienna",
        "rating" : "LF I",
        "pigments" : "PBr7",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "020",
        "name" : "Burnt Sienna",
        "rating" : "LF I",
        "pigments" : "PBr7",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "030",
        "name" : "Burnt Umber",
        "rating" : "LF I",
        "pigments" : "PBr7",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "170",
        "name" : "Raw Umber",
        "rating" : "LF I",
        "pigments" : "PBr7",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "112",
        "name" : "Lamp Black",
        "rating" : "LF I",
        "pigments" : "PBk6",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "110",
        "name" : "Ivory Black",
        "rating" : "LF I",
        "pigments" : "PBk9",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "128",
        "name" : "Paynes Gray",
        "rating" : "LF I",
        "pigments" : "PBk9, PB29",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "205",
        "name" : "Zinc White",
        "rating" : "LF I",
        "pigments" : "PW4",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "180",
        "name" : "Titanium White",
        "rating" : "LF I",
        "pigments" : "PW6",
        "opacity" : "Opaque"
    },
}

const schminckeHoradam = {
    "color" : {
        "number" : "102",
        "name" : "Titanium White",
        "rating" : "*****",
        "pigments" : "PW6",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "103",
        "name" : "Zinc White",
        "rating" : "*****",
        "pigments" : "PW4",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "220",
        "name" : "Lemon Yellow",
        "rating" : "***",
        "pigments" : "PY3",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "222",
        "name" : "Vanadium Yellow",
        "rating" : "****",
        "pigments" : "PY184",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "224",
        "name" : "Cadmium Yellow Light",
        "rating" : "****",
        "pigments" : "PY35",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "226",
        "name" : "Cadmium Yellow Hue",
        "rating" : "****",
        "pigments" : "PY154",
        "opacity" : "Semi-Transparent"
    },
    "color" : {
        "number" : "228",
        "name" : "Cadmium Yellow Middle",
        "rating" : "****",
        "pigments" : "PY35",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "230",
        "name" : "Indian Yellow",
        "rating" : "*****",
        "pigments" : "PY153",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "232",
        "name" : "Cadmium Yellow Deep",
        "rating" : "*****",
        "pigments" : "PO20",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "234",
        "name" : "Cadmium Orange Hue",
        "rating" : "****",
        "pigments" : "PO62",
        "opacity" : "Semi-Transparent"
    },
    "color" : {
        "number" : "236",
        "name" : "Cadmium Orange",
        "rating" : "*****",
        "pigments" : "PO20",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "340",
        "name" : "Vermillion Hue",
        "rating" : "****",
        "pigments" : "PR255",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "342",
        "name" : "Cadmium Red Hue",
        "rating" : "***",
        "pigments" : "PR242",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "344",
        "name" : "Cadmium Red Light",
        "rating" : "*****",
        "pigments" : "PR108",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "346",
        "name" : "Cadmium Red Middle",
        "rating" : "*****",
        "pigments" : "PR108",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "348",
        "name" : "Cadmium Red Deep",
        "rating" : "*****",
        "pigments" : "PR108",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "350",
        "name" : "Scarlet Red",
        "rating" : "****",
        "pigments" : "PR254",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "352",
        "name" : "Carmine",
        "rating" : "****",
        "pigments" : "PV19",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "354",
        "name" : "Madder Lake Deep",
        "rating" : "**",
        "pigments" : "PR83:1",
        "opacity" : "Semi-Transparent"
    },
    "color" : {
        "number" : "356",
        "name" : "Madder Red Dark",
        "rating" : "****",
        "pigments" : "PV19, PR179",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "358",
        "name" : "Purple Magenta",
        "rating" : "****",
        "pigments" : "PR122",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "360",
        "name" : "Quinacridone Violet",
        "rating" : "****",
        "pigments" : "PV19",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "460",
        "name" : "Violet",
        "rating" : "***",
        "pigments" : "PV23",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "462",
        "name" : "Delft Blue",
        "rating" : "****",
        "pigments" : "PB60",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "464",
        "name" : "Ultramarine Deep",
        "rating" : "*****",
        "pigments" : "PB29",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "466",
        "name" : "Cobalt Blue Deep",
        "rating" : "****",
        "pigments" : "PB74, PB28",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "468",
        "name" : "Ultramarine Light",
        "rating" : "*****",
        "pigments" : "PB29",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "470",
        "name" : "Cobalt Blue Light",
        "rating" : "*****",
        "pigments" : "PB28",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "472",
        "name" : "Dark Blue Indigo",
        "rating" : "****",
        "pigments" : "PB60",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "474",
        "name" : "Helio Blue",
        "rating" : "****",
        "pigments" : "PB15:3",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "476",
        "name" : "Prussian Blue",
        "rating" : "***",
        "pigments" : "PB27",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "478",
        "name" : "Helio Turquoise",
        "rating" : "****",
        "pigments" : "Pb16",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "520",
        "name" : "Helio Green Bluish",
        "rating" : "****",
        "pigments" : "PG7",
        "opacity" : "Semi-Transparent"
    },
    "color" : {
        "number" : "522",
        "name" : "Chromium Oxide Green Brilliant",
        "rating" : "*****",
        "pigments" : "PG18",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "524",
        "name" : "Helio Green Yellowish",
        "rating" : "****",
        "pigments" : "PG36",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "526",
        "name" : "Cobalt Green Light",
        "rating" : "*****",
        "pigments" : "PG19",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "528",
        "name" : "Cobalt Green Deep",
        "rating" : "*****",
        "pigments" : "PG26",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "530",
        "name" : "Chromium Oxide Green",
        "rating" : "*****",
        "pigments" : "PG17",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "532",
        "name" : "Olive Green",
        "rating" : "****",
        "pigments" : "PG36, PO62",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "640",
        "name" : "Titanium Gold Ochre",
        "rating" : "*****",
        "pigments" : "PBr24",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "642",
        "name" : "Raw Umber",
        "rating" : "*****",
        "pigments" : "PBr7, PY42",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "644",
        "name" : "Raw Sienna",
        "rating" : "****",
        "pigments" : "PY119, PBk9",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "646",
        "name" : "English Red",
        "rating" : "*****",
        "pigments" : "PR101",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "648",
        "name" : "Burnt Sienna",
        "rating" : "*****",
        "pigments" : "PR101, PBr7, PBr33",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "650",
        "name" : "Burnt Umber",
        "rating" : "*****",
        "pigments" : "PR254, PR101, PBk7, PBr6",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "652",
        "name" : "Vandyke Brown",
        "rating" : "****",
        "pigments" : "PG23, PBk7, PBr7",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "785",
        "name" : "Neutral Grey",
        "rating" : "****",
        "pigments" : "PO62, PR255, PB60",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "787",
        "name" : "Ivory Black",
        "rating" : "****",
        "pigments" : "PBk1, PBk9",
        "opacity" : "Opaque"
    },
}

const schminckeDesigners = {
    "color" : {
        "number" : "198",
        "name" : "Mixing White",
        "rating" : "****",
        "pigments" : "PW4, PW7",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "199",
        "name" : "Permanent White",
        "rating" : "*****",
        "pigments" : "PW6",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "201",
        "name" : "Naples Yellow Light",
        "rating" : "***",
        "pigments" : "PW6, PY3, PY74, PY42",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "202",
        "name" : "Lemon Yellow",
        "rating" : "***",
        "pigments" : "PY3",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "203",
        "name" : "Cadmium Yellow Hue Lemon",
        "rating" : "***",
        "pigments" : "PY3, PY74",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "204",
        "name" : "Cadmium Yellow Hue Light",
        "rating" : "***",
        "pigments" : "PY74, PY83",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "205",
        "name" : "Cadmium Yellow Hue",
        "rating" : "****",
        "pigments" : "PY74, PY83",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "206",
        "name" : "Indian Yellow",
        "rating" : "****",
        "pigments" : "PY83, PO62",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "207",
        "name" : "Cadmium Yellow Hue Deep",
        "rating" : "***",
        "pigments" : "PO13, PY83",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "208",
        "name" : "Red Orange",
        "rating" : "**",
        "pigments" : "PO13",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "311",
        "name" : "Napeles Yellow Reddish",
        "rating" : "***",
        "pigments" : "PW5, PO36, PR242",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "312",
        "name" : "Vermilion",
        "rating" : "***",
        "pigments" : "PR4",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "313",
        "name" : "Geranium Red",
        "rating" : "***",
        "pigments" : "PR4, PR112",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "314",
        "name" : "Scarlet Red",
        "rating" : "***",
        "pigments" : "PR112",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "315",
        "name" : "Carmine Red",
        "rating" : "***",
        "pigments" : "PR5, PR112",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "316",
        "name" : "Madder Red",
        "rating" : "****",
        "pigments" : "PW5, PR187, PR112",
        "opacity" : "Semi-Opaque"
    },
    "color" : {
        "number" : "318",
        "name" : "Bordeaux",
        "rating" : "***",
        "pigments" : "PB254, PV19",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "325",
        "name" : "Magenta",
        "rating" : "****",
        "pigments" : "PR122, PV19",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "436",
        "name" : "Blue Violet",
        "rating" : "**",
        "pigments" : "PB29, PV23, Fluor.Pigm.",
        "opacity" : "Semi-Transparent"
    },
    "color" : {
        "number" : "438",
        "name" : "Indigo",
        "rating" : "****",
        "pigments" : "PB29, PB27, PB60, PBk10",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "439",
        "name" : "Cobalt Blue Hue Deep",
        "rating" : "****",
        "pigments" : "PW5, PB29, PG7",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "441",
        "name" : "Paris Blue",
        "rating" : "****",
        "pigments" : "PB15:1, PB15",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "442",
        "name" : "Ultramarine Blue Deep",
        "rating" : "*****",
        "pigments" : "PB29",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "443",
        "name" : "Ultramarine Blue LIght",
        "rating" : "*****",
        "pigments" : "PB29",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "444",
        "name" : "Cobalt Blue Hue Light",
        "rating" : "****",
        "pigments" : "PW7, PW5, PB29, PB15:3, PG7",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "446",
        "name" : "Sapphire Blue",
        "rating" : "****",
        "pigments" : "PW6, PB15:3, PB15",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "447",
        "name" : "Cerulean Blue",
        "rating" : "****",
        "pigments" : "Pw6, PB15:3, PG7",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "449",
        "name" : "Oriental Blue",
        "rating" : "****",
        "pigments" : "PW6, PB15:3, PG7",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "450",
        "name" : "Light Blue",
        "rating" : "***",
        "pigments" : "PW5, PB15:3, PG7",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "551",
        "name" : "Turquoise Bluish",
        "rating" : "****",
        "pigments" : "PW5, PB15, PG7",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "554",
        "name" : "Chromium Oxide green Hue",
        "rating" : "***",
        "pigments" : "PW5, PY3, PB15:3",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "557",
        "name" : "Leaf Green",
        "rating" : "***",
        "pigments" : "PW5, PY3, PY74, PG7",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "558",
        "name" : "Chromium Oxide Green",
        "rating" : "*****",
        "pigments" : "PG17",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "560",
        "name" : "Light Green",
        "rating" : "***",
        "pigments" : "PW5, PY74, PG50, PG7, PY42",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "561",
        "name" : "Fir Green",
        "rating" : "****",
        "pigments" : "PY153, PB15:3, PY42",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "562",
        "name" : "Olive Green",
        "rating" : "***",
        "pigments" : "PY3, PG17, PY42",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "563",
        "name" : "Sap Green",
        "rating" : "***",
        "pigments" : "PY3, Pg7, PY42",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "566",
        "name" : "Permanent Green Light",
        "rating" : "***",
        "pigments" : "PY3, PB15:3",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "671",
        "name" : "Yellow Ochre",
        "rating" : "*****",
        "pigments" : "PY42",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "672",
        "name" : "Gold Ochre",
        "rating" : "****",
        "pigments" : "PO13, PY83, PY42",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "673",
        "name" : "Raw Sienna",
        "rating" : "****",
        "pigments" : "PY83, PBr6, PY42",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "674",
        "name" : "Raw Umber",
        "rating" : "*****",
        "pigments" : "PY119, PBk9",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "675",
        "name" : "Umber Greenish",
        "rating" : "*****",
        "pigments" : "PG17, PY42, PBk11",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "676",
        "name" : "Burnt Umber",
        "rating" : "****",
        "pigments" : "PBr6, PR101, PY42, PBk7",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "677",
        "name" : "Vandyke Brown",
        "rating" : "****",
        "pigments" : "PR112, Pbr6, PR101, PBk7",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "678",
        "name" : "Burnt Sienna",
        "rating" : "*****",
        "pigments" : "PY42, PR101, PBr6",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "682",
        "name" : "English Red",
        "rating" : "*****",
        "pigments" : "PR4, PR101",
        "opacity" : "Opaque"
    },
    "color" : {
        "number" : "788",
        "name" : "Ivory Black",
        "rating" : "****",
        "pigments" : "PBk1, PBk9",
        "opacity" : "Opaque"
    },
}

// "/" is the main path
app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/index.html")
})

app.get("/api", (req, res)=> {
    res.json(holbeinArtist)
})

//need to tell the server to listen and can assign the port to a variable if you want
app.listen(PORT, ()=> {
    console.log(`The server is running on port ${PORT}.`)
})