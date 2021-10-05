import React, { Component } from 'react'

import axios from 'axios'
import { Card, Button, Form, Row, Col, InputGruop, FormControl, FloatingLabel } from 'react-bootstrap';
const BACURL = process.env.REACT_APP_NETLIFY_HOME_URL
export default class Fav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataDB: [],
            showUpdate: false,
            ids: '',
            title: '',
            description: '',
            toUSD: '',
            image_url: ''
        }
    }
    componentDidMount=()=>{
        console.log(BACURL);
        axios.get(`${BACURL}/watch`).then(res=>{
            this.setState({dataDB:res.data})
        })
    }
    handleDelete=(id)=>{
        let ID =id;
        let config={method:"DELETE",baseURL:`${BACURL}`,url:`/watch/${ID}`,}
        axios(config).then(res => {this.setState({dataDB:res.data})})

    }

    handleTitle=(e)=>{this.setState({title:e.target.value})};
    handledescription=(e)=>{this.setState({description:e.target.value})};
    handletoUSD=(e)=>{this.setState({toUSD:e.target.value})};

    handleimg=(e)=>{this.setState({image_url:e.target.value})};

    handleUpdate=(id,title,description,image_url,toUSD)=>{
        this.setState({
            ids:id,
            title: title,
            description: description,
            toUSD: toUSD,
            image_url: image_url,
            showUpdate:true

        })
    }
    handleUpdateForm=(id)=>{
        let ID= id;
        let config={
            method: "PUT",
            baseURL:`${BACURL}`,
            url:`/watch/${ID}`,
            data:{ title:this.state.title,image_url:this.state.image_url,
            description:this.state.description,toUSD:this.state.toUSD
            }
        }
        axios(config).then(res=>{ this.setState({dataDB:res.data})})
    }

    render() {
        return (
          <div>  

                {!this.state.showUpdate ? <br></br>:
                <Form  onSubmit={()=> this.handleUpdateForm(this.state.ids)}>
                    <Row>
                        <Col>
                        <Form.Label> title</Form.Label>
                        <FormControl placeholder={this.state.title} onChange={this.handleTitle}> </FormControl>
                        </Col>
                        <Col>
                        <Form.Label> description</Form.Label>
                        
                        <FormControl placeholder={this.state.description} onChange={this.handledescription}> </FormControl>
                        <InputGruop/>

                        </Col>
                        <Col>
                        <Form.Label> description</Form.Label>
                        
                        <FormControl placeholder={this.state.image_url} onChange={this.handleimg}> </FormControl>
                        <InputGruop/>
                        
                        </Col>
                        <Col>
                        <Form.Label> description</Form.Label>
                        
                        <FormControl placeholder={this.state.toUSD} onChange={this.handletoUSD}> </FormControl>
                        <InputGruop/>
                        
                        </Col>
                        <Col>
                        <Button type="submit"> update</Button>
                        </Col>
                    </Row>

                    </Form> }:<div>
                    {this.state.dataDB.map(item=>{

                        return<>
                        <Card>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Img src={item.image_url}/>
                            <Card.Body>

                                <Card.Text>{item.description}</Card.Text>
                                <Card.Text>{item.toUSD}</Card.Text>

                                <Button onClick={()=>this.handleDelete(item._id)}>Delete</Button>
                                <Button onClick={()=>this.handleUpdate(item._id,item.title,
                                    item.image_url,
                                    item.toUSD,
                                    item.description)}>update</Button>


                            </Card.Body>
                        </Card>
                        </>
                    })
                    }
                
                    <div/>
               

            
            </div>
        )
    }
}
 