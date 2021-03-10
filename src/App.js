import React from 'react';
import styled from 'styled-components';

const Wrap=styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1em;
`
 
const Primary=styled.div`
    max-width: 650px;
    margin: 0 auto;
    font-family: 'Sen', sans-serif;
`

const Block = styled.div`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  border: 2px solid darkgray;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin-bottom: 3vh;
  margin-top: 1vh;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: darkgray;
    color: white;
  }
`;

const Init = () => (
    <Block>
      <h1>init</h1>
      <p>This is the first blog post of many (hopefully) where I will be recording my progress while taking the EntryLevel Virtual Work Experience under the program associated with Ren.</p>
      <p>I will to the best of my abilities record all my failures and successes, I hope this is a valuable resource for me to look back on and for others to get value from (I'm sure the people running this may appreciate the blog). This blog will also be a good source of accountability for me</p>
      <p>This is also my first ever time using yarn or react so if I do something dumb someone please tell me :)</p>
    </Block>
)


function App() {
  return (
      <Wrap>
      <Primary>        
        <Init/>
      </Primary>
      </Wrap>      
  );
}

export default App;
