import { StatusBar } from 'expo-status-bar';
import {Text, TextComponent, View, ScrollView } from 'react-native';
import {styles} from './css/Styles';
import {Feather, Ionicons, Octicons, MaterialCommunityIcons, AntDesign, MaterialIcons,Entypo, FontAwesome5, SimpleLineIcons} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.screen}>

      <ScrollView horizontal={false}>

      <View style={styles.header}>
        <View style={styles.headericons}>
          <View style={styles.headericonuser}>
            <Feather name='user' size={26} color='#fff'/>
          </View>

          <View style={styles.headericonsright}>
            <Ionicons name='md-eye-outline' size={28} color="#fff"/>
            <Octicons name='question' size={26} color='#fff'/>
            <MaterialCommunityIcons name='email-plus-outline' size={26} color='#fff'/>
          </View>
        </View>
        <Text style={styles.txtuser}>Olá, Tayna Galbiate!</Text>
      </View>

      <View style={styles.account}>

        <View style={styles.accountline}>
          <Text style={styles.txtaccount}>Conta</Text>
          <Ionicons name='ios-chevron-forward' size={23} color='#000' />
        </View>
        <Text style={styles.txtvalue}>R$ 100.000.000</Text>
      </View>

      <ScrollView horizontal={true}>

      <View style={styles.nav}>
      <View style={styles.navitem}>
        <View style={styles.navitemicon}>
          <AntDesign name ='antdesign' size={28} color='#000'/>
        </View>
        <Text>Área Pix</Text>
      </View>

      <View style={styles.navitem}>
        <View style={styles.navitemicon}>
          <AntDesign name ='barcode' size={28} color='#000'/>
        </View>
        <Text>Pagar</Text>
      </View>

      <View style={styles.navitem}>
        <View style={styles.navitemicon}>
          <Entypo name ='swap' size={28} color='#000'/>
        </View>
        <Text>Transferir</Text>
      </View>

      <View style={styles.navitem}>
        <View style={styles.navitemicon}>
          <MaterialCommunityIcons name ='cellphone-check' size={28} color='#000'/>
        </View>
        <Text>Recarga</Text>
      </View>

      <View style={styles.navitem}>
        <View style={styles.navitemicon}>
          <MaterialIcons name ='attach-money' size={28} color='#000'/>
        </View>
        <Text>Depositar</Text>
      </View>

      <View style={styles.navitem}>
        <View style={styles.navitemicon}>
          <Entypo name ='direction' size={28} color='#000'/>
        </View>
        <Text>Cobrar</Text>
      </View>

      <View style={styles.navitem}>
        <View style={styles.navitemicon}>
          <FontAwesome5  name ='hand-holding-usd' size={28} color='#000'/>
        </View>
        <Text>Doação</Text>
      </View>

      <View style={styles.navitem}>
        <View style={styles.navitemicon}>
          <AntDesign name ='areachart' size={28} color='#000'/>
        </View>
        <Text>Investir</Text>
      </View>

      </View>

      </ScrollView>

      <View style={styles.card}>
        <MaterialCommunityIcons name='credit-card-multiple-outline' size={24} color= '#000'/>
        <Text style={styles.txtcard}>Meus cartões</Text>
      </View>

      <View style={styles.message}>
      <ScrollView horizontal={true} style={styles.scrollmsg}>
        <View style={styles.cxmg}>
          <Text style={styles.txtmsg}>
            Pague boletos no crédito em até 12x, direto pelo app.
          </Text>
        </View>

        <View style={styles.cxmg}>
          <Text style={styles.txtmsg}>
            Modo Rua: aumenta a segurança do seu app.
          </Text>
        </View>

        <View style={styles.cxmg}>
          <Text style={styles.txtmsg}>
            Você tem disponível R$ 500.000.000 disponíveis para empréstimo
          </Text>
        </View>
        </ScrollView>
      </View>
      

      <View style={styles.account}>
        <View style={styles.accountline}>
          <Text style = {styles.txtaccount}> Cartão de Crédito</Text>
          <Ionicons name='ios-chevron-forward' size={23} color='#000'/>
        </View>

        <Text style={styles.txtfatura}>Fatura atual</Text>
        <Text style={styles.txtvalue}>R$ 50.000.000</Text>
        <Text style={styles.txtfatura}>Limite disponível •••••••</Text>
      </View>

      <View style={styles.parcelar}>
        <Text style={styles.txtparcelas}>Parcelar compras</Text>
        <Text style={styles.txtvalue}>2x R$ 25.000.00</Text>
      </View>
      <View style={styles.separador}></View>

      <View>
        <Text style={styles.txtvalue}>Acompanhe também</Text>
        <View style={styles.card}>
        <MaterialCommunityIcons name='credit-card-multiple-outline' size={24} color= '#000'/>
        <Text style={styles.txtcard}>Assistente de Pagamentos</Text>
      </View>
      </View>
      <View style={styles.separador}></View>

      <View>
        <Text style={styles.txtvalue}>Empréstimo</Text>
        <Text style={styles.txtfatura}>Valor disponível até</Text>
        <Text style={styles.bolinha}>•••••••</Text>
      </View>
      </ScrollView>


      <View style={styles.footer}>
        <Ionicons name="swap-vertical" size={24} color="black"/>
        <MaterialIcons name="attach-money" size={24} color="black"/>
        <SimpleLineIcons name="bag" size={24} color="black"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

