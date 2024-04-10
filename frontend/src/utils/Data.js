const menuItems = [
  {
    title: "Men",
    children: [
      {
        title: "Topwear",
        children: [
          { title: "T-shirts", url: "/men-t-shirts" },
          { title: "Casual Shirts", url: "/men-casual-shirts" },
          { title: "Formal Shirts", url: "/men-formal-shirts" },
          { title: "Sweatshirts", url: "/men-sweatshirts" },
          { title: "Sweater", url: "/men-sweater" },
          { title: "Jackets", url: "/men-jackets" },
          { title: "Blazers & Coats", url: "/men-blazers-coats" },
          { title: "Suits", url: "/men-suits" },
          { title: "Rain Jackets", url: "/men-rain-jackets" },
        ],
      },
      {
        title: "Indian & Festive Wear",
        children: [
          { title: "Kurtas & Kurta Sets", url: "/men-kurtasandsets" },
          { title: "Sherwani", url: "/men-sherwani" },
          { title: "Nehru Jackets", url: "/men-nehru-jackets" },
          { title: "Dhotis", url: "/men-dhotis" },
        ],
      },
      {
        title: "Bottomwear",
        children: [
          { title: "Jeans", url: "/men-jeans" },
          { title: "Casual Trousers", url: "/men-casual-trousers" },
          { title: "Formal Trousers", url: "/men-formal-trousers" },
          { title: "Shorts", url: "/men-shorts" },
          { title: "Track Pants & Joggers", url: "/men-joggers" },
        ],
      },
      {
        title: "Innerwear & Sleepwear",
        children: [
          { title: "Briefs & Trunks", url: "/men-briefs" },
          { title: "Boxers", url: "/men-boxers" },
          { title: "Vests", url: "/men-vests" },
          {
            title: "Sleepwear & Loungewear",
            url: "/men-sleepwear-loungewear",
          },
          { title: "Thermals", url: "/men-thermals" },
        ],
      },
      { title: "Plus Size", url: "/men-plus-size" },
      {
        title: "Footwear",
        children: [
          { title: "Casual Shoes", url: "/men-casual-shoes" },
          { title: "Sports Shoes", url: "/men-sports-shoes" },
          { title: "Formal Shoes", url: "/men-formal-shoes" },
          { title: "Sneakers", url: "/men-sneakers" },
          { title: "Flip Flops", url: "/men-flip-flops" },
          { title: "Socks", url: "/men-socks" },
        ],
      },
      {
        title: "Personal Care & Grooming",
        url: "/men-personal-care-and-grooming",
      },
      { title: "Sunglasses & Frames", url: "/men-sunglasses-and-frames" },
      { title: "Watches", url: "/men-watches" },
      {
        title: "Sports & Active Wear",
        children: [
          { title: "Sports Shoes", url: "/men-sports-shoes" },
          { title: "Sports Sandals", url: "/men-sports-sandals" },
          { title: "Active T-Shirts", url: "/men-active-t-shirts" },
          {
            title: "Track Pants & Shorts",
            url: "/men-trackpants-and-shorts",
          },
          {
            title: "Tracksuits",
            url: "/men-tracksuits",
          },
          {
            title: "Jackets & Sweatshirts",
            url: "/men-jackets-and-sweatshirts",
          },
          {
            title: "Sports Accessories",
            url: "/men-sports-accessories",
          },
          {
            title: "Swimwear",
            url: "/men-swimwear",
          },
        ],
      },
      {
        title: "Gadgets",
        children: [
          { title: "Smart Wearables", url: "/men-smart-wearables" },
          { title: "Fitness Gadgets", url: "/men-fitness-gadgets" },
          { title: "Headphones", url: "/men-headphones" },
          { title: "Speakers", url: "/men-speakers" },
        ],
      },
      {
        title: "Fashion Accessories",
        children: [
          { title: "Wallets", url: "/men-wallets" },
          { title: "Belts", url: "/men-belts" },
          {
            title: "Perfumes & Body Mists",
            url: "/men-perfumes-and-body-mists",
          },
          {
            title: "Trimmers",
            url: "/men-trimmers",
          },
          { title: "Deodrants", url: "/men-deodrants" },
          {
            title: "Ties,Cufflinks & Pocket Squares",
            url: "/men-ties-cufflinks-and-pocket-squares",
          },
          {
            title: "Accessory Gift Sets",
            url: "/men-accessory-gift-sets",
          },
          {
            title: "Caps & Hats",
            url: "/men-caps-and-hats",
          },
          {
            title: "Mufflers,Scarves & Gloves",
            url: "/men-mufflers-scarves-and-gloves",
          },
          { title: "Phone Cases", url: "/phone-cases" },
          {
            title: "Rings & Wristwear",
            url: "/men-rings-and-wristwear",
          },
          {
            title: "Helmets",
            url: "/men-helmets",
          },
        ],
      },
      { title: "Bags & Backpacks", url: "/bags-bagpacks" },
      { title: "Luggages & Trolleys", url: "/Luggage-and-trolleys" },
    ],
  },
  {
    title: "Women",
    children: [
      {
        title: "Indian & Fusion Wear",
        children: [
          { title: "Kurtas & Suits", url: "/women-kurtas-and-suits" },
          { title: "Kurtis,Tunics & Tops", url: "/women-kurtis-and-tunics" },
          { title: "Sarees", url: "/women-sarees" },
          { title: "Ethnic Wear", url: "/women-ethnic-wear" },
          {
            title: "Leggings,Salwars & Churidars",
            url: "/women-leggings-salwars-and-churidars",
          },
          {
            title: "Skirts & Plazzos",
            url: "/women-skirts-and-plazzos",
          },
          {
            title: "Dress Materials",
            url: "/women-dress-materials",
          },
          { title: "Lehenga Cholis", url: "/women-lehenga-cholis" },
          { title: "Dupatta & Shawls", url: "/women-dupatta-and-shawls" },
          { title: "Jackets", url: "/women-jackets" },
        ],
      },
      {
        title: "Belts,Scarves & More",
        url: "/women-belts-scarves-and-more",
      },
      {
        title: "Watches & Wearables",
        url: "/women-watches-and-wearables",
      },
      {
        title: "Western Wear",
        children: [
          { title: "Dresses", url: "/women-dresses" },
          { title: "Tops", url: "/women-tops" },
          { title: "Tshirts", url: "/women-tshirts" },
          { title: "Jeans", url: "/women-jeans" },
          { title: "Trousers & Capris", url: "/women-trouser-and-capris" },
          { title: "Shorts & Skirts", url: "/women-shorts-and-skirts" },
          { title: "Co-ords", url: "/women-co-ords" },
          { title: "Playsuits", url: "/women-playsuits" },
          { title: "Jumpsuits", url: "/women-playsuit" },
          { title: "Shrugs", url: "/women-shrugs" },
          {
            title: "Sweaters & Sweatshirts",
            url: "/women-sweater-and-sweatshirts",
          },
          { title: "Jackets & Coats", url: "/women-jackets-and-coats" },
          { title: "Blazers & Waistcoats", url: "/women-blazers-and-coats" },
        ],
      },
      {
        title: "Plus Size",
        url: "/women-plus-size",
      },
      { title: "Maternity", url: "/women-maternity" },
      { title: "Sunglasses & Frames", url: "/women-sunglasses-and-frames" },
      {
        title: "Footwear",
        children: [
          { title: "Flats", url: "/women-flats" },
          { title: "Casual Shoes", url: "/women-casual-shoes" },
          { title: "Heels", url: "/women-heels" },
          { title: "Boots", url: "/women-boots" },
          { title: "Sports Shoes & Floaters", url: "/women-floaters" },
        ],
      },
      {
        title: "Sports & Active Wear",
        children: [
          { title: "Clothing", url: "/women-clothing" },
          { title: "Footwear", url: "/women-footwear" },
          { title: "Sports Accessories", url: "/sports-accessories" },
          { title: "Sports Equipment", url: "/sports-equipment" },
        ],
      },
      {
        title: "Lingerie & Sleepwear",
        children: [
          { title: "Bra", url: "/women-bra" },
          { title: "Briefs", url: "/women-briefs" },
          { title: "Shapewear", url: "/women-shapewear" },
          {
            title: "Sleepwear & Loungewear",
            url: "/women-sleepwear-and-loungewear",
          },
          { title: "Swimwear", url: "/women-swimwear" },
          {
            title: "Camisoles & Thermals",
            url: "/women-camisoles-and-thermals",
          },
        ],
      },
      {
        title: "Beauty & Personal Care",
        children: [
          { title: "Makeup", url: "/women-makeup" },
          { title: "Skincare", url: "/women-skincare" },
          { title: "Premium Beauty", url: "/women-beauty-products" },
          { title: "Lipsticks", url: "/women-lipsticks" },
          { title: "Fragrances", url: "/women-fragrances" },
        ],
      },
      {
        title: "Gadgets",
        children: [
          { title: "Smart Wearables", url: "/women-smart-wearables" },
          { title: "Fitness Gadgets", url: "/women-fitness-gadgets" },
          { title: "Headphones", url: "/women-headphones" },
          { title: "Speakers", url: "/women-speakers" },
        ],
      },
      {
        title: "Jewellery",
        children: [
          { title: "Fashion Jewellery", url: "/women-fashion-jewellery" },
          { title: "Fine Jewellery", url: "/women-fine-jewellery" },
          { title: "Earrings", url: "/women-earrings" },
        ],
      },
      { title: "Backpacks", url: "/women-backpacks" },
      {
        title: "Handbags,Bags & Wallets",
        url: "/women-handbags-and-wallets",
      },
      { title: "Luggage & Trolleys", url: "/women-luggage-and-trolleys" },
    ],
  },
  {
    title: "Kids",
    children: [
      {
        title: "Boys Clothing",
        children: [
          { title: "T-Shirts", url: "/boys-tshirts" },
          { title: "Shirts", url: "/boys-shirts" },
          { title: "Shorts", url: "/boys-shorts" },
          { title: "Jeans", url: "/boys-jeans" },
          { title: "Trousers", url: "/boys-trousers" },
          { title: "Clothing Sets", url: "/boys-clothing-sets" },
          { title: "Ethnic Wear", url: "/boys-ethnic-wear" },
          {
            title: "Track Pants & Pyjamas",
            url: "/boys-trackpants-and-pyjamas",
          },
          {
            title: "Jackets,Sweater & Sweatshirts",
            url: "/boys-jackets-sweater-and-sweatshirts",
          },
          { title: "Party Wear", url: "/boys-party-wear" },
          {
            title: "Innerwear & Thermals",
            url: "/boys-innerwear-and-thermals",
          },
          {
            title: "Nightwear & Loungewear",
            url: "/boys-nightwear-and-loungewear",
          },
          { title: "Value Packs", url: "/boys-value-packs" },
        ],
      },
      {
        title: "Girls Clothing",
        children: [
          { title: "Dresses", url: "/girls-dresses" },
          { title: "Tops", url: "/girs-tops" },
          { title: "Tshirts", url: "/girls-tshirts" },
          { title: "Clothing Sets", url: "/girts-clothing-sets" },
          { title: "Lehenga Choli", url: "/girls-lehenga-choli-sets" },
          { title: "Kurta Sets", url: "/girls-kurta-sets" },
          { title: "Party wear", url: "/girls-party-wear" },
          {
            title: "Dungarees & Jumpsuits",
            url: "/girls-dungarees-and-jumpsuits",
          },
          { title: "Skirts & Shorts", url: "/girls-skirts-and-shorts" },
          { title: "Tights & Leggings", url: "/girls-leggings" },
          {
            title: "Jeans, Trousers & Capris",
            url: "/girls-jeans-trousers-and-capris",
          },
          {
            title: "Jackets,Sweater & Sweatshirts",
            url: "/girls-jackets-sweater-and-sweatshirts",
          },
          {
            title: "Nightwear & Loungewear",
            url: "/girls-nightwear-and-loungewear",
          },
          { title: "Value Packs", url: "/girls-value-packs" },
        ],
      },
      {
        title: "Footwear",
        children: [
          { title: "Casual Shoes", url: "/girls-casual-shoes" },
          { title: "Flipflops", url: "/girls-flip-flops" },
          { title: "Sports Shoes", url: "/girls-sports-shoes" },
          { title: "Flats", url: "/girls-flats" },
          { title: "Sandals", url: "/girls-heels" },
          { title: "Heels", url: "/girls-heels" },
          { title: "School Shoes", url: "/girls-school-shoes" },
          { title: "Socks", url: "/girls-socks" },
        ],
      },
      {
        title: "Toys & Games",
        children: [
          {
            title: "Learning & Development",
            url: "/girls-learning-development",
          },
          {
            title: "Activity Toys",
            url: "/girls-activity toys",
          },
          { title: "Soft Toys", url: "/girls-soft-toys" },
          {
            title: "Action Figure/Play set",
            url: "/girls-action-figure-play-set",
          },
        ],
      },
      {
        title: "Infants",
        children: [
          { title: "Bodysuits", url: "/infants-bodysuits" },
          {
            title: "Rompers & Sleepsuits",
            url: "/infants-rompers-bodysuits",
          },
          { title: "Clothing Sets", url: "/infants-clothing-sets" },
          { title: "Tshirts & Tops", url: "/infants-tshirts-and-tops" },
          { title: "Dresses", url: "/infants-dresses" },
          { title: "Bottom Wear", url: "/infants-bottomwear" },
          { title: "Winter Wear", url: "/infants-winter-wear" },
          {
            title: "Innerwear & Sleepwear",
            url: "/infant-innerwear-and-sleepwear",
          },
          { title: "Infant Care", url: "/infant-care" },
        ],
      },
      { title: "Home & Bath", url: "/home-and-bath" },
      { title: "Personal Care", url: "/personal-care" },
      {
        title: "Kids Accessories",
        children: [
          { title: "Bags & Backpacks", url: "/kids-backpacks" },
          { title: "Watches", url: "/kids-watches" },
          {
            title: "Jewellery & Hair accessory",
            url: "/kids-jewellery-and-hair-accessory",
          },
          { title: "Sunglasses", url: "/kids-sunglasses" },
          {
            title: "Masks & Protective Gears",
            url: "/kids-masks-and-protective-gears",
          },
          { title: "Caps & Hats", url: "/kids-caps-and-hats" },
        ],
      },
      {
        title: "Brands",
        children: [
          { title: "H&M", url: "/kids-h&m" },
          { title: "Max Kids", url: "/kids-brand-max" },
          { title: "Pantaloons", url: "/kids-pantaloons" },
          { title: "United Colors Of Benetton Kids", url: "/kids-brand-ucb" },
          { title: "YK", url: "/kids-brand-yk" },
          { title: "U.S.Polo Assn.Kids", url: "/kids-brand-us-polo-assn" },
          { title: "Mothercare", url: "/kids-brand-mothercare" },
          { title: "HRX", url: "/kids-brand-hrx" },
        ],
      },
      {
        title: "Age",
        children: [
          { title: "New Born", url: "/kids-new-born" },
          { title: "0-2", url: "/kids-0-2" },
          { title: "2-4Y", url: "/kids-2-4" },
          { title: "4-6Y", url: "/kids-4-6" },
          { title: "6-8Y", url: "/kids-6-8" },
          { title: "8-10Y", url: "/kids-8-10" },
          { title: "10-12Y", url: "/kids-10-12Y" },
          { title: "12-14Y", url: "/kids-12-14Y" },
          { title: "14Y+", url: "/kids-14Y+" },
        ],
      },
    ],
  },
  {
    title: "Home & Living",
    children: [
      {
        title: "Bed Linen & Furnishing",
        children: [
          { title: "Bed Runners", url: "/home-and-living-bedrunners" },
          {
            title: "Mattress Protectors",
            url: "/home-and-living-mattress-protectors",
          },
          { title: "Bedsheets", url: "/home-and-living-bedsheets" },
          { title: "Bedding Sets", url: "/home-and-living-bedding-sets" },
          {
            title: "Blankets,Quilts & Dohars",
            url: "/home-and-living-blankets-quilts-and-dohars",
          },
          {
            title: "Pillow & Pillow Covers",
            url: "/home-and-living-pillow-and-pillow-covers",
          },
          { title: "Bed Covers", url: "/home-and-living-bedcovers" },
          { title: "Diwan Sets", url: "/home-and-living-diwan-sets" },
          {
            title: "Chair Pads & Covers",
            url: "/home-and-living-chair-pads-and-covers",
          },
          { title: "Sofa Covers", url: "/home-and-living-sofa-covers" },
        ],
      },
      {
        title: "Flooring",
        children: [
          { title: "Floor Runners", url: "/home-and-living-floor-runners" },
          { title: "Carpets", url: "/home-and-living-carpets" },
          {
            title: "Floor Mats & Dhurries",
            url: "/home-and-living-floor-mats-and-dhurries",
          },
          { title: "Door Mats", url: "/home-and-living-floor-door-mats" },
        ],
      },
      {
        title: "Bath",
        children: [
          { title: "Bath Towels", url: "/home-and-living-bath-towels" },
          {
            title: "Hand & Face Towels",
            url: "/home-and-living-hand-and-face-towels",
          },
          { title: "Towels Set", url: "/home-and-living-towels-set" },
          { title: "Bath Rugs", url: "/home-and-living-bath-rugs" },
          { title: "Bath Robes", url: "/home-and-living-bath-robes" },
          {
            title: "Bathroom Accessories",
            url: "/home-and-living-bathroom-accessories",
          },
          {
            title: "Shower Curtains",
            url: "/home-and-living-shower-curtains",
          },
        ],
      },
      {
        title: "Lamps & Lighting",
        children: [
          {
            title: "Floor Lamps",
            url: "/home-and-living-lamps-and-lighting",
          },
          { title: "Ceiling Lamps", url: "/home-and-living-ceiling-lamps" },
          { title: "Table Lamps", url: "/home-and-living-table-lamps" },
          { title: "Wall Lamps", url: "/home-and-living-wall-lamps" },
          { title: "Outdoor Lamps", url: "/home-and-living-outdoor-lamps" },
          { title: "String Lights", url: "/home-and-living-string-lights" },
        ],
      },
      {
        title: "Home Decor",
        children: [
          {
            title: "Plants & Planters",
            url: "/home-and-living-plants-and-planters",
          },
          {
            title: "Aromas & Candles",
            url: "/home-and-living-aromas-and-candles",
          },
          { title: "Clocks", url: "/home-and-living-clocks" },
          { title: "Mirrors", url: "/home-and-living-mirrors" },
          { title: "Wall Decor", url: "/home-and-living-wall-decor" },
          { title: "Festive Decor", url: "/home-and-living-festive-decor" },
          {
            title: "Pooja Essentials",
            url: "/home-and-living-pooja-essentials",
          },
          {
            title: "Wall Shelves",
            url: "/home-and-living-wall-shelves",
          },
          { title: "Fountains", url: "/home-and-living-fountains" },
          {
            title: "Showpieces & Vases",
            url: "/home-and-living-showpieces-and-vases",
          },
          {
            title: "Ottoman",
            url: "/home-and-living-ottoman",
          },
        ],
      },
      {
        title: "Cushions & Cushion Covers",
        url: "/home-and-decor-cushions-and-covers",
      },
      { title: "Curtains", url: "/home-and-living-curtains" },
      { title: "Home Gift Sets", url: "/home-and-living-home-gifts-sets" },
      {
        title: "Kitchen & Table",
        children: [
          { title: "Table Runners", url: "/home-and-living-table-runners" },
          {
            title: "Dinnerware & Serverware",
            url: "/home-and-living-dinnerware-and-serverware",
          },
          {
            title: "Cups and Mugs",
            url: "/home-and-living-cups-and-mugs",
          },
          {
            title: "Bakerware & Cookware",
            url: "/home-and-living-bakeware-and-cookware",
          },
          {
            title: "Kitchen Storage & Tools",
            url: "/home-and-living-kitchen-storage-and-tools",
          },
          {
            title: "Bar & Drinkware",
            url: "/home-and-living-bar-and-drinkware",
          },
          {
            title: "Table Covers & Furnishings",
            url: "/home-and-living-table-covers-and-furnishing",
          },
        ],
      },
      {
        title: "Storage",
        children: [
          { title: "Bins", url: "/home-and-living-bins" },
          { title: "Hangers", url: "/home-and-living-hangers" },
          { title: "Organisers", url: "/home-and-living-organisers" },
          {
            title: "Hooks & Holders",
            url: "/home-and-living-hooks-and-holders",
          },
          { title: "Laundry Bags", url: "/home-and-living-laundry-bags" },
        ],
      },
      {
        title: "Brands",
        children: [
          { title: "H&M", url: "/home-and-living-brands-h&m" },
          {
            title: "Marks & Spencer",
            url: "/home-and-living-brands-marks-and-spencers",
          },
          {
            title: "Home Centre",
            url: "/home-and-living-brands-home-center",
          },
          { title: "Spaces", url: "/home-and-living-brands-spaces" },
          { title: "D'Decor", url: "/home-and-living-brands-d-decor" },
          { title: "Story@Home", url: "/home-and-living-brands-story-home" },
          {
            title: "Pure Home & Living",
            url: "/home-and-living-pure-brands-home-and-living",
          },
          { title: "Swayam", url: "/home-and-living-brands-swayam" },
          {
            title: "Raymond Home",
            url: "/home-and-living-brands-raymond-home",
          },
          { title: "Maspar", url: "/home-and-living-brands-maspar" },
          { title: "My Trident", url: "/home-and-living-brands-my-trident" },
          { title: "Cortina", url: "/home-and-living-brands-cortina" },
          { title: "Random", url: "/home-and-living-brands-random" },
          { title: "Ellementry", url: "/home-and-living-brands-ellementry" },
          { title: "ROMEE", url: "/home-and-living-brands-romee" },
          { title: "SEJ by Nisha Gupta", url: "/home-and-living-brands-sej" },
        ],
      },
    ],
  },
  {
    title: "Beauty",
    children: [
      { title: "Makeup", url: "/beauty-makeup" },
      {
        title: "Skincare,Bath & Body",
        url: "/beauty-bath-and-body",
      },
      {
        title: "Baby Care",
        url: "/beauty-baby-care",
      },
      { title: "Masks", url: "/beauty-masks" },
      {
        title: "Haircare",
        children: [
          { title: "Shampoo", url: "/beauty-shampoo" },
          { title: "Conditioner", url: "/beauty-conditioner" },
          { title: "Hair Cream", url: "/beauty-hair-cream" },
          { title: "Hair Oil", url: "/beauty-hair-oil" },
          { title: "Hair Gel", url: "/beauty-hair-gel" },
          {
            title: "Hair Color",
            url: "/beauty-hair-color",
          },
          { title: "Hair Serum", url: "/beauty-hair-serum" },
          { title: "Hair Accessory", url: "/beauty-hair-accessory" },
        ],
      },
      {
        title: "Fragrances",
        children: [
          { title: "Perfume", url: "/beauty-perfume" },
          { title: "Deodrant", url: "/beauty-deodrant" },
          { title: "Body Mist", url: "/beauty-body-mist" },
        ],
      },
      {
        title: "Appliances",
        children: [
          { title: "Hair Straightener", url: "/hair-straightener" },
          { title: "Hair Dryer", url: "/beauty-hair-dryer" },
          { title: "Epilator", url: "/beauty-epilator" },
        ],
      },
      {
        title: "Men's Grooming",
        children: [
          { title: "Trimmers", url: "/beauty-trimmers" },
          { title: "Beard Oil", url: "/beauty-beard-oil" },
          { title: "Hair Wax", url: "/beauty-hair-wax" },
        ],
      },
      {
        title: "Beauty Gift & Makeup Set",
        children: [
          { title: "Beauty Gift", url: "/beauty-gift" },
          { title: "Makeup Kit", url: "/beauty-makeup-kit" },
        ],
      },
      { title: "Premium Beauty", url: "/premium-beauty" },
      {
        title: "Wellness & Hygiene",
        url: "/beauty-wellness-and-hygiene",
      },
      {
        title: "Top Brands",
        children: [
          { title: "Lakme", url: "/beauty-brand-lakme" },
          { title: "Maybelline", url: "/beauty-brand-maybelline" },
          { title: "LOreal", url: "/beauty-brand-loreal" },
          { title: "Philips", url: "/beauty-brand-philips" },
        ],
      },
    ],
  },
];

