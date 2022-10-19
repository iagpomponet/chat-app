import { useGetContact } from "../../services/api";

const Chat = () => {
  const { data: userData } = useGetContact();

  return <div>Chat</div>;
};

export default Chat;
