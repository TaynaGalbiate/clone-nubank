import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center',
    },

    header:{
        flex: 1.5,
        backgroundColor:'#8303D2',
        width: '100%',
    },

    headericons:{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingRight:30,
        paddingLeft:30,
    },

    headericonsright:{
        flexDirection:'row',
        gap:32,         //Espaçamento entre os icones
        paddingTop:60,
    },

    headericonuser:{
        backgroundColor:'#9e29e7',
        padding:10,
        borderRadius: 50, 
        marginTop:50,
    },

    txtuser:{
        //fontFamily: 'Roboto',
       // fontWeight: 'bold',
        color:"#fff",
        fontSize: 20,
        margin: 32,
    },

    money:{
    },

    account:{
        flex: 1,
        backgroundColor: "#fff",
        width: '100%',
    },

    accountline:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:30,
        paddingLeft:26,
        paddingRight: 20,
    },



    txtaccount:{
        fontSize: 20,
        fontWeight:'bold', 
        marginRight:5,
    },

    txtvalue:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft: 30,
        marginTop: 15,
        marginBottom:5,
    },

    nav:{
        flex: 1,
        backgroundColor: "#fff",
        width: '100%',
        flexDirection: "row",
    },

    navitemicon:{
        backgroundColor:'#efefef',
        padding: 20,
        borderRadius: 100,
        width: 70,
       
    },

    navitem:{
        justifyContent:'center',
        alignItems:'center',
        width: 110,
        marginTop:20,
        paddingLeft:12,
    },

    card:{
        flex: 0.6,
        backgroundColor: "#fff",
        width:'88%',
        backgroundColor:'#eee',
        flexDirection:'row',
        padding:30,
        justifyContent:'flex-start',
        alignItems:'center',
        borderRadius: 10,
        paddingLeft: 20,
        marginLeft: 26,
        marginTop: 20,
    },

    txtcard:{
        fontSize: 15,
        marginLeft: 20,
    },

    message:{
        flex: 1,
        backgroundColor: "#fff",
        width:'100%',
        flexDirection:'row',
        paddingLeft:12,
   
    },

    cxmg:{
        width:'20%',
        backgroundColor:'#eee',
        borderRadius:10,
        padding:20,
        alignItems:'center',
        margin:20,


    },

    txtmsg:{
        fontSize:15,
    },

    scrollmsg:{ width:"90%"},
    txtfatura:{
        marginLeft:30,
        color:"silver",
        marginTop:0,
    
    },

    txtparcelas:{
        fontWeight:"bold",
        marginLeft: 24,
        marginTop: 28,
        fontSize:20,
        backgroundColor:"#efefef",
        padding:20,
        borderRadius:15,
        overflow:"hidden",
        width:220,
    },
 
    separador:{
        backgroundColor:"#efefef",
        height: 2,
        marginTop:10,
        marginBottom: 20,
    },

    bolinha:{
        fontWeight: "bold",
        marginLeft:30
    },


    footer:{
        backgroundColor: "#efefef",
        width:300,
        borderRadius:50,
        padding:20,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems:"center",
        position:"fixed",
        zIndex: 10000,
        marginBottom:20,

    },


    //Margem de 20px para todos os lados
    margin20:{
        margin:20,
    },
    margin30:{
        margin:30,
    },
});