// Note SliderData is used for phone screens it will be hidden on desktop screens.

const FirstSliderData = [
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931166/ecommerce_assets/mobilescreenassets/i1burwpc1zbpoctodvi9.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931163/ecommerce_assets/mobilescreenassets/hvanvdk6qrkybdqaw3ds.jpg",
  },

  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931162/ecommerce_assets/mobilescreenassets/jtjrrvj5soqnjyizk7jw.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931163/ecommerce_assets/mobilescreenassets/xkyegr83l6ym2mvdofix.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931161/ecommerce_assets/mobilescreenassets/t1i8ycovvv4qemzkwmp8.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931164/ecommerce_assets/mobilescreenassets/uxh2s6sipwnfy2epneyz.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931164/ecommerce_assets/mobilescreenassets/ldu7rwl2wqoaj07infzu.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931166/ecommerce_assets/mobilescreenassets/vspejgpgvyq1wjrt5ex5.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931164/ecommerce_assets/mobilescreenassets/ygxcnkp5ydldlfryfudl.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931164/ecommerce_assets/mobilescreenassets/ozm0y3zkn9lqkuvfsxev.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931165/ecommerce_assets/mobilescreenassets/rgzhwaeumpdfflt8tj43.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710933120/ecommerce_assets/mobilescreenassets/zgdtofhip1vulzmg2fmd.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931163/ecommerce_assets/mobilescreenassets/qvoj1w7dw6ym0nnwtaej.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931166/ecommerce_assets/mobilescreenassets/rrtqtxehespiquotvhrf.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931166/ecommerce_assets/mobilescreenassets/f0fufpnxyxry53spn9cp.jpg",
  },
];

