import styled from "styled-components/native";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  justify-content: center;
  align-items: center;
`;
export const SafeAreaComponent = ({ children }) => {
  return <SafeArea>{children}</SafeArea>;
};
