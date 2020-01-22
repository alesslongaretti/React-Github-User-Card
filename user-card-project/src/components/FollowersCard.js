import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
display:flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-bottom: 50px;
`;

const Image = styled.img`
width: 300px;
length: 300px;
border-radius: 10px;
margin-right: 15px
`;

const ContentDiv = styled.div`
width: 800px;
length: 400px;

`;


const FollowersCard = props => {
    return (
        <WrapperDiv>
            <div>
             <Image src={props.avatar_url}/></div>
            <ContentDiv>
             <h3> Login: {props.login}</h3>
             <p>Github Url: {props.url}</p>
             </ContentDiv>

            
        </WrapperDiv>
    )
}


export default FollowersCard;
