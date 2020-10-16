import React from 'react'
import Content from '../Content'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './ContactForm.css'

//Sets up a data store that uses state to define the data and allow them to see what they are typing
class ContactForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null
        }
    }

    //If the type of the input is a checkbox then it will equal checked, if not it will just equal the value typed in
    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    //Prevent default stops the submit from just refreshing the page
    //State set to disabled means that the user can't use the button to submit over and over
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            disabled: true,
        })
    }

    //Renders out the actual form and what it contains
    render(){
        return(
            <Content>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className='form-group'>
                        <Form.Label className='label' htmlFor="full-name">Full Name</Form.Label>
                        <Form.Control className='control' id='full-name' name='name' type='text' value={this.state.name} onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group className='form-group'>
                        <Form.Label className='label' htmlFor="email">Email</Form.Label>
                        <Form.Control className='control' id='email' name='email' type='email' value={this.state.email} onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group className='form-group'>
                        <Form.Label className='label' htmlFor="message">Message</Form.Label>
                        <Form.Control className='control-message' id='message' name='message' as='textarea' row='4' value={this.state.message} onChange={this.handleChange}/>
                    </Form.Group>

                    <Button className="button" variant='dark' type='submit' disabled={this.state.disabled}>
                        Send
                    </Button>

                    {this.state.emailSent === true && <p className='d-inline success-msg'>Email Sent</p>}
                    {this.state.emailSent === false && <p className='d-inline error-msg'>Email Not Sent</p>}
                </Form>
            </Content>
            //If the form submitts then it will show a success message
            //If the form fails to submit then it will show an error message
        );
    }
}

export default ContactForm