import ChatHome from "../../components/ChatHome/ChatHome";
import { useGetContact } from "../../services/api";

const Chat = () => {
  // TODO: Handle logout
  const id = localStorage.getItem("userId");
  const { data: userData } = useGetContact(id || "");

  console.log("id :>> ", id);
  console.log("userData :>> ", userData);

  if (!userData) return <div></div>;

  return <ChatHome userData={userData.data[0]} />;
};

export default Chat;
