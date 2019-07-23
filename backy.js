import React from 'react';
import { StyleSheet, Text, View,Button , Vibration} from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component{
	constructor(){
    	super()
    	this.state={
     		isStart:false,
    		isWork:true,
			min:0,
			sec:10,
			isPause:false,
			

		}
		
	}

	

	startTimer(){
		console.log("Hola!")
		this.setState(prevState=>({
			isStart:!prevState.isStart,
			isPause:false,
	  	}))

	  	t=setInterval(()=>this.dec(),1000)

	}

	dec=()=>{
		if(this.state.isPause){
			clearInterval(t)
		}
		if(this.state.min!=0 || this.state.sec!=0){
			console.log(this.state.min,this.state.sec)  
			if(this.state.sec==0){
				this.setState(prevState=>({
					sec:59,
					min:prevState.min-1,
				}))
				//sec=59
			  	//min=min-1
			}
			else
				this.setState(prevState=>({
					sec:prevState.sec-1,
				}))		  
		}
		
		else{
			Vibration.vibrate(500)
			if(this.state.isWork){
				this.setState(prevState=>({
					min:0,
					sec:10,
					isWork:!prevState.isWork
				}))
			}
			else{
				this.setState(prevState=>({
					min:0,
					sec:5,
					isWork:!prevState.isWork
				}))
			}	
		}
	}		

					// clearInterval(t)
			// this.setState(prevState=>({
			// 	isWork:false
			// }))


	render(){
		var t=0
    	return(
    		<View style={styles.container}>

				{/* Heading */}
				<Text style={{fontFamily:'Roboto',fontSize:40,paddingTop:Constants.statusBarHeight}}>Pomodoro Timer</Text>
				{(this.state.isStart)?((this.state.isWork)?
					(<Text style={{fontFamily:"Roboto",fontSize:30,color:"#788878"}}>Time To Work!</Text>):(<Text style={{fontFamily:"Roboto",fontSize:30}}>Take a Break!</Text>)):null
			
				}		
        		
				{/* Timer boi */}
				<View style={{flex:2,justifyContent:'center'}}>
          			<Text style={{fontSize:50,fontFamily:'sans-serif-condensed'}}>{this.state.min}:{this.state.sec}</Text>
        		</View>

				{/* start button */}
        		{!(this.state.isStart) && (
					<View style={{flex:1, justifyContent:'flex-start'}}>
            			<Button title="Start" onPress={this.startTimer.bind(this)} />
          			</View>  
        		)}

				{/* stop and reset button */}
        		{(this.state.isStart)&&(
          			<View style={{flex:1, justifyContent:'flex-start'}}>
						<Button title="Stop" onPress={()=>
							this.setState({
								isPause:true,
							})
						}/>
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
})	

