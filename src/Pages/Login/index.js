import { TouchableOpacity, View, TextInput, Image, Text } from "react-native"
import { Link } from "@react-navigation/native"
import styles from "./styles"
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

export default function LoginPage(){
  const { SignIn } = useContext(AuthContext);

  return(
    <View style={styles.container}>
      <Image source={require('/src/LOGO.png')} style = {styles.imgLogo}/>
      <TextInput placeholder="Email" style={styles.input}/>
      <TextInput placeholder="Senha"style={styles.input}/>
      <TouchableOpacity style={styles.btnLogin} onPress={() => SignIn()}>
        <Text>Login</Text>
      </TouchableOpacity>
      <View style={styles.viewLinks}>
        <Link to={{screen: "RegisterPage"}}>Registre-se</Link>
        <Link to={{screen: "ForgetPasswordPage"}}>Esqueceu a senha?</Link>
      </View>
    </View>
  )
};
