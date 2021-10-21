/* eslint-disable no-useless-concat */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OrderCard from "../../styled/OrderCard";
import OrderTable from "../../styled/OrderTable";
import {connect} from 'react-redux'

const OrdersWrapper = styled.div`
  padding: 5%;
  
  @media (min-width: 768px) {
    padding: 0;
    width: 65%;
  }
  .table {
    border: 1px solid #3d3d3d;
    border-radius: 10px;
    padding: 5%;
    @media (min-width: 768px) {
      padding: 0;
    }
    tr{
        @media (min-width: 768px) {
      display:flex;
      justify-content:space-around;
      text-align:center;
      align-items: center;
      td{
          flex:1;
          margin-bottom:10px;
      }
      th{
          font-weight:900;
          margin:20px 0;
          flex:1;
          color:${props => props.theme.color.purple};
      }
    }
    }
  }
`;

const mapStateToProps = state => ({
    dark: state.theme.dark
  });

function Orders({dark}) {
  const [largeSize, setLargeSize] = useState(false);
  const checkScreenWidth = () => {
    if (window.innerWidth >= 768) {
      setLargeSize(true);
    } else {
      setLargeSize(false);
    }
  };
  useEffect(() => {
    checkScreenWidth();
  }, []);
  window.addEventListener("resize", checkScreenWidth);

  const orderList = [
    {
      order: "215898",
      date: "22 September 2020",
      statusName: "Completed",
      total: "$100",
      link: "/",
    }, {
        order: "215898",
        date: "25 September 2020",
        statusName: "Pending",
        total: "$250",
        link: "/",
      },
  ];
  return (
    <OrdersWrapper className={dark ? 'dark' : 'light'}>
      {largeSize ? (
        <div className="table">
          <tr>
            <th>Order</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
          {orderList.map((item, i) => {
            return (
              <OrderTable
                order={item.order}
                date={item.date}
                statusName={item.statusName}
                total={item.total}
                link={item.link}
                key={i}
              />
            );
          })}
        </div>
      ) : (
        <div>
          {orderList.map((item, i) => {
            return (
              <OrderCard
                order={item.order}
                date={item.date}
                statusName={item.statusName}
                total={item.total}
                link={item.link}
                key={i}
              />
            );
          })}
        </div>
      )}
    </OrdersWrapper>
  );
}

export default connect(mapStateToProps)(Orders);
