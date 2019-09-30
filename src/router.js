import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Perfil from './views/profile/profile.js';
import Home from './views/home/home.js';
import Login from './views/login/login.js';

const MainNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        }
    },
    Profile: {
        screen: Perfil,
        navigationOptions: {
            header: null,
        }
    },
    
});

const Router = createAppContainer(MainNavigator);

export default Router;