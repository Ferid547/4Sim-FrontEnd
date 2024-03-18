import "./AboutAi.scss";
import historyImg from "../../../assets/images/ai-history.png";

const AboutAiPage = () => {
  return (
    <div className="about_ai_box">
      <div className="cont">
        <div>
          <h2>Süni İntellekt</h2>
          <hr />
          <p>
            Süni intellekt texnika və texnologiyaların insanları təqlid etməsinə
            imkan verən sahədir. Başqa sözlə ifadə etsək Süni intellekti
            insanların hərəkətlərini öyrənmək və təqlid etmək üçün tələb olunan
            təbii zəkanın proqramlaşdırılmış maşınlarda simulyasiyası kimi də
            fikirləşmək olar. Bu zəkaya sahib maşınlar təcrübə ilə öyrənə bilir
            və tapşırıqları insana bənzər şəkildə yerinə yetirməyi bacarır. Süni
            intellekti təyin edən təriflər zamanla dəyişir, amma əsas məğz olan
            insan kimi düşünən maşınlar ideyası dəyişməz olaraq qalır. Süni
            intellektin son illərdə qlobal inkişafı süni intellektin tətbiq
            sahələrini daha da genişləndirib. Bu sahələrə nümunə olaraq, təhsil,
            səhiyyə, kənd təsərrüfatı, o cümlədən müdafiə sənayesi,
            təhlükəsizlik və s. göstərmək olar.
          </p>
        </div>

        <div>
          <h3>Süni intellektin tarixi inkişafı</h3>
          <hr />
          <div className="img_cont">
            <img src={historyImg} alt="history" />
          </div>
        </div>

        <div>
          <h3>Süni intellektin tənzimlənməsi</h3>
          <hr />

          <p>
            Süni intellektin tənzimlənməsi süni intellekt texnologiyalarının
            potensial risklərini və faydalarını həll edən inkişaf etməkdə olan
            bir sahədir. Qanunvericilik təhlükəsizlik, qərəzlilik, ədalətlilik
            və hesabatlılıq kimi sahələrə diqqət yetirir. Məqsəd süni
            intellektin inkişafı və istifadəsinin məsuliyyətli, etik və
            cəmiyyətə fayda verməsini təmin etməkdir. Avropa İttifaqının süni
            intellekt haqqında ilk qanunvericilik bazası olan süni intellekt
            aktı bu cür tənzimləmələrə nümunədir.
          </p>

          <p className="margin_p">
            Süni intellektin tənzimlənilməsinin faydaları:
          </p>
          <ul>
            <li>Zərər və ayrı-seçkilik risklərini azaldır.</li>
            <li>
              İctimai inamı və süni intellekt texnologiyalarının tətbiqini
              artırır.
            </li>
            <li>
              Cəmiyyətin rifahı üçün Süni intellektin məsuliyyətli inkişafını və
              istifadəsini təşviq edir.
            </li>
          </ul>
        </div>

        <div>
          <h3>Uğurlu tətbiqlər</h3>
          <hr />
          <p>
            1. Helsinki, Finlandiya: Süni intellektlə işləyən işıqforun
            optimallaşdırılması: Çağırış: Emissiyaların artmasına və
            vətəndaşların məyusluğuna səbəb olan nəqliyyat sıxlığı və səmərəsiz
            nəqliyyat axını. Həll yolu: Svetoforun vaxtlarını dinamik şəkildə
            tənzimləmək üçün real vaxt trafik məlumatlarını təhlil edən süni
            intellekt sistemi tətbiq edilmişdir. Nəticələr: Nəqliyyat sıxlığını
            10% azaldıb, tullantıları 6% azaldıb və vətəndaşların səyahət
            müddətlərini yaxşılaşdırıb.
          </p>
          <p className="margin_p">
            2. Sinqapur: Süni intellektlə işləyən saxtakarlığın aşkarlanması:
          </p>
          <p className="margin_p">
            Çağırış: Mürəkkəb sosial təminat sistemləri daxilində saxta
            ərizələri və iddiaları müəyyən etməkdə çətinlik. Həll yolu: Ərizəçi
            məlumatlarını təhlil edən və potensial uyğunsuzluqları və ya
            pozuntuları müəyyən edən süni intellekt sistemi hazırlanıb.
            Nəticələr: Milyonlarla dollarlıq saxta iddialar aşkar edildi və
            qarşısı alındı, ictimai resurslara qənaət edildi və həqiqi müraciət
            edənlərin ehtiyac duyduqları dəstəyi alması təmin edildi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutAiPage;
