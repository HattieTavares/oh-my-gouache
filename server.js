//make sure server has accesst to express
const express = require("express")
//everywhere you see app just means express
const app = express()
//set up server to hear request and generate a response

const cors = require("cors")

const PORT = 8000

app.use(cors())

//api data
const brands = {    
    
    "Holbein Artist" : [
        {
            "number" : "G501",
            "name" : "Alizarin Crimson",
            "rating" : "**",
            "pigments" : "PR83",
            "opacity": "Not Listed",
            "hex" : "#5f071f"
        },
        {
            "number" : "G570",
            "name" : "Aqua Blue",
            "rating" : "**",
            "pigments" : "Pb15, PW6",
            "opacity": "Not Listed",
            "hex" : "#84c2e9"
        },
        {
            "number" : "G574",
            "name" : "Ash Blue",
            "rating" : "**",
            "pigments" : "PB29, PV23, PBk6, PW6",
            "opacity": "Not Listed",
            "hex" : "#567084"
        },
        {
            "number" : "G555",
            "name" : "Ash Green",
            "rating" : "**",
            "pigments" : "PG7, PY42, PBk6, PW6",
            "opacity": "Not Listed",
            "hex" : "#5a8a74"
        },
        {
            "number" : "G580",
            "name" : "Blue Violet",
            "rating" : "",
            "pigments" : "BV1",
            "opacity": "Not Listed",
            "hex" : "#402a75"
        },
        {
            "number" : "G644",
            "name" : "Brilliant Gold",
            "rating" : "****",
            "pigments" : "PW20",
            "opacity": "Not Listed",
            "hex" : "#d09630"
        },
        {
            "number" : "G508",
            "name" : "Brilliant Orange",
            "rating" : "*",
            "pigments" : "PO13",
            "opacity": "Not Listed",
            "hex" : "#e03a25"
        },
        {
            "number" : "G510",
            "name" : "Brilliant Pink",
            "rating" : "**",
            "pigments" : "PR209, PW6",
            "opacity": "Not Listed",
            "hex" : "#f7acbd"
        },
        {
            "number" : "G646",
            "name" : "Brilliant Silver",
            "rating" : "****",
            "pigments" : "PW20",
            "opacity": "Not Listed",
            "hex" : "#c1bcb6"
        },
        {
            "number" : "G603",
            "name" : "Burnt Sienna",
            "rating" : "****",
            "pigments" : "PBr7, PR101",
            "opacity": "Not Listed",
            "hex" : "#8a2c21"
        },
        {
            "number" : "G604",
            "name" : "Burnt Umber",
            "rating" : "****",
            "pigments" : "PBr7",
            "opacity": "Not Listed",
            "hex" : "#2f261f"
        },
        {
            "number" : "G543",
            "name" : "Cadmium Green",
            "rating" : "***",
            "pigments" : "PY35, PG7",
            "opacity": "Not Listed",
            "hex" : "#028d46"
        },
        {
            "number" : "G552",
            "name" : "Cadmium Green Deep",
            "rating" : "***",
            "pigments" : "PY35, PG7, PB15",
            "opacity": "Not Listed",
            "hex" : "#016138"
        },
        {
            "number" : "G544",
            "name" : "Cadmium Green Pale",
            "rating" : "***",
            "pigments" : "PY35, PG7",
            "opacity": "Not Listed",
            "hex" : "#7cc246"
        },
        {
            "number" : "G504",
            "name" : "Cadmium Red",
            "rating" : "***",
            "pigments" : "PR108, PO20",
            "opacity": "Not Listed",
            "hex" : "#e13b25"
        },
        {
            "number" : "G505",
            "name" : "Cadmium Red Deep",
            "rating" : "***",
            "pigments" : "PR108",
            "opacity": "Not Listed",
            "hex" : "#de1d38"
        },
        {
            "number" : "G506",
            "name" : "Cadmium Red Purple",
            "rating" : "***",
            "pigments" : "PR108",
            "opacity": "Not Listed",
            "hex" : "#ba1f3b"
        },
        {
            "number" : "G523",
            "name" : "Cadmium Yellow",
            "rating" : "***",
            "pigments" : "PY35",
            "opacity": "Not Listed",
            "hex" : "#f5e400"
        },
        {
            "number" : "G524",
            "name" : "Cadmium Yellow Lemon",
            "rating" : "***",
            "pigments" : "PY35",
            "opacity": "Not Listed",
            "hex" : "#f6e728"
        },
        {
            "number" : "G525",
            "name" : "Cadmium Yellow Orange",
            "rating" : "***",
            "pigments" : "PO20",
            "opacity": "Not Listed",
            "hex" : "#e87324"
        },
        {
            "number" : "G502",
            "name" : "Carmine",
            "rating" : "**",
            "pigments" : "PR170",
            "opacity": "Not Listed",
            "hex" : "#bc2128"
        },
        {
            "number" : "G562",
            "name" : "Cerulean Blue",
            "rating" : "****",
            "pigments" : "PB35",
            "opacity": "Not Listed",
            "hex" : "#4f7bbb"
        },
        {
            "number" : "G605",
            "name" : "Chinese Orange",
            "rating" : "**",
            "pigments" : "PR9, PO36, PR101",
            "opacity": "Not Listed",
            "hex" : "#bb2027"
        },
        {
            "number" : "G563",
            "name" : "Cobalt Blue",
            "rating" : "****",
            "pigments" : "PB28",
            "opacity": "Not Listed",
            "hex" : "#564c99"
        },
        {
            "number" : "G551",
            "name" : "Cobalt Green Pale",
            "rating" : "***",
            "pigments" : "PG18, PB28, PW6",
            "opacity": "Not Listed",
            "hex" : "#48a2a2"
        },
        {
            "number" : "G569",
            "name" : "Cobalt Turquoise",
            "rating" : "****",
            "pigments" : "PG50",
            "opacity": "Not Listed",
            "hex" : "#37b6c7"
        },
        {
            "number" : "G583",
            "name" : "Cobalt Violet",
            "rating" : "***",
            "pigments" : "PV47",
            "opacity": "Not Listed",
            "hex" : "#704491"
        },
        {
            "number" : "G547",
            "name" : "Cyprus Green",
            "rating" : "**",
            "pigments" : "PY3, PG7, PB15",
            "opacity": "Not Listed",
            "hex" : "#017176"
        },
        {
            "number" : "G548",
            "name" : "Dark Green",
            "rating" : "***",
            "pigments" : "PG36, PB27",
            "opacity": "Not Listed",
            "hex" : "#131718"
        },
        {
            "number" : "G545",
            "name" : "Emerald Green",
            "rating" : "**",
            "pigments" : "PY3, PG7",
            "opacity": "Not Listed",
            "hex" : "#039f59"
        },
        {
            "number" : "G507",
            "name" : "Flame Red",
            "rating" : "**",
            "pigments" : "PR9",
            "opacity": "Not Listed",
            "hex" : "#de1f27"
        },
        {
            "number" : "G503",
            "name" : "Geranium",
            "rating" : "*",
            "pigments" : "PR170, BV11",
            "opacity": "Not Listed",
            "hex" : "#cf1f34"
        },
        {
            "number" : "G620",
            "name" : "Grey No. 1",
            "rating" : "***",
            "pigments" : "PBr11, PBk6, Pw6",
            "opacity": "Not Listed",
            "hex" : "#e0e6ea"
        },
        {
            "number" : "G621",
            "name" : "Grey No. 2",
            "rating" : "***",
            "pigments" : "PR101, PY42, PBk6, PW6",
            "opacity": "Not Listed",
            "hex" : "#a1afa2"
        },
        {
            "number" : "G622",
            "name" : "Grey No. 3",
            "rating" : "***",
            "pigments" : "PBr7, PBk6, PW6",
            "opacity": "Not Listed",
            "hex" : "#7b7f70"
        },
        {
            "number" : "G560",
            "name" : "Ice Blue",
            "rating" : "**",
            "pigments" : "PY3, PG7, PB15",
            "opacity": "Not Listed",
            "hex" : "#00647d"
        },
        {
            "number" : "G586",
            "name" : "Iris",
            "rating" : "*",
            "pigments" : "PV23, BV7, BV15, PB29",
            "opacity": "Not Listed",
            "hex" : "#412974"
        },
        {
            "number" : "G606",
            "name" : "Ivory Black",
            "rating" : "****",
            "pigments" : "PBk6",
            "opacity": "Not Listed",
            "hex" : "#090b0a"
        },
        {
            "number" : "G530",
            "name" : "Jaune Brillant No. 1",
            "rating" : "***",
            "pigments" : "PO20, PY35, Pww6",
            "opacity": "Not Listed",
            "hex" : "#f9cc82"
        },
        {
            "number" : "G531",
            "name" : "Jaune Brillant No. 2",
            "rating" : "***",
            "pigments" : "PO20, PY42, PW6",
            "opacity": "Not Listed",
            "hex" : "#f1b04a"
        },
        {
            "number" : "G607",
            "name" : "Jet Black",
            "rating" : "**",
            "pigments" : "PBk1",
            "opacity": "Not Listed",
            "hex" : "#070908"
        },
        {
            "number" : "G568",
            "name" : "Katsura Blue",
            "rating" : "**",
            "pigments" : "PB15",
            "opacity": "Not Listed",
            "hex" : "#3d2b75"
        },
        {
            "number" : "G540",
            "name" : "Leaf Green",
            "rating" : "**",
            "pigments" : "PY1, PY3, PG7",
            "opacity": "Not Listed",
            "hex" : "#aed135"
        },
        {
            "number" : "G526",
            "name" : "Lemon Yellow",
            "rating" : "**",
            "pigments" : "PY3",
            "opacity": "Not Listed",
            "hex" : "#f9ea0c"
        },
        {
            "number" : "G587",
            "name" : "Lilac",
            "rating" : "**",
            "pigments" : "PV23, PW6",
            "opacity": "Not Listed",
            "hex" : "#a78dbc"
        },
        {
            "number" : "G582",
            "name" : "Magenta",
            "rating" : "",
            "pigments" : "BV15",
            "opacity": "Not Listed",
            "hex" : "#9b247c"
        },
        {
            "number" : "G532",
            "name" : "Marigold",
            "rating" : "**",
            "pigments" : "PY83",
            "opacity": "Not Listed",
            "hex" : "#f5da07"
        },
        {
            "number" : "G553",
            "name" : "Moss Green",
            "rating" : "**",
            "pigments" : "PY42, PG8",
            "opacity": "Not Listed",
            "hex" : "#50883e"
        },
        {
            "number" : "G528",
            "name" : "Naples Yellow",
            "rating" : "***",
            "pigments" : "PY35, PY42, PW6",
            "opacity": "Not Listed",
            "hex" : "#eed44b"
        },
        {
            "number" : "G529",
            "name" : "Naples Yellow Italian",
            "rating" : "***",
            "pigments" : "PY35, PY42, PW6",
            "opacity": "Not Listed",
            "hex" : "#f3d161"
        },
        {
            "number" : "G572",
            "name" : "Navy Blue",
            "rating" : "***",
            "pigments" : "PB29, PG7",
            "opacity": "Not Listed",
            "hex" : "#181f45"
        },
        {
            "number" : "G546",
            "name" : "Olive Green",
            "rating" : "**",
            "pigments" : "PY1, PG8",
            "opacity": "Not Listed",
            "hex" : "#1e753b"
        },
        {
            "number" : "G584",
            "name" : "Opera",
            "rating" : "",
            "pigments" : "BR1, BV1, BV11",
            "opacity": "Not Listed",
            "hex" : "#e11075"
        },
        {
            "number" : "G567",
            "name" : "Peacock Blue",
            "rating" : "***",
            "pigments" : "PB15, PG7",
            "opacity": "Not Listed",
            "hex" : "#26529a"
        },
        {
            "number" : "G642",
            "name" : "Pearl Copper",
            "rating" : "****",
            "pigments" : "PW20",
            "opacity": "Not Listed",
            "hex" : "#d66f5c"
        },
        {
            "number" : "G641",
            "name" : "Pearl Gold",
            "rating" : "****",
            "pigments" : "PW20",
            "opacity": "Not Listed",
            "hex" : "#f4d352"
        },
        {
            "number" : "G640",
            "name" : "Pearl White",
            "rating" : "****",
            "pigments" : "PW20",
            "opacity": "Not Listed",
            "hex" : "#ffffff"
        },
        {
            "number" : "G542",
            "name" : "Permanent Green Deep",
            "rating" : "**",
            "pigments" : "PY3, PG7, PB15",
            "opacity": "Not Listed",
            "hex" : "#006255"
        },
        {
            "number" : "G541",
            "name" : "Permanent Green Light",
            "rating" : "**",
            "pigments" : "Py3, PG7",
            "opacity": "Not Listed",
            "hex" : "#6ec05d"
        },
        {
            "number" : "G630",
            "name" : "Permanent White",
            "rating" : "****",
            "pigments" : "PW6",
            "opacity": "Not Listed",
            "hex" : "#ffffff"
        },
        {
            "number" : "G520",
            "name" : "Permanent Yellow",
            "rating" : "**",
            "pigments" : "PY1",
            "opacity": "Not Listed",
            "hex" : "#f5e100"
        },
        {
            "number" : "G522",
            "name" : "Permanent Yellow Orange",
            "rating" : "**",
            "pigments" : "PY6",
            "opacity": "Not Listed",
            "hex" : "#efa51f"
        },
        {
            "number" : "G556",
            "name" : "Phthalo Green",
            "rating" : "***",
            "pigments" : "PG7",
            "opacity": "Not Listed",
            "hex" : "#025b4b"
        },
        {
            "number" : "G589",
            "name" : "Pink",
            "rating" : "*",
            "pigments" : "BV10, PW6",
            "opacity": "Not Listed",
            "hex" : "#d2a3c5"
        },
        {
            "number" : "G658",
            "name" : "Primary Black",
            "rating" : "****",
            "pigments" : "PBk7",
            "opacity": "Not Listed",
            "hex" : "#22171f"
        },
        {
            "number" : "G654",
            "name" : "Primary Cyan",
            "rating" : "***",
            "pigments" : "PB15",
            "opacity": "Not Listed",
            "hex" : "#375eab"
        },
        {
            "number" : "G651",
            "name" : "Primary Magenta",
            "rating" : "***",
            "pigments" : "PR122",
            "opacity": "Not Listed",
            "hex" : "#a11d4d"
        },
        {
            "number" : "G659",
            "name" : "Primary White",
            "rating" : "****",
            "pigments" : "PW6",
            "opacity": "Not Listed",
            "hex" : "#ffffff"
        },
        {
            "number" : "G652",
            "name" : "Primary Yellow",
            "rating" : "***",
            "pigments" : "PY3, PY74",
            "opacity": "Not Listed",
            "hex" : "#fce503"
        },
        {
            "number" : "G566",
            "name" : "Prussian Blue",
            "rating" : "**",
            "pigments" : "PB27",
            "opacity": "Not Listed",
            "hex" : "#141127"
        },
        {
            "number" : "G571",
            "name" : "Pure Blue",
            "rating" : "**",
            "pigments" : "PB15",
            "opacity": "Not Listed",
            "hex" : "#304295"
        },
        {
            "number" : "G509",
            "name" : "Pure Red",
            "rating" : "**",
            "pigments" : "PR170",
            "opacity": "Not Listed",
            "hex" : "#dd1f27"
        },
        {
            "number" : "G601",
            "name" : "Raw Sienna",
            "rating" : "****",
            "pigments" : "PY42",
            "opacity": "Not Listed",
            "hex" : "#b47b2a"
        },
        {
            "number" : "G643",
            "name" : "Raw Umber",
            "rating" : "****",
            "pigments" : "PBr7",
            "opacity": "Not Listed",
            "hex" : "#78632c"
        },
        {
            "number" : "G643",
            "name" : "Rich Gold",
            "rating" : "****",
            "pigments" : "PW20",
            "opacity": "Not Listed",
            "hex" : "#d3942b"
        },
        {
            "number" : "G585",
            "name" : "Rose",
            "rating" : "",
            "pigments" : "BR1, BV7, BV11",
            "opacity": "Not Listed",
            "hex" : "#cf147b"
        },
        {
            "number" : "G588",
            "name" : "Rose Violet",
            "rating" : "***",
            "pigments" : "PR122",
            "opacity": "Not Listed",
            "hex" : "#9a1c52"
        },
        {
            "number" : "G600",
            "name" : "Sepia",
            "rating" : "****",
            "pigments" : "PBr6, PBk6",
            "opacity": "Not Listed",
            "hex" : "#21241d"
        },
        {
            "number" : "G654",
            "name" : "Silver",
            "rating" : "****",
            "pigments" : "PW20",
            "opacity": "Not Listed",
            "hex" : "#d6d6d6"
        },
        {
            "number" : "G573",
            "name" : "Smalt Blue",
            "rating" : "**",
            "pigments" : "PB29, PV23, PW6",
            "opacity": "Not Listed",
            "hex" : "#6a71b1"
        },
        {
            "number" : "G550",
            "name" : "Terre Verte",
            "rating" : "****",
            "pigments" : "PG17, PG23",
            "opacity": "Not Listed",
            "hex" : "#196936"
        },
        {
            "number" : "G561",
            "name" : "Turquoise Blue",
            "rating" : "**",
            "pigments" : "PG50, PB15, PG7, PW6",
            "opacity": "Not Listed",
            "hex" : "#0073b3"
        },
        {
            "number" : "G554",
            "name" : "Turquoise Green",
            "rating" : "***",
            "pigments" : "PG7, PW6",
            "opacity": "Not Listed",
            "hex" : "#62bea9"
        },
        {
            "number" : "G565",
            "name" : "Ultramarine Deep",
            "rating" : "***",
            "pigments" : "PB29",
            "opacity": "Not Listed",
            "hex" : "#402a75"
        },
        {
            "number" : "G564",
            "name" : "Ultramarine Light",
            "rating" : "***",
            "pigments" : "PB29",
            "opacity": "Not Listed",
            "hex" : "#383086"
        },
        {
            "number" : "G581",
            "name" : "Violet",
            "rating" : "",
            "pigments" : "BV15, PB29",
            "opacity": "Not Listed",
            "hex" : "#69287a"
        },
        // "color" : {
        //     "number" : "G549",
        //     "name" : "Viridian",
        //     "rating" : "***",
        //     "pigments" : "PG18",
        //     "opacity": "Not Listed",
        //     "hex" : "#CEC8CA"
        // },
        {
            "number" : "G527",
            "name" : "Yellow Ochre",
            "rating" : "****",
            "pigments" : "PY42, PY43",
            "opacity": "Not Listed",
            "hex" : "#c2962d"
        },
        {
            "number" : "G631",
            "name" : "Zinc White",
            "rating" : "****",
            "pigments" : "PW5",
            "opacity": "Not Listed",
            "hex" : "#ffffff"
        },
    ],

    "Royal Talens" : [
        {
            "number" : "100",
            "name" : "White",
            "rating" : "***",
            "pigments" : "PW6, PW5",
            "opacity": "Not Listed",
            "hex" : "#EBEAEF"
        },
        {
            "number" : "106",
            "name" : "Opaque White",
            "rating" : "***",
            "pigments" : "PW6, PW5",
            "opacity": "Not Listed",
            "hex" : "#EBEAEF"
        },
        {
            "number" : "255",
            "name" : "Naples Yellow",
            "rating" : "***",
            "pigments" : "PW6, PY139, PY184",
            "opacity": "Not Listed",
            "hex" : "#FFE5AC"
        },
        {
            "number" : "205",
            "name" : "Lemon Yellow",
            "rating" : "**",
            "pigments" : "PY3",
            "opacity": "Not Listed",
            "hex" : "#FFE200"
        },
        {
            "number" : "201",
            "name" : "Light Yellow",
            "rating" : "**",
            "pigments" : "PY74, PY3",
            "opacity": "Not Listed",
            "hex" : "#FFE5AC"
        },
        {
            "number" : "200",
            "name" : "Yellow",
            "rating" : "***",
            "pigments" : "PY74, PO67",
            "opacity": "Not Listed",
            "hex" : "#FECE00"
        },
        {
            "number" : "202",
            "name" : "Deep Yellow",
            "rating" : "***",
            "pigments" : "PY74, PO67",
            "opacity": "Not Listed",
            "hex" : "#FFAD01"
        },
        {
            "number" : "236",
            "name" : "Light Orange",
            "rating" : "***",
            "pigments" : "PY74, PO67",
            "opacity": "Not Listed",
            "hex" : "#FE7A0D"
        },
        {
            "number" : "235",
            "name" : "Orange",
            "rating" : "",
            "pigments" : "PR4, PY74",
            "opacity": "Not Listed",
            "hex" : "#FE5531"
        },
        {
            "number" : "224",
            "name" : "Naples Yellow Red",
            "rating" : "***",
            "pigments" : "PW6, PY42, PO43",
            "opacity": "Not Listed",
            "hex" : "#FEBD9F"
        },
        {
            "number" : "311",
            "name" : "Vermillion",
            "rating" : "*",
            "pigments" : "PR4",
            "opacity": "Not Listed",
            "hex" : "#FF1E36"
        },
        {
            "number" : "301",
            "name" : "Light Red",
            "rating" : "**",
            "pigments" : "PR112 ",
            "opacity": "Not Listed",
            "hex" : "#FE0130"
        },
        {
            "number" : "334",
            "name" : "Scarlet",
            "rating" : "**",
            "pigments" : "PR112, PV19",
            "opacity": "Not Listed",
            "hex" : "#F9013B"
        },
        {
            "number" : "302",
            "name" : "Deep Red",
            "rating" : "**",
            "pigments" : "PR112, PV19",
            "opacity": "Not Listed",
            "hex" : "#EF0246"
        },
        {
            "number" : "318",
            "name" : "Carmine",
            "rating" : "*",
            "pigments" : "PR112, PR23",
            "opacity": "Not Listed",
            "hex" : "#F70045"
        },
        {
            "number" : "375",
            "name" : "Bordeaux",
            "rating" : "*",
            "pigments" : "PR23",
            "opacity": "Not Listed",
            "hex" : "#E7014C"
        },
        {
            "number" : "397",
            "name" : "Permanent Rose",
            "rating" : "***",
            "pigments" : "PV19, PR122",
            "opacity": "Not Listed",
            "hex" : "#FB056A"
        },
        {
            "number" : "357",
            "name" : "Rose",
            "rating" : "***",
            "pigments" : "PV19",
            "opacity": "Not Listed",
            "hex" : "#FE1473"
        },
        {
            "number" : "362",
            "name" : "Deep Rose",
            "rating" : "**",
            "pigments" : "PV19, PR23",
            "opacity": "Not Listed",
            "hex" : "#FF1571"
        },
        {
            "number" : "545",
            "name" : "Red Violet",
            "rating" : "***",
            "pigments" : "PV19, PB29",
            "opacity": "Not Listed",
            "hex" : "#D00199"
        },
        {
            "number" : "556",
            "name" : "Lilac",
            "rating" : "***",
            "pigments" : "PV23, PV19, PW6",
            "opacity": "Not Listed",
            "hex" : "#CE87E3"
        },
        {
            "number" : "536",
            "name" : "Violet",
            "rating" : "***",
            "pigments" : "PV23, PV19",
            "opacity": "Not Listed",
            "hex" : "#9E01C1"
        },
        {
            "number" : "548",
            "name" : "Blue Violet",
            "rating" : "***",
            "pigments" : "PV23, PB15, PB29",
            "opacity": "Not Listed",
            "hex" : "#2713C5"
        },
        {
            "number" : "505",
            "name" : "Ultramarine Light",
            "rating" : "***",
            "pigments" : "PB29",
            "opacity": "Not Listed",
            "hex" : "#0533EF"
        },
        {
            "number" : "506",
            "name" : "Ultramarine Deep",
            "rating" : "***",
            "pigments" : "PB29",
            "opacity": "Not Listed",
            "hex" : "#0019E5"
        },
        {
            "number" : "512",
            "name" : "Cobalt Blue",
            "rating" : "***",
            "pigments" : "PB29, PB15",
            "opacity": "Not Listed",
            "hex" : "#0261F1"
        },
        {
            "number" : "524",
            "name" : "Orient Blue",
            "rating" : "**",
            "pigments" : "PB15",
            "opacity": "Not Listed",
            "hex" : "#025AE0"
        },
        {
            "number" : "535",
            "name" : "Cerulean Blue",
            "rating" : "***",
            "pigments" : "PB15",
            "opacity": "Not Listed",
            "hex" : "#019CEE"
        },
        {
            "number" : "566",
            "name" : "Prussian Blue",
            "rating" : "***",
            "pigments" : "PB15",
            "opacity": "Not Listed",
            "hex" : "#032C9E"
        },
        {
            "number" : "501",
            "name" : "Light Blue",
            "rating" : "***",
            "pigments" : "Pb15",
            "opacity": "Not Listed",
            "hex" : "#005ED9"
        },
        {
            "number" : "526",
            "name" : "Azure Blue",
            "rating" : "***",
            "pigments" : "PB15, PG7",
            "opacity": "Not Listed",
            "hex" : "#0289DA"
        },
        {
            "number" : "522",
            "name" : "Turquoise Blue",
            "rating" : "**",
            "pigments" : "PB15, PG7, PW5",
            "opacity": "Not Listed",
            "hex" : "#0490D4"
        },
        {
            "number" : "243",
            "name" : "Greenish Yellow",
            "rating" : "**",
            "pigments" : "PY3, PG7",
            "opacity": "Not Listed",
            "hex" : "#D8E904"
        },
        {
            "number" : "601",
            "name" : "Light Green",
            "rating" : "***",
            "pigments" : "PY74, PG7",
            "opacity": "Not Listed",
            "hex" : "#66CF01"
        },
        {
            "number" : "600",
            "name" : "Green",
            "rating" : "**",
            "pigments" : "PY74, PG7",
            "opacity": "Not Listed",
            "hex" : "#01A40E"
        },
        {
            "number" : "615",
            "name" : "Emerald Green",
            "rating" : "**",
            "pigments" : "PY3, PG7",
            "opacity": "Not Listed",
            "hex" : "#00CC85"
        },
        {
            "number" : "602",
            "name" : "Deep Green",
            "rating" : "**",
            "pigments" : "PY3, PG7",
            "opacity": "Not Listed",
            "hex" : "#00A06E"
        },
        {
            "number" : "616",
            "name" : "Viridian",
            "rating" : "***",
            "pigments" : "PG7",
            "opacity": "Not Listed",
            "hex" : "#00A9A3"
        },
        {
            "number" : "661",
            "name" : "Turquoise Green",
            "rating" : "**",
            "pigments" : "PG7, PB15",
            "opacity": "Not Listed",
            "hex" : "#00B6C1"
        },
        {
            "number" : "654",
            "name" : "Fir Green",
            "rating" : "***",
            "pigments" : "PY74, PG7, PBk7",
            "opacity": "Not Listed",
            "hex" : "#11704E"
        },
        {
            "number" : "620",
            "name" : "Olive Green",
            "rating" : "***",
            "pigments" : "PG7, PBr7, PY74",
            "opacity": "Not Listed",
            "hex" : "#8FA302"
        },
        {
            "number" : "227",
            "name" : "Yellow Ochre",
            "rating" : "***",
            "pigments" : "PY42",
            "opacity": "Not Listed",
            "hex" : "#F8B204"
        },
        {
            "number" : "234",
            "name" : "Raw Sienna",
            "rating" : "***",
            "pigments" : "PY42",
            "opacity": "Not Listed",
            "hex" : "#F7A434"
        },
        {
            "number" : "408",
            "name" : "Raw Umber",
            "rating" : "***",
            "pigments" : "PBk6, PY42, PO67",
            "opacity": "Not Listed",
            "hex" : "#A77E3E"
        },
        {
            "number" : "401",
            "name" : "Light Brown",
            "rating" : "***",
            "pigments" : "PY42",
            "opacity": "Not Listed",
            "hex" : "#E67048"
        },
        {
            "number" : "402",
            "name" : "Deep Brown",
            "rating" : "***",
            "pigments" : "PBr7, PO67",
            "opacity": "Not Listed",
            "hex" : "#BE5B30"
        },
        {
            "number" : "339",
            "name" : "Light Oxide Red",
            "rating" : "***",
            "pigments" : "PR101, PO67",
            "opacity": "Not Listed",
            "hex" : "#E6553A"
        },
        {
            "number" : "411",
            "name" : "Burnt Sienna",
            "rating" : "***",
            "pigments" : "PR101",
            "opacity": "Not Listed",
            "hex" : "#C5424C"
        },
        {
            "number" : "427",
            "name" : "Havana Brown",
            "rating" : "*",
            "pigments" : "PR83:1, PBk7, PBr7",
            "opacity": "Not Listed",
            "hex" : "#8C2B4A"
        },
        {
            "number" : "409",
            "name" : "Burnt Umber",
            "rating" : "***",
            "pigments" : "PBr7, PBk11",
            "opacity": "Not Listed",
            "hex" : "#995E4E"
        },
        {
            "number" : "416",
            "name" : "Sepia",
            "rating" : "***",
            "pigments" : "PBr7, PBk11",
            "opacity": "Not Listed",
            "hex" : "#635151"
        },
        {
            "number" : "717",
            "name" : "Cold Grey",
            "rating" : "***",
            "pigments" : "PBk6",
            "opacity": "Not Listed",
            "hex" : "#CEC8CA"
        },
        {
            "number" : "718",
            "name" : "Warm Grey",
            "rating" : "***",
            "pigments" : "PBk6, PBr7",
            "opacity": "Not Listed",
            "hex" : "#C0B7B8"
        },
        {
            "number" : "703",
            "name" : "Black Intenso",
            "rating" : "***",
            "pigments" : "PBk9",
            "opacity": "Not Listed",
            "hex" : "#39384C"
        },
        {
            "number" : "737",
            "name" : "Neutral Black",
            "rating" : "***",
            "pigments" : "PBk9",
            "opacity": "Not Listed",
            "hex" : "#3D3C4E"
        },
        {
            "number" : "800",
            "name" : "Silver",
            "rating" : "***",
            "pigments" : "PW6, PW15, PW20",
            "opacity": "Not Listed",
            "hex" : "#CFC2C9"
        },
        {
            "number" : "802",
            "name" : "Light Gold",
            "rating" : "***",
            "pigments" : "PW6, PW15, PW20",
            "opacity": "Not Listed",
            "hex" : "#CDBA76"
        },
        {
            "number" : "803",
            "name" : "Deep Gold",
            "rating" : "***",
            "pigments" : "PW6, PW15, PW20",
            "opacity": "Not Listed",
            "hex" : "#D57E29"
        },
        {
            "number" : "805",
            "name" : "Copper",
            "rating" : "***",
            "pigments" : "PW6, PW15, PW20",
            "opacity": "Not Listed",
            "hex" : "#C64D36"
        },
        {
            "number" : "811",
            "name" : "Bronze",
            "rating" : "***",
            "pigments" : "PW6, PW15, PW20",
            "opacity": "Not Listed",
            "hex" : "#CC7C57"
        },
    ],

    "M. Graham" : [
        {
            "number" : "107",
            "name" : "Hansa Yellow",
            "rating" : "LF II",
            "pigments" : "PY3",
            "opacity" : "Semi-Opaque",
            "hex" : "#fafd45"
        },
        {
            "number" : "070",
            "name" : "Cadmium Yellow Light",
            "rating" : "LF I",
            "pigments" : "PY35",
            "opacity" : "Opaque",
            "hex" : "#fff401"
        },
        {
            "number" : "018",
            "name" : "Azo Yellow",
            "rating" : "LF I",
            "pigments" : "PY151",
            "opacity" : "Semi-Opaque",
            "hex" : "#fde12a"
        },
        {
            "number" : "060",
            "name" : "Cadmium Yellow",
            "rating" : "LF I",
            "pigments" : "PY35",
            "opacity" : "Opaque",
            "hex" : "#ffdd00"
        },
        {
            "number" : "105",
            "name" : "Gamboge",
            "rating" : "LF I",
            "pigments" : "PY151, PO62",
            "opacity" : "Semi-Opaque",
            "hex" : "#ffa30f"
        },
        {
            "number" : "038",
            "name" : "Cadmium Orange",
            "rating" : "LF I",
            "pigments" : "PO20",
            "opacity" : "Opaque",
            "hex" : "#ff6925"
        },
        {
            "number" : "050",
            "name" : "Cadmium Red LIght",
            "rating" : "LF I",
            "pigments" : "PR108",
            "opacity" : "Opaque",
            "hex" : "#fb4c3f"
        },
        {
            "number" : "120",
            "name" : "Naphthol Red",
            "rating" : "LF II",
            "pigments" : "PR112",
            "opacity" : "Semi-Opaque",
            "hex" : "#f13b28"
        },
        {
            "number" : "155",
            "name" : "Quinacridone Red",
            "rating" : "LF I",
            "pigments" : "PR209",
            "opacity" : "Transparent",
            "hex" : "#ce3d3c"
        },
        {
            "number" : "154",
            "name" : "Pyrrol Red",
            "rating" : "LF I",
            "pigments" : "PR254, PR209",
            "opacity" : "Semi-Opaque",
            "hex" : "#e23324"
        },
        {
            "number" : "040",
            "name" : "Cadmium Red",
            "rating" : "LF I",
            "pigments" : "PR108",
            "opacity" : "Opaque",
            "hex" : "#cb403d"
        },
        {
            "number" : "156",
            "name" : "Quinacridone Rose",
            "rating" : "LF I",
            "pigments" : "PV19",
            "opacity" : "Semi-Transparent",
            "hex" : "#b23a39"
        },
        {
            "number" : "010",
            "name" : "Alizarin Crimson",
            "rating" : "LF III",
            "pigments" : "PR83",
            "opacity" : "Semi-Transparent",
            "hex" : "#8a332c"
        },
        {
            "number" : "158",
            "name" : "Quinacridone Violet",
            "rating" : "LF I",
            "pigments" : "PV19",
            "opacity" : "Semi-Opaque",
            "hex" : "#793237"
        },
        {
            "number" : "100",
            "name" : "Dioxazine Purple",
            "rating" : "LF II",
            "pigments" : "PV23",
            "opacity" : "Opaque",
            "hex" : "#0f021f"
        },
        {
            "number" : "190",
            "name" : "Ultramarine Blue",
            "rating" : "LF I",
            "pigments" : "PB29",
            "opacity" : "Opaque",
            "hex" : "#124bd9"
        },
        {
            "number" : "090",
            "name" : "Cobalt Blue",
            "rating" : "LF I",
            "pigments" : "PB28",
            "opacity" : "Opaque",
            "hex" : "#4d70f9"
        },
        {
            "number" : "080",
            "name" : "Cerulean Blue",
            "rating" : "LF I",
            "pigments" : "PB36",
            "opacity" : "Opaque",
            "hex" : "#4066c3"
        },
        {
            "number" : "140",
            "name" : "Phthalocyanine Blue",
            "rating" : "LF I",
            "pigments" : "PB15:3",
            "opacity" : "Opaque",
            "hex" : "#42315f"
        },
        {
            "number" : "153",
            "name" : "Prussian Blue",
            "rating" : "LF I",
            "pigments" : "PB27",
            "opacity" : "Semi-Opaque",
            "hex" : "#252d41"
        },
        {
            "number" : "150",
            "name" : "Phthalocyanine Green",
            "rating" : "LF I",
            "pigments" : "PB7",
            "opacity" : "Semi-Opaque",
            "hex" : "#334048"
        },
        {
            "number" : "195",
            "name" : "Viridian",
            "rating" : "LF I",
            "pigments" : "PG18",
            "opacity" : "Transparent",
            "hex" : "#008576"
        },
        {
            "number" : "130",
            "name" : "Permanent Green Light",
            "rating" : "LF I",
            "pigments" : "PG7, PY151",
            "opacity" : "Opaque",
            "hex" : "#076139"
        },
        {
            "number" : "108",
            "name" : "Hookers Green",
            "rating" : "LF I",
            "pigments" : "PG7, PY110",
            "opacity" : "Opaque",
            "hex" : "#2f4433"
        },
        {
            "number" : "174",
            "name" : "Sap Green Permanent",
            "rating" : "LF I",
            "pigments" : "PG7, PY110",
            "opacity" : "Opaque",
            "hex" : "#2c5b2a"
        },
        {
            "number" : "200",
            "name" : "Yellow Ochre",
            "rating" : "LF I",
            "pigments" : "PY43",
            "opacity" : "Opaque",
            "hex" : "#c8983a"
        },
        {
            "number" : "160",
            "name" : "Raw Sienna",
            "rating" : "LF I",
            "pigments" : "PBr7",
            "opacity" : "Opaque",
            "hex" : "#a46e34"
        },
        {
            "number" : "020",
            "name" : "Burnt Sienna",
            "rating" : "LF I",
            "pigments" : "PBr7",
            "opacity" : "Opaque",
            "hex" : "#84432e"
        },
        {
            "number" : "030",
            "name" : "Burnt Umber",
            "rating" : "LF I",
            "pigments" : "PBr7",
            "opacity" : "Opaque",
            "hex" : "#5b3e2c"
        },
        {
            "number" : "170",
            "name" : "Raw Umber",
            "rating" : "LF I",
            "pigments" : "PBr7",
            "opacity" : "Opaque",
            "hex" : "#5a482e"
        },
        {
            "number" : "112",
            "name" : "Lamp Black",
            "rating" : "LF I",
            "pigments" : "PBk6",
            "opacity" : "Opaque",
            "hex" : "#2e312b"
        },
        {
            "number" : "110",
            "name" : "Ivory Black",
            "rating" : "LF I",
            "pigments" : "PBk9",
            "opacity" : "Opaque",
            "hex" : "#2b2f28"
        },
        {
            "number" : "128",
            "name" : "Paynes Gray",
            "rating" : "LF I",
            "pigments" : "PBk9, PB29",
            "opacity" : "Opaque",
            "hex" : "#27313d"
        },
        {
            "number" : "205",
            "name" : "Zinc White",
            "rating" : "LF I",
            "pigments" : "PW4",
            "opacity" : "Semi-Opaque",
            "hex" : "#fefefc"
        },
        {
            "number" : "180",
            "name" : "Titanium White",
            "rating" : "LF I",
            "pigments" : "PW6",
            "opacity" : "Opaque",
            "hex" : "#fefdf9"
        },
    ],

    "Schmincke Horadam" : [
        {
            "number" : "102",
            "name" : "Titanium White",
            "rating" : "*****",
            "pigments" : "PW6",
            "opacity" : "Opaque",
            "hex" : "#ffffff"
        },
        {
            "number" : "103",
            "name" : "Zinc White",
            "rating" : "*****",
            "pigments" : "PW4",
            "opacity" : "Semi-Opaque",
            "hex" : "#ffffff"
        },
        {
            "number" : "220",
            "name" : "Lemon Yellow",
            "rating" : "***",
            "pigments" : "PY3",
            "opacity" : "Semi-Opaque",
            "hex" : "#fff333"
        },
        {
            "number" : "222",
            "name" : "Vanadium Yellow",
            "rating" : "****",
            "pigments" : "PY184",
            "opacity" : "Opaque",
            "hex" : "#fff21f"
        },
        {
            "number" : "224",
            "name" : "Cadmium Yellow Light",
            "rating" : "****",
            "pigments" : "PY35",
            "opacity" : "Semi-Opaque",
            "hex" : "#fee600"
        },
        {
            "number" : "226",
            "name" : "Cadmium Yellow Hue",
            "rating" : "****",
            "pigments" : "PY154",
            "opacity" : "Semi-Transparent",
            "hex" : "#ffcb05"
        },
        {
            "number" : "228",
            "name" : "Cadmium Yellow Middle",
            "rating" : "****",
            "pigments" : "PY35",
            "opacity" : "Semi-Opaque",
            "hex" : "#ffd101"
        },
        {
            "number" : "230",
            "name" : "Indian Yellow",
            "rating" : "*****",
            "pigments" : "PY153",
            "opacity" : "Semi-Opaque",
            "hex" : "#fa9f1b"
        },
        {
            "number" : "232",
            "name" : "Cadmium Yellow Deep",
            "rating" : "*****",
            "pigments" : "PO20",
            "opacity" : "Semi-Opaque",
            "hex" : "#faa719"
        },
        {
            "number" : "234",
            "name" : "Cadmium Orange Hue",
            "rating" : "****",
            "pigments" : "PO62",
            "opacity" : "Semi-Transparent",
            "hex" : "#f68c1e"
        },
        {
            "number" : "236",
            "name" : "Cadmium Orange",
            "rating" : "*****",
            "pigments" : "PO20",
            "opacity" : "Semi-Opaque",
            "hex" : "#f6821f"
        },
        {
            "number" : "340",
            "name" : "Vermillion Hue",
            "rating" : "****",
            "pigments" : "PR255",
            "opacity" : "Semi-Opaque",
            "hex" : "#ee3324"
        },
        {
            "number" : "342",
            "name" : "Cadmium Red Hue",
            "rating" : "***",
            "pigments" : "PR242",
            "opacity" : "Semi-Opaque",
            "hex" : "#ee3324"
        },
        {
            "number" : "344",
            "name" : "Cadmium Red Light",
            "rating" : "*****",
            "pigments" : "PR108",
            "opacity" : "Opaque",
            "hex" : "#ee1c27"
        },
        {
            "number" : "346",
            "name" : "Cadmium Red Middle",
            "rating" : "*****",
            "pigments" : "PR108",
            "opacity" : "Opaque",
            "hex" : "#d01820"
        },
        {
            "number" : "348",
            "name" : "Cadmium Red Deep",
            "rating" : "*****",
            "pigments" : "PR108",
            "opacity" : "Opaque",
            "hex" : "#9e0521"
        },
        {
            "number" : "350",
            "name" : "Scarlet Red",
            "rating" : "****",
            "pigments" : "PR254",
            "opacity" : "Opaque",
            "hex" : "#e51a2d"
        },
        {
            "number" : "352",
            "name" : "Carmine",
            "rating" : "****",
            "pigments" : "PV19",
            "opacity" : "Semi-Opaque",
            "hex" : "#b50e2a"
        },
        {
            "number" : "354",
            "name" : "Madder Lake Deep",
            "rating" : "**",
            "pigments" : "PR83:1",
            "opacity" : "Semi-Transparent",
            "hex" : "#610013"
        },
        {
            "number" : "356",
            "name" : "Madder Red Dark",
            "rating" : "****",
            "pigments" : "PV19, PR179",
            "opacity" : "Opaque",
            "hex" : "#70061c"
        },
        {
            "number" : "358",
            "name" : "Purple Magenta",
            "rating" : "****",
            "pigments" : "PR122",
            "opacity" : "Semi-Opaque",
            "hex" : "#9f1c50"
        },
        {
            "number" : "360",
            "name" : "Quinacridone Violet",
            "rating" : "****",
            "pigments" : "PV19",
            "opacity" : "Semi-Opaque",
            "hex" : "#7c183e"
        },
        {
            "number" : "460",
            "name" : "Violet",
            "rating" : "***",
            "pigments" : "PV23",
            "opacity" : "Opaque",
            "hex" : "#201b5d"
        },
        {
            "number" : "462",
            "name" : "Delft Blue",
            "rating" : "****",
            "pigments" : "PB60",
            "opacity" : "Opaque",
            "hex" : "#091b59"
        },
        {
            "number" : "464",
            "name" : "Ultramarine Deep",
            "rating" : "*****",
            "pigments" : "PB29",
            "opacity" : "Opaque",
            "hex" : "#0059a9"
        },
        {
            "number" : "466",
            "name" : "Cobalt Blue Deep",
            "rating" : "****",
            "pigments" : "PB74, PB28",
            "opacity" : "Opaque",
            "hex" : "#016db6"
        },
        {
            "number" : "468",
            "name" : "Ultramarine Light",
            "rating" : "*****",
            "pigments" : "PB29",
            "opacity" : "Opaque",
            "hex" : "#0060ad"
        },
        {
            "number" : "470",
            "name" : "Cobalt Blue Light",
            "rating" : "*****",
            "pigments" : "PB28",
            "opacity" : "Opaque",
            "hex" : "#018ccf"
        },
        {
            "number" : "472",
            "name" : "Dark Blue Indigo",
            "rating" : "****",
            "pigments" : "PB60",
            "opacity" : "Opaque",
            "hex" : "#082a52"
        },
        {
            "number" : "474",
            "name" : "Helio Blue",
            "rating" : "****",
            "pigments" : "PB15:3",
            "opacity" : "Opaque",
            "hex" : "#003372"
        },
        {
            "number" : "476",
            "name" : "Prussian Blue",
            "rating" : "***",
            "pigments" : "PB27",
            "opacity" : "Opaque",
            "hex" : "#012b65"
        },
        {
            "number" : "478",
            "name" : "Helio Turquoise",
            "rating" : "****",
            "pigments" : "Pb16",
            "opacity" : "Opaque",
            "hex" : "#00688b"
        },
        {
            "number" : "520",
            "name" : "Helio Green Bluish",
            "rating" : "****",
            "pigments" : "PG7",
            "opacity" : "Semi-Transparent",
            "hex" : "#014341"
        },
        {
            "number" : "522",
            "name" : "Chromium Oxide Green Brilliant",
            "rating" : "*****",
            "pigments" : "PG18",
            "opacity" : "Semi-Opaque",
            "hex" : "#04554c"
        },
        {
            "number" : "524",
            "name" : "Helio Green Yellowish",
            "rating" : "****",
            "pigments" : "PG36",
            "opacity" : "Opaque",
            "hex" : "#00673c"
        },
        {
            "number" : "526",
            "name" : "Cobalt Green Light",
            "rating" : "*****",
            "pigments" : "PG19",
            "opacity" : "Opaque",
            "hex" : "#068e4c"
        },
        {
            "number" : "528",
            "name" : "Cobalt Green Deep",
            "rating" : "*****",
            "pigments" : "PG26",
            "opacity" : "Opaque",
            "hex" : "#005744"
        },
        {
            "number" : "530",
            "name" : "Chromium Oxide Green",
            "rating" : "*****",
            "pigments" : "PG17",
            "opacity" : "Opaque",
            "hex" : "#4e7b54"
        },
        {
            "number" : "532",
            "name" : "Olive Green",
            "rating" : "****",
            "pigments" : "PG36, PO62",
            "opacity" : "Opaque",
            "hex" : "#466227"
        },
        {
            "number" : "640",
            "name" : "Titanium Gold Ochre",
            "rating" : "*****",
            "pigments" : "PBr24",
            "opacity" : "Opaque",
            "hex" : "#eaa351"
        },
        {
            "number" : "642",
            "name" : "Raw Umber",
            "rating" : "*****",
            "pigments" : "PBr7, PY42",
            "opacity" : "Opaque",
            "hex" : "#9c7937"
        },
        {
            "number" : "644",
            "name" : "Raw Sienna",
            "rating" : "****",
            "pigments" : "PY119, PBk9",
            "opacity" : "Opaque",
            "hex" : "#ad713b"
        },
        {
            "number" : "646",
            "name" : "English Red",
            "rating" : "*****",
            "pigments" : "PR101",
            "opacity" : "Opaque",
            "hex" : "#ae523b"
        },
        {
            "number" : "648",
            "name" : "Burnt Sienna",
            "rating" : "*****",
            "pigments" : "PR101, PBr7, PBr33",
            "opacity" : "Opaque",
            "hex" : "#6e3f2f"
        },
        {
            "number" : "650",
            "name" : "Burnt Umber",
            "rating" : "*****",
            "pigments" : "PR254, PR101, PBk7, PBr6",
            "opacity" : "Opaque",
            "hex" : "#372a22"
        },
        {
            "number" : "652",
            "name" : "Vandyke Brown",
            "rating" : "****",
            "pigments" : "PG23, PBk7, PBr7",
            "opacity" : "Opaque",
            "hex" : "#2a251f"
        },
        {
            "number" : "785",
            "name" : "Neutral Grey",
            "rating" : "****",
            "pigments" : "PO62, PR255, PB60",
            "opacity" : "Opaque",
            "hex" : "#1c2e3c"
        },
        {
            "number" : "787",
            "name" : "Ivory Black",
            "rating" : "****",
            "pigments" : "PBk1, PBk9",
            "opacity" : "Opaque",
            "hex" : "#161817"
        },
    ],

    "Schmincke Designers" : [
        {
            "number" : "198",
            "name" : "Mixing White",
            "rating" : "****",
            "pigments" : "PW4, PW7",
            "opacity" : "Semi-Opaque",
            "hex" : "ffffff"
        },
        {
            "number" : "199",
            "name" : "Permanent White",
            "rating" : "*****",
            "pigments" : "PW6",
            "opacity" : "Opaque",
            "hex" : "ffffff"
        },
        {
            "number" : "201",
            "name" : "Naples Yellow Light",
            "rating" : "***",
            "pigments" : "PW6, PY3, PY74, PY42",
            "opacity" : "Opaque",
            "hex" : "#feec9a"
        },
        {
            "number" : "202",
            "name" : "Lemon Yellow",
            "rating" : "***",
            "pigments" : "PY3",
            "opacity" : "Semi-Opaque",
            "hex" : "#fef335"
        },
        {
            "number" : "203",
            "name" : "Cadmium Yellow Hue Lemon",
            "rating" : "***",
            "pigments" : "PY3, PY74",
            "opacity" : "Semi-Opaque",
            "hex" : "#ffe224"
        },
        {
            "number" : "204",
            "name" : "Cadmium Yellow Hue Light",
            "rating" : "***",
            "pigments" : "PY74, PY83",
            "opacity" : "Semi-Opaque",
            "hex" : "#ffd401"
        },
        {
            "number" : "205",
            "name" : "Cadmium Yellow Hue",
            "rating" : "****",
            "pigments" : "PY74, PY83",
            "opacity" : "Opaque",
            "hex" : "#fec10e"
        },
        {
            "number" : "206",
            "name" : "Indian Yellow",
            "rating" : "****",
            "pigments" : "PY83, PO62",
            "opacity" : "Semi-Opaque",
            "hex" : "#faa21a"
        },
        {
            "number" : "207",
            "name" : "Cadmium Yellow Hue Deep",
            "rating" : "***",
            "pigments" : "PO13, PY83",
            "opacity" : "Semi-Opaque",
            "hex" : "#f58320"
        },
        {
            "number" : "208",
            "name" : "Red Orange",
            "rating" : "**",
            "pigments" : "PO13",
            "opacity" : "Opaque",
            "hex" : "#f57921"
        },
        {
            "number" : "311",
            "name" : "Napeles Yellow Reddish",
            "rating" : "***",
            "pigments" : "PW5, PO36, PR242",
            "opacity" : "Opaque",
            "hex" : "#f79f91"
        },
        {
            "number" : "312",
            "name" : "Vermilion",
            "rating" : "***",
            "pigments" : "PR4",
            "opacity" : "Opaque",
            "hex" : "#ee3324"
        },
        {
            "number" : "313",
            "name" : "Geranium Red",
            "rating" : "***",
            "pigments" : "PR4, PR112",
            "opacity" : "Opaque",
            "hex" : "#f04b51"
        },
        {
            "number" : "314",
            "name" : "Scarlet Red",
            "rating" : "***",
            "pigments" : "PR112",
            "opacity" : "Opaque",
            "hex" : "#df1a23"
        },
        {
            "number" : "315",
            "name" : "Carmine Red",
            "rating" : "***",
            "pigments" : "PR5, PR112",
            "opacity" : "Opaque",
            "hex" : "#cf123a"
        },
        {
            "number" : "316",
            "name" : "Madder Red",
            "rating" : "****",
            "pigments" : "PW5, PR187, PR112",
            "opacity" : "Semi-Opaque",
            "hex" : "#bd1644"
        },
        {
            "number" : "318",
            "name" : "Bordeaux",
            "rating" : "***",
            "pigments" : "PB254, PV19",
            "opacity" : "Opaque",
            "hex" : "#7a0e30"
        },
        {
            "number" : "325",
            "name" : "Magenta",
            "rating" : "****",
            "pigments" : "PR122, PV19",
            "opacity" : "Opaque",
            "hex" : "#df0077"
        },
        {
            "number" : "436",
            "name" : "Blue Violet",
            "rating" : "**",
            "pigments" : "PB29, PV23, Fluor.Pigm.",
            "opacity" : "Semi-Transparent",
            "hex" : "#432885"
        },
        {
            "number" : "438",
            "name" : "Indigo",
            "rating" : "****",
            "pigments" : "PB29, PB27, PB60, PBk10",
            "opacity" : "Opaque",
            "hex" : "#003159"
        },
        {
            "number" : "439",
            "name" : "Cobalt Blue Hue Deep",
            "rating" : "****",
            "pigments" : "PW5, PB29, PG7",
            "opacity" : "Opaque",
            "hex" : "#007ac3"
        },
        {
            "number" : "441",
            "name" : "Paris Blue",
            "rating" : "****",
            "pigments" : "PB15:1, PB15",
            "opacity" : "Opaque",
            "hex" : "#005284"
        },
        {
            "number" : "442",
            "name" : "Ultramarine Blue Deep",
            "rating" : "*****",
            "pigments" : "PB29",
            "opacity" : "Opaque",
            "hex" : "#0059a9"
        },
        {
            "number" : "443",
            "name" : "Ultramarine Blue LIght",
            "rating" : "*****",
            "pigments" : "PB29",
            "opacity" : "Opaque",
            "hex" : "#0060ad"
        },
        {
            "number" : "444",
            "name" : "Cobalt Blue Hue Light",
            "rating" : "****",
            "pigments" : "PW7, PW5, PB29, PB15:3, PG7",
            "opacity" : "Opaque",
            "hex" : "#0089cf"
        },
        {
            "number" : "446",
            "name" : "Sapphire Blue",
            "rating" : "****",
            "pigments" : "PW6, PB15:3, PB15",
            "opacity" : "Opaque",
            "hex" : "#008fd5"
        },
        {
            "number" : "447",
            "name" : "Cerulean Blue",
            "rating" : "****",
            "pigments" : "Pw6, PB15:3, PG7",
            "opacity" : "Opaque",
            "hex" : "#0091c6"
        },
        {
            "number" : "449",
            "name" : "Oriental Blue",
            "rating" : "****",
            "pigments" : "PW6, PB15:3, PG7",
            "opacity" : "Opaque",
            "hex" : "#0089bf"
        },
        {
            "number" : "450",
            "name" : "Light Blue",
            "rating" : "***",
            "pigments" : "PW5, PB15:3, PG7",
            "opacity" : "Opaque",
            "hex" : "#25c3e8"
        },
        {
            "number" : "551",
            "name" : "Turquoise Bluish",
            "rating" : "****",
            "pigments" : "PW5, PB15, PG7",
            "opacity" : "Opaque",
            "hex" : "#00b3b8"
        },
        {
            "number" : "554",
            "name" : "Chromium Oxide green Hue",
            "rating" : "***",
            "pigments" : "PW5, PY3, PB15:3",
            "opacity" : "Opaque",
            "hex" : "#00ae89"
        },
        {
            "number" : "557",
            "name" : "Leaf Green",
            "rating" : "***",
            "pigments" : "PW5, PY3, PY74, PG7",
            "opacity" : "Opaque",
            "hex" : "#00ac58"
        },
        {
            "number" : "558",
            "name" : "Chromium Oxide Green",
            "rating" : "*****",
            "pigments" : "PG17",
            "opacity" : "Opaque",
            "hex" : "#458256"
        },
        {
            "number" : "560",
            "name" : "Light Green",
            "rating" : "***",
            "pigments" : "PW5, PY74, PG50, PG7, PY42",
            "opacity" : "Opaque",
            "hex" : "#2bb55f"
        },
        {
            "number" : "561",
            "name" : "Fir Green",
            "rating" : "****",
            "pigments" : "PY153, PB15:3, PY42",
            "opacity" : "Opaque",
            "hex" : "#0e7847"
        },
        {
            "number" : "562",
            "name" : "Olive Green",
            "rating" : "***",
            "pigments" : "PY3, PG17, PY42",
            "opacity" : "Opaque",
            "hex" : "#89944f"
        },
        {
            "number" : "563",
            "name" : "Sap Green",
            "rating" : "***",
            "pigments" : "PY3, Pg7, PY42",
            "opacity" : "Opaque",
            "hex" : "#388b43"
        },
        {
            "number" : "566",
            "name" : "Permanent Green Light",
            "rating" : "***",
            "pigments" : "PY3, PB15:3",
            "opacity" : "Opaque",
            "hex" : "#7bc46b"
        },
        {
            "number" : "671",
            "name" : "Yellow Ochre",
            "rating" : "*****",
            "pigments" : "PY42",
            "opacity" : "Opaque",
            "hex" : "#e39944"
        },
        {
            "number" : "672",
            "name" : "Gold Ochre",
            "rating" : "****",
            "pigments" : "PO13, PY83, PY42",
            "opacity" : "Opaque",
            "hex" : "#e0831b"
        },
        {
            "number" : "673",
            "name" : "Raw Sienna",
            "rating" : "****",
            "pigments" : "PY83, PBr6, PY42",
            "opacity" : "Opaque",
            "hex" : "#c07a34"
        },
        {
            "number" : "674",
            "name" : "Raw Umber",
            "rating" : "*****",
            "pigments" : "PY119, PBk9",
            "opacity" : "Opaque",
            "hex" : "#a16f34"
        },
        {
            "number" : "675",
            "name" : "Umber Greenish",
            "rating" : "*****",
            "pigments" : "PG17, PY42, PBk11",
            "opacity" : "Opaque",
            "hex" : "#917341"
        },
        {
            "number" : "676",
            "name" : "Burnt Umber",
            "rating" : "****",
            "pigments" : "PBr6, PR101, PY42, PBk7",
            "opacity" : "Opaque",
            "hex" : "#644a39"
        },
        {
            "number" : "677",
            "name" : "Vandyke Brown",
            "rating" : "****",
            "pigments" : "PR112, Pbr6, PR101, PBk7",
            "opacity" : "Opaque",
            "hex" : "fffff#5d3b32f"
        },
        {
            "number" : "678",
            "name" : "Burnt Sienna",
            "rating" : "*****",
            "pigments" : "PY42, PR101, PBr6",
            "opacity" : "Opaque",
            "hex" : "#934739"
        },
        {
            "number" : "682",
            "name" : "English Red",
            "rating" : "*****",
            "pigments" : "PR4, PR101",
            "opacity" : "Opaque",
            "hex" : "#ae433b"
        },
        {
            "number" : "788",
            "name" : "Ivory Black",
            "rating" : "****",
            "pigments" : "PBk1, PBk9",
            "opacity" : "Opaque",
            "hex" : "#000201"
        },
    ],

    "Maimeri" : [
        {
            "number" : "003",
            "name" : "Silver",
            "rating" : "***",
            "pigments" : "PW20",
            "opacity" : "Semi-Opaque",
            "hex" : "#ddd7d9"
        },
        {
            "number" : "018",
            "name" : "Titanium White",
            "rating" : "***",
            "pigments" : "PB29, PW6",
            "opacity" : "Opaque",
            "hex" : "#ffffff"
        },
        {
            "number" : "020",
            "name" : "Zinc White",
            "rating" : "***",
            "pigments" : "PW4",
            "opacity" : "Opaque",
            "hex" : "#ffffff"
        },
        {
            "number" : "050",
            "name" : "Orange",
            "rating" : "***",
            "pigments" : "PO62",
            "opacity" : "Opaque",
            "hex" : "#fd6d01"
        },
        {
            "number" : "052",
            "name" : "Brilliant Orange",
            "rating" : "**",
            "pigments" : "PR112, PY83",
            "opacity" : "Opaque",
            "hex" : "#f51c08"
        },
        {
            "number" : "086",
            "name" : "Light Yellow",
            "rating" : "**",
            "pigments" : "PY3, PY1",
            "opacity" : "Opaque",
            "hex" : "#fcb400"
        },
        {
            "number" : "100",
            "name" : "Lemon Yellow",
            "rating" : "**",
            "pigments" : "PY3",
            "opacity" : "Opaque",
            "hex" : "#ffdd0c"
        },
        {
            "number" : "104",
            "name" : "Naples Yellow",
            "rating" : "**",
            "pigments" : "PW6, PY3, Py42",
            "opacity" : "Opaque",
            "hex" : "#fcde6a"
        },
        {
            "number" : "106",
            "name" : "Naples Yellow Reddish",
            "rating" : "**",
            "pigments" : "PO43, PY83, PW6",
            "opacity" : "Opaque",
            "hex" : "#febe8a"
        },
        {
            "number" : "116",
            "name" : "Primary Yellow",
            "rating" : "**",
            "pigments" : "PY3, PY1",
            "opacity" : "Opaque",
            "hex" : "#ffcc03"
        },
        {
            "number" : "118",
            "name" : "Deep Yellow",
            "rating" : "**",
            "pigments" : "PO62, PY83",
            "opacity" : "Opaque",
            "hex" : "#fe9200"
        },
        {
            "number" : "131",
            "name" : "Yellow Ochre",
            "rating" : "***",
            "pigments" : "PY42",
            "opacity" : "Opaque",
            "hex" : "#e9a43b"
        },
        {
            "number" : "135",
            "name" : "Deep Ochre",
            "rating" : "***",
            "pigments" : "PR101, PBk11, PY42",
            "opacity" : "Opaque",
            "hex" : "#d97903"
        },
        {
            "number" : "137",
            "name" : "Light Gold",
            "rating" : "***",
            "pigments" : "PW20",
            "opacity" : "Semi-Opaque",
            "hex" : "#ffbd59"
        },
        {
            "number" : "151",
            "name" : "Deep Gold",
            "rating" : "***",
            "pigments" : "PW20",
            "opacity" : "Semi-Opaque",
            "hex" : "#e88300"
        },
        {
            "number" : "161",
            "name" : "Raw Sienna",
            "rating" : "**",
            "pigments" : "PY83, PY42",
            "opacity" : "Opaque",
            "hex" : "#ee9401"
        },
        {
            "number" : "165",
            "name" : "Bordeaux",
            "rating" : "**",
            "pigments" : "PR146, PB15:1",
            "opacity" : "Opaque",
            "hex" : "#792332"
        },
        {
            "number" : "166",
            "name" : "Carmine",
            "rating" : "**",
            "pigments" : "PR146, PB15:1",
            "opacity" : "Opaque",
            "hex" : "#99001f"
        },
        {
            "number" : "184",
            "name" : "Solferino Lake",
            "rating" : "***",
            "pigments" : "PR122, PV23",
            "opacity" : "Opaque",
            "hex" : "#4d0d25"
        },
        {
            "number" : "191",
            "name" : "Red Ochre",
            "rating" : "***",
            "pigments" : "PR101",
            "opacity" : "Opaque",
            "hex" : "#9c3c23"
        },
        {
            "number" : "200",
            "name" : "Copper",
            "rating" : "***",
            "pigments" : "PW20",
            "opacity" : "Semi-Opaque",
            "hex" : "#d46e56"
        },
        {
            "number" : "223",
            "name" : "Cadmium Red (Hue)",
            "rating" : "**",
            "pigments" : "PR112, PR146",
            "opacity" : "Opaque",
            "hex" : "#d60318"
        },
        {
            "number" : "256",
            "name" : "Primary Red - Magenta",
            "rating" : "***",
            "pigments" : "PR122",
            "opacity" : "Opaque",
            "hex" : "#9e0636"
        },
        {
            "number" : "274",
            "name" : "Scarlet",
            "rating" : "**",
            "pigments" : "PR112",
            "opacity" : "Opaque",
            "hex" : "#cf0009"
        },
        {
            "number" : "278",
            "name" : "Burnt Sienna",
            "rating" : "***",
            "pigments" : "PR101, PBk11",
            "opacity" : "Opaque",
            "hex" : "#772a0f"
        },
        {
            "number" : "284",
            "name" : "Vermilion LIght (Hue)",
            "rating" : "**",
            "pigments" : "PR112, PY1",
            "opacity" : "Opaque",
            "hex" : "#ea2d0f"
        },
        {
            "number" : "285",
            "name" : "Vermilion Deep (Hue)",
            "rating" : "**",
            "pigments" : "PR112, PY1",
            "opacity" : "Opaque",
            "hex" : "#dd121c"
        },
        {
            "number" : "286",
            "name" : "Cinnabar Green LIght",
            "rating" : "**",
            "pigments" : "PY1, PG7",
            "opacity" : "Opaque",
            "hex" : "#388a36"
        },
        {
            "number" : "288",
            "name" : "Cinnabar Green Deep",
            "rating" : "**",
            "pigments" : "PY1, PB15:3",
            "opacity" : "Opaque",
            "hex" : "#005f33"
        },
        {
            "number" : "304",
            "name" : "Brilliant Green Light",
            "rating" : "**",
            "pigments" : "PY3, PG7",
            "opacity" : "Opaque",
            "hex" : "#62c03b"
        },
        {
            "number" : "305",
            "name" : "Brilliant Green Deep",
            "rating" : "**",
            "pigments" : "PY3, PB15:3",
            "opacity" : "Opaque",
            "hex" : "#27a243"
        },
        {
            "number" : "331",
            "name" : "Olive Green",
            "rating" : "***",
            "pigments" : "PG17, PY42",
            "opacity" : "Opaque",
            "hex" : "#857d4a"
        },
        {
            "number" : "342",
            "name" : "Pine Green",
            "rating" : "**",
            "pigments" : "PY1, PB15:1",
            "opacity" : "Opaque",
            "hex" : "#043d38"
        },
        {
            "number" : "347",
            "name" : "Viridian (Hue)",
            "rating" : "***",
            "pigments" : "PG7",
            "opacity" : "Opaque",
            "hex" : "#005f31"
        },
        {
            "number" : "356",
            "name" : "Emerald Green",
            "rating" : "**",
            "pigments" : "PY3, PG7",
            "opacity" : "Opaque",
            "hex" : "#00642e"
        },
        {
            "number" : "358",
            "name" : "Sap Green",
            "rating" : "**",
            "pigments" : "PG8",
            "opacity" : "Opaque",
            "hex" : "#1e3821"
        },
        {
            "number" : "375",
            "name" : "Cobalt Blue (Hue)",
            "rating" : "***",
            "pigments" : "PB29, PB15:3",
            "opacity" : "Opaque",
            "hex" : "#173f58"
        },
        {
            "number" : "391",
            "name" : "Ultramarine Light",
            "rating" : "***",
            "pigments" : "PB29",
            "opacity" : "Opaque",
            "hex" : "#2e2061"
        },
        {
            "number" : "392",
            "name" : "Ultramarine Deep",
            "rating" : "***",
            "pigments" : "PB29",
            "opacity" : "Opaque",
            "hex" : "#2d0577"
        },
        {
            "number" : "398",
            "name" : "Paris Blue",
            "rating" : "***",
            "pigments" : "PB27, PB29",
            "opacity" : "Opaque",
            "hex" : "#02254e"
        },
        {
            "number" : "400",
            "name" : "Primary Blue - Cyan",
            "rating" : "***",
            "pigments" : "PB15:3",
            "opacity" : "Opaque",
            "hex" : "#00476f"
        },
        {
            "number" : "402",
            "name" : "Prussian Blue",
            "rating" : "***",
            "pigments" : "PB27",
            "opacity" : "Opaque",
            "hex" : "#282635"
        },
        {
            "number" : "414",
            "name" : "Sky Blue",
            "rating" : "***",
            "pigments" : "PB15:3",
            "opacity" : "Opaque",
            "hex" : "#007892"
        },
        {
            "number" : "415",
            "name" : "Cerulean (Hue)",
            "rating" : "***",
            "pigments" : "PB15:1",
            "opacity" : "Opaque",
            "hex" : "#005894"
        },
        {
            "number" : "438",
            "name" : "Lilac",
            "rating" : "***",
            "pigments" : "PB29, PW6, PV15",
            "opacity" : "Opaque",
            "hex" : "#795c94"
        },
        {
            "number" : "445",
            "name" : "Blueish Violet",
            "rating" : "***",
            "pigments" : "PB29, PV23",
            "opacity" : "Opaque",
            "hex" : "#1d0444"
        },
        {
            "number" : "468",
            "name" : "Violet Reddish",
            "rating" : "***",
            "pigments" : "PR122, PV23",
            "opacity" : "Opaque",
            "hex" : "#2f1d02"
        },
        {
            "number" : "484",
            "name" : "Vandyke Brown",
            "rating" : "***",
            "pigments" : "PR101, PBk11, PY42, PBk7",
            "opacity" : "Opaque",
            "hex" : "#433127"
        },
        {
            "number" : "486",
            "name" : "Sepia",
            "rating" : "***",
            "pigments" : "PY42, PR101, PBk7",
            "opacity" : "Opaque",
            "hex" : "#3e3228"
        },
        {
            "number" : "492",
            "name" : "Burnt Umber",
            "rating" : "***",
            "pigments" : "PBk7, PR101, PBk11",
            "opacity" : "Opaque",
            "hex" : "#4e3225"
        },
        {
            "number" : "493",
            "name" : "Raw Umber",
            "rating" : "***",
            "pigments" : "PBk7, PR101, PBk11, PY42",
            "opacity" : "Opaque",
            "hex" : "#684a2e"
        },
        {
            "number" : "514",
            "name" : "Payne's Grey",
            "rating" : "***",
            "pigments" : "PB29, PBk7",
            "opacity" : "Opaque",
            "hex" : "#070707"
        },
        {
            "number" : "525",
            "name" : "Black Lake",
            "rating" : "***",
            "pigments" : "PBk9, PBk1",
            "opacity" : "Opaque",
            "hex" : "#130e07"
        },
        {
            "number" : "530",
            "name" : "Black",
            "rating" : "***",
            "pigments" : "PBk9, PBk1",
            "opacity" : "Opaque",
            "hex" : "#180f06"
        },
    ],

    "Winsor & Newton" : [
        {
            "number" : "345",
            "name" : "Lemon Yellow",
            "rating" : "I",
            "pigments" : "PY3",
            "opacity" : "Semi-Opaque",
            "hex" : "#f9de37"
        },
        {
            "number" : "086",
            "name" : "Cadmium Lemon",
            "rating" : "I",
            "pigments" : "PY35",
            "opacity" : "Opaque",
            "hex" : "#f3d738"
        },
        {
            "number" : "898",
            "name" : "Cadmium-Free Lemon",
            "rating" : "I",
            "pigments" : "None Listed",
            "opacity" : "Opaque",
            "hex" : "#ffe401"
        },
        {
            "number" : "527",
            "name" : "Primary Yellow",
            "rating" : "",
            "pigments" : "PY138, PY74",
            "opacity" : "Semi-Opaque",
            "hex" : "#fedf13"
        },
        {
            "number" : "118",
            "name" : "Cadmium Yellow Pale",
            "rating" : "I",
            "pigments" : "PY35",
            "opacity" : "Opaque",
            "hex" : "#fdd302"
        },
        {
            "number" : "907",
            "name" : "Cadmium-Free Yellow Pale",
            "rating" : "I",
            "pigments" : "None Listed",
            "opacity" : "Opaque",
            "hex" : "#ffd801"
        },
        {
            "number" : "627",
            "name" : "Spectrum Yellow",
            "rating" : "II",
            "pigments" : "PY74",
            "opacity" : "Semi-Opaque",
            "hex" : "#edc700"
        },
        {
            "number" : "55",
            "name" : "Brilliant Yellow",
            "rating" : "II",
            "pigments" : "PY65, PY74",
            "opacity" : "Semi-Opaque",
            "hex" : "#ffcc01"
        },
        {
            "number" : "108",
            "name" : "Cadmium Yellow",
            "rating" : "I",
            "pigments" : "PO20, PY35",
            "opacity" : "Opaque",
            "hex" : "#ffc501"
        },
        {
            "number" : "890",
            "name" : "Cadmium-Free Yellow",
            "rating" : "I",
            "pigments" : "None Listed",
            "opacity" : "Opaque",
            "hex" : "#ffca02"
        },
        {
            "number" : "508",
            "name" : "Permanent Yellow Deep",
            "rating" : "II",
            "pigments" : "PY65",
            "opacity" : "Semi-Opaque",
            "hex" : "#ffb901"
        },
        {
            "number" : "111",
            "name" : "Cadmium Yellow Deep",
            "rating" : "I",
            "pigments" : "PR108, PY35",
            "opacity" : "Opaque",
            "hex" : "#fc7e01"
        },
        {
            "number" : "891",
            "name" : "Cadmium-Free Yellow Deep",
            "rating" : "I",
            "pigments" : "None Listed",
            "opacity" : "Opaque",
            "hex" : "#fe8500"
        },
        {
            "number" : "384",
            "name" : "Marigold Yellow",
            "rating" : "",
            "pigments" : "PO72, PO73",
            "opacity" : "Semi-Opaque",
            "hex" : "#fe8301"
        },
        {
            "number" : "89",
            "name" : "Cadmium Orange",
            "rating" : "I",
            "pigments" : "PR108, PY35",
            "opacity" : "Opaque",
            "hex" : "#fa7415"
        },
        {
            "number" : "899",
            "name" : "Cadmium-Free Orange",
            "rating" : "I",
            "pigments" : "None Listed",
            "opacity" : "Opaque",
            "hex" : "#fe6901"
        },
        {
            "number" : "453",
            "name" : "Orange Lake Light",
            "rating" : "II",
            "pigments" : "PR9, PY65",
            "opacity" : "Semi-Opaque",
            "hex" : "#f55920"
        },
        {
            "number" : "452",
            "name" : "Orange Lake Deep",
            "rating" : "II",
            "pigments" : "PR9, PY65",
            "opacity" : "Opaque",
            "hex" : "#ea4118"
        },
        {
            "number" : "106",
            "name" : "Cadmium Scarlet",
            "rating" : "I",
            "pigments" : "Pr108",
            "opacity" : "Opaque",
            "hex" : "#f74f22"
        },
        {
            "number" : "530",
            "name" : "Cadmium Free Scarlet",
            "rating" : "I",
            "pigments" : "None Listed",
            "opacity" : "Opaque",
            "hex" : "#f12e24"
        },
        {
            "number" : "249",
            "name" : "Flame Red",
            "rating" : "",
            "pigments" : "POO72, PR170",
            "opacity" : "Opaque",
            "hex" : "#e02f25"
        },
        {
            "number" : "94",
            "name" : "Cadmium Red",
            "rating" : "I",
            "pigments" : "PR108",
            "opacity" : "Opaque",
            "hex" : "#dd2c24"
        },
        {
            "number" : "901",
            "name" : "Cadmium Free Red",
            "rating" : "I",
            "pigments" : "None Listed",
            "opacity" : "Opaque",
            "hex" : "#e70229"
        },
        {
            "number" : "623",
            "name" : "Spectrum Red",
            "rating" : "II",
            "pigments" : "PBr25, PR170",
            "opacity" : "Opaque",
            "hex" : "#c22722"
        },
        {
            "number" : "726",
            "name" : "Winsor Red",
            "rating" : "",
            "pigments" : "None Listed",
            "opacity" : "Semi-Opaque",
            "hex" : "#e11b28"
        },
        {
            "number" : "4",
            "name" : "Alizarin Crimson",
            "rating" : "IV",
            "pigments" : "PR83",
            "opacity" : "Semi-Opaque",
            "hex" : "#680b16"
        },
        {
            "number" : "257",
            "name" : "Pale Rose Blush",
            "rating" : "",
            "pigments" : "PO72, PR9, PW6, PY42",
            "opacity" : "Opaque",
            "hex" : "#f0c0a6"
        },
        {
            "number" : "466",
            "name" : "Permanent Alizarin Crimson",
            "rating" : "",
            "pigments" : "PR176",
            "opacity" : "Semi-Opaque",
            "hex" : "#bc1b32"
        },
        {
            "number" : "502",
            "name" : "Permanent Rose",
            "rating" : "I",
            "pigments" : "PV19",
            "opacity" : "Opaque",
            "hex" : "#b82037"
        },
        {
            "number" : "524",
            "name" : "Primary Red",
            "rating" : "",
            "pigments" : "PR170",
            "opacity" : "Semi-Opaque",
            "hex" : "#ba0025"
        },
        {
            "number" : "530",
            "name" : "Opera Pink",
            "rating" : "",
            "pigments" : "None Listed",
            "opacity" : "Semi-Opaque",
            "hex" : "#fe2d97"
        },
        {
            "number" : "550",
            "name" : "Quinacridone Magenta",
            "rating" : "",
            "pigments" : "PR122",
            "opacity" : "Opaque",
            "hex" : "#c01f55"
        },
        {
            "number" : "28",
            "name" : "Bengal Rose",
            "rating" : "",
            "pigments" : "PR169",
            "opacity" : "Semi-Opaque",
            "hex" : "#c00552"
        },
        {
            "number" : "448",
            "name" : "Opera Rose",
            "rating" : "",
            "pigments" : "None Listed",
            "opacity" : "Semi-Opaque",
            "hex" : "#fc34b2"
        },
        {
            "number" : "593",
            "name" : "Rose Tyrien",
            "rating" : "",
            "pigments" : "PR173",
            "opacity" : "Semi-Opaque",
            "hex" : "#e70075"
        },
        {
            "number" : "380",
            "name" : "Magenta",
            "rating" : "",
            "pigments" : "PR173, PV2",
            "opacity" : "Semi-Transparent",
            "hex" : "#8e0237"
        },
        {
            "number" : "530",
            "name" : "Brilliant Red/Violet",
            "rating" : "",
            "pigments" : "PV1",
            "opacity" : "Semi-Opaque",
            "hex" : "#b30483"
        },
        {
            "number" : "52",
            "name" : "Brilliant Violet",
            "rating" : "",
            "pigments" : "PB29, PV1",
            "opacity" : "Semi-Opaque",
            "hex" : "#8c177e"
        },
        {
            "number" : "360",
            "name" : "Light Purple",
            "rating" : "V",
            "pigments" : "PV2, PV3",
            "opacity" : "Opaque",
            "hex" : "#5d1a84"
        },
        {
            "number" : "455",
            "name" : "Brilliant Purple",
            "rating" : "V",
            "pigments" : "PV2,PV3",
            "opacity" : "Opaque",
            "hex" : "#3335b1"
        },
        {
            "number" : "625",
            "name" : "Spectrum Violet",
            "rating" : "V",
            "pigments" : "PV3",
            "opacity" : "Opaque",
            "hex" : "#111751"
        },
        {
            "number" : "733",
            "name" : "Winsor Violet (Dioxazine)",
            "rating" : "II",
            "pigments" : "PV23",
            "opacity" : "Opaque",
            "hex" : "#28216c"
        },
        {
            "number" : "538",
            "name" : "Prussian Blue",
            "rating" : "I",
            "pigments" : "PB27",
            "opacity" : "Opaque",
            "hex" : "#121332"
        },
        {
            "number" : "660",
            "name" : "Ultramarine",
            "rating" : "I",
            "pigments" : "PB29",
            "opacity" : "Opaque",
            "hex" : "#0137bb"
        },
        {
            "number" : "322",
            "name" : "Indigo",
            "rating" : "I",
            "pigments" : "PB15, PB29, PBk6",
            "opacity" : "Opaque",
            "hex" : "#1a2340"
        },
        {
            "number" : "327",
            "name" : "Intense Blue",
            "rating" : "I",
            "pigments" : "PB15",
            "opacity" : "Opaque",
            "hex" : "#0045a5"
        },
        {
            "number" : "706",
            "name" : "Winsor Blue",
            "rating" : "I",
            "pigments" : "PB15",
            "opacity" : "Opaque",
            "hex" : "#01338a"
        },
        {
            "number" : "178",
            "name" : "Cobalt Blue",
            "rating" : "I",
            "pigments" : "PB28",
            "opacity" : "Opaque",
            "hex" : "#016ee5"
        },
        {
            "number" : "523",
            "name" : "Primary Blue",
            "rating" : "I",
            "pigments" : "PB15",
            "opacity" : "Opaque",
            "hex" : "#025fc7"
        },
        {
            "number" : "621",
            "name" : "Sky Blue",
            "rating" : "I",
            "pigments" : "PB15, PB29, PW5",
            "opacity" : "Opaque",
            "hex" : "#005fbb"
        },
        {
            "number" : "137",
            "name" : "Cerulean Blue",
            "rating" : "I",
            "pigments" : "PB35",
            "opacity" : "Opaque",
            "hex" : "#0072b9"
        },
        {
            "number" : "514",
            "name" : "Phthalo Blue",
            "rating" : "I",
            "pigments" : "PB15, PG7",
            "opacity" : "Opaque",
            "hex" : "#0058b2"
        },
        {
            "number" : "656",
            "name" : "Turquoise Blue",
            "rating" : "I",
            "pigments" : "PB15, PG7, PW6",
            "opacity" : "Opaque",
            "hex" : "#016aa4"
        },
        {
            "number" : "667",
            "name" : "Ultramarine (Green Shade)",
            "rating" : "I",
            "pigments" : "PB29",
            "opacity" : "Opaque",
            "hex" : "#0052cb"
        },
        {
            "number" : "191",
            "name" : "Cobalt Turquoise Light",
            "rating" : "",
            "pigments" : "PG50",
            "opacity" : "Opaque",
            "hex" : "#01a8bb"
        },
        {
            "number" : "211",
            "name" : "Cyprus Green",
            "rating" : "I",
            "pigments" : "PB15, PG7, PW6",
            "opacity" : "Opaque",
            "hex" : "#015989"
        },
        {
            "number" : "692",
            "name" : "Viridian",
            "rating" : "I",
            "pigments" : "PG18",
            "opacity" : "Transparent",
            "hex" : "#003e3f"
        },
        {
            "number" : "720",
            "name" : "Winsor Green",
            "rating" : "I",
            "pigments" : "PG7",
            "opacity" : "Opaque",
            "hex" : "#004451"
        },
        {
            "number" : "459",
            "name" : "Oxide of Chromium",
            "rating" : "I",
            "pigments" : "PG17",
            "opacity" : "Opaque",
            "hex" : "#334b29"
        },
        {
            "number" : "482",
            "name" : "Permanent Green Deep",
            "rating" : "II",
            "pigments" : "PG7, PY74",
            "opacity" : "Opaque",
            "hex" : "#014432"
        },
        {
            "number" : "484",
            "name" : "Permanent Green Middle",
            "rating" : "*II",
            "pigments" : "PG7, PY3, PY74",
            "opacity" : "Opaque",
            "hex" : "#026536"
        },
        {
            "number" : "46",
            "name" : "Brilliant Green",
            "rating" : "I",
            "pigments" : "PG7, pW6, PY3",
            "opacity" : "Opaque",
            "hex" : "#019d5d"
        },
        {
            "number" : "483",
            "name" : "Permanent Green Light",
            "rating" : "I",
            "pigments" : "PG7, PY3",
            "opacity" : "Semi-Opaque",
            "hex" : "#00a74b"
        },
        {
            "number" : "447",
            "name" : "Olive Green",
            "rating" : "II",
            "pigments" : "PB15, PG7, PY65",
            "opacity" : "Opaque",
            "hex" : "#334908"
        },
        {
            "number" : "559",
            "name" : "Sap Green",
            "rating" : "II",
            "pigments" : "PB15, PY74",
            "opacity" : "Opaque",
            "hex" : "#2b6c0e"
        },
        {
            "number" : "369",
            "name" : "Linden Green",
            "rating" : "",
            "pigments" : "PG17, PY3, PY74",
            "opacity" : "Semi-Opaque",
            "hex" : "#f2e01e"
        },
        {
            "number" : "422",
            "name" : "Naples Yellow",
            "rating" : "I",
            "pigments" : "PBr24, PW6",
            "opacity" : "Opaque",
            "hex" : "#fed48c"
        },
        {
            "number" : "425",
            "name" : "Naples Yellow Deep",
            "rating" : "I",
            "pigments" : "PBr24",
            "opacity" : "Opaque",
            "hex" : "#d6902e"
        },
        {
            "number" : "744",
            "name" : "Yellow Ochre",
            "rating" : "I",
            "pigments" : "PY42",
            "opacity" : "Opaque",
            "hex" : "#c28920"
        },
        {
            "number" : "552",
            "name" : "Raw Sienna",
            "rating" : "II",
            "pigments" : "PR101, PY42, PY65",
            "opacity" : "Opaque",
            "hex" : "#b86b29"
        },
        {
            "number" : "285",
            "name" : "Gold Ochre",
            "rating" : "II",
            "pigments" : "PBr7, PR101, PY74",
            "opacity" : "Opaque",
            "hex" : "#a24f25"
        },
        {
            "number" : "74",
            "name" : "Burnt Sienna",
            "rating" : "I",
            "pigments" : "PR101, PY42",
            "opacity" : "Semi-Opaque",
            "hex" : "#8a381b"
        },
        {
            "number" : "507",
            "name" : "Perylene Maroon",
            "rating" : "",
            "pigments" : "None Listed",
            "opacity" : "Opaque",
            "hex" : "#66131a"
        },
        {
            "number" : "678",
            "name" : "Venetian Red",
            "rating" : "II",
            "pigments" : "PR101, PY74, PR9",
            "opacity" : "Opaque",
            "hex" : "#bf4629"
        },
        {
            "number" : "564",
            "name" : "Red Ochre",
            "rating" : "I",
            "pigments" : "PR101, PV19",
            "opacity" : "Opaque",
            "hex" : "#792b27"
        },
        {
            "number" : "470",
            "name" : "Perylene Violet",
            "rating" : "",
            "pigments" : "PV29",
            "opacity" : "Opaque",
            "hex" : "#541f25"
        },
        {
            "number" : "554",
            "name" : "Raw Umber",
            "rating" : "I",
            "pigments" : "PBr7, PY42",
            "opacity" : "Opaque",
            "hex" : "#98672f"
        },
        {
            "number" : "676",
            "name" : "Vandyke Brown",
            "rating" : "I",
            "pigments" : "PBr7, PY42",
            "opacity" : "Opaque",
            "hex" : "#53372b"
        },
        {
            "number" : "609",
            "name" : "Sepia",
            "rating" : "I",
            "pigments" : "PBr7, PY42",
            "opacity" : "Opaque",
            "hex" : "#4b3829"
        },
        {
            "number" : "76",
            "name" : "Burnt Umber",
            "rating" : "I",
            "pigments" : "PBr7, PY42",
            "opacity" : "Opaque",
            "hex" : "#513122"
        },
        {
            "number" : "505",
            "name" : "Perylene Black",
            "rating" : "",
            "pigments" : "PBk31",
            "opacity" : "Opaque",
            "hex" : "#2c1d22"
        },
        {
            "number" : "331",
            "name" : "Ivory Black",
            "rating" : "I",
            "pigments" : "PBk9",
            "opacity" : "Opaque",
            "hex" : "#1a1819"
        },
        {
            "number" : "337",
            "name" : "Lamp Black",
            "rating" : "I",
            "pigments" : "PBk7",
            "opacity" : "Opaque",
            "hex" : "180f#18181a06"
        },
        {
            "number" : "335",
            "name" : "Jet Black",
            "rating" : "I",
            "pigments" : "PBk1",
            "opacity" : "Opaque",
            "hex" : "#141318"
        },
        {
            "number" : "530",
            "name" : "Neutral Grey",
            "rating" : "I",
            "pigments" : "PBk7, PW6, PYP42",
            "opacity" : "Opaque",
            "hex" : "#a7a29c"
        },
        {
            "number" : "617",
            "name" : "Silver",
            "rating" : "",
            "pigments" : "None Listed",
            "opacity" : "Semi-Opaque",
            "hex" : "#d4cfd4"
        },
        {
            "number" : "283",
            "name" : "Gold",
            "rating" : "",
            "pigments" : "None Listed",
            "opacity" : "Semi-Opaque",
            "hex" : "#d5a364"
        },
        {
            "number" : "748",
            "name" : "Zinc white",
            "rating" : "I",
            "pigments" : "PW5",
            "opacity" : "Opaque",
            "hex" : "#f1e8e3"
        },
        {
            "number" : "512",
            "name" : "Permanent white",
            "rating" : "I",
            "pigments" : "PW6",
            "opacity" : "Opaque",
            "hex" : "#f2eeed"
        },
    ]
}

// "/" is the main path
app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/index.html")
})

app.get("/api/:name", (req, res)=> {
    const gouacheBrand = req.params.name
    const colorNames = brands[gouacheBrand].map(item => item.name).sort()
    console.log(brands[gouacheBrand][0].name)
    console.log(colorNames)
    res.json(brands[gouacheBrand])
})

//need to tell the server to listen and can assign the port to a variable if you want
app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The server is running on port ${PORT}.`)
})