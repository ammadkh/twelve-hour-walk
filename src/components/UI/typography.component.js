import styled from "styled-components/native";

//   font-family: ${theme.fonts.body};
//   font-weight: ${theme.fontWeights.regular};
const defaultTextStyles = (theme) => `
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
`;

// font-family: ${theme.fonts.heading};
// font-weight: ${theme.fontWeights.medium};
const label = (theme) => `
    font-size: ${theme.fontSizes.body};
  color: ${theme.colors.text.secondary};
  font-weight: 600

`;

const btnLabel = (theme) => `
font-size: ${theme.fontSizes.body};
color: ${theme.colors.text.inverse};
font-weight: 600
`;

// font-family: ${theme.fonts.heading};
// font-weight: ${theme.fontWeights.medium};
const heading = (theme) => `
    font-size: ${theme.fontSizes.h4};
  color: ${theme.colors.text.secondary};
  font-weight: 400
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
  heading,
  btnLabel,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
