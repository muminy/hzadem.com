import Breadcrumb from "@/components/Breadcrumb"
import Container from "@/components/Container"
import Seo from "@/components/Seo"

export default function GizlilikPolitikasi() {
  return (
    <Container size="large">
      <Seo
        title="Gizlilik Politikası"
        description="hzadem.com için hazırlanmış gizlilik politikasına ulaşabilirsiniz"
      />
      <Breadcrumb
        items={[
          { title: "Anasayfa", to: "/" },
          { title: "Gizlilik Politikası" },
        ]}
      />
      <h1 className="!text-4xl font-black">Gizlilik Politikası</h1>
      <div className="mb-10 text-sm text-gray-600 dark:text-gray-400">
        Son Güncelleme: 03 Mart 2023 20:39
      </div>

      <div className="article-content">
        <p>
          Güvenliğiniz bizim için önemli. Bu sebeple bizimle paylaşacağınız
          kişisel verileriz hassasiyetle korunmaktadır.
        </p>

        <p>
          Biz, hzadem.com, veri sorumlusu olarak, bu gizlilik ve kişisel
          verilerin korunması politikası ile, hangi kişisel verilerinizin
          hangi amaçla işleneceği, işlenen verilerin kimlerle ve neden
          paylaşılabileceği, veri işleme yöntemimiz ve hukuki sebeplerimiz
          ile; işlenen verilerinize ilişkin haklarınızın neler olduğu
          hususunda sizleri aydınlatmayı amaçlıyoruz.
        </p>

        <h2>
          Toplanan Kişisel Verileriniz, Toplanma Yöntemi ve Hukuki Sebebi
        </h2>
        <p>
          IP adresiniz ve kullanıcı aracısı bilgileriniz, sadece analiz
          yapmak amacıyla ve çerezler (cookies) vb. teknolojiler
          vasıtasıyla, otomatik veya otomatik olmayan yöntemlerle ve bazen
          de analitik sağlayıcılar, reklam ağları, arama bilgi
          sağlayıcıları, teknoloji sağlayıcıları gibi üçüncü taraflardan
          elde edilerek, kaydedilerek, depolanarak ve güncellenerek,
          aramızdaki hizmet ve sözleşme ilişkisi çerçevesinde ve süresince,
          meşru menfaat işleme şartına dayanılarak işlenecektir.
        </p>

        <h2>Kişisel Verilerinizin İşlenme Amacı</h2>

        <p>
          Bizimle paylaştığınız kişisel verileriniz sadece analiz yapmak
          suretiyle; sunduğumuz hizmetlerin gerekliliklerini en iyi şekilde
          yerine getirebilmek, bu hizmetlere sizin tarafınızdan
          ulaşılabilmesini ve maksimum düzeyde faydalanılabilmesini
          sağlamak, hizmetlerimizi, ihtiyaçlarınız doğrultusunda
          geliştirebilmek ve sizleri daha geniş kapsamlı hizmet
          sağlayıcıları ile yasal çerçeveler içerisinde buluşturabilmek ve
          kanundan doğan zorunlulukların (kişisel verilerin talep halinde
          adli ve idari makamlarla paylaşılması) yerine getirilebilmesi
          amacıyla, sözleşme ve hizmet süresince, amacına uygun ve ölçülü
          bir şekilde işlenecek ve güncellenecektir.
        </p>
        <h2>
          Toplanan Kişisel Verilerin Kimlere ve Hangi Amaçlarla
          Aktarılabileceği
        </h2>

        <p>
          Bizimle paylaştığınız kişisel verileriniz; faaliyetlerimizi
          yürütmek üzere hizmet aldığımız ve/veya verdiğimiz, sözleşmesel
          ilişki içerisinde bulunduğumuz, iş birliği yaptığımız, yurt içi
          ve yurt dışındaki 3. şahıslar ile kurum ve kuruluşlara ve talep
          halinde adli ve idari makamlara, gerekli teknik ve idari önlemler
          alınması koşulu ile aktarılabilecektir.
        </p>

        <h2>Kişisel Verileri İşlenen Kişi Olarak Haklarınız</h2>

        <p>
          KVKK madde 11 uyarınca herkes, veri sorumlusuna başvurarak
          aşağıdaki haklarını kullanabilir:
        </p>

        <ul>
          <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
          <li>
            Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,
          </li>
          <li>
            Kişisel verilerin işlenme amacını ve bunların amacına uygun
            kullanılıp kullanılmadığını öğrenme,
          </li>
          <li>
            Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı
            üçüncü kişileri bilme,
          </li>
          <li>
            Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde
            bunların düzeltilmesini isteme,
          </li>
          <li>
            Kişisel verilerin silinmesini veya yok edilmesini isteme,
          </li>
          <li>
            (5) ve (6) bentleri uyarınca yapılan işlemlerin, kişisel
            verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,
          </li>
          <li>
            İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla
            analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun
            ortaya çıkmasına itiraz etme,
          </li>
          <li>
            Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle
            zarara uğraması hâlinde zararın giderilmesini talep etme,
            haklarına sahiptir.
          </li>
        </ul>

        <p>
          Yukarıda sayılan haklarınızı kullanmak üzere{" "}
          <b>help@codejs.dev</b> üzerinden bizimle iletişime
          geçebilirsiniz.
        </p>

        <h2>İletişim</h2>

        <p>
          Sizlere hizmet sunabilmek amaçlı analizler yapabilmek için,
          sadece gerekli olan kişisel verilerinizin, işbu gizlilik ve
          kişisel verilerin işlenmesi politikası uyarınca işlenmesini,
          kabul edip etmemek hususunda tamamen özgürsünüz. Siteyi
          kullanmaya devam ettiğiniz takdirde kabul etmiş olduğunuz
          tarafımızca varsayılacak olup, daha ayrıntılı bilgi için bizimle{" "}
          <b>help@codejs.dev</b> e-mail adresi üzerinden iletişime
          geçmekten lütfen çekinmeyiniz.
        </p>
      </div>
    </Container>
  )
}
