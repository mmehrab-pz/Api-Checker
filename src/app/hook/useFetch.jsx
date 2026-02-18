import React, { useState } from "react";

export default function useFetch() {
  const [data, setData] = useState();
  const [loading , setLoading] = useState(false)
  const sendRequest = async (url , method) => {
    try {
        setLoading(true)
      const response = await fetch(url);
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "url not found");
      }
      setData(result)
    } catch (error) {
        console.error("❌ Error fetching data:", error);
    } finally{
        setLoading(false)
    }
  };
  return {sendRequest,data,loading}
}
