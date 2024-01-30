import axios from "axios";


export const SaveFiles = async (data) => {
    try {
    return await axios.post("http://localhost:3000/Upload/Files", data);
      
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  