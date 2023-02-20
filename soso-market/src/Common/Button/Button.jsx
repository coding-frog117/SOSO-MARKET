import React from 'react'
import styled from 'styled-components'

const BtnDiv = styled.div`
    width: auto;
    background-color: #68CC58;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`


export default function Button() {
  return (
    <BtnDiv>가입하기</BtnDiv>
  )
}
