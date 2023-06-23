import AuthRoutes from "./AuthRoutes";
import AppRoutes from "./AppRoutes";
import { useAuth } from "../contexts/AuthContext";
import { ActivityIndicator, View } from "react-native";


export default function Routes() {
    const { logado, loading } = useAuth();
  
    if (loading) {
      return (
        <View>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  
    return logado ? <AppRoutes /> : <AuthRoutes />;
  }
