export type DishRankingItem = {
  name: string;
  imageUrl: string;
  recommendations: number;
};

export type DishRanking = {
  checkedAt: string;
  methodology: string;
  sources: Array<{
    label: string;
    url: string;
  }>;
  dishes: DishRankingItem[];
};

export const dishRankings: Record<string, DishRanking> = {
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
};
