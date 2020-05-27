import { createStacknavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../pages/login'
import signup from '../pages/signup'

const screeens = {
    Login:{
        screen: Login
    },

    signup:{
        screen: signup
    }
}

const LoginStack = createStacknavigator({screens})

export default createAppContainer(LoginStack)