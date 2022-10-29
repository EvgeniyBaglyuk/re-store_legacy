import React, {Component} from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';
import {compose} from "../../utils";
import {withBookstoreService} from "../hoc";
import {connect} from "react-redux";

class ShopHeader extends Component  {
  render() {
    const {orderTotal} = this.props;
    return (
      <header className="shop-header row">
        <Link to="/">
          <div className="logo text-dark">ReStore</div>
        </Link>
        <Link to="/cart">
          <div className="shopping-cart">
            <i className="cart-icon fa fa-shopping-cart"/>
            {orderTotal.totalCount} items (${orderTotal.totalPrice})
          </div>
        </Link>
      </header>
    )
  }
};

const mapStateToProps = ({ shoppingCart: { orderTotal, books, loading, error }}) => {
    return { orderTotal, books, loading, error };
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, null)
)(ShopHeader);
