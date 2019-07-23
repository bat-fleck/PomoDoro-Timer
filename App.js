import React from 'react';
import { StyleSheet, Text, View,Button , Vibration} from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component{
	constructor(){
    	super()
    	this.state={
     		isStart:false,
    		isWork:true,
      		time:25,

    	}
  	}


	render(){
    	return(
    		<View style={styles.container}>

				{/* Heading */}
				<Text style={{fontFamily:'Roboto',fontSize:40,paddingTop:Constants.statusBarHeight}}>Pomodoro Timer</Text>
        		
				{/* Timer boi */}
				<View style={{flex:2,justifyContent:'center'}}>
          			<Text style={{fontSize:50,fontFamily:'sans-serif-condensed'}}>{this.state.time}</Text>
        		</View>

				{/* start button */}
        		{!(this.state.isStart) && (
					<View style={{flex:1, justifyContent:'flex-start'}}>
            			<Button title="Start" onPress={()=>this.setState(prevState=>({
              				isStart:!prevState.isStart
            			}))} />
          			</View>  
        		)}

				{/* stop and reset button */}
        		{(this.state.isStart)&&(
          			<View style={{flex:1, justifyContent:'flex-start'}}>
            			<Button title="Stop"/>
            			<Button title="Restart"/>
				 	</View>
				)}

      		</View>

    	)
  	}	

}

const styles = StyleSheet.create({
  	container: {
    	flex: 1,
    	backgroundColor: '#fff',
    	alignItems: 'center',
   // paddingTop:Constants.statusBarHeight,
  },
});
