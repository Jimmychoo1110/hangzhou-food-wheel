export type DishRankingItem = {
  name: string;
  imageUrl: string;
  recommendations?: number;
  evidence?: string;
  imageNote?: string;
};

export type DishRanking = {
  checkedAt: string;
  methodology: string;
  metricLabel?: string;
  sources: Array<{
    label: string;
    url: string;
  }>;
  dishes: DishRankingItem[];
};

export const dishRankings: Record<string, DishRanking> = {
  广西菜: {
    checkedAt: "2026-07-20",
    methodology:
      "按大众点评杭州中心店公开“网友推荐”顺序整理；图片均来自同一门店的用户实拍，用作菜品参考，不把无法核对的一对一图片关系标作精确菜品图。",
    metricLabel: "大众点评网友推荐",
    sources: [
      {
        label: "嬷冉MARANZ · 广西菜（杭州中心店）",
        url: "https://m.dianping.com/shopinfo/G5ySgBI0L92Uru35?msource=Appshare2021&utm_source=shop_share&shoptype=10&shopcategoryid=250&cityid=3&isoversea=0",
      },
      {
        label: "大众点评公开网友推荐菜",
        url: "https://m.dianping.com/shop/1015065729381049?msource=applemaps",
      },
    ],
    dishes: [
      { name: "酸笋紫苏鸭掌煲", imageUrl: "https://qcloud.dpfile.com/pc/-t7KKjTeiXk89SbwG1-zdfxCUGSJwsDBGSaL6brqquVzl6QxVMk327vmlZRx4QT3l0cm-Lf9tDMlLZpO7rb3bg.jpg", recommendations: 288, imageNote: "同店用户实拍参考" },
      { name: "柳州爆炒螺蛳粉", imageUrl: "https://qcloud.dpfile.com/pc/U6QZN9BmZ1DfGkDtUplav-u5aIiBS-nLZaKbENgsDOvOtDbjW5XSHpNRsXhYjKwdl0cm-Lf9tDMlLZpO7rb3bg.jpg", recommendations: 250, imageNote: "同店用户实拍参考" },
      { name: "紫苏叶包脆脆排骨肉", imageUrl: "https://img.meituan.net/ugcpic/3d3511a7ed1008f1370dcdf05a37c9ce1670467.png%40240w_180h_1e_1c_1l%7Cwatermark%3D0", evidence: "大众点评网友推荐", imageNote: "同店用户实拍参考" },
      { name: "木薯糖水", imageUrl: "https://qcloud.dpfile.com/pc/kFfAwbSTEECo418pxoQPXwpuCFPDHjSCkYZKOXWVbOY9JyASPPsAY4HKActKSJLEl0cm-Lf9tDMlLZpO7rb3bg.jpg", evidence: "大众点评网友推荐", imageNote: "同店用户实拍参考" },
      { name: "南宁夜市老友粉", imageUrl: "https://qcloud.dpfile.com/pc/-_Q_FLaZDU12UAL2EwUmJzmkOQTdkA9lUL7-WwKwFnzcqS48o594hGx6r1CwtmlIl0cm-Lf9tDMlLZpO7rb3bg.jpg", evidence: "大众点评网友推荐", imageNote: "同店用户实拍参考" },
      { name: "胸口油爆炒鸭掌筋", imageUrl: "https://qcloud.dpfile.com/pc/qhdejZ7Pq-76-noX7OqEQbWckRSNS3drkud0XcR8uIUrEecrw4wT6Tn7HMFEGiSEl0cm-Lf9tDMlLZpO7rb3bg.jpg", evidence: "大众点评网友推荐", imageNote: "同店用户实拍参考" },
      { name: "百香果虾球", imageUrl: "https://qcloud.dpfile.com/pc/9PfKI4AuQSYhZj5NiNoH-CxsFeDj97dswaBLBY7GcnzkBGDdxR3tJzwM1hXJQ5hOl0cm-Lf9tDMlLZpO7rb3bg.jpg", evidence: "大众点评网友推荐", imageNote: "同店用户实拍参考" },
      { name: "家烧荔浦芋头煲", imageUrl: "https://qcloud.dpfile.com/pc/1sNVEiBM9pLM1FvJPAUMH_LYc00ZKSO4fE93uTtwenvbO1X8lUx6XgAW5--i7MUNl0cm-Lf9tDMlLZpO7rb3bg.jpg", evidence: "大众点评网友推荐", imageNote: "同店用户实拍参考" },
      { name: "百香果生牛", imageUrl: "https://qcloud.dpfile.com/pc/vX2S3qwnPOGNTVOZq8Ln_V5hDOI8qJDpLJ9hPNp1uU0y1WEsxPgkCs9TFktFM1N3l0cm-Lf9tDMlLZpO7rb3bg.jpg", evidence: "大众点评网友推荐", imageNote: "同店用户实拍参考" },
      { name: "蜜薯粉蒸肉", imageUrl: "https://qcloud.dpfile.com/pc/7brdO6QlMyUhLwVRN5AMHgZ27DwCTlKv4qAQaB3pQFmVLBeDnL56KS5XV3aKu-Wzl0cm-Lf9tDMlLZpO7rb3bg.jpg", evidence: "大众点评网友推荐", imageNote: "同店用户实拍参考" },
    ],
  },
  东京烧肉: {
    checkedAt: "2026-07-20",
    methodology:
      "按公开页面中的推荐数排序；当前只保留 9 道同时具备菜名、推荐数和品牌实拍的菜品。",
    sources: [
      {
        label: "公开推荐菜与图片来源",
        url: "https://maps.apple.com/place?auid=1118571514687930&lsp=57879",
      },
    ],
    dishes: [
      {
        name: "蒜香黄油横膈膜",
        imageUrl:
          "https://store.is.autonavi.com/showpic/fdf6d64ffc5405b4307b6daae797e60e",
        recommendations: 1636,
      },
      {
        name: "特选牛雪花肉",
        imageUrl:
          "https://store.is.autonavi.com/showpic/04d5e3630689a0dd15d63fa32c755741",
        recommendations: 1242,
      },
      {
        name: "面包冰淇淋",
        imageUrl:
          "https://store.is.autonavi.com/showpic/a3d43502ac92a56514d4caa9dbb2c2b1",
        recommendations: 1224,
      },
      {
        name: "横膈膜",
        imageUrl:
          "https://store.is.autonavi.com/showpic/544d5737a9f6846c81abd1d3f027f2e5",
        recommendations: 1086,
      },
      {
        name: "海鲜煎饼",
        imageUrl:
          "https://store.is.autonavi.com/showpic/67a609ce03ffbb676c7b477caeeb5f0e",
        recommendations: 754,
      },
      {
        name: "口蘑",
        imageUrl:
          "https://store.is.autonavi.com/showpic/2c9b33bd5bdee63e538735f503f9e051",
        recommendations: 483,
      },
      {
        name: "牛肋条",
        imageUrl:
          "https://store.is.autonavi.com/showpic/2465336cfdb66eeb03cc859c3b6901f7",
        recommendations: 443,
      },
      {
        name: "上等牛舌",
        imageUrl:
          "https://store.is.autonavi.com/showpic/9ecb05bae7799ae3882346dcf6e48657",
        recommendations: 438,
      },
      {
        name: "牛小肠",
        imageUrl:
          "https://store.is.autonavi.com/showpic/3e1dd40b3ed95159935c5ed1bcad2ae6",
        recommendations: 336,
      },
    ],
  },
  周姐焦烤鸡架: {
    checkedAt: "2026-07-20",
    methodology:
      "按大众点评公开推荐数排序；只找到 3 道能够同时核实菜名与该品牌实拍的菜品，其余不使用别家图片补齐。",
    sources: [
      {
        label: "品牌推荐菜来源",
        url: "https://m.dianping.com/shop/1009046796",
      },
      {
        label: "糖醋烤鸡架实拍",
        url: "https://www.dianping.com/photos/7221768023",
      },
      {
        label: "麻辣烫实拍",
        url: "https://www.dianping.com/photos/7222112173",
      },
      {
        label: "酸菜饺子实拍",
        url: "https://www.dianping.com/photos/7114006371",
      },
    ],
    dishes: [
      {
        name: "糖醋烤鸡架",
        imageUrl:
          "https://qcloud.dpfile.com/pc/3jGFc6KD5mjiza06ZGwZLShAiHis3UxTLqZAC263CW0y1WEsxPgkCs9TFktFM1N3l0cm-Lf9tDMlLZpO7rb3bg.jpg",
        recommendations: 74,
      },
      {
        name: "麻辣烫",
        imageUrl:
          "https://qcloud.dpfile.com/pc/f1V0CnB3ZF9C_WGkjLOT7r50rq3SWwTa5RhKw6yvZvYojX8j-Zf_Q1XWQPn0AQL5l0cm-Lf9tDMlLZpO7rb3bg.jpg",
        recommendations: 36,
      },
      {
        name: "酸菜饺子",
        imageUrl:
          "https://qcloud.dpfile.com/pc/hALh_1tLtL-ZHOpytFIepoiRpF9Zm9dkdVrw3B-QeeK0hyw05fZB-trewmM01YSgl0cm-Lf9tDMlLZpO7rb3bg.jpg",
        recommendations: 35,
      },
    ],
  },
  胖子烧烤: {
    checkedAt: "2026-07-20",
    methodology:
      "按公开页面中的推荐数排序；当前可核实到 9 道带有品牌实拍的推荐菜。",
    sources: [
      {
        label: "公开推荐菜与图片来源",
        url: "https://maps.apple.com/place?auid=1117323449629772&lsp=57879",
      },
    ],
    dishes: [
      {
        name: "小黄鱼",
        imageUrl:
          "https://store.is.autonavi.com/showpic/dc746eea72c03acd10c698a570017008",
        recommendations: 23,
      },
      {
        name: "羊肉",
        imageUrl:
          "https://store.is.autonavi.com/showpic/94d5b1dd1933ac8da264197b5e996a8f",
        recommendations: 23,
      },
      {
        name: "茄子",
        imageUrl:
          "https://store.is.autonavi.com/showpic/7aaaebbecf86f48f6e0cc2fa32c8cb6b",
        recommendations: 14,
      },
      {
        name: "韭菜",
        imageUrl:
          "https://store.is.autonavi.com/showpic/f63e2089398f4821bb62c8b9342ed31b",
        recommendations: 13,
      },
      {
        name: "肉串",
        imageUrl:
          "https://store.is.autonavi.com/showpic/a27ab10801fc44b00d620b208649b1a2",
        recommendations: 12,
      },
      {
        name: "牛板筋",
        imageUrl:
          "https://store.is.autonavi.com/showpic/ca450832e33d0505de1d4378a23bc12c",
        recommendations: 9,
      },
      {
        name: "香肠",
        imageUrl:
          "https://store.is.autonavi.com/showpic/6457cffded424d38d1fd1217f05f6713",
        recommendations: 9,
      },
      {
        name: "鸡尖",
        imageUrl:
          "https://store.is.autonavi.com/showpic/74e997f060a2d2801f77db6bb28e06ea",
        recommendations: 7,
      },
      {
        name: "鸡胗",
        imageUrl:
          "https://store.is.autonavi.com/showpic/6f4fcf63d2e3342476ce079d3e5acccb",
        recommendations: 6,
      },
    ],
  },
  黄龙海鲜大排档: {
    checkedAt: "2026-07-20",
    methodology:
      "按公开页面中的推荐数排序；当前只保留 9 道同时具备菜名、推荐数和品牌实拍的菜品。",
    sources: [
      {
        label: "公开推荐菜与图片来源",
        url: "https://maps.apple.com/place?auid=1117323449477427&lsp=57879",
      },
    ],
    dishes: [
      {
        name: "椒盐皮皮虾",
        imageUrl:
          "https://store.is.autonavi.com/showpic/6a00490bbb5017311171891d919f17ef",
        recommendations: 6416,
      },
      {
        name: "海鲜炒粉干",
        imageUrl:
          "https://store.is.autonavi.com/showpic/c0525f5fe18e277146a17d3c9075dd06",
        recommendations: 5746,
      },
      {
        name: "倒立红膏蟹",
        imageUrl:
          "https://store.is.autonavi.com/showpic/9ed0a2ba077477ec72915a77342e826e",
        recommendations: 2370,
      },
      {
        name: "姜葱炒蛏子",
        imageUrl:
          "https://store.is.autonavi.com/showpic/843c17fa58ad90255dd33c7c96975242",
        recommendations: 1635,
      },
      {
        name: "东海三鲜",
        imageUrl:
          "https://store.is.autonavi.com/showpic/227da8e9d7ef566310e4f436992d731e",
        recommendations: 1214,
      },
      {
        name: "炭烤生蚝",
        imageUrl:
          "https://store.is.autonavi.com/showpic/733367c706ceae0663b134b11b74ea8d",
        recommendations: 1072,
      },
      {
        name: "辣炒花蛤",
        imageUrl:
          "https://store.is.autonavi.com/showpic/94b8ada919ff1f01d3c6194716e5495e",
        recommendations: 854,
      },
      {
        name: "香菜鱼皮",
        imageUrl:
          "https://store.is.autonavi.com/showpic/1f4b07325bdcd031750933873fda0d78",
        recommendations: 686,
      },
      {
        name: "鲳鱼烧年糕",
        imageUrl:
          "https://store.is.autonavi.com/showpic/a8136562ac08ec078bedfa9c949f504f",
        recommendations: 655,
      },
    ],
  },
  御牛道: {
    checkedAt: "2026-07-20",
    methodology:
      "合并 6 个杭州公开点评样本中的同名菜推荐数后排序；不展示具体分店名称。",
    sources: [
      {
        label: "公开样本 1",
        url: "https://maps.apple.com/place?auid=1118676821563685&lsp=57879",
      },
      {
        label: "公开样本 2",
        url: "https://maps.apple.com/place?auid=1118368618194004&lsp=57879",
      },
      {
        label: "公开样本 3",
        url: "https://maps.apple.com/place?auid=1118368897543329&lsp=57879",
      },
      {
        label: "公开样本 4",
        url: "https://maps.apple.com/place?_provider=57879&place-id=H2710I3F9268C6427D5",
      },
      {
        label: "公开样本 5",
        url: "https://maps.apple.com/place?_provider=57879&place-id=H2710I3F92684B0515E",
      },
      {
        label: "公开样本 6",
        url: "https://maps.apple.com/place?_provider=57879&place-id=H2710I3F9489F6375C6",
      },
    ],
    dishes: [
      {
        name: "雪花中落小排",
        imageUrl:
          "https://store.is.autonavi.com/showpic/f647de50361e4351c8edb47f82576201",
        recommendations: 5847,
      },
      {
        name: "法式鹅肝手握寿司",
        imageUrl:
          "https://store.is.autonavi.com/showpic/7971cc517471e98fdc11e4cef50f0321",
        recommendations: 4333,
      },
      {
        name: "逸品牛小排",
        imageUrl:
          "https://store.is.autonavi.com/showpic/01152892ea08a41169f2ed463f7b8913",
        recommendations: 4073,
      },
      {
        name: "牛肉石锅拌饭",
        imageUrl:
          "https://store.is.autonavi.com/showpic/0e1fab828398b97e6d48134a62b1fcc3",
        recommendations: 2966,
      },
      {
        name: "逸品厚切牛舌",
        imageUrl:
          "https://store.is.autonavi.com/showpic/c643a1e0f26bb5c617fefa166287cc81",
        recommendations: 970,
      },
      {
        name: "升龙安格斯横膈膜",
        imageUrl:
          "https://store.is.autonavi.com/showpic/fc3a668691aae390e6f5bdac9c83f8f6",
        recommendations: 956,
      },
      {
        name: "辣油鸡蛋饭",
        imageUrl:
          "https://store.is.autonavi.com/showpic/feed04a00d82b5d8a985002c6c957f2f",
        recommendations: 794,
      },
      {
        name: "传统雪花西冷",
        imageUrl:
          "https://store.is.autonavi.com/showpic/8db4c61b6e982099f3b7e6dd06a74e63",
        recommendations: 680,
      },
      {
        name: "御牛道豪华五点拼盘",
        imageUrl:
          "https://store.is.autonavi.com/showpic/9acaaa3a6648403cfbfd29080dce058d",
        recommendations: 545,
      },
      {
        name: "特上牛小排",
        imageUrl:
          "https://store.is.autonavi.com/showpic/021b9de9a201f2bf8e27a8e8feb00d24",
        recommendations: 466,
      },
    ],
  },
  牛表妹烤肉: {
    checkedAt: "2026-07-20",
    methodology:
      "按公开页面中的推荐数排序；当前可核实到 9 道带有品牌实拍的推荐菜。",
    sources: [
      {
        label: "公开推荐菜与图片来源",
        url: "https://maps.apple.com/place?auid=1118368823090378&lsp=57879",
      },
    ],
    dishes: [
      {
        name: "烤牛肉",
        imageUrl:
          "https://store.is.autonavi.com/showpic/155c44f950fecdb491fa21757df92dc8",
        recommendations: 7006,
      },
      {
        name: "牛表妹烤肠",
        imageUrl:
          "https://store.is.autonavi.com/showpic/5ccdd7baf6ce224bdae6543c9a457e46",
        recommendations: 6205,
      },
      {
        name: "五花肉",
        imageUrl:
          "https://store.is.autonavi.com/showpic/e0eaa26a283f1adb8c8f87bfe8dfd584",
        recommendations: 4011,
      },
      {
        name: "招牌牛仔骨",
        imageUrl:
          "https://store.is.autonavi.com/showpic/6a4b05a30677d872203bec5dc0f3ec19",
        recommendations: 3550,
      },
      {
        name: "招牌现切牛肉",
        imageUrl:
          "https://store.is.autonavi.com/showpic/c18ec0c468bb3e39a81679c4bb2735a4",
        recommendations: 863,
      },
      {
        name: "生菜",
        imageUrl:
          "https://store.is.autonavi.com/showpic/d7eb62f3810c14f42f9ceba22d606190",
        recommendations: 856,
      },
      {
        name: "蘸料",
        imageUrl:
          "https://store.is.autonavi.com/showpic/3b6b118445a781ecbe670585541554f8",
        recommendations: 776,
      },
      {
        name: "招牌现切羊肉",
        imageUrl:
          "https://store.is.autonavi.com/showpic/c4931d242157ad214a85d83ab4dc5337",
        recommendations: 675,
      },
      {
        name: "小紫薯仔",
        imageUrl:
          "https://store.is.autonavi.com/showpic/cc4da7d41c718aa3ef862596c2edad5f",
        recommendations: 605,
      },
    ],
  },
  玖五京菜: {
    checkedAt: "2026-07-20",
    methodology: "按公开页面中的网友推荐数从高到低排序；当前可核实到 9 道菜名、推荐数与对应品牌实拍。",
    sources: [
      {
        label: "公开推荐菜与品牌实拍",
        url: "https://maps.apple.com/place?_provider=57879&place-id=H2710I3F97742451E73",
      },
    ],
    dishes: [
      { name: "御品桂花香酥烤鸭", imageUrl: "https://store.is.autonavi.com/showpic/c61f26a5fcdaa62439416fa5d317d1b1", recommendations: 2281 },
      { name: "砂锅荔浦芋儿", imageUrl: "https://store.is.autonavi.com/showpic/5fb2a83637331c43ceededbfc7707fab", recommendations: 683 },
      { name: "十八秒茶油生炒黄牛肉", imageUrl: "https://store.is.autonavi.com/showpic/6293b6a6e57384dc2edde140088233d6", recommendations: 558 },
      { name: "老北京水爆肚", imageUrl: "https://store.is.autonavi.com/showpic/233027313436ef22404f1fd895bb7fc0", recommendations: 520 },
      { name: "玖五自制酸奶", imageUrl: "https://store.is.autonavi.com/showpic/8409d8d25729ba1b7cea957067187128", recommendations: 379 },
      { name: "妈妈红烧肉", imageUrl: "https://store.is.autonavi.com/showpic/8fdff131a7f12b2355ea9a2461d9ee60", recommendations: 327 },
      { name: "老北京炙子羊肉", imageUrl: "https://store.is.autonavi.com/showpic/0d092387672fb61420e6e2701fa712c0", recommendations: 306 },
      { name: "老北京麻酱菠菜", imageUrl: "https://store.is.autonavi.com/showpic/c8007be59bc1ce40b6826e609e6b888f", recommendations: 303 },
      { name: "小米油渣土豆丝", imageUrl: "https://store.is.autonavi.com/showpic/4246b85d1831e53a5b658f85617a1c9f", recommendations: 219 },
    ],
  },
  颂: {
    checkedAt: "2026-07-20",
    methodology: "按公开推荐菜列表顺序整理；这些菜名与图片逐项对应。公开页面没有提供可靠推荐次数，因此只标注为公开推荐菜。",
    sources: [
      {
        label: "四季酒店官方招牌菜",
        url: "https://www.fourseasons.com/zh/hangzhoucentre/dining/restaurants/song/",
      },
      {
        label: "携程公开推荐菜与实拍",
        url: "https://gs.ctrip.com/html5/you/foods/fooddetail/14/148899449.html",
      },
    ],
    dishes: [
      { name: "大红袍脆皮大皇鸽腿", imageUrl: "https://dimg04.c-ctrip.com/images/0103112000ge32dlu9E37_D_400_300_Q90.jpg?proc=autoorient", evidence: "官方招牌菜" },
      { name: "宁式十八斩", imageUrl: "https://dimg04.c-ctrip.com/images/0106912000gdd3q7m8CFA_D_400_300_Q90.jpg?proc=autoorient", evidence: "官方招牌菜" },
      { name: "茉莉花柠香马蹄沙", imageUrl: "https://dimg04.c-ctrip.com/images/0100212000ge32pedDE0F_D_400_300_Q90.jpg?proc=autoorient", evidence: "公开推荐菜" },
      { name: "臭豆腐水潺春卷", imageUrl: "https://dimg04.c-ctrip.com/images/1tx0412000qfxz90j6223_D_400_300_Q90.jpg?proc=autoorient", evidence: "官方招牌菜" },
      { name: "榨菜鲜肉月饼", imageUrl: "https://dimg04.c-ctrip.com/images/0100312000ge3579k18F8_D_400_300_Q90.jpg?proc=autoorient", evidence: "公开推荐菜" },
      { name: "头水紫菜手斩鱼圆汤", imageUrl: "https://dimg04.c-ctrip.com/images/0100712000ge33w60A60F_D_400_300_Q90.jpg?proc=autoorient", evidence: "公开推荐菜" },
      { name: "山椒汁浸冬瓜", imageUrl: "https://dimg04.c-ctrip.com/images/0100612000ge336ml0E23_D_400_300_Q90.jpg?proc=autoorient", evidence: "公开推荐菜" },
      { name: "糟骨头豚肉蒸白鲳", imageUrl: "https://dimg04.c-ctrip.com/images/0100612000ge33m0l04C9_D_400_300_Q90.jpg?proc=autoorient", evidence: "官方招牌菜" },
      { name: "苔条小方㸆", imageUrl: "https://dimg04.c-ctrip.com/images/0103s12000ge33hryD6A7_D_400_300_Q90.jpg?proc=autoorient", evidence: "公开推荐菜" },
      { name: "姜汁海鲜面", imageUrl: "https://dimg04.c-ctrip.com/images/0101i12000ge32ol1117D_D_400_300_Q90.jpg?proc=autoorient", evidence: "公开推荐菜" },
    ],
  },
  金沙厅: {
    checkedAt: "2026-07-20",
    methodology: "按大众点评公开菜品实拍标签数量从高到低排序；只保留同时找到对应菜名实拍的 6 道。",
    metricLabel: "张网友实拍",
    sources: [
      {
        label: "大众点评菜品实拍热度",
        url: "https://www.dianping.com/shop/4498412/photos",
      },
      {
        label: "携程菜名对应实拍",
        url: "https://gs.ctrip.com/html5/you/foods/fooddetail/2015145/5143223.html",
      },
    ],
    dishes: [
      { name: "金沙脆皮鸡", imageUrl: "https://dimg04.c-ctrip.com/images/0102j12000ewjzam19CDA_D_400_300_Q80.png?proc=autoorient", recommendations: 2163 },
      { name: "鲍鱼红烧肉", imageUrl: "https://dimg04.c-ctrip.com/images/0103t12000ewjytuc3E6F_D_400_300_Q80.png?proc=autoorient", recommendations: 1897 },
      { name: "宋嫂鱼羹", imageUrl: "https://dimg04.c-ctrip.com/images/0100512000g6ti89c6661_D_400_300_Q80.jpg?proc=autoorient", recommendations: 1129 },
      { name: "古越陈酿煮花螺", imageUrl: "https://dimg04.c-ctrip.com/images/0102b12000ewk0m99873E_D_400_300_Q80.png?proc=autoorient", recommendations: 988 },
      { name: "西湖醋鱼", imageUrl: "https://youimg1.c-ctrip.com/target/100a070000002moyn331E_D_400_300_Q80.jpg?proc=autoorient", recommendations: 665 },
      { name: "龙井虾仁", imageUrl: "https://dimg04.c-ctrip.com/images/0102912000g6thc9oD54C_D_400_300_Q80.jpg?proc=autoorient", recommendations: 273 },
    ],
  },
  桂语山房: {
    checkedAt: "2026-07-20",
    methodology: "按公开页面中的网友推荐数从高到低排序；当前可核实到 9 道菜名、推荐数与对应品牌实拍。",
    sources: [
      {
        label: "公开推荐菜与品牌实拍",
        url: "https://maps.apple.com/place?auid=1117323449084228&lsp=57879",
      },
    ],
    dishes: [
      { name: "虎跑泉水牛肉", imageUrl: "https://store.is.autonavi.com/showpic/17c3b01891c5f22a2593f36d6e370603", recommendations: 7410 },
      { name: "青石板话梅小排", imageUrl: "https://store.is.autonavi.com/showpic/70d1e7295ac359caf2a35585eb3cfba7", recommendations: 4841 },
      { name: "塔咖喱大虾", imageUrl: "https://store.is.autonavi.com/showpic/37ee788d6d164c9463451937cfc9ff9b", recommendations: 3576 },
      { name: "海胆八宝豆腐", imageUrl: "https://store.is.autonavi.com/showpic/e2e0511d4bc7cbba570ac613af553568", recommendations: 3444 },
      { name: "桂花酱奶香山药", imageUrl: "https://store.is.autonavi.com/showpic/a7d3239443a71a77d54c541e7ef36207", recommendations: 2663 },
      { name: "樱桃鹅肝", imageUrl: "https://store.is.autonavi.com/showpic/f41968763ce553ca34693a2d48233616", recommendations: 2124 },
      { name: "榛子酱鹅肝拌葱油饼", imageUrl: "https://store.is.autonavi.com/showpic/10caaa1ad00bee7e7c8068265cc61ba1", recommendations: 1532 },
      { name: "私房宫廷御香鸭", imageUrl: "https://store.is.autonavi.com/showpic/b1956ecd6a62d857db5b1c006a9508d0", recommendations: 1386 },
      { name: "黑松露珍菌包", imageUrl: "https://store.is.autonavi.com/showpic/faba40f70ce0342a625873c6771b7fde", recommendations: 764 },
    ],
  },
  宝中宝食府: {
    checkedAt: "2026-07-20",
    methodology: "按公开页面中的网友推荐数从高到低排序；当前可核实到 9 道菜名、推荐数与对应品牌实拍。",
    sources: [
      {
        label: "公开推荐菜与品牌实拍",
        url: "https://maps.apple.com/place?auid=1117323447425432&lsp=57879",
      },
    ],
    dishes: [
      { name: "脆皮大肠", imageUrl: "https://store.is.autonavi.com/showpic/9394c30d6cb350232c8f312d1f1469b6", recommendations: 4412 },
      { name: "白胡椒虾", imageUrl: "https://store.is.autonavi.com/showpic/0cea5484b7d945b15d56e653670e0af7", recommendations: 3580 },
      { name: "腰花王", imageUrl: "https://store.is.autonavi.com/showpic/881797cad0aa27ce731b8e5786b11ae0", recommendations: 2185 },
      { name: "一品臭豆腐", imageUrl: "https://store.is.autonavi.com/showpic/ae8e764484592c250046911335075563", recommendations: 1249 },
      { name: "葱包肉", imageUrl: "https://store.is.autonavi.com/showpic/62d7f7e3bec85f9ab112d05072fd9ea0", recommendations: 1202 },
      { name: "糖醋里脊", imageUrl: "https://store.is.autonavi.com/showpic/b7fc1ed2807ac14a93c02fa57de6f7a7", recommendations: 974 },
      { name: "丝瓜鱼脯", imageUrl: "https://store.is.autonavi.com/showpic/921f00d43a71e6e73ac7475427b4d448", recommendations: 632 },
      { name: "东坡肉", imageUrl: "https://store.is.autonavi.com/showpic/a73f7094506dc0f8189bf3beabd29bfd", recommendations: 580 },
      { name: "生醉红膏蟹", imageUrl: "https://store.is.autonavi.com/showpic/b779acc1b357d09739d828c20aed7889", recommendations: 573 },
    ],
  },
  同乐舫: {
    checkedAt: "2026-07-20",
    methodology: "按公开页面中的网友推荐数从高到低排序；当前可核实到 9 道菜名、推荐数与对应品牌实拍。",
    sources: [
      {
        label: "公开推荐菜与品牌实拍",
        url: "https://maps.apple.com/place?_provider=57879&place-id=H2710I3F9268F3F9A5F",
      },
    ],
    dishes: [
      { name: "同乐乳鸽皇", imageUrl: "https://store.is.autonavi.com/showpic/07aff46f60567b7b1f42a405a0a2f2d2", recommendations: 1946 },
      { name: "同乐虾饺皇", imageUrl: "https://store.is.autonavi.com/showpic/f704e264b20e91998520202b5f969583", recommendations: 1927 },
      { name: "妙脆鲜虾肠", imageUrl: "https://store.is.autonavi.com/showpic/3c6c54eec92ce6b1111ffe7dbe24b708", recommendations: 1464 },
      { name: "豉汁蒸凤爪", imageUrl: "https://store.is.autonavi.com/showpic/516b1380c4072d6895e72e687c13e34d", recommendations: 927 },
      { name: "清炒蟹粉", imageUrl: "https://store.is.autonavi.com/showpic/569d6fdab984824ab2914ac7daab2762", recommendations: 812 },
      { name: "果木烤鸭", imageUrl: "https://store.is.autonavi.com/showpic/dab1e693972dce3c9356217e2937f43a", recommendations: 778 },
      { name: "香煎韭菜饼", imageUrl: "https://store.is.autonavi.com/showpic/c4bb275b3fcddcbcef4aa50613e62efc", recommendations: 570 },
      { name: "铜盘河虾", imageUrl: "https://store.is.autonavi.com/showpic/e0c8ad58b28229481d8350f91cf53090", recommendations: 479 },
      { name: "经典素烧鹅", imageUrl: "https://store.is.autonavi.com/showpic/56d2e100aebfc62f253c7d9c729b4c7c", recommendations: 347 },
    ],
  },
  李白图书馆餐厅: {
    checkedAt: "2026-07-20",
    methodology: "按公开页面中的网友推荐数从高到低排序；采用杭州品牌公开样本，保留 9 道菜名、推荐数与对应品牌实拍。",
    sources: [
      {
        label: "杭州公开推荐菜与品牌实拍",
        url: "https://maps.apple.com/place?_provider=57879&place-id=H2710I3F9268F959FC1",
      },
    ],
    dishes: [
      { name: "李白茉莉烤鸭", imageUrl: "https://store.is.autonavi.com/showpic/a099a0acd274770a7bd289a0016e8519", recommendations: 2843 },
      { name: "文火小牛肉蔬菜馍", imageUrl: "https://store.is.autonavi.com/showpic/c54569ff25fca1249419bcd71316a91a", recommendations: 1449 },
      { name: "自贡鲜辣跳跳蛙", imageUrl: "https://store.is.autonavi.com/showpic/520bc1eb53b350775f7e692141da8307", recommendations: 1387 },
      { name: "椒香鸡汁大白条", imageUrl: "https://store.is.autonavi.com/showpic/640c413d82d09933aadda9a968f7e0c7", recommendations: 1330 },
      { name: "云雾秘制醉大头虾", imageUrl: "https://store.is.autonavi.com/showpic/1e968792be7a1c96575b3c3b532efe59", recommendations: 1102 },
      { name: "西湖牛肉鱼米羹", imageUrl: "https://store.is.autonavi.com/showpic/6a8f93d6c2a986d942ffa8f87c7107f5", recommendations: 1001 },
      { name: "荷花酥", imageUrl: "https://store.is.autonavi.com/showpic/ba73425c7abc19759bd965e060b911bc", recommendations: 739 },
      { name: "香酥椒盐鸭架", imageUrl: "https://store.is.autonavi.com/showpic/8477b8d42f919b46ca14a5c697c9e9ad", recommendations: 403 },
      { name: "苔菜美极虾", imageUrl: "https://store.is.autonavi.com/showpic/a3e5f47e6e6e2491af5f87081bf4366a", recommendations: 376 },
    ],
  },
  乔村二十八道: {
    checkedAt: "2026-07-20",
    methodology: "按公开页面中的网友推荐数从高到低排序；采用杭州品牌公开样本，保留 9 道菜名、推荐数与对应品牌实拍。",
    sources: [
      {
        label: "杭州公开推荐菜与品牌实拍",
        url: "https://maps.apple.com/place?auid=1118528101056288&lsp=57879",
      },
    ],
    dishes: [
      { name: "胡椒猪肚鸡", imageUrl: "https://store.is.autonavi.com/showpic/2b4d510f914c0ae89744f86fd3d22552", recommendations: 3108 },
      { name: "山泉牛肉", imageUrl: "https://store.is.autonavi.com/showpic/3bb94b7b45a70e7ee6e333bd88e55b37", recommendations: 2522 },
      { name: "招牌乳鸽", imageUrl: "https://store.is.autonavi.com/showpic/ffb666600a080604be90209869a8d8a5", recommendations: 2135 },
      { name: "牛油果三文鱼沙律", imageUrl: "https://store.is.autonavi.com/showpic/249d6b37eedaef9552298a5928d13d57", recommendations: 2029 },
      { name: "墨色流沙包", imageUrl: "https://store.is.autonavi.com/showpic/bcc524b07f869f0f0c6fad230a6af6ce", recommendations: 1500 },
      { name: "黑松露野菌饺", imageUrl: "https://store.is.autonavi.com/showpic/9ac4ea1bc72ced9ddc5bbd508e78e2a7", recommendations: 1499 },
      { name: "乔村沃豆腐", imageUrl: "https://store.is.autonavi.com/showpic/0114a16a33e136647b8aa74676db5b27", recommendations: 1209 },
      { name: "手撕烤羔羊排", imageUrl: "https://store.is.autonavi.com/showpic/5e1de8e4c35eb855530543fe67dd7382", recommendations: 967 },
      { name: "冰淇淋烤布蕾", imageUrl: "https://store.is.autonavi.com/showpic/821a0622dc807a5453ea1f12c68e5a50", recommendations: 857 },
    ],
  },
};
