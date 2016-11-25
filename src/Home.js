/* jshint esnext:true */
/*
globals
React:false, ReactDOM: false,
$:false,
firebase:false, firebaseui:false,
Materialize:false,
document:false, window:false, console:false, alert:false, user:false
*/

//    /////
//    IMPORT DEPENDENCIES
//    /////
import React from 'react';

//    /////
//    MATERIAL-UI COMPONENTS
//    /////
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


//    /////
//    COMPONENT
//    /////
const styles = {
    card: {
        textAlign: 'center'
    }
};
var Home = React.createClass ({
    getInitialState:function() {
        return({
            stateside: false,
            citizen: false,
            nationality: [''],  //Multiple nationalities.
            gender: '',
            service: {          //Seeking these services:
                food: true,
                shelter: true,
                housing: true,
                immigration: true,
                resettlement: true,
                esl: true,
                employment: true,
                childcare: true,
                healthcare: true,
                mental: true,
                addiction: true,
            },
            lowIncome: true
        });
    },
    
    
    render:function() {
        console.log('REFUGEE INFO:', this.state);
        return (
            <Card style={styles.card}>
                <CardTitle title="Placeholder" subtitle="Home"/>
                <CardText>
                    Language: {this.props.lang}
                </CardText>
            </Card>
            
        );
    }
});

export default Home;
