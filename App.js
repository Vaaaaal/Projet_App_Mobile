
import { createStackNavigator, createAppContainer } from "react-navigation"
import GridProduct from './src/components/gridProduct';
import SlideConso from './src/components/slideConso';



const AppNavigator = createStackNavigator(
  {
    GridProduct :{ screen : GridProduct },
    SlideConso : { screen : SlideConso }
  },
  { headerMode:'none' },
  { initialRouteName: 'GridProduct' }
)

const App = createAppContainer(AppNavigator);

export default App;