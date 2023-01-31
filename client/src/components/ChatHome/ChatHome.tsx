import { Contact } from "../../types/api";
import * as css from "./ChatHome.styles";

const ChatHome = ({ userData }: { userData: Contact }) => {
  console.log("userData :>> ", userData);
  return (
    <css.Container>
      <css.GroupsSection>
        <css.GroupsSectionHeader>
          <css.ProfilePic src={userData.profilePhoto} />
        </css.GroupsSectionHeader>
        Get all group members where the id is the same as my user Get all
        message groups that have the id of this group members
      </css.GroupsSection>
    </css.Container>
  );
};

export default ChatHome;
