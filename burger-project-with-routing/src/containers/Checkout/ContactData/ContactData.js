import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';
import {withRouter} from 'react-router-dom';
import Input from '../../../components/UI/Input/Input';
import Data from "../../../Helper/Data";
import AppUtil from "../../../Helper/AppUtil";

class ContactData extends Component {

    state = Data.orderForm;

    orderHandler = (event) => {
        event.preventDefault();
        //alert('You Continue!');
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price
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

    inputChangedHandler = (event, inputIdentifier) => {
        //console.log(event.target.value);
        const updatedOrderForm = {
            ...this.state.orderForm
        }

        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };

        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({orderForm: updatedOrderForm});
    }

    render() {
        let form = (<form>
            {AppUtil.convertFormData(this.state.orderForm).map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
            ))}
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