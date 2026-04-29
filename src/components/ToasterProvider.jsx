/**
 * @file ToasterProvider.jsx
 * @description 封裝 react-hot-toast 的 Toaster 組件。
 *   集中在首頁根組件挂載一次，供 全应用范圍內的 toast() 呼叫使用。
 */
import { Toaster } from "react-hot-toast";

import React from "react";

/** ToasterProvider — 封裝層，不接受任何 props。 */
const ToasterProvider = () => {
  return <Toaster />;
};

export default ToasterProvider;
