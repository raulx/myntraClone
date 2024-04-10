import HorizontalSlider from "../../components/HorizontalSlider";
import { FirstSliderData, SecondSliderData } from "../../utils/Data";
import { useState } from "react";
import Footer from "../../components/Footer";
import AutoSlider from "../../components/AutoSlider";
import Carousel from "../../components/Carousel";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useRegisterUserMutation } from "../../store";
import { setMessage } from "../../store";

function LandingPagePhone() {
  const [showFooter, setShowFooter] = useState(false);

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
    <div className="bg-white mt-1">
      <div className="flex justify-between">
        <h1>{conn ? <>connecting backend....</> : <>{message}</>} </h1>
        <button onClick={handleClick}>connect backend</button>
      </div>
      <div className="flex flex-col gap-4">
        <HorizontalSlider>
          {FirstSliderData.map((d) => {
            return <img key={d.imgUrl} src={d.imgUrl} className="h-16 w-16" />;
          })}
        </HorizontalSlider>
        <HorizontalSlider>
          {SecondSliderData.map((d) => {
            return <img key={d.imgUrl} src={d.imgUrl} className="h-16 w-16" />;
          })}
        </HorizontalSlider>
      </div>
      <img
        className="my-4"
        src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931162/ecommerce_assets/mobilescreenassets/s5wmdyshxcjs5b2t3gvj.jpg"
      />
      <div className="my-2">
        <Carousel slides={8} speed={300}>
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711125393/ecommerce_assets/mobilescreenassets/qj89yjrh5jw0xxet4sup.jpg" />
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711125394/ecommerce_assets/mobilescreenassets/wtrxol69gnhpw49zrm6d.jpg" />
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711125394/ecommerce_assets/mobilescreenassets/dgavt7dxmb4kwunj7lpt.jpg" />
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711125393/ecommerce_assets/mobilescreenassets/xrwbxldbcxoi552xeu72.jpg" />
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711125393/ecommerce_assets/mobilescreenassets/khjanlhyd89v7dbnfthq.jpg" />
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711125393/ecommerce_assets/mobilescreenassets/qyshigmygkdedsa6hwfq.jpg" />
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711125393/ecommerce_assets/mobilescreenassets/zr16dzf3ln9svnx9arbo.jpg" />
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711126967/ecommerce_assets/mobilescreenassets/fimb4b7rlwysekjkqxjf.jpg" />
        </Carousel>
      </div>
      <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711177024/ecommerce_assets/mobilescreenassets/ore0fq9optpjslg9lbvk.jpg" />
      <div className="flex my-2">
        <div>
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931165/ecommerce_assets/mobilescreenassets/owxcuov03rhw9qjrzglo.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1710931161/ecommerce_assets/mobilescreenassets/qls0m4hkb32lk9mpoyvn.jpg" />
        </div>
      </div>
      <div className="py-4">
        <AutoSlider>
          <img
            className="h-24 w-60"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711198171/ecommerce_assets/mobilescreenassets/nfe1kwmqkcglyeykvkyz.jpg"
          />
          <img
            className="h-24 w-60"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711198171/ecommerce_assets/mobilescreenassets/nduwedgtyv70lknkvlkr.jpg"
          />
          <img
            className="h-24 w-60"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711198171/ecommerce_assets/mobilescreenassets/b4po9roz5bsom04c58cx.jpg"
          />
          <img
            className="h-24 w-60"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711198171/ecommerce_assets/mobilescreenassets/mzncpazd8simmjkroegr.jpg"
          />
        </AutoSlider>
      </div>
      <div className="py-4">
        <h1 className="p-2 font-bold">FEATURED BRANDS</h1>
        <HorizontalSlider>
          <img
            className="h-64 w-72"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711211991/ecommerce_assets/mobilescreenassets/qpcqp4prqgy0l28jthcy.jpg"
          />
          <img
            className="h-64 w-72"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711211991/ecommerce_assets/mobilescreenassets/gdnynuqwy9q3eq0cm1f0.jpg"
          />
          <img
            className="h-64 w-72"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711211991/ecommerce_assets/mobilescreenassets/x5hhw4gianoqyceugqp6.jpg"
          />
          <img
            className="h-64 w-72"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711211991/ecommerce_assets/mobilescreenassets/vogpkznylvgpehrt3hpe.jpg"
          />
          <img
            className="h-64 w-72"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711211991/ecommerce_assets/mobilescreenassets/eokddgqezaqapffdn62i.jpg"
          />
          <img
            className="h-64 w-72"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711211991/ecommerce_assets/mobilescreenassets/njlcyw8xi9axai2cqtdd.jpg"
          />
        </HorizontalSlider>
      </div>
      <div className="bg-[rgb(173,216,231)] px-2 py-4">
        <div className="flex justify-between px-4">
          <div>
            <h1 className="font-bold">Trending men&apos;s wear</h1>
            <p>Dapper Fits to Rock Every Look!</p>
          </div>
          <button className="bg-red-500 flex justify-center items-center w-24 h-8 rounded-lg text-xs text-white">
            Explore More
          </button>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-4 p-4">
          <img
            className="h-28"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601831/ecommerce_assets/mobilescreenassets/xxfzd63z2holu1fhgnb9.jpg"
          />
          <img
            className=" h-28"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601831/ecommerce_assets/mobilescreenassets/a6yckb7wkgnjbcdanafq.jpg"
          />
          <img
            className=" h-28"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601831/ecommerce_assets/mobilescreenassets/bd5usx4llchzycl0swtl.jpg"
          />
          <img
            className=" h-28"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601225/ecommerce_assets/mobilescreenassets/dzirv1zamppqapn5u81l.jpg"
          />
          <img
            className=" h-28"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601225/ecommerce_assets/mobilescreenassets/akfleyhhtitxcbgqyivj.jpg"
          />
          <img
            className=" h-28"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601226/ecommerce_assets/mobilescreenassets/oc4e8blp7r9qhyc0bztg.jpg"
          />
          <img
            className=" h-28"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601831/ecommerce_assets/mobilescreenassets/etuyyzgvsj8vdq9pfebv.jpg"
          />
          <img
            className=" h-28"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601226/ecommerce_assets/mobilescreenassets/uhlctzyqwn5p2hvpfxiq.jpg"
          />
        </div>
        <div>
          <h1 className="font-bold">Explore super saver deals</h1>
          <AutoSlider>
            <img
              className="h-48"
              src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601831/ecommerce_assets/mobilescreenassets/zt3sq1azovvgtj4vkgsd.jpg"
            />
            <img
              className="h-48"
              src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601226/ecommerce_assets/mobilescreenassets/tozmtw7vmenpc0zpyekf.jpg"
            />
            <img
              className="h-48"
              src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601226/ecommerce_assets/mobilescreenassets/cnodzq3wnzxsleiwtwqg.jpg"
            />
            <img
              className="h-48"
              src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601226/ecommerce_assets/mobilescreenassets/qosmqlyg8panms7k0ixx.jpg"
            />
            <img
              className="h-48"
              src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711601226/ecommerce_assets/mobilescreenassets/iuqawv5jxxkz2xu9hd3c.jpg"
            />
          </AutoSlider>
        </div>
      </div>
      <div className="my-6">
        <Carousel slides={7}>
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711684412/ecommerce_assets/mobilescreenassets/iwpqdeb6wohvnyl8r7jp.jpg" />
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711684411/ecommerce_assets/mobilescreenassets/gaexfj1sokud5hywcocm.jpg" />
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711684411/ecommerce_assets/mobilescreenassets/xasrbxmachvqwjv13s48.jpg" />
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711684411/ecommerce_assets/mobilescreenassets/uhqgaup8mwik3cqcrwsl.jpg" />
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711684411/ecommerce_assets/mobilescreenassets/r8ox0gvjh52qywjy4oxw.jpg" />
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711684411/ecommerce_assets/mobilescreenassets/jvkvjldqjzdsfsf287h3.jpg" />
          <img src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711684411/ecommerce_assets/mobilescreenassets/vsyzgx9zurj8570stwew.jpg" />
        </Carousel>
      </div>
      <div className="py-2">
        <AutoSlider>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711699731/ecommerce_assets/mobilescreenassets/t9qiezfsh1csfidoabya.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711699731/ecommerce_assets/mobilescreenassets/tovfnhb7f47i2tplavdw.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711699731/ecommerce_assets/mobilescreenassets/pq04gc5cx7n15cfry1wo.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711699731/ecommerce_assets/mobilescreenassets/wmpqfxyuz3rrhd8khbqq.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711699731/ecommerce_assets/mobilescreenassets/bqhxd1s1hzvitsvuvu6m.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711699731/ecommerce_assets/mobilescreenassets/fiiwytfu3jwvlpwdgooe.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711699732/ecommerce_assets/mobilescreenassets/vyj00xocmblqx6efjo04.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711699730/ecommerce_assets/mobilescreenassets/ra7jsgnooq38g6juebnb.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711700772/ecommerce_assets/mobilescreenassets/swblbexpdophrifpkkm9.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711700772/ecommerce_assets/mobilescreenassets/sl7cxryn2qdyux1urvi6.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711699732/ecommerce_assets/mobilescreenassets/wkhjtlesqafy1cnirfgr.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711699732/ecommerce_assets/mobilescreenassets/dolt4kblmwhtgqc2nmv3.jpg"
              />
            </div>
            <div className="flex gap-4">
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711699729/ecommerce_assets/mobilescreenassets/wldaeazkmzlipyw9iv8p.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711699729/ecommerce_assets/mobilescreenassets/lffyeexnearfjoffvn81.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711699729/ecommerce_assets/mobilescreenassets/jmcq7j1zuqh52elon3xi.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711699730/ecommerce_assets/mobilescreenassets/yftexqfjavzfrtd7pcxm.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711699730/ecommerce_assets/mobilescreenassets/jgyei8dyr9qwj7b9gij9.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711699729/ecommerce_assets/mobilescreenassets/rmhxzjczkbtnmibitall.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711699729/ecommerce_assets/mobilescreenassets/rgp8dv652ysrkc7qyhlv.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711699730/ecommerce_assets/mobilescreenassets/wgkhxdatksvglijim2a4.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711699730/ecommerce_assets/mobilescreenassets/typ8brbbetymffvzobab.jpg"
              />

              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711699729/ecommerce_assets/mobilescreenassets/qos53oogiqjv2j8r6gnn.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711699731/ecommerce_assets/mobilescreenassets/ec8zwfdwp0orspcsfhxk.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711699730/ecommerce_assets/mobilescreenassets/p7plixhr4lscntphjj0d.jpg"
              />
            </div>
          </div>
        </AutoSlider>
      </div>
      <div className="bg-[#FEB6C0] px-2 py-4">
        <div className="flex justify-between px-4">
          <div>
            <h1 className="font-bold">bestselling women&apos;s wear</h1>
            <p>Up Your Glamour Question!</p>
          </div>
          <button className="bg-red-500 flex justify-center items-center w-24 h-8 rounded-lg text-xs text-white">
            Explore More
          </button>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-4 p-4">
          <img
            className="h-28"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711686593/ecommerce_assets/mobilescreenassets/nuwko0bt0qcoklwncufz.jpg"
          />
          <img
            className="h-28"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711686593/ecommerce_assets/mobilescreenassets/azyvb0r9rq4o47mjqda3.jpg"
          />
          <img
            className="h-28"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711686592/ecommerce_assets/mobilescreenassets/jbpr63l4iacgoba2hwbr.jpg"
          />
          <img
            className="h-28"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711686592/ecommerce_assets/mobilescreenassets/tqdpvpbwxu6lbc0dpyfb.jpg"
          />
          <img
            className="h-28"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711686592/ecommerce_assets/mobilescreenassets/lin4yiwyt2lcvcck2qmv.jpg"
          />
          <img
            className="h-28"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711686593/ecommerce_assets/mobilescreenassets/zgzcctkj9lyqhwbmhkg8.jpg"
          />
          <img
            className="h-28"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711686593/ecommerce_assets/mobilescreenassets/i3lb7qaamaim94pvapdn.jpg"
          />
          <img
            className="h-28"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711686592/ecommerce_assets/mobilescreenassets/dfaf2qohduad1422uosa.jpg"
          />
        </div>
        <div>
          <h1 className="font-bold">Explore super saver deals</h1>
          <AutoSlider>
            <img
              className="h-48"
              src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711686594/ecommerce_assets/mobilescreenassets/cf12llcd128ouzau6faf.jpg"
            />
            <img
              className="h-48"
              src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711686594/ecommerce_assets/mobilescreenassets/r1xo1ha2hx7yca7bfj1s.jpg"
            />
            <img
              className="h-48"
              src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711686594/ecommerce_assets/mobilescreenassets/sspwjlb0snxwgyxgrbjz.jpg"
            />
            <img
              className="h-48"
              src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711686592/ecommerce_assets/mobilescreenassets/a8ox3z8agwnucpeijkso.jpg"
            />
            <img
              className="h-48"
              src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711686593/ecommerce_assets/mobilescreenassets/gxy7qzrxl2f8sv7hyy4c.jpg"
            />
          </AutoSlider>
        </div>
      </div>
      <div className="py-6">
        <h1 className="font-bold px-2 text-lg mb-2">SPONSORED BRANDS</h1>
        <HorizontalSlider>
          <img
            className="h-64 w-72"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774035/ecommerce_assets/mobilescreenassets/ym58ygs1hlgtpgxvjnxk.jpg"
          />
          <img
            className="h-64 w-72"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774043/ecommerce_assets/mobilescreenassets/rdxyk0u1orc82mqkpg3k.jpg"
          />
          <img
            className="h-64 w-72"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774034/ecommerce_assets/mobilescreenassets/gxrgywi60ve1apccoacq.jpg"
          />
          <img
            className="h-64 w-72"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774036/ecommerce_assets/mobilescreenassets/oqxsxe8qa4mgtluj5zsi.jpg"
          />
          <img
            className="h-64 w-72"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774040/ecommerce_assets/mobilescreenassets/typqeinqvm216dv3pqr7.jpg"
          />
          <img
            className="h-64 w-72"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774046/ecommerce_assets/mobilescreenassets/oxa9e1wuasbqzufcy9t9.jpg"
          />
          <img
            className="h-64 w-72"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774038/ecommerce_assets/mobilescreenassets/uqq8rdr9melnvniamt4v.jpg"
          />
          <img
            className="h-64 w-72"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774039/ecommerce_assets/mobilescreenassets/f0kyevpbwfkfescqa8um.jpg"
          />
          <img
            className="h-64 w-72"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774031/ecommerce_assets/mobilescreenassets/axuxgl9mzar9r5azjuwh.jpg"
          />
        </HorizontalSlider>
      </div>

      <div className="bg-[#F2D0A0] px-2 py-4">
        <div className="flex justify-between px-4">
          <div>
            <h1 className="font-bold">&apos;&apos;footwear must-haves</h1>
            <p>Toe-tally Trending Styles to Bag!</p>
          </div>
          <button className="bg-red-500 flex justify-center items-center w-24 h-8 rounded-lg text-xs text-white">
            Explore More
          </button>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-4 p-4">
          <img
            className="h-28"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774037/ecommerce_assets/mobilescreenassets/k9o5wloksjaoskjabeml.jpg"
          />
          <img
            className="h-28"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774030/ecommerce_assets/mobilescreenassets/p7xqnbzybpnmbv1pvcf1.jpg"
          />
          <img
            className="h-28"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774049/ecommerce_assets/mobilescreenassets/t8kovuy8oid0d8zyf300.jpg"
          />
          <img
            className="h-28"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774030/ecommerce_assets/mobilescreenassets/hzqgbapisxaf4xkeyd0n.jpg"
          />
          <img
            className="h-28"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774047/ecommerce_assets/mobilescreenassets/kktmpawzbg97fl9eeyz2.jpg"
          />
          <img
            className="h-28"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774044/ecommerce_assets/mobilescreenassets/pgcf2doti03gfc8b4nwn.jpg"
          />
          <img
            className="h-28"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774037/ecommerce_assets/mobilescreenassets/aazlwvxoh8aj74bhbhml.jpg"
          />
          <img
            className="h-28"
            src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774038/ecommerce_assets/mobilescreenassets/xzhut8alg2hfqf9c2ncf.jpg"
          />
        </div>
        <div>
          <h1 className="font-bold">Explore super saver deals</h1>
          <AutoSlider>
            <img
              className="h-48"
              src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774038/ecommerce_assets/mobilescreenassets/gdqvbkuoww7rt039x7yi.jpg"
            />
            <img
              className="h-48"
              src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774041/ecommerce_assets/mobilescreenassets/xixrrwpti09wscabt3x3.jpg"
            />
            <img
              className="h-48"
              src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774042/ecommerce_assets/mobilescreenassets/ptgaeqdvq0npl7ar2vio.jpg"
            />
            <img
              className="h-48"
              src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774040/ecommerce_assets/mobilescreenassets/fdze81jor6f2roklb6dh.jpg"
            />
            <img
              className="h-48"
              src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774042/ecommerce_assets/mobilescreenassets/mnr1gwhv8u1l5cnutudc.jpg"
            />
          </AutoSlider>
        </div>
      </div>

      <div className="py-4">
        <div className="px-2">
          <h1 className="font-bold text-lg">Explore more categories</h1>
          <p>Best Selling Styles on the Radar!</p>
        </div>
        <AutoSlider>
          <div className="flex flex-col justify-start gap-2">
            <div className="flex gap-4">
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774040/ecommerce_assets/mobilescreenassets/gdmb4lkuowtmdflnjpci.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774034/ecommerce_assets/mobilescreenassets/tzffikvjyguegzw0u3yw.jpg"
              />

              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774039/ecommerce_assets/mobilescreenassets/unwkeqcvrhztfnzosdfb.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774028/ecommerce_assets/mobilescreenassets/xnd9cogrsmvapez9qgy4.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711788780/ecommerce_assets/mobilescreenassets/uwuwnvjcftxbvaum67oh.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711788778/ecommerce_assets/mobilescreenassets/mblgrobl1surt7ybb9to.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774030/ecommerce_assets/mobilescreenassets/w1xzo9yzr8ac1tlejyap.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774041/ecommerce_assets/mobilescreenassets/som7ylztf0u3sftynhxz.jpg"
              />

              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774040/ecommerce_assets/mobilescreenassets/qbl01d7sun6a4dkm8nt0.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774036/ecommerce_assets/mobilescreenassets/iqhr9bwiuagyyj0l899c.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774045/ecommerce_assets/mobilescreenassets/exelt0vfyy9vvefjr1jc.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774038/ecommerce_assets/mobilescreenassets/pinbp4vslufzmp2sgkfi.jpg"
              />
            </div>
            <div className="flex gap-4 justify-start">
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1712239331/ecommerce_assets/mobilescreenassets/isj2ep4e3b6mbdm4r8ku.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774034/ecommerce_assets/mobilescreenassets/as9g4kbzemws5yytfech.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774047/ecommerce_assets/mobilescreenassets/t0iwped42pirkkgmweul.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1712239609/ecommerce_assets/mobilescreenassets/eadb5nsrjg5kxlregttr.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1712239609/ecommerce_assets/mobilescreenassets/pruwkpxf09talbfmmoui.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1712239609/ecommerce_assets/mobilescreenassets/l3ozwzjb06cowzwkfu9y.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1712239608/ecommerce_assets/mobilescreenassets/c7a19w5icejyhxx9saf6.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1712239608/ecommerce_assets/mobilescreenassets/bn88uw1rfm3g7qgbmwvd.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774048/ecommerce_assets/mobilescreenassets/w34ksipiplhovgqhivsm.jpg"
              />

              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774046/ecommerce_assets/mobilescreenassets/wlozdgmqdvysxayldnfn.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774045/ecommerce_assets/mobilescreenassets/hbiz5mhvvpovwasokqg2.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774034/ecommerce_assets/mobilescreenassets/y3ohhgxkyxvp2hoogvgf.jpg"
              />
              <img
                className="h-36 w-48"
                src="https://res.cloudinary.com/dj5yf27lr/image/upload/v1711774034/ecommerce_assets/mobilescreenassets/vcqszdmuhqbl9bt5ts5t.jpg"
              />
            </div>
          </div>
        </AutoSlider>
      </div>
      <div
        className="px-2 py-2 my-4 flex justify-between"
        onClick={() => setShowFooter(!showFooter)}
      >
        <h1>More about Online Shopping at Myntra</h1>
        {showFooter ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {showFooter && <Footer />}
    </div>
  );
}

export default LandingPagePhone;
