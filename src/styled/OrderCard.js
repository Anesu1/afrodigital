import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CradWrapper = styled.div`
    border-radius:26px;
    padding:20px;
    border:1px solid #707070;
    margin-bottom:20px;
    .p{
        display:flex;
        margin-bottom:20px;
        font-size:15px;
        span{
            width:100px;
            flex-wrap: wrap;
        }
        p{
            margin:0;
        }
        a{
            text-decoration:none;
            color:${props => props.theme.color.purple};
        }
    }
    
`;

function OrderCard({order, date, statusName, total, link}) {
    return (
        <CradWrapper>
            <div className="p">
                <span>Order</span>
                <p>#{order}</p>
            </div>
            <div className="p">
                <span>Date</span>
                <p>{date}</p>
            </div>
            <div className="p">
                <span>Status</span>
                <p>{statusName}</p>
            </div>
            <div className="p">
                <span>Total</span>
                <p>{total}</p>
            </div>
            <div className="p">
                <span>Actions</span>
                <Link to={link}>View</Link>
            </div>
        </CradWrapper>
    )
}

export default OrderCard
