import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';


class Login extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="App">
                <div>clicked button</div>
                <Dialog open={this.props.openState}>
                    <DialogTitle> Set Login Details </DialogTitle>
                </Dialog>
                {/*<div>*/}
                    {/*<List>*/}
                        {/*{emails.map(email => (*/}
                            {/*<ListItem button onClick={() => this.handleListItemClick(email)} key={email}>*/}
                                {/*/!*<ListItemAvatar>*!/*/}
                                    {/*/!*<Avatar className={classes.avatar}>*!/*/}
                                        {/*/!*<PersonIcon />*!/*/}
                                    {/*/!*</Avatar>*!/*/}
                                {/*/!*</ListItemAvatar>*!/*/}
                                {/*<ListItemText primary={email} />*/}
                            {/*</ListItem>*/}
                        {/*))}*/}
                        {/*<ListItem button onClick={() => this.handleListItemClick('addAccount')}>*/}
                            {/*/!*<ListItemAvatar>*!/*/}
                                {/*/!*<Avatar>*!/*/}
                                    {/*/!*<AddIcon />*!/*/}
                                {/*/!*</Avatar>*!/*/}
                            {/*/!*</ListItemAvatar>*!/*/}
                            {/*<ListItemText primary="add account" />*/}
                        {/*</ListItem>*/}
                    {/*</List>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default Login;
