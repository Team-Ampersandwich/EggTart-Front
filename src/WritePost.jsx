import React, { useState } from 'react';
import {
  ContentsInput,
  PostSection,
  PostSubmit,
  PostSubmitDiv,
  PostTitle,
  PostTitleDiv,
  PostWriteDiv,
  TitleInput,
} from './styledComponent';

function WritePost() {
    const [inputs,setInputs] = useState({
        title : '',
        contents :'',
    });
    const {title, contents} = inputs;

    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value,
        });
    };
  return (
    <PostSection>
      <PostTitleDiv>
        <PostTitle>글쓰기</PostTitle>
      </PostTitleDiv>
      <PostWriteDiv>
        <TitleInput 
            name = "title"
            value = {title}
            placeholder="제목을 입력해주세요. (15자 이내)"
            onChange = {onChange}/>
        <ContentsInput cols="30" rows="10"></ContentsInput>
      </PostWriteDiv>
      <PostSubmitDiv>
        <PostSubmit>작성완료</PostSubmit>
      </PostSubmitDiv>
    </PostSection>
  );
}

export default WritePost;