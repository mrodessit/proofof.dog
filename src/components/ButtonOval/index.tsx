import React from "react"
import Button from "../Button"
import { Color, BgColor } from "../Button/styled"

import * as S from "./styled"
import OvalSmooth from "../../assets/shapes/oval-smooth.svg"
import OvalPointy from "../../assets/shapes/oval-pointy.svg"

/**
 * Types
 */
interface OvalProps {
  text?: string | React.ReactNode
  textColor?: Color
  icon?: React.ReactNode | string | null
  shapeType?: S.ShapeType
  backgroundColor?: BgColor
  href?: string | null
  onClick?: Function | null
}

const ButtonOval: React.FC<OvalProps> = ({
  text = "",
  textColor = "primary",
  icon = null,
  shapeType = "landing-copy",
  backgroundColor = "transparent",
  href = null,
  onClick = null,
}: OvalProps) => {
  const OvalShape = shapeType === "video-play" || shapeType === "telegram" ? OvalPointy : OvalSmooth

  return (
    <S.Wrapper shapeType={shapeType}>
      <Button
        text={text}
        textColor={textColor}
        icon={icon}
        backgroundColor={backgroundColor}
        href={href}
        onClick={onClick}
        as={shapeType === "landing-copy" ? "a" : "button"}
      />
      <S.Shape>
        <OvalShape />
      </S.Shape>
    </S.Wrapper>
  )
}

export default ButtonOval