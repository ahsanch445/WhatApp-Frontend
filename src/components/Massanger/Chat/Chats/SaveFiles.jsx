import axios from "axios";


export const SaveFiles = async (data) => {
 
    try {
    return await axios.post("https://whatsapp-api-khaki.vercel.app/Upload/Files", data);
      
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  