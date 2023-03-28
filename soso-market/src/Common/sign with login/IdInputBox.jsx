import React from 'react'
import styled from 'styled-components'

const InputBoxFrame= styled.form`
    margin: 10px 0;
`

const InputBoxInp = styled.input`
    width: 100%;
    line-height: 54px;
    border-radius: 5px;
    border: 1px solid #C4C4C4;
`

export default function IdInputBox() {
  return (
    <InputBoxFrame>
      <InputBoxInp type="text" />
    </InputBoxFrame>
  )
}
