import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as RouteList from './RouteList';

import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import PreDashboard from '../screens/PreDashboardScreen';
import DashboardScreen from '../screens/DashboardScreen';
import Details from '../screens/DetailsScreen';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer headerMode="none">
            <Stack.Navigator headerMode="none">
                <Stack.Screen name={RouteList.WELCOME} component={WelcomeScreen} />
                <Stack.Screen name={RouteList.SIGN_IN} component={SignInScreen} />
                <Stack.Screen name={RouteList.SIGN_UP} component={SignUpScreen} />
                <Stack.Screen name={RouteList.FORGOT_PASSWORD} component={ForgotPasswordScreen} />
                <Stack.Screen name={RouteList.PREDASHBOARD} component={PreDashboard} />
                <Stack.Screen name={RouteList.DASHBOARD} component={DashboardScreen} />
                <Stack.Screen name={RouteList.DETAILS} component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
