import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import { useRegisterUserMutation } from "../../store";
import { Link } from "react-router-dom";
import { useState } from "react";
import { setMessage } from "../../store";

function LandingPageDesktop() {
  const { message } = useSelector((state) => {
    return state.auth;
  });
  const dispatch = useDispatch();
  const [conn, setConn] = useState(false);
  const [registerUser] = useRegisterUserMutation();
  const handleClick = async () => {
    setConn(true);
    try {
      const res = await registerUser({
        name: "rahul",
        email: "raulx103@gmail.com",
        password: "android16",
      });

      dispatch(setMessage(res.data.message));
    } catch (err) {
      console.log(err);
    }
    setConn(false);
  };
  return (
    <div className="bg-white pt-8 mt-2 flex flex-col gap-12">
      <div className="flex justify-between">
        <div className="px-4 py-2 bg-black text-white font-bold">
          <Link to="/login/admin">Admin</Link>
        </div>
        <h1>{conn ? <>connecting backend....</> : <>{message}</>} </h1>
        <button onClick={handleClick}>connect backend</button>
      </div>
      <Carousel
        slides={6}
        speed={1000}
        autoslide={true}
        autoSlideInterval={5000}
      >
        <div className="flex">
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710159736/ecommerce_assets/ktkhudzxgoavqddcglxg.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710160079/ecommerce_assets/dx8tubaqkrzyownl4v7q.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710160244/ecommerce_assets/yt4j0gopkdkugqaoh2c2.png" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710161519/ecommerce_assets/tecmgel3tsv4xt8ussgq.png" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710162130/ecommerce_assets/ciiizwaqmpgxbhybmlz7.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710161326/ecommerce_assets/mzkaaaqjj6xj9ohljtk0.jpg" />
        </div>
      </Carousel>
      <div className="text-4xl uppercase font-bold my-8                                 ">
        <h1 className="ml-12 tracking-widest" style={{ color: "#3E4152" }}>
          Medal worthy brands to bag
        </h1>
      </div>
      <Carousel slides={4} autoslide={true} autoSlideInterval={7000}>
        <div className="flex w-full h-full">
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710211220/ecommerce_assets/discounts/fg7ajh5qewjyrczculga.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710176488/ecommerce_assets/discounts/ozuxhjw4r4ulk6qwoazh.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710176495/ecommerce_assets/discounts/bgp3ymeay4a2a7aug8tk.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710176527/ecommerce_assets/discounts/fyjjojtiz9askieyju2q.jpg" />
          </div>

          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710176488/ecommerce_assets/discounts/xolac0okeboky0rkrbcb.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710176488/ecommerce_assets/discounts/teqmk3oawiq2ptkh9yfs.jpg" />
          </div>
        </div>
        <div className="flex">
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710176569/ecommerce_assets/discounts/d09gxayvmmjwzm84kp2w.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710176568/ecommerce_assets/discounts/nximgztg0qcqwnb31o6q.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710176496/ecommerce_assets/discounts/qlxykb0du1yp6uqktoa9.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710176569/ecommerce_assets/discounts/v2piwswqot49lurveutq.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710176488/ecommerce_assets/discounts/aoh9lm777srbavhr0psb.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710176488/ecommerce_assets/discounts/l1vstiu8sla5tptdd0wg.jpg" />
          </div>
        </div>
        <div className="flex">
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710176496/ecommerce_assets/discounts/xeitqgis3gmc5hfgcfyt.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710177209/ecommerce_assets/discounts/oomivjljueuujyewvmgw.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710176488/ecommerce_assets/discounts/ryvkd59eijnn9uros0kt.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710212060/ecommerce_assets/discounts/kgwa7m8pwfryvhrguvgj.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710212383/ecommerce_assets/discounts/yuk0x4j7ltotslmxgkbm.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710176568/ecommerce_assets/discounts/xooeguedgfjzv9vmshtt.jpg" />
          </div>
        </div>
        <div className="flex">
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710176566/ecommerce_assets/discounts/regn0jxrxfurs7uykujz.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710176496/ecommerce_assets/discounts/t1kydokmjqbycqoljg3m.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710212691/ecommerce_assets/discounts/ad2oq2gi7p9cdglsmzq7.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710212859/ecommerce_assets/discounts/awvtzql2tfcwqtnzuawj.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710212966/ecommerce_assets/discounts/djzgmoegdrhi9cjnubih.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710176567/ecommerce_assets/discounts/jzfhqcmafpmewfk28kyy.jpg" />
          </div>
        </div>
      </Carousel>
      <div className="text-4xl uppercase font-bold my-8">
        <h1 className="ml-12 tracking-widest" style={{ color: "#3E4152" }}>
          Grand Global Brands
        </h1>
      </div>
      <Carousel slides={2} autoslide={true}>
        <div className="flex h-full">
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710217124/ecommerce_assets/discounts/globalbrands/bgsxlv9mslxvm2r3nnhf.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710217124/ecommerce_assets/discounts/globalbrands/xqrtg54ahaviztr6cxi8.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710217124/ecommerce_assets/discounts/globalbrands/r27v0scfdhcblimljvxa.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710217124/ecommerce_assets/discounts/globalbrands/n81g416exwxce3dhw9fu.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710217123/ecommerce_assets/discounts/globalbrands/ahri7s6apvseoonxgn50.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710217123/ecommerce_assets/discounts/globalbrands/rvnnw907x4e76oxhyl5g.jpg" />
          </div>
        </div>
        <div className="flex h-full">
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710218344/ecommerce_assets/discounts/globalbrands/ncf08ruozmzdzyejz1vb.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710218596/ecommerce_assets/discounts/globalbrands/fift9mhxnbuh638edjye.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710218596/ecommerce_assets/discounts/globalbrands/xslsifcbkl1gmv7slgig.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710218596/ecommerce_assets/discounts/globalbrands/rkltlisrdqwgvgbndyqw.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710218345/ecommerce_assets/discounts/globalbrands/axtsexj3mbjruwhvewno.jpg" />
          </div>
          <div className="w-80">
            <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710218345/ecommerce_assets/discounts/globalbrands/owffdgi3v53oiodpoiol.jpg" />
          </div>
        </div>
      </Carousel>
      <div className="text-4xl uppercase font-bold my-8">
        <h1 className="ml-12 tracking-widest" style={{ color: "#3E4152" }}>
          Shop By Category
        </h1>
      </div>
      <div className="w-11/12 mx-auto flex flex-wrap justify-center items-center  gap-6">
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241241/ecommerce_assets/categories/l1neexr3k7px06rluj1y.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241241/ecommerce_assets/categories/gcvrvw3yuyuukdw0gctr.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241238/ecommerce_assets/categories/wlrbr8uhskg05azmtorm.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241239/ecommerce_assets/categories/cy8atnixffgxjrnais1u.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241241/ecommerce_assets/categories/l1neexr3k7px06rluj1y.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241241/ecommerce_assets/categories/f8yzgtbozymn84nus22z.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241239/ecommerce_assets/categories/mwwqcdsqjpwuahwvrrgx.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241238/ecommerce_assets/categories/lm2vfwq6mxfrpdfrcjpb.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241239/ecommerce_assets/categories/wqgoq88trre66f929ftd.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241241/ecommerce_assets/categories/r3up8ljjje7i2kmiuxzi.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241240/ecommerce_assets/categories/dfhb2ovq29yyc8o49qsj.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241238/ecommerce_assets/categories/iwza11jdmsfpycryrixz.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241238/ecommerce_assets/categories/gwal68lupunqcqdxfbcg.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241239/ecommerce_assets/categories/eatdstabhgopehqi2kvg.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241240/ecommerce_assets/categories/f7bm0bnbabhq2dmzjymf.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241238/ecommerce_assets/categories/jhjsieazovxlijrp5sad.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241239/ecommerce_assets/categories/bowogtffd6jqwnioyguo.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241239/ecommerce_assets/categories/cy8atnixffgxjrnais1u.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241237/ecommerce_assets/categories/stpu0a3jm72ymp4xkddf.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241240/ecommerce_assets/categories/otuxti4lqzsghacur1iz.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241240/ecommerce_assets/categories/wakpdd4ucyf9wcztwq1p.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241238/ecommerce_assets/categories/ggxjxegugo7jo4vmqcls.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241240/ecommerce_assets/categories/y9vgaxzn8e55i6acitv3.png" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241240/ecommerce_assets/categories/efcspk39go5dedfnvdt4.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241241/ecommerce_assets/categories/rjnbvjvhiurojrixyzla.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241241/ecommerce_assets/categories/xwyv9vmh9sifml4p8lys.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241242/ecommerce_assets/categories/avok9pxlt6dljx15lzc6.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241239/ecommerce_assets/categories/lmxaeusfnmooliqqhayt.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241242/ecommerce_assets/categories/rhmlmwag5jf2jmkz6xg9.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241238/ecommerce_assets/categories/civ1t0xazgpvgyndkb3z.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241238/ecommerce_assets/categories/bvctdnardfs7a0xykbcu.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241241/ecommerce_assets/categories/kedjmklehnfezhlw83yr.jpg" />
        <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710241240/ecommerce_assets/categories/wjb7px73oiwju6i8gcrn.jpg" />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPageDesktop;
