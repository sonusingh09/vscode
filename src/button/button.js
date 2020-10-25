import React from 'react'
class button extends React.Component{
    constructor(props){
        super(props)
        this.state={
            counter:this.props.totalCount,  
        }
    }
    shouldComponentUpdate(nextProps, nextState){
        if(this.props.totalCount!==nextProps.totalCount){
        this.setState({counter:nextProps.totalCount})
        return true
        }
        return true
    }
    componentDidUpdate(){

    }
    render(){
        
        
        return(
            <button style={{color:'blue' , padding:'32px', margin:'8px', border:'none', outline:'none'}}
            onClick={this.props.onBtnClick}>{this.props.label+'=>'+this.state.counter}</button>
        )
    }
}
export default button;