const SecondSliderData = [
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931160/ecommerce_assets/mobilescreenassets/yaju9mpypxhxa6sjhkgy.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931167/ecommerce_assets/mobilescreenassets/xux2pjw5eozhjigv9qxp.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931164/ecommerce_assets/mobilescreenassets/ivruzw0h5rvpznyefybl.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931167/ecommerce_assets/mobilescreenassets/gtwgtflg2kypvixyav8y.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931162/ecommerce_assets/mobilescreenassets/lqkvwoec3r3nhjhkr80e.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931160/ecommerce_assets/mobilescreenassets/psgg9x3pylwh9ve8cdcp.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931167/ecommerce_assets/mobilescreenassets/pvxjbiknmfj3gawj74q3.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931165/ecommerce_assets/mobilescreenassets/m42m6wbyutoglmsnqa5k.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710992659/ecommerce_assets/mobilescreenassets/dpep3ctr5rwoxlmcowr4.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931165/ecommerce_assets/mobilescreenassets/zgodgrqe71s3ztxbwzgs.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931163/ecommerce_assets/mobilescreenassets/sjqfll5ufcxqsduvntmt.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931164/ecommerce_assets/mobilescreenassets/voqgxoedy8rfzilyrluy.jpg",
  },

  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931160/ecommerce_assets/mobilescreenassets/ct5qcsik7crggvwgccca.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931164/ecommerce_assets/mobilescreenassets/qvye7ti1kofurmbcnjgw.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931165/ecommerce_assets/mobilescreenassets/rl77csatklonu5wmg8i8.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931162/ecommerce_assets/mobilescreenassets/v4kjopylxwp6pgfdwmxu.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931164/ecommerce_assets/mobilescreenassets/shsyrpgj6ec3vfa76zjs.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931166/ecommerce_assets/mobilescreenassets/cs8xsukv4zglrcdgy7pk.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931163/ecommerce_assets/mobilescreenassets/uwtptdrtkpxdymsk4rqx.jpg",
  },
  {
    imgUrl:
      "https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931160/ecommerce_assets/mobilescreenassets/ixp8jknxrn1mfuh4uirv.jpg",
  },
];
export { menuItems, FirstSliderData, SecondSliderData };
