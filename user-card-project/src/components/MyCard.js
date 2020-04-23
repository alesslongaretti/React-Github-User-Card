import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
  background-color: #fff7f8;
`;

const Image = styled.img`
  width: 300px;
  length: 300px;
  border-radius: 10px;
  margin-right: 15px;
  margin-top: 50px;
`;

const ContentDiv = styled.div`
  width: 800px;
  length: 400px;
`;

const Span = styled.span`
  font-weight: 600;
`;

const MyCard = props => {
  return (
    <WrapperDiv>
      <div>
        <Image src={props.avatar_url} />
      </div>
      <ContentDiv>
        <h1>{props.name}</h1>
        <p>
          <Span>login:</Span> {props.login}
        </p>
        <p>
          <Span>Followers:</Span> {props.followers}
        </p>
        <p>
          <Span>Github Url:</Span> {props.url}
        </p>
      </ContentDiv>
    </WrapperDiv>
  );
};

export default MyCard;

