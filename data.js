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
    photo: "https://shijima-atami.com/files/images/home/img_openinfo02.webp",
    url: "https://shijima-atami.com",
    note: "熱海・2026年8月開業予定。"
  },
  {
    id: "muishizen-atami",
    name: "無為自然-ATAMI-",
    pref: "静岡県",
    price: "",
    photo: "https://www.muishizen-atami.com/wp-content/themes/muishizenatami_prd/images/index/mv01.jpg",
    url: "https://www.muishizen-atami.com/",
    note: "熱海・網代。海と森を望む客室温泉露天のリゾート。"
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
    photo: "https://www.umitomori.jp/img/top/pic_feature03.jpg",
    url: "https://www.umitomori.jp/",
    note: "犬吠埼・全室オーシャンビュー＆露天風呂付き。"
  },
  {
    id: "hotel-norm-ao",
    name: "hotel norm. ao",
    pref: "山梨県",
    price: "",
    photo: "https://static.wixstatic.com/media/5bc0a8_d0c4c254d97d4c0f834cdc6944bad9f0~mv2.jpg/v1/fill/w_800,h_500,al_c,q_85,enc_avif,quality_auto/5bc0a8_d0c4c254d97d4c0f834cdc6944bad9f0~mv2.jpg",
    url: "https://www.hotel-normao.com/",
    note: "河口湖・富士山麓のウェルネス特化ラグジュアリー。"
  },
  {
    id: "senrinokaze",
    name: "たてやま温泉 千里の風",
    pref: "千葉県",
    price: "",
    photo: "https://www.senrinokaze.jp/top/images/spa01.jpg",
    url: "https://www.senrinokaze.jp/",
    note: "館山・平砂浦海岸の眺望温泉リゾート。"
  },
  {
    id: "nasu-bettei-kai",
    name: "那須別邸 回",
    pref: "栃木県",
    price: "",
    photo: "https://bettei-kai.jp/assets/imgs/top/about.avif",
    url: "https://bettei-kai.jp/",
    note: "那須湯本・2000坪に10室。土着をテーマにした温泉旅館。"
  },
  {
    id: "okuyugawara-yui",
    name: "奥湯河原 結唯",
    pref: "神奈川県",
    price: "",
    photo: "https://okuyugawara.jp/wp-content/themes/okuyugawara/images/index/slide_01.jpg",
    url: "https://okuyugawara.jp/",
    note: "奥湯河原・一棟貸しの離れと温泉サウナ付き本館。"
  },
  {
    id: "sizca",
    name: "別庭 雫花",
    pref: "千葉県",
    price: "",
    photo: "https://sizca.jp/top/images/slide/01.jpg",
    url: "https://sizca.jp/",
    note: "館山・全5邸。プライベートサウナ＆温泉露天付きヴィラ。"
  },
  {
    id: "kureha",
    name: "紅葉 -KUREHA-",
    pref: "栃木県",
    price: "",
    photo: "https://www.vila-kureha.com/files/index/img01_01.jpg",
    url: "https://www.vila-kureha.com/",
    note: "塩原温泉・露天風呂付きラグジュアリーコンドミニアムヴィラ。"
  },
  {
    id: "itsukiri",
    name: "五氣里 -itsukiri-",
    pref: "千葉県",
    price: "",
    photo: "https://itsukiri.com/manage/wp-content/themes/itsukiri/assets/img/top/onsen/photo1.jpg",
    url: "https://itsukiri.com/",
    note: "いすみ・里山の黒湯温泉付き一棟貸し古民家＆ヴィラ。"
  },
  {
    id: "gorakadan-fuji",
    name: "強羅花壇 富士",
    pref: "静岡県",
    price: "",
    photo: "https://www.gorakadan.com/fuji/wp-content/uploads/2025/07/rooftop-01-main.webp",
    url: "https://www.gorakadan.com/fuji/",
    note: "富士山麓・須走。全室スイート仕様の温泉宿。"
  },
  {
    id: "fufu-jogashima",
    name: "ふふ 城ヶ島 海風のしらべ",
    pref: "神奈川県",
    price: "",
    photo: "https://fufujogashima.jp/wordpress/wp-content/themes/jogashima/images/top/room_slide01.jpg",
    url: "https://fufujogashima.jp/",
    note: "三浦・城ヶ島。全室オーシャンビュー＆油壺温泉付き。"
  },
  { id: "bettei-shiki", name: "別邸四季", pref: "栃木県", price: "", photo: "", url: "https://www.privatevilla-nasu.com/", note: "那須・プライベートヴィラ。" },
  { id: "izu-ishinoie", name: "別邸 石の家", pref: "静岡県", price: "", photo: "", url: "https://www.izu-ishinoie.com/", note: "伊豆高原の宿。" },
  { id: "haku-akazawa", name: "HAKU-AKAZAWA 波空", pref: "静岡県", price: "", photo: "", url: "https://www.haku-resort.com/", note: "伊豆赤沢のリゾート。" },
  { id: "soneka", name: "SONEKA", pref: "北海道", price: "", photo: "", url: "https://soneka-hokkaido.com/", note: "北広島のリゾート。" },
  { id: "sansyuyu", name: "櫻湯 山茱萸", pref: "山形県", price: "", photo: "", url: "https://sansyuyu.jp/", note: "赤湯温泉の宿。" },
  { id: "tokinoyado-sumire", name: "時の宿 すみれ", pref: "山形県", price: "", photo: "", url: "https://www.tokinoyado.com/", note: "湯の沢温泉の宿。" },
  { id: "fuyonoyado", name: "富士山リゾートログハウス ふようの宿", pref: "山梨県", price: "", photo: "", url: "https://www.fuyonoyado.com/", note: "富士吉田・ログハウスの宿。" },
  { id: "tsumugi", name: "天空の温泉ヴィラ 紬", pref: "山梨県", price: "", photo: "", url: "https://www.resort-glamping.com/accommodation/tsumugi/", note: "河口湖・温泉ヴィラ。" },
  { id: "zenagi", name: "Zenagi", pref: "長野県", price: "", photo: "", url: "https://zen-resorts.com/", note: "南木曽のラグジュアリーリトリート。" },
  { id: "miyako21", name: "こころをなでる静寂 みやこ", pref: "岐阜県", price: "", photo: "", url: "https://www.miyako21.co.jp/", note: "下呂温泉の宿。" },
  { id: "anorino", name: "1棟貸切の宿 あのりの", pref: "三重県", price: "", photo: "", url: "https://www.mie-privatevilla.com/", note: "志摩・一棟貸し。" },
  { id: "others-iseshima", name: "Others アザーズ伊勢志摩", pref: "三重県", price: "", photo: "", url: "https://www.others-iseshima-villa.com/", note: "志摩のヴィラ。" },
  { id: "kisara-oneness", name: "季さらOneness", pref: "三重県", price: "", photo: "", url: "https://www.villa-iseshima.com/", note: "鳥羽のヴィラ。" },
  { id: "solavilla", name: "SolaVilla 海テラス南あわじ", pref: "兵庫県", price: "", photo: "", url: "https://www.solavilla.jp/", note: "淡路島・海テラスのヴィラ。" },
  { id: "taiza-ao", name: "蒼-AO-", pref: "京都府", price: "", photo: "", url: "https://taiza-ao.com/", note: "京丹後・間人の宿。" },
  { id: "grand-rouge-yuhigaura", name: "グランルージュ 夕日ヶ浦", pref: "京都府", price: "", photo: "", url: "https://www.kyoto-glamping.com/", note: "京丹後・夕日ヶ浦のグランピング。" },
  { id: "tsubaki-rooms", name: "TSUBAKI Rooms", pref: "和歌山県", price: "", photo: "", url: "https://www.shirahama-tsubakivilla.com/", note: "白浜のヴィラ。" },
  { id: "olif-akemanomori", name: "OLIF villa in AKEMANOMORI", pref: "鳥取県", price: "", photo: "", url: "https://foreat.jp/", note: "大山のヴィラ。" },
  { id: "kotan-ureshino", name: "枯淡嬉野", pref: "佐賀県", price: "", photo: "", url: "https://goten-resort.jp/kotan-ureshino/", note: "嬉野温泉の宿。" },
  { id: "hozantei", name: "源流の宿 帆山亭", pref: "熊本県", price: "", photo: "", url: "https://www.hozantei.com/", note: "黒川温泉・源流の宿。" },
  { id: "aconcagua-minamiaso", name: "THE ACONCAGUA RESORTS 南阿蘇", pref: "熊本県", price: "", photo: "", url: "https://www.resort-glamping.com/accommodation/gp-acon/", note: "南阿蘇のグランピング。" },
  { id: "manden", name: "漫厘 Manden", pref: "大分県", price: "", photo: "", url: "https://manden.co.jp/", note: "別府・明礬温泉の宿。" },
  { id: "the-village-yufuin", name: "The Village 由布院", pref: "大分県", price: "", photo: "", url: "https://www.oita-glamping.com/", note: "由布院のグランピング。" },
  { id: "kazenohibiki", name: "由布院温泉グランピング 風の響き", pref: "大分県", price: "", photo: "", url: "https://kazenohibiki.com/", note: "由布院・温泉グランピング。" },
  { id: "villa-montpetre", name: "Villa montpetre", pref: "鹿児島県", price: "", photo: "", url: "https://montpetre.net/", note: "霧島のヴィラ。" },
  { id: "shoen-hanare", name: "水車の宿 松苑", pref: "鹿児島県", price: "", photo: "", url: "https://shoenhanare.com/", note: "霧島の離れ宿。" },
  { id: "koshikano-onsen", name: "こしかの温泉グランピング", pref: "鹿児島県", price: "", photo: "", url: "https://koshikano-onsen.com/", note: "霧島・温泉グランピング。" }
];
