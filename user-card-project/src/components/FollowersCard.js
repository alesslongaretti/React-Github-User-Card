import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
  width: 500px;
  height: 500px;
`;

const ContentDiv = styled.div`
  lex-direction: row;
`;

const Image = styled.img`
  width: 300px;
  length: 300px;
  border-radius: 10px;
  margin-right: 15px;
`;

const Span = styled.span`
  font-weight: 600;
`;

const FollowersCard = props => {
  return (
    <WrapperDiv>
      <ContentDiv>
        <Image src={props.avatar_url} />
        <h3> Login: {props.login}</h3>
        <p>
          <Span>Github Url:</Span> {props.url}
        </p>
      </ContentDiv>
    </WrapperDiv>
  );
};

export default FollowersCard;
