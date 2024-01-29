import React from "react";
import "../CSS/About.css";

function About() {
  return (
    <div className="about" id="about">
      <div className="textbox">
        <h2>"Hackathor" nedir?</h2>
        <div className="about-paragraph">
          <p>
            Hackathor, Bilkent Genç Girişimciler Topluluğu tarafından düzenlenen
            öncü bir kodlama maratonudur. Türkiye'nin dört bir yanından gelen teknoloji
            tutkunu 3. ve 4. sınıf öğrencilerini bir araya getirir.
            İki gün süren yarışma boyunca katılımcılar, belirlenen bir konsept üzerinde yazılım 
            geliştirerek yaratıcılıklarını sergilerler. Hackathor, ağırlıklı olarak Bilkent Üniversitesi,
            Hacettepe Üniversitesi ve ODTÜ öğrencilerini bir araya getirir.
            Hackathor, birinci sınıf bir kodlama maratonu olarak öne çıkarak,
            katılımcılarına geleceğin teknolojik çözümlerini geliştirmeleri için bir platform sağlar.
          </p>
        </div>
      </div>
      <div className="textbox">
          <h2>Hackathor 2024'te neler olacak?</h2>
        <div className="about-paragraph">
          <ul>
            <li>24 Saatlik Kodlama Maratonu</li>
            <li>Bilkent'te Gerçekleştirilen En Büyük Hackathon</li>
            <li>Teknoloji Alanında Tutkulu ve Yetenekli 3. veya 4. Sınıf Öğrenciler</li>
            <li>Ağırlıklı Olarak Bilkent Üniversitesi, Hacettepe Üniversitesi ve ODTÜ
            Olmak Üzere Türkiye'nin Dört Bir Yanından Katılımcı</li>
            <li>Tahmini Katılımcı Sayısı: 16 Takım - 64 Katılımcı</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
