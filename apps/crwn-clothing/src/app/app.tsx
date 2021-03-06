import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.scss';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/home-page/HomePage';
import ShopPage from './pages/shop-page/ShopPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/SignInAndSignUpPage';
import CheckoutPage from './pages/checkout-page/CheckoutPage';

import Header from './components/header/Header';

import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import { selectCollectionsForPreview } from './redux/shop/shop.selector';

type Props = Record<string, any>;
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
    const { setCurrentUser, collectionsArray } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef: any = await createUserProfileDocument(
          userAuth,
          undefined
        );
        userRef.onSnapshot((snapshot: any) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
      addCollectionAndDocuments(
        'collections',
        collectionsArray.map(({ title, items }: any) => ({ title, items }))
      );
    });
  }

  override componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  override render(): React.ReactNode {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop/*" element={<ShopPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route
            path="/signin"
            element={
              this.props.currentUser ? (
                <Navigate to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview,
});
const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
