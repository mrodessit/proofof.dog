import styled from "styled-components"
import { rem } from "polished"
import { Col } from "react-styled-flexboxgrid"

export const Title = styled.h2`
  line-height: 0.95;
  letter-spacing: ${rem(-5)};
  color: ${(props) => props.theme.colors.white};
`

export const Subtitle = styled.h3`
  font-size: ${rem(70)};
  line-height: ${rem(72)};
  letter-spacing: ${rem(-2)};
  color: ${(props) => props.theme.colors.secondary};
  width: 80%;
  margin: 0 auto;
`

export const ColWrapper = styled(Col)`
  text-align: center;
  z-index: 2;
`

export const Wrapper = styled.section`
  position: relative;
  padding: ${rem(160)} 0 ${rem(150)} 0;
  background-color: ${(props) => props.theme.colors.accent};

  &:after {
    content: '';
    position: absolute;
    bottom: ${rem(16)};
    left: calc((100% - ${rem(120)}) / 2);
    width: ${rem(120)};
    height: ${rem(8)};
    background-color: ${(props) => props.theme.colors.white};
    opacity: 0.2;
    border-radius: 5px;
`
