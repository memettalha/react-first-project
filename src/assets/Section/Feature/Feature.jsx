import "./Feature.css"
//import from  'react-icons/fa'
import ReactPlayer from 'react-player'




export function Feature(){
    return(
        <div className="container">
            <div className="row">
                <p className="vision">SONRAKİ ADIMLAR</p>
                <h1>BMW'NİZİ REZERVE EDİN</h1>
                <div className="col-4">
                    <img className="bmwimage" src="https://bmw.scene7.com/is/image/BMW/NxW_Home_ICON_STOCK_CAR?wid=1504&hei=542" alt="" />
                    <p className="title kesfet">BMW’ni Bul’da Tasarlayın ve Rezerve Edin.</p>
                    <button className="bmwButton">BMW'ni Bul'a gidin</button>
                </div>
                <div className="col-4">
                    <img className="bmwimage" src="https://bmw.scene7.com/is/image/BMW/NxW_Home_ICON_RFO?wid=1504&hei=542" alt="" />
                    <p className="title kesfet">Ayın Özel Teklifleri</p>
                    <button className="bmwButton">Keşfedin</button>
                </div>
                <div className="col-4">
                    <img className="bmwimage" src="https://bmw.scene7.com/is/image/BMW/NxW_Home_ICON_CON?wid=1504&hei=542" alt="" />
                    <p className="title kesfet">Fiyat Listesi.</p>
                    <button className="bmwButton">İnceleyin</button>
                </div>
               
            </div>
            <div className="advantage">
                <p  className="vision">NİSAN AYINA ÖZZEL AVANTAJLARLA</p>
                <h1>TAMAMEN <br></br>ELEKTRİKLİ BMW İ4 </h1>
                <button className="btnImg">Keşfedin ve özel teklifleri görün</button>
            </div>
            <div className="X">
                <p className="vision">BMW VISION NEUE KLASSE</p>
                <h1>X'İN YENİ ÇAĞI</h1>
                <button className="btnImg">Keşfedin</button>
            </div>
            <div className="bmwWorld">
                <div className="left">
                    <img src="https://bmw.scene7.com/is/image/BMW/header-desktop-v5:16to9?fmt=webp&wid=1504&hei=846" alt="" />
                </div>
                <div className="right">
                    <p className="bmwTurkey">BMW TÜRKİYE MOBİL UYGULAMASI</p>
                    <h1>BMW DÜNYASI TEK UYGULAMADA.</h1>
                    <p>BMW Türkiye mobil uygulamasını mobil cihazlarınıza indirip<br></br> hemen kullanmaya başlayabilirsiniz.</p>
                    <button className="discover">Keşfedin</button>
                </div>
            </div>
            <div className="bmwWorld">
                <div className="left">
                <p className="bmwTurkey">BLOG</p>
                    <h1>BMW JOY BLOG.</h1>
                    <p>BMW’nin büyüleyici dünyasından en son gelişmeler, ilham veren yazılar ve özel söyleşiler BMW Joy Blog’da.</p> 
                    <br></br>
                    <button className="discover">Keşfetmeye başlayın</button>
                </div>
                <div className="right">
                <img className="pictBmw" src="https://bmw.scene7.com/is/image/BMW/bmw-joy-blog-header-desktop:16to9?fmt=webp&wid=1504&hei=846" alt="" />
                </div>
            </div>
        </div>
      
    );
}