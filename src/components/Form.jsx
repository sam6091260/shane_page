import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Loading from "./Loading";

function Form({ formRef }) {
  const [isLoading, setIsLoading] = useState(false);
  // 創建 state 來存放表單數據
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 更新表單數據的函數
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 處理表單提交事件
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
      {/* 表單 */}
      <form ref={formRef} className="form" onSubmit={handleSubmit}>
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
