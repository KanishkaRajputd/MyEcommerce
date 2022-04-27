import  styled  from "styled-components";

const StyleDiv=styled.div`
margin-top:40px;
display:grid;
grid-template-columns:repeat(4,1fr);
width:80%;
`;
const UnderDiv=styled.div`

display:grid;
grid-template-rows:50% 50%;
height:400px;
border:2px solid teal;
margin:20px;
`

const Filters=styled.div`

display:grid;
grid-template-rows:repeat(7,50px);
width:18%;
border-right:2px solid teal;



`;

export {StyleDiv,UnderDiv,Filters};