import React from 'react'
import styled from "styled-components"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count: 3,
    }
  }
  componentDidMount(){
  }
  addNemo =()=>{
    this.setState({count: this.state.count+1});
  };
  removeNemo = () =>{
    if (this.state.count >0){
      this.setState({count: this.state.count-1});
    }else{
      window.alert('네모가 없어요!');
    }
  }
  render(){
    const nemo_cnt = Array.from({length: this.state.count}, (v,i) => i);
    return(
      <div className="App" style={{textAlign:'center'}}>
        <Button onClick={this.addNemo}>하나 추가</Button>
        <Button onClick={this.removeNemo}>하나 빼기</Button>

        {nemo_cnt.map((num, idx)=>{
          return(
            <Nemo key={idx}>
              nemo
            </Nemo>
          )
        })}

        
      </div>  
    )
  }
}

const Nemo = styled.div`
  width: 150px;
  height: 150px;
  background-color: #ddd;
  margin: 20px auto;
`;
const Button = styled.button`
  width: 70px;
  height: 20px;
  margin: 5px;
  border-radius: 5px;
  border: none;
  background-color: salmon;
`;


export default App;
