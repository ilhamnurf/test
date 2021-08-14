import React from "react";
import Header from "./componeny/Header";
import Artikel from "./componeny/artikel";
import Footer from "./componeny/footer";
import { index } from "lodash";


function App() {
  const [artikels, setArtikels] = React.useState([
    {
      judul: "Waffle AJG",
      link: "https://images4.alphacoders.com/583/583543.jpg",
      alt: "juaracoding.jpg",
      konten:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem error odio ullam magnam tenetur eius",
    },
    {
      judul: "React js untuk Front End Developer",
      link: "http://fullhdpictures.com/wp-content/uploads/2016/11/Restaurant-Wallpapers.jpg",
      alt: "Restaurant-Wallpapers.jpg",
      konten:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem error odio ullam magnam tenetur eius",
    },
    {
      judul: "React Native vs Flutter",
      link: "https://files.kfcku.com/uploads/media/dummy/food/kfc-web_waffle_l.png",
      alt: "juaracoding.jpg",
      konten:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem error odio ullam magnam tenetur eius",
    },
    {
      judul: "React Native vs Flutter",
      link: "https://asset.kompas.com/crops/A-HeuHboeoanO6HWmnohMAIRYwY=/0x0:1000x667/750x500/data/photo/2021/06/02/60b7200ea10d9.jpg",
      alt: "juaracoding.jpg",
      konten:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem error odio ullam magnam tenetur eius",
    },
    
    {
      judul: "React Native vs Flutter",
      link: "https://cdn1-production-images-kly.akamaized.net/Mul8q8vtQl6ZezquNiNR8U-Oa8k=/2577x0:5313x3649/640x853/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3006954/original/006116900_1577438816-cherries-daisies-flowers-food-131056.jpg",
      alt: "juaracoding.jpg",
      konten:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem error odio ullam magnam tenetur eius",
    },
    
  ]);

  
  const [tagline ,setTagline] = React.useState("");
  

  return (
    <React.Fragment>
      <div className="antialiased h-screen w-full bg-gray-50 px-16">
        <Header className="text-yellow-900 font-extrabold justify-center"></Header>
        <div className="h-20 w-full">
          
        </div>
        <div className="grid grid-cols-1 ">
          <div className="col-span-5 grid grid-cols-2 gap-5 overflow-auto px-1 py-5">
            {artikels.map((artikel) => (
              <Artikel
                key={index}
                judul={artikel.judul}
                link={artikel.link}
                alt={artikel.alt}
                konten={artikel.konten}
              ></Artikel>
            ))}
            ,
          </div>
          <div>
      <Footer></Footer>
      </div>
          <div className="col-span-1">
            
          </div>
        </div>
      </div>
      
    </React.Fragment>
  );
}

export default App;