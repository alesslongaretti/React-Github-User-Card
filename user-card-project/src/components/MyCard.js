import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
display:flex;
align-items: center;
justify-content: center;
margin-bottom: 50px;

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






 const MyCard = props => {
    return (
        <WrapperDiv> 
            <div>
               <Image src={props.avatar_url}/> 
            </div>
            <ContentDiv>            
            <h1>{props.name}</h1>
            <p>login: {props.login}</p>
            <p>Followers: {props.followers}</p>
            <p>Github Url: {props.url}</p>
            </ContentDiv>

        </WrapperDiv>
    )
}

export default MyCard;

