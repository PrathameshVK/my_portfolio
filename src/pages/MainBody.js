import React from 'react'
import styled from 'styled-components';
import main from '../img/main.png';

function MainBody() {
    return (
        <div>
            <StyledMainBody>
            <div className="myself">
                <div className="hide">Namaste,</div>
                <div className="hide">I am <span>Prathamesh</span></div>            
            </div>
            <div className="image">
            <img src={main} alt="bg"></img>
            </div>
            </StyledMainBody>  
        </div>
    )
}



const StyledMainBody=styled.div`
  display: flex;
  min-height: 76vh;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
    .myself{
        width: 50%;
        font-size: 5rem;
        font-weight: bold;
        span{
            background-image: linear-gradient(45deg, #E100E5, #910094);
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
            //color: #E100E5;
        }
    }
    .image{
        width: 60%;
    }
    img{
        width: 90%;
        padding-left: 20%;
    }
`

export default MainBody;