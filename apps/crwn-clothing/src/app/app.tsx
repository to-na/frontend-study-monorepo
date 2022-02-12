// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import ShopPage from './pages/shop-page/ShopPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/SignInAndSignUpPage';
import Header from './components/header/Header';
import { auth } from './firebase/firebase.utils';

type Props = Record<string, never>;
type State = {
  currentUser: any;
};

class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null as any;
  override componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  override componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  override render(): React.ReactNode {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
