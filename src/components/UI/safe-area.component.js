import styled from "styled-components/native";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) =>
    props.isOpacityTrue ? "transparent" : "rgb(0,0,0)"};
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const SafeAreaComponent = (props) => {
  return <SafeArea isOpacityTrue={props.opacity}>{props.children}</SafeArea>;
};
