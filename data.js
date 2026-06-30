/* ============================================================
   宿コレクション データ
   ------------------------------------------------------------
   泊まりたい宿を追加していきます。
   新しい宿は URL を Claude に渡せば、写真・宿名・場所(県)・金額帯を
   自動取得してここに追記します（手で編集する必要はありません）。
   ============================================================ */

const HOTELS = [
  {
    id: "shijima-atami",
    name: "SHIJIMA ATAMI",
    pref: "静岡県",
    price: "",
    photo: "",
    url: "https://shijima-atami.com",
    note: "熱海・2026年8月開業予定。"
  },
  {
    id: "hakone-g",
    name: "箱根G邸",
    pref: "神奈川県",
    price: "",
    photo: "https://hakone-g.jp/lp/images/kv01.jpg",
    url: "https://hakone-g.jp/lp/",
    note: "強羅・2026年10月開業。全室温泉露天風呂、オールインクルーシブ。"
  },
  {
    id: "nazuna-hakone-miyanoshita",
    name: "Nazuna 箱根 宮ノ下",
    pref: "神奈川県",
    price: "",
    photo: "https://www.nazuna.co/wp-content/uploads/2025/03/%E5%A4%96%E8%A6%B301-scaled.jpg",
    url: "https://www.nazuna.co/property/nazuna-hakone-miyanoshita/",
    note: "宮ノ下・京町家の意匠。全室露天 or 半露天風呂付き。"
  },
  {
    id: "hoshinoya-fuji",
    name: "星のや富士",
    pref: "山梨県",
    price: "",
    photo: "https://media.hoshinoresorts.com/image/authenticated/s--ChRuIbfB--/c_fill,g_auto,h_630,w_1200/f_auto,q_auto/v1744973935/OPG%E5%AF%8C%E5%A3%AB_jp_ukrbaz.png",
    url: "https://hoshinoresorts.com/ja/hotels/hoshinoyafuji/",
    note: "富士河口湖・河口湖畔のラグジュアリーグランピング。"
  },
  {
    id: "hakone-nica",
    name: "HAKONE NICA",
    pref: "神奈川県",
    price: "",
    photo: "https://hakone-nica.com/wp-content/uploads/2022/06/27e6984e4eff1011119fdcba79164748.jpg",
    url: "https://hakone-nica.com/",
    note: "宮城野・記念日向けのオールインクルーシブな隠れ家。"
  },
  {
    id: "bettei-umitomori",
    name: "別邸 海と森",
    pref: "千葉県",
    price: "",
    photo: "https://www.umitomori.jp/img/top/pic_feature01.jpg",
    url: "https://www.umitomori.jp/",
    note: "犬吠埼・全室オーシャンビュー＆露天風呂付き。"
  },
  {
    id: "senrinokaze",
    name: "たてやま温泉 千里の風",
    pref: "千葉県",
    price: "",
    photo: "https://www.senrinokaze.jp/common/imagres/og.jpg",
    url: "https://www.senrinokaze.jp/",
    note: "館山・平砂浦海岸の眺望温泉リゾート。"
  }
];
