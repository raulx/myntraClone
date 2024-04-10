import {
  FaFacebookSquare,
  FaTwitter,
  FaYoutube,
  FaInstagramSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="w-screen bg-gray-100 py-12">
      <div className="w-10/12 mx-auto">
        <div className="flex gap-16 flex-wrap">
          <div className="flex flex-col gap-4 w-48">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-sm">ONLINE SHOPPING</h2>
              <ul className="text-gray-500">
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Home & Living</li>
                <li>Beauty</li>
                <li>Gift Cards</li>
                <li>Myntra Insider</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-sm">USEFUL LINKS</h2>
              <ul className="text-gray-500">
                <li>Blog</li>
                <li>Careers</li>
                <li>Site Map</li>
                <li>Corporate Information</li>
                <li>Whitehat</li>
                <li>Cleartrip</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-48">
            <h1 className="font-bold text-sm">CUSTOMER POLICIES</h1>
            <ul className="text-gray-500">
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>T&C</li>
              <li>Terms Of Use</li>
              <li>Track Orders</li>
              <li>Shipping</li>
              <li>Cancellation</li>
              <li>Return</li>
              <li>Privacy Policy</li>
              <li>Grievance Officer</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-sm">
              EXPERIENCE MYNTRA APP ON MOBILE
            </h1>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="flex justify-center w-48 items-center p-1 gap-4 rounded-lg bg-black text-white">
                <img
                  className="md:h-8 md:w-8 h-4 w-4"
                  src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710261620/ecommerce_assets/wfbcfgjonkcyceloqnv8.png"
                />
                <div className="flex flex-col justify-start items-start">
                  <span className="text-xs">GET IT ON</span>
                  <span className="text-xl font-bold">Google Play</span>
                </div>
              </button>
              <button className="flex justify-center w-48 items-center p-1 gap-4 rounded-lg bg-black text-white">
                <img
                  className="h-12 w-12"
                  src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710261839/ecommerce_assets/natqcjh7jjiqadjiazyy.png"
                />
                <div className="flex flex-col justify-start items-start">
                  <span className="text-xs">Download on the</span>
                  <span className=" font-bold">App Store</span>
                </div>
              </button>
            </div>
            <h1 className="font-bold text-sm">KEEP IN TOUCH</h1>
            <div className="flex gap-4 text-gray-500">
              <FaFacebookSquare size={24} />
              <FaTwitter size={24} />
              <FaYoutube size={24} />
              <FaInstagramSquare size={24} />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710263509/ecommerce_assets/vk8dlumfo4hizf3mlu67.png" />

              <div className="text-gray-500">
                <span className=" font-bold text-md">100% ORIGINAL </span>
                guarantee for all products at myntra.com
              </div>
            </div>
            <div className="flex gap-4 text-gray-500">
              <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710263509/ecommerce_assets/kt65jwhx4t44limr4wrq.png" />
              <div>
                <span className=" font-bold text-md">
                  Returns within 14days{" "}
                </span>
                of receiving your order
              </div>
            </div>
          </div>
        </div>
        <h1 className="font-bold text-sm my-8">POPULAR SEARCHES</h1>
        <div className="text-gray-500">
          <span> Makeup </span>|<span> Dresses For Girls </span>|
          <span> T-Shirts </span>|<span> Sandals </span>|
          <span> Headphones </span>|<span> Babydolls </span>|
          <span> Blazers For Men </span>|<span> Handbags </span>|
          <span> Ladies Watches </span>|<span> Bags </span>|
          <span> Sports Shoes </span>|<span> Reebok Shoes </span>|
          <span> Puma Shoes </span>|<span> Boxers </span>|<span> Wallets </span>
          |<span> Tops </span>|<span> Earrings </span>|
          <span> Fastrack Watches </span>|<span> Kurtis </span>|
          <span> Nike </span>|<span> Smart Watches </span>|
          <span> Titan Watches </span>|<span> Designer Blouse </span>|
          <span> Gowns </span>|<span> Rings </span>|<span> Cricket Shoes </span>
          |<span> Forever 21 </span>|<span> Eye Makeup </span>|
          <span> Photo Frames </span>|<span> Punjabi Suits </span>|
          <span> Bikini </span>|<span> Myntra Fashion Show </span>|
          <span> Lipstick </span>|<span> Saree </span>|<span> Watches </span>|
          <span> Lehenga </span>|<span> Nike Shoes </span>|
          <span> Goggles </span>|<span> Bras </span>|<span> Suit </span>|
          <span> Chinos </span>|<span> Shoes </span>|<span> Adidas Shoes </span>
          |<span> Woodland Shoes </span>|<span> Dresses </span>|
          <span> Jewellery </span>|<span> Designers Sarees </span>|
        </div>
        <div className="flex justify-between my-8 text-gray-500">
          <div>
            In case of any concern,
            <span className=" text-blue-600 font-bold">Contact Us</span>
          </div>
          <div className="text-gray-500">
            &copy;2024 www.myntra.com.All rights reserved
          </div>
          <div>A Flipkart Company</div>
        </div>
        <h1 className="font-bold text-lg my-8">Registered Office Address</h1>
        <div className="flex justify-between">
          <div className="text-gray-500">
            <p>Buildings Alyssa,</p>
            <p>Begonia and Clover Situated in Embassy Tech Village,</p>
            <p>Outer Ring Road,</p>
            <p>Devarabeesanahalli Village,</p>
            <p>Varthur Hobli,</p>
            <p>Bengaluru - 560103,India</p>
          </div>
          <div className="self-end text-gray-500">
            <div>CIN:U72300KA2007PTC041799</div>
            <div>
              Telephone:
              <span className="font-bold text-blue-700">+91-80-61561999</span>
            </div>
          </div>
        </div>
        <div className="my-8">
          <h1 className="font-bold my-2">
            ONLINE SHOPPING MADE EASY AT MYNTRA
          </h1>
          <p className="text-gray-500">
            If you would like to experience the best of online shopping for men,
            women and kids in India, you are at the right place. Myntra is the
            ultimate destination for fashion and lifestyle, being host to a wide
            array of merchandise including clothing, footwear, accessories,
            jewellery, personal care products and more. It is time to redefine
            your style statement with our treasure-trove of trendy items. Our
            online store brings you the latest in designer products straight out
            of fashion houses. You can shop online at Myntra from the comfort of
            your home and get your favourites delivered right to your doorstep.
          </p>
        </div>
        <div className="my-8">
          <h1 className="font-bold my-2">
            BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION
          </h1>
          <p className="text-gray-500">
            Be it clothing, footwear or accessories, Myntra offers you the ideal
            combination of fashion and functionality for men, women and kids.
            You will realise that the sky is the limit when it comes to the
            types of outfits that you can purchase for different occasions.
          </p>
          <ol
            style={{ listStyleType: "decimal" }}
            className="ml-12 py-6 flex flex-col gap-4"
          >
            <li>
              <span className="font-bold ">Smart men&apos;s clothing - </span>
              <span className="text-gray-500">
                At Myntra you will find myriad options in smart formal shirts
                and trousers, cool T-shirts and jeans, or kurta and pyjama
                combinations for men. Wear your attitude with printed T-shirts.
                Create the back-to-campus vibe with varsity T-shirts and
                distressed jeans. Be it gingham, buffalo, or window-pane style,
                checked shirts are unbeatably smart. Team them up with chinos,
                cuffed jeans or cropped trousers for a smart casual look. Opt
                for a stylish layered look with biker jackets. Head out in
                cloudy weather with courage in water-resistant jackets. Browse
                through our innerwear section to find supportive garments which
                would keep you confident in any outfit.
              </span>
            </li>
            <li>
              <span className="font-bold">Trendy Women&apos;s clothing - </span>
              <span className="text-gray-500">
                Online shopping for women at Myntra is a mood-elevating
                experience. Look hip and stay comfortable with chinos and
                printed shorts this summer. Look hot on your date dressed in a
                little black dress, or opt for red dresses for a sassy vibe.
                Striped dresses and T-shirts represent the classic spirit of
                nautical fashion. Choose your favourites from among Bardot,
                off-shoulder, shirt-style, blouson, embroidered and peplum tops,
                to name a few. Team them up with skinny-fit jeans, skirts or
                palazzos. Kurtis and jeans make the perfect fusion-wear
                combination for the cool urbanite. Our grand sarees and
                lehenga-choli selections are perfect to make an impression at
                big social events such as weddings. Our salwar-kameez sets,
                kurtas and Patiala suits make comfortable options for regular
                wear.
              </span>
            </li>
            <li>
              <span className="font-bold">Fashionable footwear - </span>
              <span className="text-gray-500">
                While clothes maketh the man, the type of footwear you wear
                reflects your personality. We bring you an exhaustive lineup of
                options in casual shoes for men, such as sneakers and loafers.
                Make a power statement at work dressed in brogues and oxfords.
                Practice for your marathon with running shoes for men and women.
                Choose shoes for individual games such as tennis, football,
                basketball, and the like. Or step into the casual style and
                comfort offered by sandals, sliders, and flip-flops. Explore our
                lineup of fashionable footwear for ladies, including pumps,
                heeled boots, wedge-heels, and pencil-heels. Or enjoy the best
                of comfort and style with embellished and metallic flats.
              </span>
            </li>
            <li>
              <span className="font-bold">Stylish accessories - </span>
              <span className="text-gray-500">
                Myntra is one of the best online shopping sites for classy
                accessories that perfectly complement your outfits. You can
                select smart analogue or digital watches and match them up with
                belts and ties. Pick up spacious bags, backpacks, and wallets to
                store your essentials in style. Whether you prefer minimal
                jewellery or grand and sparkling pieces, our online jewellery
                collection offers you many impressive options.
              </span>
            </li>
            <li>
              <span className="font-bold">Fun and frolic - </span>
              <span className="text-gray-500">
                Online shopping for kids at Myntra is a complete joy. Your
                little princess is going to love the wide variety of pretty
                dresses, ballerina shoes, headbands and clips. Delight your son
                by picking up sports shoes, superhero T-shirts, football jerseys
                and much more from our online store. Check out our lineup of
                toys with which you can create memories to cherish.
              </span>
            </li>
            <li>
              <span className="font-bold">Beauty begins here - </span>
              <span className="text-gray-500">
                You can also refresh, rejuvenate and reveal beautiful skin with
                personal care, beauty and grooming products from Myntra. Our
                soaps, shower gels, skin care creams, lotions and other
                ayurvedic products are specially formulated to reduce the effect
                of aging and offer the ideal cleansing experience. Keep your
                scalp clean and your hair uber-stylish with shampoos and hair
                care products. Choose makeup to enhance your natural beauty.
              </span>
            </li>
          </ol>
          <p className="text-gray-500">
            Myntra is one of the best online shopping sites in India which could
            help transform your living spaces completely. Add colour and
            personality to your bedrooms with bed linen and curtains. Use smart
            tableware to impress your guest. Wall decor, clocks, photo frames
            and artificial plants are sure to breathe life into any corner of
            your home.
          </p>
        </div>
        <div className="my-6">
          <h1 className="font-bold">AFFORDABLE FASHION AT YOUR FIGERTIPS</h1>
          <p className="text-gray-500">
            Myntra is one of the unique online shopping sites in India where
            fashion is accessible to all. Check out our new arrivals to view the
            latest designer clothing, footwear and accessories in the market.
            You can get your hands on the trendiest style every season in
            western wear. You can also avail the best of ethnic fashion during
            all Indian festive occasions. You are sure to be impressed with our
            seasonal discounts on footwear, trousers, shirts, backpacks and
            more. The end-of-season sale is the ultimate experience when fashion
            gets unbelievably affordable.
          </p>
        </div>
        <div className="my-6">
          <h1 className="font-bold">MYNTRA INSIDER</h1>
          <p className="text-gray-500">
            Every online shopping experience is precious. Hence, a cashless
            reward-based customer loyalty program called Myntra Insider was
            introduced to enhance your online experience. The program is
            applicable to every registered customer and measures rewards in the
            form of Insider Points. There are four levels to achieve in the
            program, as the Insider Points accumulate. They are - Insider,
            Select, Elite or Icon. Apart from offering discounts on Myntra and
            partner platform coupons, each tier comes with its own special
            perks.
          </p>
          <div>
            <h1 className="font-bold my-4">Insider</h1>
            <ul
              style={{ listStyleType: "disc" }}
              className="ml-12 text-gray-500 flex flex-col gap-2"
            >
              <li>
                Opportunity to master any domain in fashion with tips from
                celebrity stylists at Myntra Masterclass sessions.
              </li>
              <li>Curated collections from celeb stylists.</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold my-4">Elite</h1>
            <ul
              style={{ listStyleType: "disc" }}
              className="ml-12 text-gray-500 flex flex-col gap-2"
            >
              <li>
                VIP access to special sale events such as the End of Reason Sale
                (EORS) and product launches.
              </li>
              <li>Exclusive early access to Limited Edition products</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold my-4">Icons</h1>
            <ul
              style={{ listStyleType: "disc" }}
              className="ml-12 text-gray-500 flex flex-col gap-2"
            >
              <li>Chance to get on guest lists for special events.</li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="font-bold">
            Myntra Studio - The Personalised Fashion Feed You Wouldn&apos;t Want
            To Miss Out On
          </h1>
          <p className="my-2 text-gray-500">
            The world wide web is evolving at a relentless pace, and with an
            accelerated growth each passing year, there is bound to be an
            overwhelming surge of online content. It was for this very reason
            that personalisation of search feeds was proposed as a solution to
            combat the overload of irrelevant information.
          </p>
          <p className="my-4 text-gray-500">
            Several social media platforms such as Facebook and Instagram along
            with various online shopping websites have chosen to help filter
            content, increasing user engagement, retention and customer loyalty.
          </p>
          <p className="my-4 text-gray-500">
            Myntra is one such online shopping website that joins the list of
            platforms that help curate a personalised fashion feed. Named
            theMyntra Studio, this personalised search feed brings you the
            latest men and women&apos;s fashion trends, celebrity styles,
            branded content and daily updates from your favourite fashion
            labels.
          </p>
          <p className="my-4 text-gray-500">
            If you are wondering how impactful Myntra Studio can be, we are
            listing out five perks of having a rich, meaningful, and
            personalised fashion feed in your life.
          </p>
          <ol style={{ listStyleType: "decimal" }} className="ml-12">
            <li>
              <h2 className="font-bold">
                Keep Up With What Your Favourite Fashion Icons Are Upto
              </h2>
              <p className="my-4 text-gray-500">
                The #OOTD, AKA outfit of the day hashtag trend has been a rage
                among fashion bloggers and stylists. The whole concept of
                building an outfit from scratch and showcasing it to a huge
                community of enthusiasts using the hashtag has helped
                individuals with understanding trends and making suitable for
                daily wear.
              </p>
              <p className="my-4 text-gray-500">
                Imagine if you could keep up with every piece of clothing and
                accessory worn by the fashion icons you look upto. From Sonam
                Kapoor to Hailey Baldwin Bieber, Myntra Studio has a ‘Stories’
                feature to help track celebrity fashion trends, exploring
                details such as their outfit of the day. This way, you would not
                ever miss out on the latest celebrity fashion trends, from all
                around the world.
              </p>
            </li>
            <li>
              <h2 className="font-bold">Quick Fashion Tip And Tricks</h2>
              <p className="my-4 text-gray-500">
                Whether it is draping a saree into a dhoti style, wearing the
                right lingerie under certain dresses or discovering multiple
                uses out of heavy ethnic wear, Myntra Studio will help you
                acquire some unique and useful fashion hacks. Each hack is
                designed with the intention to help you get the best wear out of
                everything in your wardrobe.
              </p>
            </li>
            <li>
              <h2 className="font-bold">
                Updates on What Is Trending and New Product Launches
              </h2>
              <p className="my-4 text-gray-500">
                Since fast fashion seems to be extremely hard to keep up with
                these days, a quick update on what is trending in accessories,
                clothing and footwear would certainly be of great help. Myntra
                Studio helps you stay connected to the most beloved and sought
                after brands such as Puma, Coverstory, The Label Life and so
                many more.
              </p>
              <p className="my-4 text-gray-500">
                Your feed keeps you updated with stories of what the brands are
                creating including clothing, footwear and jewellery, along with
                their new seasonal collections.
              </p>
            </li>
            <li>
              <h2 className="font-bold">
                Explicit Step-By-Step Beauty Routines From Experts
              </h2>
              <p className="my-4 text-gray-500">
                Just like fashion, the beauty community keeps on growing, and
                with brands such as Huda Beauty, MAC and the latest Kay Beauty
                by Katrina Kaif, are constantly coming up with mind-blowing
                products. Whether it is creating a no-makeup look, different
                winged eyeliners, do-it-yourself facial masks and other personal
                care beauty routines, Myntra Studio is here for you.
              </p>
            </li>
            <li>
              <h2 className="font-bold">
                Keep Up With What Your Favourite Fashion Icons Are Upto
              </h2>
              <p className="my-4 text-gray-500">
                A bonus feature that Myntra Studio has in store for you is
                celebrity confessions and a peek into their lives. So, Myntra
                helps you stay connected to your most beloved celebrities in a
                matter of clicks.
              </p>
              <p className="my-4 text-gray-500">
                If you are very particular when it comes to the content you wish
                to view and engage with on social media, the ability to
                intricately filter content helps achieve that. Applying the same
                formula for hardcore fashion lovers and shoppers, Myntra Studio
                brings you a daily fashion fix incorporating everything that you
                love, all at one place. Sign up on Myntra today and start
                organising your fashion feed, just the way you want to.
              </p>
            </li>
          </ol>
        </div>
        <div className="my-6">
          <h1 className="font-bold">MYNTRA APP</h1>
          <p className="text-gray-500">
            Myntra, India’s no. 1 online fashion destination justifies its
            fashion relevance by bringing something new and chic to the table on
            the daily. Fashion trends seem to change at lightning speed, yet the
            Myntra shopping app has managed to keep up without any hiccups. In
            addition, Myntra has vowed to serve customers to the best of its
            ability by introducing its first-ever loyalty program, The Myntra
            Insider. Gain access to priority delivery, early sales, lucrative
            deals and other special perks on all your shopping with the Myntra
            app. Download the Myntra app on your Android or IOS device today and
            experience shopping like never before!
          </p>
        </div>
        <div className="my-6">
          <h1 className="font-bold">HISTORY OF MYNTRA</h1>
          <p className="text-gray-500">
            Becoming India’s no. 1 fashion destination is not an easy feat.
            Sincere efforts, digital enhancements and a team of dedicated
            personnel with an equally loyal customer base have made Myntra the
            online platform that it is today. The original B2B venture for
            personalized gifts was conceived in 2007 but transitioned into a
            full-fledged ecommerce giant within a span of just a few years. By
            2012, Myntra had introduced 350 Indian and international brands to
            its platform, and this has only grown in number each passing year.
            Today Myntra sits on top of the online fashion game with an
            astounding social media following, a loyalty program dedicated to
            its customers, and tempting, hard-to-say-no-to deals.
          </p>
          <p className="text-gray-500 my-4">
            The Myntra shopping app came into existence in the year 2015 to
            further encourage customers’ shopping sprees. Download the app on
            your Android or IOS device this very minute to experience fashion
            like never before
          </p>
        </div>
        <div className="my-6">
          <h2 className="font-bold">
            SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE
          </h2>
          <p className="text-gray-500">
            Another reason why Myntra is the best of all online stores is the
            complete convenience that it offers. You can view your favourite
            brands with price options for different products in one place. A
            user-friendly interface will guide you through your selection
            process. Comprehensive size charts, product information and
            high-resolution images help you make the best buying decisions. You
            also have the freedom to choose your payment options, be it card or
            cash-on-delivery. The 14-day returns policy gives you more power as
            a buyer. Additionally, the try-and-buy option for select products
            takes customer-friendliness to the next level.
          </p>
          <p className="my-4 text-gray-500">
            Enjoy the hassle-free experience as you shop comfortably from your
            home or your workplace. You can also shop for your friends, family
            and loved-ones and avail our gift services for special occasions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
