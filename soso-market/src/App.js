import Terms from "./Common/Terms/Terms";
import Button from "./Common/Button/Button";
import Frame from "./Common/sign with login/Frame";
import SelectTab from "./Common/sign with login/SelectTab";
import Layout from "./Common/sign with login/Layout";
import SelectTabTxt from "./Common/sign with login/SelectTabTxt"
import InputTitle from "./Common/sign with login/InputTitle";
import IdInputBox from "./Common/sign with login/IdInputBox";

function App() {
  return (
    <>
      <Layout>
        <InputTitle>아이디</InputTitle>
        <IdInputBox required></IdInputBox>
        <InputTitle>비밀번호</InputTitle>
        <IdInputBox required></IdInputBox>
        <InputTitle>비밀번호 재확인</InputTitle>
        <IdInputBox required></IdInputBox>
        <InputTitle>이름</InputTitle>
        <IdInputBox required></IdInputBox>
        <InputTitle>휴대폰번호</InputTitle>
        <IdInputBox required></IdInputBox>
        <InputTitle>이메일</InputTitle>
        <IdInputBox required></IdInputBox>
        <Terms></Terms>
        <Button text="가입하기"></Button>
      </Layout>
      
      <SelectTab>
        <SelectTabTxt value="안녕"></SelectTabTxt>
      </SelectTab>
      <Frame />

    </>
  );
}

export default App;