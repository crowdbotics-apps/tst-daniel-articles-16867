import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen116143Navigator from '../features/BlankScreen116143/navigator';
import Articles from '../features/Articles';
import Article from '../features/Articles/article';
import { SlideMenuIcon } from './slideMenuIcon';


const ArticlesNavigator = createStackNavigator({
  Articles: {
    screen: Articles,
    navigationOptions: ({ navigation }) => ({
      title: "Article List",
      headerLeft: <SlideMenuIcon navigationProps={navigation} />,
    }),
    params: {
      detail: "Article"
    }
  },
  Article: {
    screen: Article,
  },
});

const AppNavigator = {
  //@BlueprintNavigationInsertion
BlankScreen116143: { screen: BlankScreen116143Navigator },
  Articles: {
    screen: ArticlesNavigator
  },
  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
