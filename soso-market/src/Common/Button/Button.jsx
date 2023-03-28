import React from 'react'
import styled from 'styled-components'

const BtnDiv = styled.div`
    width: auto;
    background-color: #68CC58;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    border-radius: 5px;
    padding: 19px;
`

export default function Button({text}) {
  return (
    <BtnDiv>{text}</BtnDiv>
  )
}