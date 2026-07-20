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

function sameShopRanking(
  label: string,
  sourceUrl: string,
  photoUrl: string,
  dishes: Array<[string, number?]>,
  photos: string[],
): DishRanking {
  return {
    checkedAt: "2026-07-20",
    methodology:
      "按大众点评公开“网友推荐”顺序与推荐数整理；图片来自同一门店的公开用户实拍，仅作菜品参考。",
    metricLabel: "大众点评网友推荐",
    sources: [
      { label: `${label}公开推荐菜`, url: sourceUrl },
      { label: `${label}用户实拍`, url: photoUrl },
    ],
    dishes: dishes.map(([name, recommendations], index) => ({
      name,
      ...(recommendations ? { recommendations } : { evidence: "大众点评网友推荐" }),
      imageUrl: photos[index % photos.length],
      imageNote: "同店用户实拍参考",
    })),
  };
}

export const dishRankings: Record<string, DishRanking> = {
  阿英川菜: sameShopRanking(
    "晚酒·阿英川菜馆（上塘路店）",
    "https://m.dianping.com/shop/584815?msource=applemaps",
    "https://www.dianping.com/shop/584815/photos",
    [["水煮鱼",287],["辣子鸡",257],["蛋黄南瓜"],["毛血旺"],["夫妻肺片"],["阿英臭豆腐"],["成都冰粉"],["馋嘴牛蛙"],["酸菜鱼"],["鸡丝凉面"]],
    ["https://qcloud.dpfile.com/pc/dEhqvAMMC-DfjWlbWKma_cv74xvNCl1ZCuwI6sMSNCWNipfN8EkPq9_-8Y9WwvS8l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://p0.meituan.net/ugcpic/aebfeb762046765a4ccbd8d6c2071bbc611023.jpg","https://qcloud.dpfile.com/pc/zNsrg9_DYFHc3GR2dj1G6kbnPUSYmACLhTY2Vx0iOej5WXKGq6olRNy3wVTbmobml0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/pADlWsKlzqYwgh3vPeCedhlisJULkjzk6o9NseAe3FQQEUDJ9argGXc-XM5RkmA4l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/1HNaHRZeNt7n2eDctf0wV_ia7FCEdwCR2GhUNjiVCqlihacnKENHlbzs2lk-8jO7l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/LFWJL44b2_rLrnuRH2ngNB7pYDf7Sn9nSoKh1C8E-UgSw8JHZ2XSn0Rof7rTbgqEl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/evbskUcYBvz80w5F3gr7ZF2V6uAXuiZpuwCCFEApRLy1pfE_D9NtmgzKCyAeQrryl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/dEhqvAMMC-DfjWlbWKma_cv74xvNCl1ZCuwI6sMSNCU9Vv-K7K1lRSAtc0Rwz-rWjoJrvItByyS4HHaWdXyO_I7F0UeCRQYMHlogzbt7GHgNNiIYVnHvzugZCuBITtvjski7YaLlHpkrQUr5euoQrg.jpg","https://qcloud.dpfile.com/pc/dEhqvAMMC-DfjWlbWKma_cv74xvNCl1ZCuwI6sMSNCUUqB3kfcc7bo_MOKQWfea1UBBCaBtJvKU_sxCtKYAYUQ.jpg","https://qcloud.dpfile.com/pc/zNsrg9_DYFHc3GR2dj1G6kbnPUSYmACLhTY2Vx0iOehmE5cTlkEghg4rwc6lZ2zyjoJrvItByyS4HHaWdXyO_I7F0UeCRQYMHlogzbt7GHgNNiIYVnHvzugZCuBITtvjski7YaLlHpkrQUr5euoQrg.jpg"],
  ),
  德源: sameShopRanking(
    "清真·德元兰州纯汤牛肉面（品牌公开推荐）",
    "https://m.dianping.com/shop/772618307",
    "https://www.dianping.com/shop/H6uztsj2VAK1jxCF/photos",
    [["纯汤牛肉面",163],["红枣茶",86],["素拼",51],["红烧丸子",39],["酒酿甜胚子",31],["优质牛肉面",20],["酱牛肉",17],["特色干煸炒面",13],["美味老酸奶",10],["牛大碗冬梨汤"]],
    ["https://p0.meituan.net/biztone/b5aba162518416ccea4dcae162cb702c436153.jpg","https://qcloud.dpfile.com/pc/vazvtfeoc3QuuHsIqE7NFH7IRPJaJ0r9Rds6YvLqFZpOF_ubDkLW4HN11Nku0fGql0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/iLspv1P1YG2QIecY44GQvnhrdazxaYIZ1Pqy_6R41BtWzW91wEPlJ_i-gVjxZJh-l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/zvlqhm_QefXccFKBSGm9hdnohcQp3FLaBiSTHkIpbPcfs5IXGgY3_0Ra336ek-X9l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/Uqetma3JA9hVg-_5eKKvZlwMebiJtuwFVIe0P4RnP4wFQFr90CEHj63-CKJqTtxzl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/5PmFID0kH-L-fL1lKVb7CEA338nUTDRaPujoBR46RynaIdIK86IKRWkxU4rsQLJrl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/01AOVCp2xmcp7UjQZpDJpnEaH-Is0VSEAlwFPaiz8tjbtYJ-Q4WqP-tc9jpXD_ACl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://p1.meituan.net/biztone/6fb759ad814199e4c48712cc2fcb415e822136.jpg","https://p0.meituan.net/biztone/c7d71c5076c7bb64d922b017e5e36993416037.jpg","https://p0.meituan.net/biztone/c479a1dc51a9be95df6f4f3c428aeee1775786.jpg"],
  ),
  绿面: sameShopRanking(
    "溪启杭味面馆（黄姑山路店）",
    "https://m.sohu.com/a/898569784_121956424",
    "https://www.dianping.com/shop/H2C6iy5jtnx7KQRw/photos",
    [["猪肝拌川"],["茄汁面"],["酸菜肥肠盖浇饭"]],
    ["https://qcloud.dpfile.com/pc/iqGWPX6Gl0W2iXqoged_3wZcAGPWHGcC6RBgivV0b38w7odUMlwVEdwJiM4IZc5V7etAb8E0XoinXAHXHaHXur6Cqtmdg9Ac2pU8EvdAxw0.jpg","https://qcloud.dpfile.com/pc/3FIxINrodE1sQ0OxckNvxT81wVil7IaabXk6OS0dbQpMsUZetJl1iD_2OEPrcIpn7etAb8E0XoinXAHXHaHXur6Cqtmdg9Ac2pU8EvdAxw0.jpg","https://qcloud.dpfile.com/pc/zT1IvXLJ69PK34hoDrGU3kNw2Ai6WwUN7gt8auS4l3C7fygzondHXh-hPymJKuyjl0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  意美家: sameShopRanking(
    "意美家·好牛排&好披萨（黄龙国际店）",
    "https://sg.trip.com/moments/detail/hangzhou-14-144610600/",
    "https://www.dianping.com/shop/H9WtdwsxAU6LB9yX/photos",
    [["干式熟成牛排"],["窑炉披萨"],["葡萄椰子雪花碗"]],
    ["https://qcloud.dpfile.com/pc/ahFU1CFzg0w4a42CnQWxPO__YlnOAWuPEe7hqsHiyrkniNiDZZjc1t15hf4a_FZ-l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/iQKAQCExEZskqi1gU-5gr6cJQomQKIwq0Cc0Gi7xGw2KLzJ144rZkzyiTeu3d-o9l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/E0Ld5UMyn-KefmjHysEZZBSkGLuovt2G2rlx3RviPrem7no-eQAsEi7Jy1RogEX4l0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  草家酱蟹: sameShopRanking(
    "草家酱蟹泡菜坊（品牌公开推荐）",
    "https://gs.ctrip.com/html5/you/foods/fooddetail/155/133076955.html",
    "https://www.dianping.com/shop/G4XYx3dNtTIVVNkZ/photos",
    [["辣白菜"],["牛板筋"],["牛肋排"],["酱小土豆"],["拌桔梗"],["草家酱辣蟹"],["酱辣蟹"],["酱辣虾"],["草家酱油蟹"],["月梅酱辣蟹"]],
    ["https://qcloud.dpfile.com/pc/kuHb2ha7W9y-Lt6UE0hIxPbvHwZ94Vr6npH1gi6f90a5e2PDg2y8rNjEFucJv_e3l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/n-eK7pFJmWq3bEeaPerPaKugR9ajJHBTdvYOYuSWoHQMOtn8Y3lVAcAJFRPkUOXzl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/H60A8XB6vQKws43QHQ6qbyTwG-c8u3fPl8K443KuJVnkPD1PzOOJSHwB_Y7-WM94l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/epqHGRNmouNus1TAUw8gFwZvDF1c_w789Vxham7Xc1TepDd5v8XC-he8Fq93ovzJl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/dySlet3HASEwt0GEe4nEdgyg0NTsj_rbs87_bRNGUai4Yael-6L66H1gMtMlEurxl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/R4MEuWLyStfMB6peF0O7jE5yK3VMYWLGxZKfa2SLua_j0zgm-eqB7cdt0Jpezodyl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/wXqmbvBR9AUaqoJHGE27kFtgpvxCvfxIWPtwpSzPrPbnUS-EGVcacod47TJN4Kjvl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/4iCAPBSmwIkfmC8_UrnGo4ks2AwMfXkL1h2GEgpXYs2WBZfWXbCqTGQ0ZI9mL5ril0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/7A_KsHBdyIwblUgffJdipEAk5W3UhWoFiyi3uKujO6c-WWp7z94rVXTf14srxR5Vl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/FxfivVpm16-J8onJx9mKrWxF5qIffdS8tkz8Uffrb-sojX8j-Zf_Q1XWQPn0AQL5l0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  竹里: sameShopRanking(
    "竹哩·环球美食（杭州中心店）",
    "https://wxredian.com/art?id=cb2014c09ba66e1184aa7967bd95a76d",
    "https://www.dianping.com/shop/l7CPfkoQ3ptgoSyC/photos",
    [["烤榴莲"],["芝士蟹宝"],["牡丹虾"],["海胆"],["寿司"],["寿喜锅"],["五花牛肉"],["海鲜大拼盘"],["鱼籽"],["刺身拼盘"]],
    ["https://qcloud.dpfile.com/pc/3P08QPgiPq6Hi5rXWvGnfsEmOHra9DnTBzAO2xhg0TN60HXIagObUbpTwz9-KAbwl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/IJszX8zSrdw8Zj73kkA6OkOCp7bzl54VQwh6oT2Ot-FadmpZof7PnkUitt3C9MDhl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/f8q9Up2MKNU33BFlc10GK7QgpsFVFOFSY1EC7rfid6TcRzeyFcO-q9cZdhmj6bv5l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/Fhk83NBHgA5-sUerzxOjp02j4MMMfk1Lin4AfYEFYrpKgDtMhp0_z6XkWzHykHq5l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://p0.meituan.net/ugcpic/1c623f1a4fed11dc58fe109f18226d46625392.jpg","https://qcloud.dpfile.com/pc/AD0qiaT-iwToi-ylzPI83o1BskycZpdwQwQurlxB1Xz3RlpJXGRIC5pv0V35YWyKl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/TKpm8aVP0r1hpfXdiSi6dQYhfauwlwywXsNjRfN2x3ux-tf7xW5zFVPRXwL8FUucl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/9_Rc5d90F-hkbEuyTTO-Vs__UjZ-bkOBV_Nwsql6A6HkG7Vyjz1gw4wCX4HAhlLNl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/aVvT6032-dL7k3EUqoaw9kHZKwRUz-RnGhdV58bo0xC02MaBkW27D4edNzumVO8el0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/H2uuWRtZgZdRls9Hbw89K3Vn-BryeiWZQkdlxWIfsmKuCamBoC-wROHJ2QAEufNll0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  赠李白: sameShopRanking(
    "赠李白·江南院子（杭州品牌门店）",
    "https://m.dianping.com/shop/915841275?msource=applemaps",
    "https://www.dianping.com/shop/915841275/photos",
    [["太白酸菜鱼",61],["小炒黄牛肉",53],["江南红焖芋儿",28],["沸腾水煮鱼",26],["水煮现切黄牛肉",23],["油爆豉油虾",19],["鲍鱼焖土鸡",16],["重庆辣子鸡",16],["山药莴笋炒木耳",13],["磁器口毛血旺"]],
    ["https://qcloud.dpfile.com/pc/mZf6iCzHtqLthlWefM5VNoaU2P3GDETskiyUHyjFcfILaBmlUAwmcYJTahCjjdwPl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/FSHdsJuiEtjVMV_VoCah_T-AEO26fTZSizkOJz-ZdwYPQPtvjMk22EcUeeOIT6okl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://p1.meituan.net/biztone/d3ee90609f88ebdfd17b9c2aaaeda595543201.png","https://qcloud.dpfile.com/pc/jdktrqIjT-PNJQIGiZV9GfW1mS_p6Vnq7guypDt0DmXC3wLLkQSYRd-QXEutyGfnl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://p0.meituan.net/biztone/d8aa74e117d1b4c9746c06b2176ef123237960.png","https://qcloud.dpfile.com/pc/ZGXxq5NEZhq8c4Jjw1LuPVopv5lI97Q56I31pAU636LV2jAK3kgzw84hYW6AAKssl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/4A_8o-mn_9mLttZQ8CU3O1ELC28Klm81YTfu_HlYuhG694TLIQ2LCj8DADdqcuZEl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/Rh1oF9ez6sXRXz1wzKDgWQaj0kL9bXvJZ8UbX0Y9gB8VdBZR9fy4k4CjrHQm7FS_l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/lABPgc4Fvj8dnHwqBzw9jCebODhdAy0GoZjOEkGkrv5N0qXBZtQiNpN4jl2Scz6Gl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/IWn9a1Vppvl0B6BnfohKDvVMbaF719pu1BqA3N_QnFa7fygzondHXh-hPymJKuyjl0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  湘香蒸菜馆: sameShopRanking(
    "湘香蒸菜馆（湘湖店）",
    "https://m.dianping.com/shop/2340397?msource=applemaps",
    "https://www.dianping.com/shop/2340397/photos",
    [["白切鸡",1896],["馒头",1039],["毛豆蒸肉饼",737],["清蒸娃娃菜",651],["鱼头",579],["梅干菜蒸黄刺鱼",447],["东坡肉",428],["大三鲜",403],["红烧肥肠",363],["酱油蒸河虾",322]],
    ["https://p0.meituan.net/ugcpic/0b9fd8b791512d2f3e7b48c707af09111917747.jpg","https://qcloud.dpfile.com/pc/9ihqRotoSpj4n5x3mHa9bIFpUcNRM35-9GLeLgrExuVy5FM_Wpu2Ej-J_QSUviwYl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/0EKrkRoPscw6u_e8d_a0Ww5-fnFsd-m3yFoXgpYPqsmKLzJ144rZkzyiTeu3d-o9l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/NJxc2EHwZOcZeNH8NeCF0PJBdiDULKXId5Ed1JLCIEr64EcLNDWhfAqpI5qVstc1l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/O1izSuL5azkshGgW91MGeNd4JquYMygwzBK82rlxt8I7Yo_P6n2p8aQxBUWuT6mXl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/sEkXv0wLh6Wev6Zs96So6aO1zgWCg0fVeOlMM9hPVHNhRg2nPLFmNq8qK9DCxoLYl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/n35pCIHiQqZs8acWCJhoakMZQ6WDDL1lERhor239POwSw8JHZ2XSn0Rof7rTbgqEl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/k5nYTlMHi-VZp3_D7UNHnPC0YoNsEJwYHRzDT4EaxSSblhGV9v43kU3okh_zrjfDl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/XTjFEg1d9NUno9fhPDLy_WP9PoHDfOSokfrbu_3_tnMN6036Pn1RZedA5xy8dCUYl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/0BGMflYzPUx5hazdbczZQWVMkoCMB_ZCRf2QIxYRk6jp1FXOa6D3KVcDPG3HHH8hl0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  不万能先生: sameShopRanking(
    "不万能先生火锅·夜宵排挡（杭州品牌门店）",
    "https://m.dianping.com/shop/1336506885?msource=applemaps",
    "https://www.dianping.com/shop/1336506885/photos",
    [["鲜牛肉",48],["鲜毛肚",41],["冰豆花",31],["特仑苏鲜鸭血",27],["千丝黄喉",16],["蟹柳包虾滑",14],["鲜鹅肠",14],["熊猫椰椰冰汤圆",13],["乱劈柴炒面",9],["虾滑"]],
    ["https://qcloud.dpfile.com/pc/LIYhH5gim5xgTbyI98NuaqVmnskMuLz1gbfl0W-4YskYxr2_iZNtoTn-7xGVAF12l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://img.meituan.net/wxfood/ae834881185638463475342d58352ddb500813.jpg","https://qcloud.dpfile.com/pc/Wn79_uqH1qBBV_mS7xJ7pD5wQCASLSx9Vy55f75xS8yBcpajwsjCg0mTx6eQzyUKl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://p0.meituan.net/biztone/1fda78dfd75535dced6bb2117bb124a4204301.jpg","https://qcloud.dpfile.com/pc/CeOnRsmFFQFDDRv1DS0pJCUYiAXLRmSv6E1QOsCCUHLdH4I3KbdDX_inOo7ew9ZAl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/lHs1CJodnfq8iiBwZp3_ENlFtsiXb1Q-tpFviEg67k97NX1EbhDPruXu4Q-yKt3ol0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/ZTbxesK_FJhX0TtO-AdwLsukv20RfU6C9gSADOMzv181jxyfAGZJzVglGXWdLx0kl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/HoyLRwGCj4Pe1bhFZoIV-NM1lIDt-6Wt7q0FTgq3eIWBHOfnXaNNtZwlTjraCpQcl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://p0.meituan.net/biztone/31336195e618c3b575f1c6d8cffc3516783597.jpg","https://qcloud.dpfile.com/pc/9k4lEr2-zflkeM4S86WUFz3uAt2u-lxlpbienrW2qF9MqKUPnvbfbOY6kUekmg3Il0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  "Three Fingers": sameShopRanking(
    "THREE FINGERS（塘苗路店）",
    "https://m.dianping.com/shop/1372052713",
    "https://www.dianping.com/shop/1372052713/photos",
    [["芝士汉堡",68],["薯条",38],["肉酱汉堡",28],["牛油果汉堡",26],["经典汉堡",13],["培根汉堡",8],["培根肉酱汉堡",4],["双层牛肉堡",3],["胡椒博士碳酸饮料",3],["菠萝冰可乐"]],
    ["https://qcloud.dpfile.com/pc/RIOdaQdzTAaVoXqs8pxRDmHqFmW1ebA7H6EQfh87vTWph5-a9LefJ1jYD58MCeJal0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/ekvdfSRIkT9FBw4d2BO721rircKuxQyyuPwEb3qJXFeiGdm8pmXxrav3uMJ7Q5Yrl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/e_yn6AtfFoPw15BVkM8AVXYVVgRZHvJ30qXxeF5Gu4N7NX1EbhDPruXu4Q-yKt3ol0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/meEe7wC7bimP-2Fua1Azkw_Fo_kmX0vS2piLL4n0Nm9DUUtcoDbOdKa3qkBAt0aql0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/ckWIXNG5V1SQ3ccNt0yNtQT_OyP2weozWd-lFq058vWDRwXz2N8FyHYBOQYjWTmDl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/Ug1BrUMSyY2fukU72hdtxbryYy5PUrLUwyM0XjcGakqUgT6fKzJNE3LeUnWjdVn3l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/OzaXSs8lQvKKcMiI349XS2G0jowyY23MM-uEiaW90jgnyhKpqZJqQibdQJXeADSDl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/mbHz2wzGkOjZ4U-uyZb34XCYYcdJBzi_LEAncOU2d83PmgMTRZ6S51ChWDmtQU-el0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/AEFyA3vGU7bBEU2VIP7wHV1aJXHn07iX7KliC6ptSZhihacnKENHlbzs2lk-8jO7l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/xawJb2yPjlheV5x6P1srbu6BvDofHha_hyZefyT4IhG-WEwNubweMDMSaIAZNtOgl0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  Popeyes: sameShopRanking(
    "Popeyes 炸鸡·汉堡·奶昔（品牌公开推荐）",
    "https://m.dianping.com/shop/1860782531?msource=applemaps",
    "https://www.dianping.com/shop/1860782531/photos",
    [["香辣酪乳鸡腿堡",15],["美式松脆原味鸡",10],["黄金空气脆鸡柳",6],["卡真脆脆薯条",4],["秘制卡真烤翅",4],["爽辣炸翅",3],["经典酪香鸡腿堡",3],["欢聚小食盒四件套",1],["北海道牛乳甜筒",1],["经典草莓奶昔",1]],
    ["https://qcloud.dpfile.com/pc/6yohTA7ZjlHxLFXlyAko63BC3UiEvIk1dxjuNVBxWA5jkCTwHkU37pj5PWzLy1c5l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/y1JSjGJ5A7VPxF40USCF0dWTs97Tr3T-sfpKJzVgWBaE1dUpvbW1gcNw26qKBJshl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/DIGz3vQNsZwZb4LsaUUJz7-I5gfzB80MT7SfFMkwEGkYxr2_iZNtoTn-7xGVAF12l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/MCbXh9HgX-wx_Npri22fBoMf3-h4IPB3hE_vclknl_SfFYHYA8RMeJUQIicrJ58bl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/cRJMB8j39sUJZBdUN3Hro2Yb42taGD4hsiFjdw4KrU49JyASPPsAY4HKActKSJLEl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/AVPIv_-DMANZrd2dnvMbvmd9OFh0FMpOQ1y3gebJbiJYZVVfRi2TqgSxN_xBIYijl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/r7QG7X_kX_fViULVYwNqQsbK_RGopi9eBJp_rNTJsfCblhGV9v43kU3okh_zrjfDl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/zxOFEyZAEmlgyUO9YRc59DRoL-hVYv1J5l_O2wAzdDZk-BkV6IgF28PluBL5qXKol0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/s0qOe_ozaCWew5R1QlC96v2LnTUSgk2GX3nsxw2aMyR2SQfVv-GUKZxeoM-v1_arl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/6lFAO-tjdt-VoXm36zmUqOSP65v7S-3_jlEeJsZ1B_XeeRkOeudQ96z9oY7fKmOZl0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  月龙吟: sameShopRanking(
    "月龍吟（滨江星澜里店）",
    "https://m.dianping.com/shop/1174643488?msource=applemaps",
    "https://www.dianping.com/shop/1174643488/photos",
    [["鹅肝",146],["牡丹虾",117],["海胆",90],["芝士焗蟹宝",76],["招牌牛舌",71],["甜虾",63],["香煎银鳕鱼",56],["鳗鱼",53],["烤雪花牛肉",49],["新西兰鳌虾",44]],
    ["https://qcloud.dpfile.com/pc/pN5y3V1ewAemHbuUOnfTKd-caUVxUDKxQDonToyFUsKzS_xMpriCBCSCoYlsQPRZl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/8Zfd4MkiFdX3QRmCRFHCCh3dOpkC0_hZkw6tSemHLWe6SfmrzwV649OAfQirSVRBl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/xev_3gTJ3xvn6SpmS6IKtfWJPVsv88WlqhGaD7I6wLKlz2dGXbocfyjXp0oFp_C7l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/pFlsx0y8aI6ujFzAU3D4M1JeAoEPbMuavqcRj-OSXpsN6036Pn1RZedA5xy8dCUYl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/klLXUrfBYEXx_ku_VrpLn0-rWP275z_ywwZJSNMQimeyZslx_GVxXaEoqZmBGnuul0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/al34XeLwidyVBBLKQO4JFpmplMKItzDJg4qQ156zOJg6FrDbk0JVVm9uBabFCIjil0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/tWMQjU2I-MqXOggvdAguafoNBjTJdfB1SoZ03a9ITONN0qXBZtQiNpN4jl2Scz6Gl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/UiAfhHgnmWmSshIJ6QZWHaLMZWxC9OripRIJ8JFDZHd7NX1EbhDPruXu4Q-yKt3ol0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/-24n1GL57n6GrS9ZCVGRXWCwfCCNHAb7Yfk3NGz3hEsoJ4odyXGwCiM2f4d4c2wYl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/wnCyMpssjIYiqyNSqxxAkTQr3vLFuV9yk4ovxNSv5tJupv73A1uBDHktS62xoutTl0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  发酵食堂: sameShopRanking(
    "发酵食堂（屏风街店）",
    "https://m.dianping.com/shop/91992779?msource=applemaps",
    "https://www.dianping.com/shop/91992779/photos",
    [["抹茶可露丽",89],["生椰斑斓可露丽",35],["开心果可露丽",33],["伯爵红茶可露丽",24],["巧克力可露丽",16],["树莓白巧可露丽",12],["朗姆奶油可露丽",11],["经典香草原味可露丽",11],["咖啡可露丽",7],["柠檬可露丽",7]],
    ["https://qcloud.dpfile.com/pc/fyZRdfCHca5ZlHLmPNmwLMqjZ3MeZtR7jWKK4Y640tIuHLhh-URehvbNP-GxhJc-l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/u2bwX-wvTiQTlPwev3e-ebduL0NHVHHs9mvP2MbPStlk2NZGkJzb_6Ltdze-JC9Cl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/B1RF1LD7Y5BF89RHn8y08FKqPKNxzetiANtcAVtvX3k_H3SjxiM17rhsz9goc6qgl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/VzzMYl99kfdTVXsQmV1zqBoU7TpitM3Sjzm_8PG2XFXMzobgt4KobVBbD3pn8Hqxl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/EyJnIqwKmxLWKOYE5d2Tzij7G4w8DYr1LGjwm81rZ-YdcbXRSYHqGO9BL7baDzFgl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/kAFufYBv9np7xjf61dXIuZVEal92XTk4KywEwYctZOz6OCodSwgI1F6ghqaHAA4Jl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/AXxXx6hX3-VPMM9CTbrmSZTeRk-fLvOUz-ZyADxtWP4Sw8JHZ2XSn0Rof7rTbgqEl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/Q_MtaB1G_WYRvK-6xkhk3abIu3AzvWHiT8Kxe6gMOxwFhOOpOf8VBRhb_NwuVQQql0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/xtBjl6BNmWaTnCrTF6MjAzE0Ecz7fqPgPjCn1H6R4FPkyhh_DSnSD5ZKjJEDmjadl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/gj6rg6irL2JNKNSSXiqumyU0S4LPasyaOXbXhCqnMmW97MeSLYiTrOPJtpNzNiTol0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  老秦凉都黄牛肉馆: sameShopRanking(
    "老秦凉都黄牛肉馆（滨江总店）",
    "https://m.dianping.com/shop/80989279?msource=applemaps",
    "https://www.dianping.com/shop/80989279/photos",
    [["极品生牛肉",2635],["火锅",1133],["牛杂",1054],["黄牛肉",1013],["牛肉丸",534],["牛筋",533],["玉米",509],["牛肚",430],["虾滑",346],["牛胸口油",316]],
    ["https://qcloud.dpfile.com/pc/0kR9d45fUVRCKlotNX-D3OaRivWgGC4J_Yk8_9sAQ-tiU9sHWHmuC8W6jzMv8GhHl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/vz66RZArlYRtIErzupFDaY7-tEMTQY4gokFG11JTuSz6oGX5y197inc98-UfTv4ol0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/Opgpmu9WW7vk1SRRgFrsCpP9kPINQLc2UtK97rcr7YbdH4I3KbdDX_inOo7ew9ZAl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/9FmUfcHTU7q03uFkU6B8M2-AWPcbiojsIPdt7CtMEulMqKUPnvbfbOY6kUekmg3Il0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/CkVNOCBoQZU4fBfihbtDUsEDxxScabUBs2jr8X6NGm_gtKlWSAo5MOFOfdv9gMEHl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/1HSUQSd5s5vOQYybMcyk3Kt185T1t-TOqS8vCsbcMDSiGdm8pmXxrav3uMJ7Q5Yrl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/Mx1Vw6nnnp5xiuw639QS8i2Wflaod8nk6p4yDrG5GG8-WWp7z94rVXTf14srxR5Vl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/81GwUgZ7Z1mVK0vZDrFcMdtSSVVrmL0m16OUe-oeMf6gaCxVp6XodL5UCwTJqJ9gl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/XeR9axTBWseaA6Gfb10aNkCOgH9jxuWriMW3iWK8XkaZkJb4YhkFwcxp4A9US9h1l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/j7_Si4unCvfb6q7rkPd8AWvVx7CFyEduTLwAqBy6IGBLASmrR1IF44ZxAKsCTcTVl0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  胖哥俩肉蟹煲: sameShopRanking(
    "胖哥俩肉蟹煲（杭州品牌门店）",
    "https://m.dianping.com/shop/21190411?msource=applemaps",
    "https://www.dianping.com/shop/21190411/photos",
    [["招牌肉蟹煲",1743],["鸡爪",883],["牛蛙煲",634],["年糕",483],["鸡爪煲",423],["虾煲",388],["鸡翅煲",224],["仔排煲",152],["嫩滑皮蛋豆腐",136],["渣渣脆小酥肉",81]],
    ["https://qcloud.dpfile.com/pc/TjlCJx0tKICBLKUYXSNFUcdwwdhyGZ2y3VIBCNGI_-H64EcLNDWhfAqpI5qVstc1l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/ikkjo9BoZxyLMFljvpmjJJe2LuSAt3qOmjwj1m2KGNXTF4iJVaTskAeBbIeh9_Yml0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/EDWpLRGUmJN4vctgGdi3WEwthTL6a5eNXJjceET1weJadmpZof7PnkUitt3C9MDhl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/Ah5v3YVkVJubqIM8Jip_2lIUK3vskjqEj14gYNuXAvge4_uV38dKPEWklPERJFdal0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/VIHDR0TNoIanDrfg9i1mf63B4Heesh_yEs1whUvKlTi97MeSLYiTrOPJtpNzNiTol0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/aKQdXjZTAI5Hbnv_g3fYlD04iIUl2eQUtXgO5GPut7PkPD1PzOOJSHwB_Y7-WM94l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://p0.meituan.net/ugcpic/e853f63ddf2c46dd4d65fcb5958e81b1294080.jpg","https://qcloud.dpfile.com/pc/Q8OWyVKbo-oDbXACnvcwYpCAXPl2CqYZj6i8nJE6VvFgZuq-WvIBKbDE1FtgPd6Fl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/nffbNW8kOvw3l8ggEQEmikq3lFJS7nw9zreIxEGo4nCBcpajwsjCg0mTx6eQzyUKl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/m0Re5Vmm9qdSF08C3rDEQ9WXh5WGJWEBHxRKFYfAkZCIQfHxvG4qpLv16uRkJk9cl0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  荆九爷: sameShopRanking(
    "荆九爷爆炒桥头三嫩（杭州新天地店）",
    "https://m.dianping.com/shop/687405715?msource=applemaps",
    "https://www.dianping.com/shop/687405715/photos",
    [["香醋炒土鸡蛋",149],["蟹黄咸蛋土豆丝",134],["九秒腰花",120],["红糖冰渣豆花",86],["爆炒雪花吊龙牛肉",73],["猪油炒时蔬",56],["鸡爪焖黄豆",40],["乾隆辣子鸡",19],["油爆土猪肝"],["麒麟酱蒸鱼片"]],
    ["https://p0.meituan.net/biztone/7834b4bffbb39a5156217622f2a3dd1f484886.jpg","https://qcloud.dpfile.com/pc/xGMB1oOoaUDwJ-dp5WEGmylIaQ4mrjbNQ_c6PPYZz5g_HRirLM7pMfuRiFhWykOQl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/vi-5wzmmmoNSJkBtJX5KrzfSiOzNhO_o7trcbNZPEr9pXqjJX_o12dEv4qUeGn0Ql0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/c67MygTKsrgymZ-j_t-eIYFLjPotB68LF_DMUjU3jt9f6F_k3yeRA-vHbW8cutDhl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/CzmCHxgDFqZI6-fGu5Jnpp6hbYvfq9jLoRx4F2HQ27e0hyw05fZB-trewmM01YSgl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/-rR10mZ9jzk6mejXZxFtPSf5FROsVPAT-TmPryHodu-02MaBkW27D4edNzumVO8el0cm-Lf9tDMlLZpO7rb3bg.jpg","https://p0.meituan.net/biztone/3dff6cc7a2710983bc4acdb10f175877909170.jpg","https://qcloud.dpfile.com/pc/LWaZfj58ykv7HVuSWzZIFUG0rHRtpEw9RFrxtFixw1lupv73A1uBDHktS62xoutTl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://p0.meituan.net/biztone/4ade2c1c8461b63aedc75e8b01aec885803542.jpg","https://qcloud.dpfile.com/pc/gEM4Ky0G8W4QicEyghEnGh3voJQBe8Zu4jcdwXErcEEnyhKpqZJqQibdQJXeADSDl0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  小厨师: sameShopRanking(
    "小厨师·二十年沈家门小海鲜（百井坊巷店）",
    "https://you.ctrip.com/food/hangzhou14/5147235.html",
    "https://www.dianping.com/shop/536949/photos",
    [["招牌倒立蟹"],["椒盐虾菇"],["海鲜炒粉干"],["大黄鱼烧年糕"],["地道舟山蟹糊"],["白灼基围虾"],["葱油海瓜子"],["葱油花蛤"],["红烧八爪鱼"],["清蒸带鱼"]],
    ["https://qcloud.dpfile.com/pc/6y5Skw6IIDaa3JuTvo4c1ISRVi4kst_c2AE5Yyp6Feh0mn4Ix51xel_E_dmOdgPNl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/iy4MRBxQFTWfc1QJUhl3219M6KrC8pVYyxHGNAs7FzCrMVJYG9mde8t_BvHDGD4bl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/Cu5nysQn3EkDrpv4HbVuzHkZJJKu6oml9seYPwNhWkBozt30SfRc6tevr98_gMTWl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/rAc-sDoE9qmRu7En0paVOrVmllZXlbZFhKyQegH0426BNrjbkkTHaGZJMlWea_rKl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/9nkzPehygzSDIQrI62bC6gxOZjfrziRH7xFFnVsQBefwLG0XiOhMxpAqgea9sPMVl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/tkW6YWmNP9YY_yhjNXWYoPJUMsUV0kb266pVAbrI5hY6FrDbk0JVVm9uBabFCIjil0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/isSrpgt95CBf9XsbcmTsJrhFIT97NLyz3iH7IK95wMduXX25lWBCG1CsemDzCy1wl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/ivBfYEFre-WWga2W47cua5ya1UOiRX1GL2gMMuArEm61AHYHhMy-bxSatolcYUhwl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/l8uLzNgSQk02i8DeFQ6i1BPVWjiE5g0lLlrcyjA_1xISw8JHZ2XSn0Rof7rTbgqEl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/wMIDTYwBx30wUVA6dqtaVKZZZkvyUCLOVdHH2eNbd4rzGcu9Ps4FDCPNqanzCZTel0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  洪恩: sameShopRanking(
    "红恩小吃（黄姑山路/西溪路品牌门店）",
    "https://m.dianping.com/shop/130885019?msource=applemaps",
    "https://www.dianping.com/shop/130885019/photos",
    [["醋炒鸡",38],["海鲜姜汤米线",23],["现磨豆浆",18],["猪肝拌川",15],["泡菜花蛤虾",12],["牛肉孜然炒饭",6],["肉丝拌川",6],["酱鸭",5],["特色小菜",5],["泡菜烧肉拌川",4]],
    ["https://qcloud.dpfile.com/pc/QFSTLPGpIN8_VJ9jljBMPFFVUo0991streKFscuBhOF5-7kWX-MRGqq_dKgBXkTcl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://p0.meituan.net/ugcpic/006f8ec3e1d6cd2a9e1c0b94c4d72be6577707.jpg","https://qcloud.dpfile.com/pc/_UhI7n-HKZbB5N7O_yoa-pefrbJAXS_wavDmYyM30O6jRP5kLzE9xZE_Tcizm9fFl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/0VKPQCgKTzUrIreCiwoZMfHZkP60CafCAESnrhof_nEN6036Pn1RZedA5xy8dCUYl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/Uf1eUNoI3p-sLNQYWnM7gyNGR8cn9qoFCFT1_MBpFaWb6VR7dl2Sf5Jv-Iq-Na96l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/1nLQhiuUwj2KhpiIp2jf9NdWxn4YRnj8J0mlp66miaBWP0oYw8PuzawaKAtXH3qBl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/pA7YRsxrbKKU4nRpybDfScJYC-ov73KVXODyePLdyPvx_8lt4lcVOtYwoSwfK3VPl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/5qaA1Y1ScDL7hO5uWmHPKIGnn10fb1YgJtP4R5RlnxAniNiDZZjc1t15hf4a_FZ-l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/zEx0fCl4mck9R3xB3lb_CbDTquevbsejEVUlccbXXYJU6GHTsAvoORlZATBotRJ7l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/ZrthCzsCxtzCbB2B0x3oIyk2J18qQMsDLcAUEBxpXhzkBGDdxR3tJzwM1hXJQ5hOl0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  潮中人: sameShopRanking(
    "潮中人·潮州菜（湖墅南路店）",
    "https://you.ctrip.com/food/hangzhou14/5144239.html",
    "https://www.dianping.com/shop/131974259/photos",
    [["潮州卤鹅肉"],["豆酱空心菜"],["白灼鱿鱼"],["特色虾蟹粥"],["卤水拼盘"],["芥兰炒牛肉"],["鲜虾粥"],["血蛤"],["螃蟹粥"],["潮汕年糕"]],
    ["https://qcloud.dpfile.com/pc/YoZUIJdUL-IOOWWSvkRVStu12pfk5vClgnhbj12vNPrPmgMTRZ6S51ChWDmtQU-el0cm-Lf9tDMlLZpO7rb3bg.jpg","https://p0.meituan.net/ugcpic/f0f0477a9ab0c3d99f921989b2d9d2c5846306.jpg","https://qcloud.dpfile.com/pc/yrfIeKUAgfdhmJwebru0jJRA7ax0VcxBfFUNyaf6T5oWwCOrg7pebpAwQyS5FBdKl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/zLgieVEs1DovMEOrZt_PXVhuMlZBFEQeArP_zL4GHdv3RlpJXGRIC5pv0V35YWyKl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/SiwzHVgtTTYmAfqHn09rmEGKZ7WggEi9t0u96f_o9DSHO3zsCaKERD1ezzk3MpY7l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/lOmEqZCmCc7EgEbcwx0tmTKYBfEo7EzaQ6VPnyoc7R5YxsjxJwYKGUy3SAxhRKnBl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/VNGd4KHr3fctIoP3vjQFEb78JHMBx8R1bK-G-Ph-Mm3EMtYbsWLftAtLEoxov8-0l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/on_aqfyJle_zfcbpZtnRcYC012h12FzNql0b4GultnzicVeKfiHaFrEQKdyU4AKWl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/dEfa9k1RixWMm3EI119xJxIXp0nxZJE5m3csOtb2EFIBuX6umbmyXHL9hAQn2AVBl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/9osWtKuKJKXlWyeANG97UarXdZFJCoZ_fz0PxQQcV0nOtDbjW5XSHpNRsXhYjKwdl0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  泉市: sameShopRanking(
    "泉市鲜活牛肉店（杭州品牌榜）",
    "https://m.dianping.com/shop/900157667?msource=applemaps",
    "https://www.dianping.com/shop/900157667/photos",
    [["吊龙",50],["雪花",49],["鲜活牛肉",48],["牛骨清汤锅",32],["牛肉丸·每日手工现打",24],["肉燥饭",14],["匙柄",13],["粿条",13],["烤胸口油",11],["五花腱",11]],
    ["https://p1.meituan.net/biztone/d605a8d716d127ff337fecf9255f0be0393159.jpg","https://qcloud.dpfile.com/pc/DlF4DTxElcZO5NrxFxKteIwhV__Ru5evJ8R-K1vtp4yUgT6fKzJNE3LeUnWjdVn3l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/oBeNAteB3Lev2k3vWLwH3UBLeUvyjqAWVjFN5ydevfWVLBeDnL56KS5XV3aKu-Wzl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/6gYIAU_YHlmSmULIreCJdBgo5clhmJcshNkGO0tF6y5y5FM_Wpu2Ej-J_QSUviwYl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/vdsjFCR32kX_Hp9v_5hl74_EvkPBddGoektdi7DQyl-IQfHxvG4qpLv16uRkJk9cl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://p0.meituan.net/ugcpic/095c08b99335d5d9cd01ad68fb941bc5200813.jpg","https://qcloud.dpfile.com/pc/ekalZ76Zf1k1poy1ts4ZJZ-IrMp75EoQB47NcDru8YXvnLz9ntEClBBR4rOLEYXUl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/R9lYw5U1ghbXUQbJlWN4G7MRSQ62cdY35kQXwXNVQXAdcbXRSYHqGO9BL7baDzFgl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/aev8sf3Xt1LCcoPEpyM5vo7BnyBiwbF4wJ6gVt6NJCHT8ggm_Z833fznYcAD2GJ2l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/wjMqMocUn7d39rSJnGSekGDowsn2pd_PpEAVZiihXy_4cChPnizlYjVJGV6GWcfll0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  鱼火锅: sameShopRanking(
    "纯味斑鱼府（品牌公开推荐）",
    "https://m.dianping.com/shop/32875447?msource=applemaps",
    "https://www.dianping.com/shop/32875447/photos",
    [["招牌活斑鱼",4057],["斑鱼汤底",2253],["爽脆斑鱼皮",1767],["菌菇拼盘",1455],["招牌金桔茶",1009],["相间肥牛",918],["招牌斑鱼片",913],["生猛海鲜拼盘"],["竹荪"],["手擀面"]],
    ["https://qcloud.dpfile.com/pc/o-5bZbovp3SN1f-sDGuZADHLvgSTNOKZnuDlOFJKjPISw8JHZ2XSn0Rof7rTbgqEl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/9itqbywRoiaDuCfpz95ot2JUH_BsbS4mQudkTvvJGNP2qPrK5fQGB0f3C-oHZt6Bl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/DSMRUDR5ZhmgQ9yGtEUxyuAwDMnne0VfXFPU8U6dg-_4cChPnizlYjVJGV6GWcfll0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/41asIexLgsrWjzWXWNSOyZ1dl7LzWWkhfhcJ8dIU7ZkLQjichY3rrUuybgQtT6nMl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/8ZSeovG3qcyKMZA3fHV5BVwXAykYPZLh5FCZZrnwmFVfIbfsFLKtXX34jpydVYIVl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/CqHhmLVHl_DR82IXwa9_0Scg4qrFzu2PyB5oM-V5uAG97MeSLYiTrOPJtpNzNiTol0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/G_4EXoBJTX4wf_tvNeC501wYkoiv2IpLMHxkR0lzLVex-tf7xW5zFVPRXwL8FUucl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/rATsJ5OgfflXepH5--JDb6WVmQvEir7lHJ19WtAQTK0lI1nx2g2DAKkfWfQK6uryl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/6ha6RXgYx8MAy9SomoYqeHqszTw5pQ7l0RKpCeTOQgVtBtIGg5DrYVY4C2LexZmKl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/xRzp0JZ0upUfWtI35wMibQy2v_2_e9Mi1iFqojw_S5kBuX6umbmyXHL9hAQn2AVBl0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  汉巴味德: sameShopRanking(
    "汉巴味德·烤肉与啤酒的自助（杭州大悦城店）",
    "https://m.dianping.com/shop/la16PuR6fmlkZnTh",
    "https://www.dianping.com/shop/la16PuR6fmlkZnTh/photos",
    [["蜜汁梅肉",302],["巴西牛舌",289],["味徳肥牛",273],["烤虾",150],["羊排",120],["烤玉米",80],["铁板大虾",78],["牛仔骨",75],["墨鱼丸",60],["烤翅",57]],
    ["https://qcloud.dpfile.com/pc/xJZ6b4rrEoqt2g2GDS4a1pirPTvTpmsOhKiLybDiGP86FrDbk0JVVm9uBabFCIjil0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/9bNv7mrzUcADP6y-x5RlQseVVMRXxA67YDeYGiiVqaqMoSnFP__QrFDYJ2JVfyQ2l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/XIryoROavA2ib6reRF1d94YaIfls0Lu7QjviKTjSZZGBNrjbkkTHaGZJMlWea_rKl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/qMiB3WyeniaupbGlnY8UvaVASchk6Kxl5tjXi4oTnU1fmoYa-4kZLybtIt2Q7MS4l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/ZLT31lNwvz9kHtmnIUdssJgMxlsnyX-5ni3VHq-BCPlihacnKENHlbzs2lk-8jO7l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/D40I1Nd0ljD4lKGCeTaTFqaJWMMLNDP3EcbEsq0u5V5fIbfsFLKtXX34jpydVYIVl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/RLazRsbn-0DMXw0-054S89d4afBl6YTtSdrP5889hovkBGDdxR3tJzwM1hXJQ5hOl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/1uoAmRLoIywkutFLojfr8fgxNirMdSeiVpOvV2811WqlAzL6TyeR72oBCnE_0nCHl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/-ihwjDjMqNhClWnEeAhLw_XO3srrLznmbtQY4bwoWMdFsKoitARok5UI-Ul_62SJl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/-NJoGWGlcShixUXl6ahlUq9MwxCnT3gcITGOz8p6UB5W0RfruMqJ4KaiJh9l5p7Dl0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  山缓缓: sameShopRanking(
    "山缓缓火锅（杭州西溪印象城店）",
    "https://m.dianping.com/shop/1747725848?msource=applemaps",
    "https://www.dianping.com/shop/1747725848/photos",
    [["九秒牛肉",88],["菌菇拼盘",42],["火锅三脆",37],["山葵牛肉",32],["奶香牛胸肉",21],["罗勒牛肉",20],["木姜子刺梨气泡水",17],["酸腌梅子露",14],["紫苏牛肉",10],["手工糍粑",10]],
    ["https://qcloud.dpfile.com/pc/aCG6iMkkSi2-IlcsE0qLVPynDS_HjmpIgRWtIr7e-sjsACLn7pEL26qCOpLzWbOLl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/6v-GsTG9SSZpDhzABz11sM8qJkSvzih5Ot1BqXS2ssn-gs9DRzpCUahqSlfTlAtCl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/M9BhouTGnhwX6NH3oUKd3W-Qr3BuxT1IslF1IawyYwIlI1nx2g2DAKkfWfQK6uryl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/Te992ZhBtRzxIe56salOsbUhxI9GB0lC1kGkFUOO8eO1pfE_D9NtmgzKCyAeQrryl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/ynTBpIGrRmWS7fY1jibUfD6_vwN1FIlijwJItuD2egeE1dUpvbW1gcNw26qKBJshl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/jg4X_Dh3aYqlygD6hfIVxbJuk2RQRbVsWautud7ZiTPp1FXOa6D3KVcDPG3HHH8hl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/J4LJbUbSFi5AcGiw4H5af3FqXOKeiqEFXmsXzElKjhXPmgMTRZ6S51ChWDmtQU-el0cm-Lf9tDMlLZpO7rb3bg.jpg","https://p0.meituan.net/biztone/b31444f2e7e3ffe09d591b05d617eb24144449.jpg","https://qcloud.dpfile.com/pc/5uC0TZ0mN-OYlsUL5V86PJCX-DmmyXWLre5krcj6NSw-1l6BLViGherA7p2LOYual0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/dZ210hoKT4sX6jNUGQ3WZYsy0mCtM3wx2SnnZdGbcKY6HZtFglwmSEipvPUxq846l0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  川味泡菜: sameShopRanking(
    "川味泡菜馆（黄姑山路店）",
    "https://m.dianping.com/shop/19633076?msource=applemaps",
    "https://www.dianping.com/shop/19633076/photos",
    [["李庄大刀白肉",40],["招牌豆花鱼",27],["招牌泡菜鱼",26],["重庆辣子鸡",21],["泡菜炒鸡蛋",15],["腊味土豆泥",14],["泡菜炒饭",8],["自制豆花肥肠",6],["酸辣土豆丝",5],["泡菜鱼",5]],
    ["https://qcloud.dpfile.com/pc/ut6VJ3DRvI4sOmS5VnCnsOX8U56CUqhAVr3PVBQEGKSIQfHxvG4qpLv16uRkJk9cl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/sEsIt_XKduXu3c2hXF-KipRDzdgaQiUtHMY3PgIIYi_aIdIK86IKRWkxU4rsQLJrl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/OWuNcBtJBEjFzmM0tv9HnfB0gvcuLnzSQyqEN1otokhItI0Lx_X2iXzDPLQCcx6ll0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/qB4zlZSK2tQpKf7Di5330j6C_d5az8DPCbYoApX-V-Qzc-qjs3x_QcBeo265H5Qgl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/Qc-bR4CQ0Tk1LZfS8Tu1MLjpvdwMdzwepiXGlDO7VlAwm36xgatoO3eGy9JBKEunl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/S2vnGtFbFyDQ7fgwHciYSaQtwCeSoWVrWNp19PqJEauoKAr1ais48T6CkoRRZXcRl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/gzHehcwFwq9dOeTHOuw5dtySakpaSZUZdc_GBNWp-Ue-WEwNubweMDMSaIAZNtOgl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/1BIJvLzcWuHeHFmyE5aKnr5_NO_1sblUo3KqzDMin5UQEUDJ9argGXc-XM5RkmA4l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/6Rt6zOcs1SF1fZW2m-k5AS2S-8qHaS5HjyA7P4ejxDlozt30SfRc6tevr98_gMTWl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/5Ib_gpJAU3UhzKrMGDBiM8hD5lOhOXMcyELtpDxAyHpihacnKENHlbzs2lk-8jO7l0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  绿茶餐厅: sameShopRanking(
    "绿茶餐厅（龙井船宴·品牌总店）",
    "https://m.dianping.com/shop/2779768?msource=applemaps",
    "https://www.dianping.com/shop/2779768/photos",
    [["面包诱惑",159],["绿茶葱香烤肉",112],["海胆石锅豆腐",107],["江南绿茶饼",74],["龙井虾仁",68],["鱼头诱惑",61],["招牌石锅沸腾饭",47],["酱爆石锅蛙",33],["招牌粉丝裹虾",29],["椒麻大白条",25]],
    ["https://qcloud.dpfile.com/pc/j-KT7Hri9FPFjKfSJknU5cAjvOtyqKyIPWHN3wz6miMPQPtvjMk22EcUeeOIT6okl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/mIQL1rwCbG2C9_tFyghbuw8e6Mb-qXIBeC_rmWhmPKtYZVVfRi2TqgSxN_xBIYijl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/AiPyQtMzHZrm5bJm01tfm6SZCayBshIM9x419m0T1oKIla5-3r-2rIFwLFVkaW-ol0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/JnEewwFyAzYXFQlg7wgrrGGbIPO6vuoq4ef046P_wQ4h0iahcry1YkCPMfF_wLjPl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/oI-KZdWkvLu8ZzgkGbSw7uCW8SPsKJTTdsFv3xyNykjsM495mmCzOtAYlUV0zXrSl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/hgn-A-HSaVGQ947skOmZEUxP7iVKI1tjSz6uVT1uNYAYxr2_iZNtoTn-7xGVAF12l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/m3ZaNgq7JTlXSx67SDY_iTA0irqb5FDPOLg0iTNeO1zepDd5v8XC-he8Fq93ovzJl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/_FUkWEpTIPgTqwgg33cv6KxQbnxFRgcmt5TYexDp2pilWArW_x5hZ5pYDDTfipHEl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/Kuy-18tTVcDUevPysl0l_VYWfciGbAvH7k6R6vDBlLNWP0oYw8PuzawaKAtXH3qBl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/6Ufur5Rgp3B-oaphtpuuHbQ_CptP-wvCUhBNePASzVlYZVVfRi2TqgSxN_xBIYijl0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  新白鹿: sameShopRanking(
    "新白鹿餐厅（杭州金地广场店）",
    "https://m.dianping.com/shop/674060775?msource=applemaps",
    "https://www.dianping.com/shop/674060775/photos",
    [["蛋黄鸡翅",26],["冰淇淋烤布蕾",23],["酱烤活鲈鱼",17],["糖醋排骨",14],["杭椒爆炒牛肉",10],["一品开背虾",8],["乾隆鱼头",7],["剁椒大鱼头",6],["红烧肉焖饭",4],["干锅牛蛙",3]],
    ["https://qcloud.dpfile.com/pc/JhJ9kPEpk7jJoJ0p8AwcuWa7GkODAvg3_T9uR3wlfLMa51XkxT2mSj_f_iDQoY9rl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/rGQ2PBsxOBAQ59ZBdntBntvNvYosl2mF45k595ghSBy02MaBkW27D4edNzumVO8el0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/MUJ9zx8dcIgI6TFT39HvAds6Q5LgK7gEcveBACQbjco7Yo_P6n2p8aQxBUWuT6mXl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/CPPv6lgGvtQ7tZ8Ydw8vd3YVgXd3vJ37uORJixslluuuEnmUqwiQv2n4YwBa0A64l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/2YWXAWJL7Yc1vWZ6a9SmAHCRtw8dgOUAll2tlD-BE5cvjfZB3OfPdTKvCMZVTZjWl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/S_zNLeY9kCe-eNWBnFEj-FESIfasMGEu4-x7Q5R7mHMfs5IXGgY3_0Ra336ek-X9l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/JZtS1I8F5joFSJKlgIUo-Jo_XoTCJECZw6Ap2IBEGdUVdBZR9fy4k4CjrHQm7FS_l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/5zzx470T9Kz6F39DUymQ6JuDVQzJla7MVsBYNyRFlDWhBeJEmH0HzvKiyU6FAdEgl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/2sSPUe_vd38wNPr0oaJUlusOgcHx6uOKRRinG-DbSFPEchd3lVI0VL4MWuGM2tKBl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/OF3FshuZvYiektZG9l-t5xbyBmIBOzy3RwY9thmxFDBuXX25lWBCG1CsemDzCy1wl0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  外婆家: sameShopRanking(
    "外婆家（湖滨店）",
    "https://m.dianping.com/shop/973477875?msource=applemaps",
    "https://www.dianping.com/shop/973477875/photos",
    [["外婆茶香鸡",115],["蒜蓉粉丝虾",98],["外婆小牛肉",64],["外婆红烧肉",53],["龙井虾仁",31],["杭州小笼包",29],["糖醋里脊",20],["叫花鸡",20],["桂花糯米藕",19],["松子桂鱼",19]],
    ["https://qcloud.dpfile.com/pc/Xf6G833cynYkQYptPP7fz6XpbL6MiNqVTHgsFjJn4z_EMtYbsWLftAtLEoxov8-0l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/WbggbjQH5EbvdGOUJWokkkOmYw9jp8ITZHcjDh1vqd-HE1UUomYT37mh-ZO7mUrpl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/yayTqcBIqPieYZcukcGN7OYXOpWmGemzx4Fg_9N3RwthRg2nPLFmNq8qK9DCxoLYl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/t9YOIfHYWUcCuZRwyPAqKl-fkL2DnZeqgnby9MgyObyprGyKVX9NlQdSS-3Qd-_ml0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/yzyHgxUSjmJmLmU5epbXgM_9cVWikuhb3sS0Y5IFDm_p1FXOa6D3KVcDPG3HHH8hl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/HfdxloqgrrIexkqOAz5r8Cpm0bNF-pLY0izbhjIexl1YZVVfRi2TqgSxN_xBIYijl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/82sjQ270VCuMtQrsyuesp_MuDs-5z4NNRDIvDky9ciUWwCOrg7pebpAwQyS5FBdKl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/4X1_3-ELMBG_CFgJDjASBsoQlaF9jIHmYQdc1QytsHNb3NtQ1cSedv4vyzNZVxIql0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/I7rNzTT9FGcQNHsaiAd7hdvH1dA3sNAoubIzHRYhg6p5-7kWX-MRGqq_dKgBXkTcl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/f2Uw_v-DBXT2H7UCrlKgPdSL4f8bJB33rn8JsKHeCd2fFYHYA8RMeJUQIicrJ58bl0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  老头儿油爆虾: sameShopRanking(
    "老头儿油爆虾（胜利河美食街店）",
    "https://m.dianping.com/shop/3628369?msource=applemaps",
    "https://www.dianping.com/shop/3628369/photos",
    [["老头儿油爆沼虾",36],["干炸带鱼-老头儿真传",23],["老头儿卤鸭",0],["特色虾皮臭豆腐",0],["三鲜汤",0],["糖醋里脊",0],["老头儿白切鸡",0],["桂花糖年糕",0],["腐皮青菜",0],["干锅有机花菜",0]],
    ["https://qcloud.dpfile.com/pc/dSjkqlBpRzwcjJsxiwF1LgDsWAum2FZv2w7JpK3D0rMQF9evAzF2dSSiLtbybnOcl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/rFxd3l1cMBgmwn_PP_TnCLetwUpKbFDNfl2nrIKxtOTaC664cUqDDWcLW66Qy5-bl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/msNhwSHtacgkATEQR-bb16volrzFVxxFTxZkBkGaj6uzS_xMpriCBCSCoYlsQPRZl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/hXFkbYZCxHj_y1nmI-zOR3nmK46B5r2x0-LPEPatNGvOtDbjW5XSHpNRsXhYjKwdl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/Z-80uMAX4BircryvnxC9O-4OAhlNTMH34lVmsbJc54mHori3gQtS4ec2JGwT-Pcwl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/85Ho8Yzakz-t29krw4ezWvxg7HDVpnNq2ABm1WRi2leprGyKVX9NlQdSS-3Qd-_ml0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/GRv5pfa9ikjpvXPpiVN1qkdQs336ApAdL3mTE9NWZshtBtIGg5DrYVY4C2LexZmKl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/wSnPYoDSccDKIrZ8cS_374WrxefM5LpLJ8ufDVo7KaPbtYJ-Q4WqP-tc9jpXD_ACl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/paO-w3y8cjkHqqdHxhIH_66jFLT8Lsat08ui0M3sEU6WBZfWXbCqTGQ0ZI9mL5ril0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/cZATkUo-JJK--wO4WL3BBnMJBzsHxqT4puvwotzZdg9ihacnKENHlbzs2lk-8jO7l0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  海底捞: sameShopRanking(
    "海底捞火锅（杭州湖滨银泰in77D区店）",
    "https://m.dianping.com/shop/1158048554?msource=applemaps",
    "https://www.dianping.com/shop/1158048554/photos",
    [["海底捞6斤番茄锅",82],["招牌虾滑",70],["捞派脆脆毛肚",44],["牛肉粒",37],["捞派滑牛肉",37],["现炸酥肉",33],["捞派捞面",29],["捞派鸭肠",13],["自选小料",10],["水果凉菜粥品",8]],
    ["https://qcloud.dpfile.com/pc/QDSdwJIWyLoCPekYvbc95cfayD8FMm1EYqBA3LglfUkLaBmlUAwmcYJTahCjjdwPl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/NU6xAIjmyldkvpiPOy5J_9vA4L7Ln3ao3rI-21OYLx0vjfZB3OfPdTKvCMZVTZjWl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/0YmXK6L5FvECFxEKlOXjdeifroeKN71LAHD-vLIFcSW6SfmrzwV649OAfQirSVRBl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/bX2yQNUAqnCO2rdtrsH1FMZax3wG8y7MOLLXv1DR0VvOtDbjW5XSHpNRsXhYjKwdl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/Gamv3fWSTI0SFFKUqtFJCofatVojX_0oQdgAe3KgPOn3RlpJXGRIC5pv0V35YWyKl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/uUJ60LFjnmm1AS7Imd8oQixhIU13qrH-f0BcyYgGmaMFQFr90CEHj63-CKJqTtxzl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/EL0cAfYjln-J8-HMb23qlbZFvXV9Rb0nftCuil1kCfO1AHYHhMy-bxSatolcYUhwl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://img.meituan.net/ugcpic/1a06370ad49949e5ec65e44fbb4624541870236.jpg","https://qcloud.dpfile.com/pc/MbyHsnGdUHJxBtnZQReIvGJpbGtc5cQR-S1qqMmdP0tHsf3GMh_ao4nbuYEeqftZl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/_ljC0-zUp7WoCkfhYe5BSCTFeQ_ACqyDhfH_KzZoV-c_HRirLM7pMfuRiFhWykOQl0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  王品牛排: sameShopRanking(
    "王品牛排（杭州大厦店）",
    "https://m.dianping.com/shop/3444868?msource=applemaps",
    "https://www.dianping.com/shop/3444868/photos",
    [["王品牛排 Superior+",56],["短柄战斧牛排",26],["海盐焦糖坚果冰激凌",25],["黄油吐司",23],["酥皮玉米浓汤",22],["和牛脆饼",13],["超级BBQ战斧牛排",11],["白巧樱桃鹅肝",11],["幸福树甜点",7],["和牛塔塔",7]],
    ["https://qcloud.dpfile.com/pc/0rpsBU0MTOLn5VFziG_kAUs9htoD-Du5Xm-dOud2FY-iGdm8pmXxrav3uMJ7Q5Yrl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/V4DL8d03slSQiLae6LaoJJG04pgNsQ_IiQZKkniTWA7btYJ-Q4WqP-tc9jpXD_ACl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/HOsl7_mVNlas98pspaKY6zvDjTKvIRqEjcG6-Mjd0hzj0zgm-eqB7cdt0Jpezodyl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/wOOb7djGufCs97jEIk-Baha7gba40CtRWjKNphbhdKn1gup66Nso466rfcEoN8v_l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/He5afyV-_SkrXYzm5oSxOnBeAf58Ssv19sH6GbWxlK53Li0atPpkcPtfkJerNztOl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/CZzqS2NQOxINIhpW1r8JJm4sH8CphFvIUJDhvtGkRbP6oGX5y197inc98-UfTv4ol0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/DACn4zpxNUDWTca5XGDV1UVkwVYtOOgE2E_C-WU3wRB8h1Gq0IzbUh8SuJP8cmu_l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://p0.meituan.net/ugcpic/8894b070848d2c6fcdad73547cdf9e2c445066.jpg","https://qcloud.dpfile.com/pc/Fk_6G-bNaNu3oqk9xPldVCbqHNZ56z2EUgrsrkJmUM3kPD1PzOOJSHwB_Y7-WM94l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/pfxw3zNllxh6IfeGeAxtJBJASUGWX2rCvZs5nYOP5QCcwkDxIpkcwKDDsR69S3HSl0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  跑马场: sameShopRanking(
    "跑马场三明治（天目里店）",
    "https://m.dianping.com/shop/1755490994?msource=applemaps",
    "https://www.dianping.com/shop/1755490994/photos",
    [["费城芝士三明治",28],["和牛芝士汉堡",11],["跑马场慢烤牛肉三明治",9],["炸鸡",8],["辣脆培根和牛堡",3],["薯条",3],["东北酸菜慢烤牛肉三明治",2],["柠檬甜甜圈",2],["墨西哥肉酱热狗",2],["巧克力多多多多拿滋",1]],
    ["https://qcloud.dpfile.com/pc/GDeB_6xjYCvn4JdutdgfTjHqCGtjYe8YXWjr8VYnXZBuXX25lWBCG1CsemDzCy1wl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/xkVDtwq1Pv-tkCkcoANveQKJF8Hb02E_a7soJ4r8IRoojX8j-Zf_Q1XWQPn0AQL5l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/dLWqCU10CmQkJLot4PFsQLPGAFvO8uKQBb9rl8lUQ7FYZVVfRi2TqgSxN_xBIYijl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/vi1D4Vie7dfpId--CnAcPYycUSKQ6yTBhJDVoUluICXPmgMTRZ6S51ChWDmtQU-el0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/IZ0PoWJ-roSOLPy4_J3SywhvVw6IxQgLFeywBSqpRtW5e2PDg2y8rNjEFucJv_e3l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/CFcYfYsv4RbaLuRovLCwy7nxT0E0kcPi9uLOoRvFN-Z7NX1EbhDPruXu4Q-yKt3ol0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/kyplcES5cULWySZKYB1yN8-5WqDBENnO30MJW4OsB3l2SQfVv-GUKZxeoM-v1_arl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/Dg6xpTGfsFAjV6YEKGR7btM0vEX65EdvSboykYeARneHE1UUomYT37mh-ZO7mUrpl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/XHgGC0XCXWrnhUzzq9Iszgppl2kXcBsVeZKKm2Pv6gncRzeyFcO-q9cZdhmj6bv5l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/p90XQ6o7RPc0EF6LaUtnd7Uno0fk4iSCnE1295wRbjGhBeJEmH0HzvKiyU6FAdEgl0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  鱼汀: sameShopRanking(
    "鱼町刺身",
    "https://m.dianping.com/shop/103651285?msource=applemaps",
    "https://www.dianping.com/shop/103651285/photos",
    [["海胆鱼泥汉堡",33],["黑松露甜虾塔塔",20],["天然小竹荚鱼刺身",19],["富山湾白虾刺身",19],["松叶蟹醋冻",19],["葱拌金枪鱼泥盖饭",19],["蓝鳍金枪鱼大腹刺身",18],["新西兰鳌虾",18],["鹅肝手握",18],["生蚝刺身",16]],
    ["https://p0.meituan.net/biztone/df42810d919b98566bda06814814c5921181679.jpg","https://qcloud.dpfile.com/pc/tai2PRjLOswbbCOqCRcCxbku5F1ZAV0evWNdjICzbkTX5_btX81C7qRUinOsXnz9l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://p0.meituan.net/biztone/b2f2b5f19dd7d0d699d04177f173971f1114418.jpg","https://qcloud.dpfile.com/pc/jtKvilLYP5MHQnq38HHoIUMJTAlju-W55nPM7uUmXomAIqcc61R8qfmrWtJZ6Nmal0cm-Lf9tDMlLZpO7rb3bg.jpg","https://p0.meituan.net/biztone/7b7dced5793fde61b90001f872395c741246871.jpg","https://qcloud.dpfile.com/pc/C5kUVP3W-c168tEUmxCykepkrMbAne2Y6jIUI1_H8gTkG7Vyjz1gw4wCX4HAhlLNl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://p0.meituan.net/biztone/481525dde11eb4aa558b905645ee6110982186.jpg","https://p0.meituan.net/biztone/cefda15545e570e530cbab515ccff7f81484662.jpg","https://qcloud.dpfile.com/pc/zA-whbl3ByuN182heqIPlw8B1W5gSpx1QQmop6A86Sw548DEdl7FDY0c-SEs6aTpl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/BWgxRmODdpGPs2FML4QH8yF5wo4gMU4A0yiVOeAfC96yZslx_GVxXaEoqZmBGnuul0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  慧娟面馆: sameShopRanking(
    "慧娟面馆·餐厅（星耀城店）",
    "https://m.dianping.com/shop/112275943?msource=applemaps",
    "https://www.dianping.com/shop/112275943/photos",
    [["销量冠军的炸臭豆腐",425],["吮指鸡爪",339],["芝士焗南瓜",241],["肉丝拌川",230],["片儿川",202],["慧娟卤鸭",199],["糖醋里脊",126],["秘制碳烤鲈鱼",105],["慧娟酸菜鱼（黑鱼）",101],["脆皮黄瓜",82]],
    ["https://qcloud.dpfile.com/pc/kiVmXhH7NMZ1F5mFKrlExQ6NO9oRhZFuFIWMO4C7OWpFdc1zqMv7_IUL7X4JCLlll0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/OBF1k1DK6mvlYuljBcTMVpSLRjP4pIU7mlE8fkndR2ZFsKoitARok5UI-Ul_62SJl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/SYZ7ZIT5w-tJ1WVx_cKpMukx_qGARo9oZDGhiaBvquihBeJEmH0HzvKiyU6FAdEgl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/HWUv_MYXmeGySTy7qMMQMsXgc8nFyaryBqjQBEL5IUK7fygzondHXh-hPymJKuyjl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/SVk8jF7VzmBaofpePhMkY-3N-KpLujRu5nVR_ubD_LUzc-qjs3x_QcBeo265H5Qgl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/it5qkpDVlVTeLhi9y6XRxiv53U8k7kZTfK_41hgEmyglOfG6pldam2UJwNj_LXFMl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/zj1Tf7O-wt6hKT6nn7v0TjijSeuBFWlSM9l6r5Zsqx7aC664cUqDDWcLW66Qy5-bl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/7lYAYunqY3YHF8x941dGQdEWSJ3VI6cx2wV8Fc4JiLy6SfmrzwV649OAfQirSVRBl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/Kt6idZzj39Tzs2Snnk-DpI8St0Ai3RP5V0OXot0dQwoqsPKnJP4VrZ2cGEgncAu8l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/bW806aiJdIAVGRMUEwg6p2eLMxgBraXy3nVkVRqgYQjT8ggm_Z833fznYcAD2GJ2l0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  奎元馆: sameShopRanking(
    "奎元馆",
    "https://m.dianping.com/shop/1901856958?msource=applemaps",
    "https://www.dianping.com/shop/1901856958/photos",
    [["虾爆鳝",93],["牛肉拌川",53],["片儿川",50],["杭式拌川",36],["尖椒猪肝拌川",28],["酸汤鱼片面",22],["虾仁片儿川",21],["虾爆鳝面",16],["爆鳝面",15],["青菜虾仁面",9]],
    ["https://qcloud.dpfile.com/pc/6xT83buNEHfjekQwZnr8SltUy9AdudJ4NLNkn5umkRfWX1IVZLxJg7WNopDDVxyRl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/FMj0rPJwQmft9fBQ4YRh34THG6_ypUu-FkI4LeyhPw4LNlrPeiqN3Fqv7YOpYCxtl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/C5EITAssn-_6npC-YTpEliPmDDFVTH0HM3DY-H0WUNMy1WEsxPgkCs9TFktFM1N3l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/ZrznUt-MVSIU33nsI2IAuvhgSrmVoIQdInZo-XqjRi-oKAr1ais48T6CkoRRZXcRl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/dUwrLRzt7YLD9wJWfM9LizjMOK2xV72FdL4WgI1DTteAIqcc61R8qfmrWtJZ6Nmal0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/iXSWZqE_gU_LuWMaDaytI_AtwlLiFjN4Kw08ADrWErLcqS48o594hGx6r1CwtmlIl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/a1S7POjL9J957UyUkw2pxiJMfRoCrCI1tyOSz-xmw0lyMd-7hnwcssLLKNNk-iBYl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://img.meituan.net/ugcpic/86035a8e5e9963ae38fdf8392f7257181107905.jpg","https://qcloud.dpfile.com/pc/l6PykEhhshxZ0lhz8T89fJNE_v1SwlTxT1JlzWEsuEOb6VR7dl2Sf5Jv-Iq-Na96l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/kqqs-4cSe0viCs74vYZ2UezvaFCp1M9UqkoSM7qR9yeprGyKVX9NlQdSS-3Qd-_ml0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  中式融合不等: sameShopRanking(
    "不等·亚洲融合菜（杭州中心店）",
    "https://m.dianping.com/shop/1117665006?msource=applemaps",
    "https://www.dianping.com/shop/1117665006/photos",
    [["钵钵牛肉饭",78],["炭烤厚切五花肉",71],["焦黄油黑醋舟山膏鱿鱼",57],["鲜虾松露鱼籽塔塔",46],["云南野生蘑菇烩饭",31],["柿子火腿烤布里奶酪",27],["香葱巴斯克",22],["建水包浆豆腐",21],["蒜香奶油香肠培根意面",20],["炭烤角切溏心菲力",16]],
    ["https://qcloud.dpfile.com/pc/IVcHZkk_GIfyYaArOnHawhRl_fbNK5sKahI_O0nw2xc6FrDbk0JVVm9uBabFCIjil0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/RKAO4GLCZcWnYm-dNE07QK2hAJdwq3fW2QUZ2SRfgIN3Li0atPpkcPtfkJerNztOl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/uFwMOHUo823qu0qNhGNluX9posWLU_zWzBQx1knrGoDTF4iJVaTskAeBbIeh9_Yml0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/oCm4xXzVvtA1fEvGHkuGXXnUrbHF4RNOffSPqnznqhZU6GHTsAvoORlZATBotRJ7l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/X9BLaLa7HVjfYjnkHiO10w2aVO0_g7qmxHLhzigMII97NX1EbhDPruXu4Q-yKt3ol0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/F3GsjTLPurQQPpAjcOhbAECGQUiuqsSXUTGyTxMp3x31gup66Nso466rfcEoN8v_l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/l2kHPmYbnQkxEhtwSBiC2eVtPYoUtYmyWH2uq8fbI3RN0qXBZtQiNpN4jl2Scz6Gl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/5iM6I8QcmJ-2A92qwatI7eY9MZHERE2l4OSxONIxQm_epDd5v8XC-he8Fq93ovzJl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/Wo4UGVFptTObl8w5bWBexupHoRHOfoc1XLa7-10BcyavS-GNB-jx3b2a_YF3a5pil0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/m7CMlHmhZCGHbg6gjFo6Oovvw7ToQRQgTXZB9yRIB7wniNiDZZjc1t15hf4a_FZ-l0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
  肉肉大米: sameShopRanking(
    "肉肉大米（杭州万象城店）",
    "https://m.dianping.com/shop/1641615863?msource=applemaps",
    "https://www.dianping.com/shop/1641615863/photos",
    [["招牌汉堡肉",145],["奶酪汉堡肉",84],["牛肉温泉蛋拌饭",53],["西兰花",46],["味增汤",35],["温泉蛋",31],["高温铁板现煎",6],["牛肉饼手工现拍",6],["番茄红烩汉堡肉",3],["三椒肉饼",3]],
    ["https://qcloud.dpfile.com/pc/hnFZyv16S5cXqtFlAukkoUfITiz1u43E1yhl0zQg9xN3Li0atPpkcPtfkJerNztOl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/A9qewYKfSwZAhLMPcT15eJp3P8LggItbhYCKlYmjHZXIPGBxa7HJhulaHB25ufyhl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/0u94k1pw5PkO-TM_pQO6G_XeNo2gQ0oicw_HoOhsOmyb6VR7dl2Sf5Jv-Iq-Na96l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/RpevMBejpSxkxdxBgrJIOIWJOGxDuR7NwQGfQk6opveMoSnFP__QrFDYJ2JVfyQ2l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://p1.meituan.net/biztone/21316fd485fbb58287d50f8492cdba09476413.jpg","https://qcloud.dpfile.com/pc/n5UPmYkiBwFrg5MVVvUiMb-ufbR5_ge1rOUTyA4UyMi02MaBkW27D4edNzumVO8el0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/bOHa-TAwGL0adHbD2r7nIvHJRQ3w1W8NoqjEW41BTPC5DmnRcGqB5gN8ngwKRTJdl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/SU-GZYXPxlcAbqS2Z0zF-h4VFqty9ML3pS56eHixY23aIdIK86IKRWkxU4rsQLJrl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/bqUsdoqSEXCjlkska3o1tvyfLlyS3DSdo0NmDy4asP0rEecrw4wT6Tn7HMFEGiSEl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://img.meituan.net/ugcpic/8219f0ebd7f46401150cb344e0f223862007562.jpg"],
  ),
  十八号酒馆: sameShopRanking(
    "18号酒馆（天目里店）",
    "https://m.dianping.com/shop/jay9Z4yyKg109JiI",
    "https://www.dianping.com/shop/jay9Z4yyKg109JiI/photos",
    [["黑松露牛骨髓菌菇饭",329],["招牌盐酥鸡",315],["爆浆金枪鱼披萨",228],["招牌厚切鹅肝牛肉饭",0],["脆炸红薯条",0],["中东热辣烤小土豆",0],["蜂蜜黄油碳烤花椰菜",0],["香烤鸡中翅",0],["西冷牛排",0],["爆浆金枪鱼",0]],
    ["https://qcloud.dpfile.com/pc/9VzTH5V6y5t_ZzLAvHyfmvepBsoY3YvEGLWD8SAo9fh9fyfS44OfrJeWdqIanLebl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/Rar42Yy-D2uc2E2FBGUxGTnrHkpHypaMgLHcpOzcRoDEchd3lVI0VL4MWuGM2tKBl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/2yNAV8IwrXEpSfobgPTEQtjrhE6yIZ3rudtsPyjpwp6L7Pv0ed_4tTMW0lCVrG8ql0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/CkcUMmzkYdcaxLeZaig0BWBTjfl1RT5dcYxKeQG0JJq02MaBkW27D4edNzumVO8el0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/ww_dJruiESjXQvMaMu4Edd_wShy1k_LjmAybswgvtXP3XErsVVN0DbGQszSKsvw_l0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/3gIcu3i0eR-fj4XTzBqHBJq4KJrcjk_kpJN5iFGAUe7kG7Vyjz1gw4wCX4HAhlLNl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/sqCkp-OgoN9AiT7hnZOp0OzyEGgueGdtk332T7zKwvShBeJEmH0HzvKiyU6FAdEgl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/4y6VvATxOS5VhnKjyzJbv8LN4Sxq2Z-tx6zqv_jX5XC1AHYHhMy-bxSatolcYUhwl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/RHkAIa1SqM7ZwwHlI9fOvhqpOV9Xgtj90eO7rtCQZpfgctUHNq-FOaISq9EbslEFl0cm-Lf9tDMlLZpO7rb3bg.jpg","https://qcloud.dpfile.com/pc/xRTQ8YZyb9NqGp1q9ofAHHaQIDmaFmcSzTOnnRJ6pCi03DVLxtKfsUTPwnN7S86yl0cm-Lf9tDMlLZpO7rb3bg.jpg"],
  ),
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
  四灶儿: {
    checkedAt: "2026-07-20",
    methodology:
      "按大众点评“四灶儿·地道杭帮菜2005（湖墅南路店）”公开“网友推荐”顺序整理；图片均来自该门店公开用户实拍，仅作同店菜品参考。",
    metricLabel: "大众点评网友推荐",
    sources: [
      {
        label: "四灶儿·地道杭帮菜2005（湖墅南路店）公开推荐菜",
        url: "https://m.dianping.com/shop/1359475085?msource=applemaps",
      },
      {
        label: "四灶儿·地道杭帮菜2005（湖墅南路店）用户实拍",
        url: "https://www.dianping.com/shop/1359475085/photos",
      },
    ],
    dishes: [
      { name: "酒酿馒头红烧肉", recommendations: 262, imageUrl: "https://qcloud.dpfile.com/pc/CRmBQioUd1jtSq2CvuEJoc5o24obGZJQMLpXlGk6rmZMqKUPnvbfbOY6kUekmg3Il0cm-Lf9tDMlLZpO7rb3bg.jpg", imageNote: "同店用户实拍参考" },
      { name: "四灶儿小炒王", recommendations: 142, imageUrl: "https://qcloud.dpfile.com/pc/w2YaeHOe4x02NYMUOMpxNLE2n___8INNurwss2OnOkAVR-_sdvm-NAaAzwob1Fe2l0cm-Lf9tDMlLZpO7rb3bg.jpg", imageNote: "同店用户实拍参考" },
      { name: "脆皮大肠头", recommendations: 88, imageUrl: "https://qcloud.dpfile.com/pc/uC4D8qFeO3FJVK9kjuFXSj33UcCWGUYR8ieibAllNt3u77miMw3hrWJKV5GKx2IFl0cm-Lf9tDMlLZpO7rb3bg.jpg", imageNote: "同店用户实拍参考" },
      { name: "脆皮大肠", recommendations: 55, imageUrl: "https://qcloud.dpfile.com/pc/WNw5gGHo05eI73-b1pyLN64ipCRC8vs8MwTpOO1ItdsLU4Qx35qu4-dDJdTK1HLnl0cm-Lf9tDMlLZpO7rb3bg.jpg", imageNote: "同店用户实拍参考" },
      { name: "石锅虾仁豆腐", recommendations: 51, imageUrl: "https://qcloud.dpfile.com/pc/Tkp-bJ6yvtscQLHQHAYt-69242Tg8-5Nkvfzj8OJxlXkBGDdxR3tJzwM1hXJQ5hOl0cm-Lf9tDMlLZpO7rb3bg.jpg", imageNote: "同店用户实拍参考" },
      { name: "熟醉沼虾", recommendations: 48, imageUrl: "https://qcloud.dpfile.com/pc/PRV6pa0Au4TvKZeg4459BkwV42-rD_BwFANYqv44e8Wx-tf7xW5zFVPRXwL8FUucl0cm-Lf9tDMlLZpO7rb3bg.jpg", imageNote: "同店用户实拍参考" },
      { name: "酒酿馒头", recommendations: 42, imageUrl: "https://qcloud.dpfile.com/pc/cKDk3moo_pO0i0sB7dpt12N5dWCNfo3jTTiS39b2PIjT8ggm_Z833fznYcAD2GJ2l0cm-Lf9tDMlLZpO7rb3bg.jpg", imageNote: "同店用户实拍参考" },
      { name: "干炸臭豆腐", recommendations: 23, imageUrl: "https://qcloud.dpfile.com/pc/RmVt082FONzzq9WDHv31zvifMDW0dIGflp7T1A5ifER8h1Gq0IzbUh8SuJP8cmu_l0cm-Lf9tDMlLZpO7rb3bg.jpg", imageNote: "同店用户实拍参考" },
      { name: "响油鳝丝", recommendations: 14, imageUrl: "https://qcloud.dpfile.com/pc/ivARB0tSAqgQaYbqfBy5XjxYCPpjhzwaA4l1iAnT1F1YZVVfRi2TqgSxN_xBIYijl0cm-Lf9tDMlLZpO7rb3bg.jpg", imageNote: "同店用户实拍参考" },
      { name: "四灶儿一锅鲜", recommendations: 12, imageUrl: "https://qcloud.dpfile.com/pc/EHaUBxeri9Aa_oL2eAeMY7zbmd-YHYtobHVBEd4SUFyhBeJEmH0HzvKiyU6FAdEgl0cm-Lf9tDMlLZpO7rb3bg.jpg", imageNote: "同店用户实拍参考" },
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
