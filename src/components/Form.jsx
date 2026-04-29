/**
 * @file Form.jsx
 * @description 聯絡表單組件。收集 name、email、message，
 *   透過 axios POST 將表單資料傳送至 Heroku 郵件中繼服務。
 *   提交期間顯示 Loading 元件，完成後透過 react-hot-toast 顯示成功或錢誤訊息。
 */
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Loading from "./Loading";
import logo from "../assets/shhh-logo.png"

/**
 * Form — 聯絡表單
 *
 * @param {React.RefObject} formRef - 父層傳入的 ref，用於捨動定位
 */
function Form({ formRef }) {
  const [isLoading, setIsLoading] = useState(false);
  // 創建 state 來存放表單數據
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

	/**
	 * handleChange — 通用表單輸入處理函式。
	 * 利用 name 屬性動態更新 formData 對應欄位。
	 *
	 * @param {React.ChangeEvent} e - 輸入事件
	 */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

	/**
	 * handleSubmit — 表單提交處理，async/await 模式。
	 * POST 到 Heroku 郵件 API，成功後清空對象並顯示 toast。
	 * 不論成功或失敗，finally 區塊均會關閉 Loading 狀態。
	 *
	 * @param {React.FormEvent} e - 表單提交事件
	 */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://polar-thicket-73181-a753805e876d.herokuapp.com/send-email",
        {
          ...formData,
        }
      );
      const { data } = response;

      console.log("Email sent successfully");
      toast.success(data.message);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      const {
        response: { data },
      } = error;
      toast.error(data.message);
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <>
      <div style={{
        height: "20%",
        width: "20%",
        zIndex: "3",
        position: " absolute",
        left: "50vw",
        transform: "rotate(45deg)"
      }}
      >
        <img src={logo} alt="loading" />
        <p style={{ fontWeight: "bold", fontSize: "48px", color: "#F0862B" }}>Banned !</p>
      </div>
      <form
        ref={formRef}
        className="form"
        onSubmit={handleSubmit}
        data-aos="zoom-in"
        data-aos-delay={200}
      >
        {isLoading ? (
          <div style={{ height: "200px" }}>
            <Loading />
          </div>
        ) : (
          <>
            <label htmlFor="name">name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="message">message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </>
        )}
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default Form;
