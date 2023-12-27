import post1 from "../src/assets/post.png";
import post2 from "../src/assets/detail/poster1.jpg";
import post3 from "../src/assets/detail/poster2.jpg";
import mamba1 from "../src/assets/mamba.png";
import mamba2 from "../src/assets/detail/mamba1.jpg";
import mamba3 from "../src/assets/detail/mamba2.jpg";
import mamba4 from "../src/assets/detail/mamba3.jpg";
import fangzui1 from "../src/assets/fengzui.jpg";
import fangzui2 from "../src/assets/fengzui2.jpg";
import fangzui3 from "../src/assets/detail/fangzui1.jpg";
import fangzui4 from "../src/assets/detail/fangzui2.jpg";
import fangzui5 from "../src/assets/detail/fangzui3.jpg";
import fangzui6 from "../src/assets/detail/fangzui4.jpg";

export const PRODUCT_DATA = [
  {
    key: "poster",
    title: "basketball team | 籃球隊海報設計",
    category: "Flyer",
    customer: "New Taipei City HaiShan Basketball team 2021-2022",
    homeImages: [{ id: "post1", src: post1 }],
    images: [
      { id: "post2", src: post2 },
      { id: "post3", src: post3 },
    ],
  },
  {
    key: "mamba",
    title: "fried chicken shop | 品牌商標設計",
    category: "Logo / Brand / Font",
    customer: "Mamba Chicken Shop 2021",
    homeImages: [{ id: "mamba1", src: mamba1 }],
    images: [
      { id: "mamba2", src: mamba2 },
      {
        id: "mamba3",
        src: mamba3,
        style: "postTwo",
      },
      {
        id: "mamba4",
        src: mamba4,
        style: "postTwo",
      },
    ],
  },
  {
    key: "fangzui",
    title: "fangzui tea | 品牌識別設計",
    category: "Logo / VI / Menu",
    customer: "Fangzui Tea Shop 2020",
    homeImages: [
      { id: "fangzui1", src: fangzui1 },
      { id: "fangzui2", src: fangzui2 },
    ],
    images: [
      {
        id: "fangzui3",
        src: fangzui3,
        style: "postTwo",
      },
      {
        id: "fangzui4",
        src: fangzui4,
        style: "postTwo",
      },
      { id: "fangzui5", src: fangzui5 },
      { id: "fangzui6", src: fangzui6 },
    ],
  },
];
