import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';
import {withRouter} from 'react-router-dom'

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        //alert('You Continue!');
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Triss merigold',
                address: {
                    street: 'test Street',
                    zipCode: '1207',
                    country: 'Bangladesh'
                }
            },
            email: 'torikraju@gmail.com',
            deliveryMethod: 'fastest'
        }

        //sending post request to dummy server
        axios.post('/orders.json', order)
            .then(response => {
                console.log(response);
                this.setState({loading: false});
                this.props.history.push('/');
            }).catch(error => {
            console.log(error);
            this.setState({loading: false});
        });

    }

    render() {
        let form = (<form>
            <input className={styles.Input} type='text' name='name' placeholder='Your Name'/>
            <input className={styles.Input} type='email' name='email' placeholder='Your Email'/>
            <input className={styles.Input} type='text' name='street' placeholder='Street'/>
            <input className={styles.Input} type='text' name='postal' placeholder='Postal Code'/>
            <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
        </form>);
        if (this.state.loading) {
            form = <Spinner/>
        }
        return (
            <div className={styles.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

export default withRouter(ContactData);