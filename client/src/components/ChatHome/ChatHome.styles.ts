import styled from "styled-components";

export const Container = styled.div`
  max-width: 1600px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GroupsSection = styled.div`
  max-width: 480px;
  margin-top: 5rem;
  margin-bottom: 5rem;

  width: 100%;
  height: 95%;

  display: flex;

  box-shadow: 2px 2px 11px 0px rgba(171, 168, 173, 0.83);
`;

export const GroupsSectionHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  height: 60px;
  background-color: #f0f2f5;
`;

export const ProfilePic = styled.img`
  border-radius: 30px;
  width: 40px;
  height: 40px;
  margin-right: auto;
`;
