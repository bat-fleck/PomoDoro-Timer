import React from 'react';
import { StyleSheet, Text, View,Button , Vibration,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';


export default class App extends React.Component{
	constructor(){
    	super()
    	this.state={
     		isStart:false,
    		isWork:true,
			min:0,
			sec:25,
			isPause:false,
			

		}
		
	}

	

	startTimer(){
		console.log("Hola!")
		this.setState(prevState=>({
			isStart:true,
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
					sec:5,
					isWork:!prevState.is10Work
				}))
			}
			else{
				this.setState(prevState=>({
					min:0,
					sec:25,
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
				<Text style={{fontFamily:'',fontSize:40,paddingTop:Constants.statusBarHeight,color:'#ffffff'}}>Pomodoro Timer</Text>
				{(this.state.isStart)?((this.state.isWork)?
					(<Text style={{fontFamily:"Roboto",fontSize:30,color:"#C0C0C0"}}>Time To Work!</Text>):(<Text style={{fontFamily:"Roboto",fontSize:30,color:"#C0C0C0"}}>Take a Break!</Text>)):null
			
				}		
        		
				{/* Timer boi */}
				<View style={{flex:2,justifyContent:'center'}}>
          			<Text style={{fontSize:50,fontFamily:'sans-serif-condensed',color:'white'}}>{this.state.min}:{this.state.sec}</Text>
        		</View>

				{/* start button */}
        		{!(this.state.isStart) && (
					<View style={{flex:1, justifyContent:'flex-start'}}>
            			<TouchableOpacity style={styles.button} onPress={this.startTimer.bind(this)} ><Text style={styles.texty}>Start</Text></TouchableOpacity>    
					</View>  
        		)}

				{/* stop and reset button */}
        		{(this.state.isStart)&&(
					(!this.state.isPause)?
					(
					<View style={{flex:1, justifyContent:'flex-start'}}>
						<TouchableOpacity style={styles.button} onPress={()=>
							this.setState({
								isPause:true,
								//isStart:false,
						})}><Text style={styles.texty}>Stop</Text></TouchableOpacity>

						<TouchableOpacity style={styles.button} onPress={()=>
							this.setState({
								min:0,
								sec:25,
						})}><Text style={styles.texty}>Restart</Text></TouchableOpacity>
				 	</View>
					):
					(
					<View style={{flex:1, justifyContent:'flex-start'}}>

						<TouchableOpacity style={styles.button} onPress={()=>
							this.startTimer()
						}><Text style={styles.texty}>Continue</Text></TouchableOpacity>

            			<TouchableOpacity style={styles.button} onPress={
							()=>{this.setState({
								min:0,
								sec:25,
								isPause:false
							})	
						}}><Text style={styles.texty}>Restart</Text></TouchableOpacity>
				 	</View>
					)
          			// <View style={{flex:1, justifyContent:'flex-start'}}>
					// 	<Button title="Stop" onPress={()=>
					// 		this.setState({
					// 			isPause:true,
					// 		})
					// 	}/>
            		// 	<Button title="Restart" onPress={
					// 		()=>this.setState({
					// 			min:0,
					// 			sec:10,
					// 		})
					// 	}/>
				 	// </View>
				)}

      		</View>

    	)
  	}	

}

const styles = StyleSheet.create({
  	container: {
    	flex: 1,
    	backgroundColor: '#000000',
		alignItems: 'center',
		//justifyContent:'space-around'
   // paddingTop:Constants.statusBarHeight,
	},

	button:{
		borderRadius:10,
		paddingBottom:10,
		borderColor:'#ffffff',
		borderWidth:2,
		backgroundColor:'#000000',
		paddingLeft:25,
		paddingRight:25,
		

		
	},

	texty:{
		color:"#ff0000",
		alignSelf:'center',
		fontSize:30,
		fontWeight:'bold'
		// textShadowColor:'#ffcccc',
		// textShadowOffset:{width:2,height:2},
		// textShadowRadius:2,
	}



})	

