import React from 'react'
import styled from 'styled-components';
import main from '../img/main-bg.png';

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
        font-size: 3rem;
        font-weight: bold;
        span{
            color: #E100E5;
        }
    }
    .image{
        width: 50%;
    }
    img{
        width: 80%;
        padding-left: 20%;
    }
`

export default MainBody;