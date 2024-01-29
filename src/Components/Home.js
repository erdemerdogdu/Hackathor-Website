import React from "react";
import "../CSS/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-heading">
        <h1>
          HACKATHOR<br />BAŞLIYOR!
        </h1>
      </div>
      <div className="home-info">
        <div className="home-info-heading">
          <h2>Yazılımını Geliştir!</h2>
        </div>
        <div className="home-content">
          <div className="home-paragraph">
            <p>
              Her satırda inovasyon, her kodda gelecek var!
              Türkiye'nin her köşesinden gelen tutkulu kodlama geliştiricileri, 24 saatlik heyecan dolu maratonda buluşuyor.
              Algoritmaların ve yazılımların sınırlarını zorlayarak, katılımcılara yaratıcılıklarını sergileme fırsatı...
            </p>
          </div>
          <div className="home-paragraph">
            <p>
              Teknoloji, işbirliği ve rekabetin birleşiminde ortaya çıkan benzersiz yarışma, bilgiyi koda dönüştürmenin,
              geleceği yazmanın bir adım ötesinde bir deneyim sunuyor. Hackathor ile kod dünyasında kendi efsaneni yaz!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
