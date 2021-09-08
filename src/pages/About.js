import React from 'react';
import styled from 'styled-components';

function About() {
    return (
        <StyledAbout>
            <StyledTopDiv>
                <div>
                    <p>
                        If asked to introduce myself<br/>
                        in one line, I would say,<br/>
                        <span className="one-line-intro">
                            <span className="artist">Artist</span> by passion,<br/>
                            <span className="programmer">Programmer</span> by<br/>
                            profession
                        </span>
                    </p>
                </div>
                <div className="inner-top-div2">
                    Here is an image
                </div>
            </StyledTopDiv>
            <StyledBottomDiv>
                <div className="inner-bottom-div1">
                    Here is another image
                </div>
                <div>
                    <p>
                        I love web designing and stuff<br/>
                        <span className="something-else">
                            I play <span className="games">games</span> on my<br/>
                            laptop, when not<br/> making the <span className="world">world</span><br/>
                            a better place.
                        </span>
                    </p>
                </div>
            </StyledBottomDiv>
        </StyledAbout>
    )
}

const StyledAbout=styled.div`
    padding-top: 15vh;
    min-height: 80h;
`
const StyledTopDiv=styled.div`
display: flex;
justify-content: space-between;
width: 80vw;
height: 36vh;
margin: 0 auto;
    p{
        font-size: 1.3rem;
    }
    .one-line-intro{
        font-size: 3rem;
        font-weight: bold;
        .artist{
            background-image: linear-gradient(135deg, #FF6FB4, #0CD3FF);
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
            
            //color: #FF6FB4;
        }
        .programmer{
            background-image: linear-gradient(135deg, #0CD3FF,#FF6FB4 );
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
            
            //color: #0CD3FF;
        }
    }
`

const StyledBottomDiv=styled.div`
    display: flex;
    justify-content: space-between;
    width: 80vw;
    height: 33vh;
    padding-top: 5vh;
    margin: 0 auto;
    p{
        font-size: 1.3rem;
        text-align: right;
    }
    .something-else{
        font-size: 3rem;
        font-weight: bold;
        .games{
            background-image: linear-gradient(45deg, #0083CC,#00BD13 );
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
            
           
            // color: #0083CC;
        }
        .world{
            background-image: linear-gradient(45deg, #00BD13,#0083CC );
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
            
            //color: #00BD13;
        }
    }
`

export default About;