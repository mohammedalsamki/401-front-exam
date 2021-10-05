import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'
const axios =require('axios');
const BACKURL=process.env.REACT_APP_NETLIFY_HOME_URL

 class Main extends Component {

    constructor(props){
        super(props);
        this.state ={ datraApi:[]}
    }
    componentDidMount=()=>{
        console.log(BACKURL);
        axios.get(`${BACKURL}/api`).then(res=>{
            this.setState({datraApi:res.data})
        })
    }
    handleSubmit= (title,description,toUSD,image_url)=>{
        console.log('Worked ',title,description,toUSD,image_url);
        let config ={
            method :"POST",baseURL :`${BACKURL}`,url :"/watch",
            data:{
                title:title,
                description:description,
                toUSD:toUSD,
                image_url:image_url
            }
        }
        axios(config)
    }
    render() {
        return (
            <div>
                {console.log('API',this.props.datraApi)}
                {this.state.datraApi.map(item=>{

                    return<>
                      <Card>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Img src={item.image_url}/>
                          <Card.Body>
                              <Card.Text>{item.description}</Card.Text>

                              <Card.Text>{item.toUSD}</Card.Text>
                              <Button 
                              onClick={()=>this.handleSubmit(item.title,item.image_url,item.description,item.toUSD)}></Button>
                          </Card.Body>
                      </Card>
                    
                    </>
                })}
            </div>
        )
    }
}
export default Main;