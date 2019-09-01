import * as React from "react";
import Scale, { ScaleName } from "../../models/Scale";
import styled from "styled-components";

const Score = (props: IProp) => {
  return (
    <Container isBlack={props.scale.IsBlack()}>

    </Container>
  )
}


export default Score;

interface IProp {
  children?: any;
  scale: Scale;
}

const BaseKey = styled.div`
`

const Container = styled(BaseKey)`
  border-left: 1px solid white;
  width: ${(props: { isBlack: boolean }) => props.isBlack ? "35px" : "37px"};
  height: 100%;
  box-sizing: border-box;
  position: relative;
`