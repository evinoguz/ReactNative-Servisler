import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './HomeScreen';
import Eleman from './Eleman';

const App = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            header: null,
        },
    },
    Eleman: {
        screen: Eleman,
        navigationOptions: {
            header: null,
        },
    },
}
)
export default createAppContainer(App);