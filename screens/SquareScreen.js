import React, {useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from './components/ColorCounter';


const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state === {red:number , green:number, blue:number};
    // action === {colorToCHange: 'red' || 'green' || 'blue' , aount :15||-15}
    switch(action.colorToChange){
        case'red':
        if (state.red +action.amount > 255 ||state.red + action.amount < 0){
            return state;
        }
            return {...state, red: state.red+action.amount};
        case'green':
        if (state.green +action.amount > 255 ||state.green +action.amount < 0){
            return state;
        }
            return {...state, green: state.green+action.amount};
        case'blue':
        if (state.blue +action.amount > 255 ||state.blue +action.amount < 0){
            return state;
        }
            return {...state, blue: state.blue+action.amount};
        default:
            return state;

    }


};

 const SquareScreen = () => {

    


    const [state, runMyReducer] = useReducer(reducer, {red:0, green:0, blue:0});
    
    
    return (<View>
        <ColorCounter onIncrease={()=> runMyReducer({colorToChange:'red', amount: COLOR_INCREMENT})} 
                      onDecrease={()=> runMyReducer({colorToChange:'red', amount: -1*COLOR_INCREMENT})} 
                      color = "Red"/>
        <ColorCounter 
                        onIncrease={()=> runMyReducer({colorToChange:'blue', amount: COLOR_INCREMENT})} 
                        onDecrease={()=> runMyReducer({colorToChange:'blue', amount: -1*COLOR_INCREMENT})} 
                        color = "Blue"/>
        <ColorCounter 
                        onIncrease={()=> runMyReducer({colorToChange:'green', amount: COLOR_INCREMENT})} 
                        onDecrease={()=> runMyReducer({colorToChange:'green', amount: -1*COLOR_INCREMENT})} 
                        color = "Green"/>
            <View style = {{height:150, 
                            width:150, 
                            backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}}
            />
            
            </View>
            
            
 );
    };

 const styles = StyleSheet.create({});
 export default SquareScreen;
