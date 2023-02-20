import React from 'react'
import styled from 'styled-components'
import emptyCheckbox from '../Img/empty-check-box.svg'
import fillCheckbox from '../Img/fill-check-box.svg'

const TermsForm =styled.form`
  color: #c4c4c4; 
  font-size: 16px;
`

const TermsInp = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
  background-image: url(${emptyCheckbox});

  &:checked {
    background-image: url(${fillCheckbox});
  }
`

export default function Terms() {
  return (
    <TermsForm>
      <TermsInp type='checkbox' />
        소소마켓의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고 동의합니다.
    </TermsForm>
  )
}