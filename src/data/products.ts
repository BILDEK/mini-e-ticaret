// src/data/products.ts
import { Product } from '@/types';

export const productsData: Product[] = [
  {
    id: '1',
    name: 'Kablosuz Kulaklık X1000',
    shortDescription: 'Mükemmel ses kalitesi ve uzun pil ömrü.',
    longDescription:
      'Yeni nesil Kablosuz Kulaklık X1000 ile müziğin keyfini çıkarın. Gürültü engelleme özelliği, 20 saate varan pil ömrü ve ergonomik tasarımı ile gün boyu konfor sunar. Bluetooth 5.2 teknolojisi ile kesintisiz bağlantı sağlar.',
    price: 799.99,
    // Örnek: https://picsum.photos/seed/kulaklik/600/400 (seed ile her zaman aynı "rastgele" resmi alırsınız)
    // Veya tamamen rastgele: https://picsum.photos/600/400?random=1
    imageUrl: 'https://picsum.photos/seed/kulaklikX1000/600/400',
    category: 'Elektronik',
  },
  {
    id: '2',
    name: 'Organik Pamuk Tişört',
    shortDescription: 'Yumuşak dokulu, %100 organik pamuk.',
    longDescription:
      'Günlük kullanım için ideal olan bu tişört, %100 GOTS sertifikalı organik pamuktan üretilmiştir. Nefes alabilen yapısı ve yumuşak dokusu ile cildinize dosttur. Farklı renk seçenekleri mevcuttur.',
    price: 149.50,
    imageUrl: 'https://picsum.photos/seed/organikTshirt/600/400',
    category: 'Giyim',
  },
  {
    id: '3',
    name: 'Akıllı Saat Z20',
    shortDescription: 'Sağlık takibi ve bildirimler bileğinizde.',
    longDescription:
      'Akıllı Saat Z20 ile sağlığınızı takip edin, antrenmanlarınızı kaydedin ve bildirimlerinizi anında görün. Kalp atış hızı sensörü, uyku takibi, GPS ve suya dayanıklılık özellikleri ile hayatınızı kolaylaştırır.',
    price: 1250.00,
    imageUrl: 'https://picsum.photos/seed/akilliSaatZ20/600/400',
    category: 'Elektronik',
  },
  {
    id: '4',
    name: 'Profesyonel Kahve Makinesi',
    shortDescription: 'Barista kalitesinde kahveler evinizde.',
    longDescription:
      'Profesyonel Kahve Makinesi ile espresso, latte, cappuccino gibi birçok farklı kahve türünü evinizin konforunda hazırlayın. Yüksek basınçlı pompası ve süt köpürtücüsü ile mükemmel sonuçlar elde edin.',
    price: 2899.00,
    imageUrl: 'https://picsum.photos/seed/kahveMakinesi/600/400',
    category: 'Mutfak',
  },
  // İstersen buraya daha fazla ürün ekleyebilirsin
  {
    id: '5',
    name: 'Deri Cüzdan Klasik Model',
    shortDescription: 'El yapımı, %100 gerçek deri cüzdan.',
    longDescription:
      'Klasik tasarımı ve kaliteli işçiliği ile öne çıkan bu deri cüzdan, uzun ömürlü kullanım sunar. Kartlarınız ve nakit paranız için geniş bölmelere sahiptir.',
    price: 349.90,
    imageUrl: 'https://picsum.photos/seed/deriCuzdan/600/400',
    category: 'Aksesuar',
  },
  {
    id: '6',
    name: 'Yoga Matı Kaydırmaz Yüzey',
    shortDescription: 'Konforlu ve güvenli yoga deneyimi için.',
    longDescription:
      'Yüksek kaliteli malzemeden üretilmiş bu yoga matı, kaydırmaz yüzeyi sayesinde en zorlu pozlarda bile dengenizi korumanıza yardımcı olur. Hafif ve taşıması kolaydır.',
    price: 275.00,
    imageUrl: 'https://picsum.photos/seed/yogaMati/600/400',
    category: 'Spor',
  },
];