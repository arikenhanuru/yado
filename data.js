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
    price: "",                         // 公式に料金記載なし（2026年8月開業予定）
    photo: "",                         // サイトがJS描画のため写真URL取得できず（後日追加可）
    url: "https://shijima-atami.com",
    note: "熱海・2026年8月開業予定。"
  },
  {
    id: "hakone-g",
    name: "箱根G邸",
    pref: "神奈川県",
    price: "",                         // 公式に料金記載なし（オールインクルーシブ）
    photo: "https://hakone-g.jp/lp/images/kv01.jpg",
    url: "https://hakone-g.jp/lp/",
    note: "強羅・2026年10月開業。全室温泉露天風呂、オールインクルーシブ。"
  },
  {
    id: "nazuna-hakone-miyanoshita",
    name: "Nazuna 箱根 宮ノ下",
    pref: "神奈川県",
    price: "",                         // 公式に料金記載なし（時期により変動）
    photo: "https://www.nazuna.co/wp-content/uploads/2025/03/%E5%A4%96%E8%A6%B301-scaled.jpg",
    url: "https://www.nazuna.co/property/nazuna-hakone-miyanoshita/",
    note: "宮ノ下・京町家の意匠。全室露天 or 半露天風呂付き。"
  }
];
